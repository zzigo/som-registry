#!/usr/bin/env node
// SOOG instrument YAML normalizer.
//
// Pure core (`normalizeNote`) + CLI. Brings Obsidian instrument notes to the
// canonical schema described in SCHEMA.md without touching note bodies.
//
// Safety model: the frontmatter is parsed with the `yaml` Document API only to
// *locate* keys; every change is a minimal text edit at the node's source
// offsets (rename a key, fill an empty value, insert a line, drop an empty
// duplicate line). Untouched lines, comments, quoting and key order stay
// byte-identical. Every result is re-parsed and checked: the body must be
// byte-identical and every pre-existing value must survive unchanged.
//
// Usage:
//   node scripts/normalize.mjs <folder> [--publish true|false] [--apply] [--report out.md] [--json]
//   (dry-run by default; --apply writes files)

import fs from 'node:fs';
import path from 'node:path';
import { isDeepStrictEqual } from 'node:util';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';

export const SIGNAL_KEYS = ['family', 'sachs-hornbostel', 'abrev', 'person', 'performers', 'year'];
export const CANONICAL_STATUS = ['stub', 'draft', 'validated', 'deprecated'];

/** Legacy key -> canonical key. `creator` only moves when `person` is empty. */
const LEGACY_RENAMES = [
  ['image', 'img'],
  ['link', 'url'],
  ['creator', 'person'],
  ['Created', 'created'],
  ['timelines', 'timeline'],
];
const REPORT_ONLY_KEYS = ['yearurl'];

const FM_RE = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/;
const EMPTY_FM_RE = /^---[ \t]*\r?\n---[ \t]*(?:\r?\n|$)/;

/** snake_case id from a file name: strips diacritics, lowercases, joins
 * every run of non-alphanumerics with `_`. */
export function snakeId(name) {
  return name
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

/** Empty = null/undefined, blank string, `[[]]` placeholder, empty array
 * (or array of empties), empty object. */
export function isEmpty(v) {
  if (v == null) return true;
  if (typeof v === 'string') {
    const t = v.trim();
    return t === '' || /^\[\[\s*\]\]$/.test(t);
  }
  if (Array.isArray(v)) return v.every(isEmpty);
  if (typeof v === 'object' && !(v instanceof Date)) return Object.keys(v).length === 0;
  return false;
}

/** A frontmatter-less (or empty-frontmatter) file is treated as an
 * instrument note "by folder" when it sits directly in the scanned root, or
 * when its name equals its parent folder name (the main note of an
 * instrument folder such as `foo/foo.md`). */
export function looksInstrumentByFolder(relPath) {
  const parts = relPath.split('/');
  if (parts.length === 1) return true;
  const base = parts[parts.length - 1].replace(/\.md$/i, '');
  return base.toLowerCase() === parts[parts.length - 2].toLowerCase();
}

function scalarText(value) {
  return YAML.stringify(value, { lineWidth: 0 }).replace(/\n$/, '');
}

/** Splits a note into frontmatter + body. `body` is everything after the
 * closing `---` line (and its newline), so `text.slice(0, prefixLen) + body === text`. */
export function splitNote(text) {
  const m = text.match(FM_RE);
  if (m) {
    const fm = m[1];
    const fmStart = text.indexOf('\n') + 1;
    return { hasFm: true, fm, fmStart, fmEnd: fmStart + fm.length, body: text.slice(m[0].length), prefixLen: m[0].length };
  }
  const e = text.match(EMPTY_FM_RE);
  if (e) {
    return { hasFm: true, fm: '', fmStart: text.indexOf('\n') + 1, fmEnd: text.indexOf('\n') + 1, body: text.slice(e[0].length), prefixLen: e[0].length, emptyMarker: true };
  }
  return { hasFm: false, body: text, prefixLen: 0 };
}

function keyName(pair) {
  const k = pair.key;
  if (k == null) return null;
  return YAML.isScalar(k) ? String(k.value) : String(k);
}

function valueJS(pair) {
  const v = pair.value;
  if (v == null) return null;
  return YAML.isNode(v) ? v.toJSON() : v;
}

/**
 * Normalizes one note.
 * @param {string} text  full file content
 * @param {{ relPath: string, publish: boolean }} opts
 * @returns {{ relPath, decision, typedAdded, changed, output, actions: string[], notes: string[], id?: string }}
 *   decision: 'instrument' | 'non-instrument' | 'skipped'
 */
export function normalizeNote(text, opts) {
  const { relPath, publish } = opts;
  const fileBase = path.posix.basename(relPath).replace(/\.md$/i, '');
  const res = { relPath, decision: 'skipped', typedAdded: false, changed: false, output: text, actions: [], notes: [] };
  const split = splitNote(text);

  const stub = (why) => {
    if (!looksInstrumentByFolder(relPath)) {
      res.notes.push(`${why}; not an instrument note by folder rule -> skipped`);
      return res;
    }
    const id = snakeId(fileBase);
    const lines = [
      `id: ${scalarText(id)}`,
      `title: ${scalarText(fileBase)}`,
      'type: instrument',
      'status: stub',
      `publish: ${publish}`,
    ];
    if (split.hasFm) {
      // empty frontmatter block: fill it in place
      res.output = `---\n${lines.join('\n')}\n---\n` + split.body;
    } else {
      res.output = `---\n${lines.join('\n')}\n---\n` + text;
    }
    res.decision = 'instrument';
    res.typedAdded = true;
    res.changed = true;
    res.id = id;
    res.actions.push(`${why}: added stub frontmatter (id, title, type: instrument, status: stub, publish: ${publish})`);
    verifyBody(text, res.output);
    return res;
  };

  if (!split.hasFm) return stub('no frontmatter');

  const fm = split.fm;
  const doc = YAML.parseDocument(fm, { uniqueKeys: false });
  if (doc.errors.length) {
    res.notes.push(`YAML parse error, left untouched: ${doc.errors[0].message.split('\n')[0]}`);
    return res;
  }
  if (doc.contents == null || (YAML.isMap(doc.contents) && doc.contents.items.length === 0)) {
    return stub('empty frontmatter');
  }
  if (!YAML.isMap(doc.contents)) {
    res.notes.push('frontmatter is not a mapping, left untouched');
    return res;
  }

  const lineStart = (off) => fm.lastIndexOf('\n', off - 1) + 1;
  const lineEnd = (off) => {
    const i = fm.indexOf('\n', off);
    return i === -1 ? fm.length : i;
  };
  const pairEnd = (pair) => {
    const v = pair.value;
    if (YAML.isNode(v) && v.range) return v.range[1];
    return pair.key.range[1];
  };
  const singleLine = (pair) => lineEnd(pair.key.range[0]) >= pairEnd(pair);

  const edits = []; // {start, end, text}
  const removedPairs = new Set();
  const renamed = new Map(); // pair -> newKey
  const setValues = new Map(); // canonical key -> new JS value

  const pairs = doc.contents.items.filter((p) => YAML.isScalar(p.key) && p.key.range);
  const byKey = new Map();
  for (const p of pairs) {
    const k = keyName(p);
    if (!byKey.has(k)) byKey.set(k, []);
    byKey.get(k).push(p);
  }

  // ── duplicate keys: drop empty single-line duplicates, else give up ──
  for (const [k, list] of byKey) {
    if (list.length < 2) continue;
    const nonEmpty = list.filter((p) => !isEmpty(valueJS(p)));
    if (nonEmpty.length > 1) {
      res.notes.push(`duplicate key \`${k}\` with several non-empty values, left untouched`);
      return res;
    }
    const keep = nonEmpty[0] ?? list[0];
    for (const p of list) {
      if (p === keep) continue;
      if (!singleLine(p)) {
        res.notes.push(`duplicate key \`${k}\` spans several lines, left untouched`);
        res.actions = [];
        return res;
      }
      const s = lineStart(p.key.range[0]);
      const e = lineEnd(p.key.range[0]);
      edits.push({ start: s, end: Math.min(e + 1, fm.length), text: '' });
      removedPairs.add(p);
      res.actions.push(`removed empty duplicate \`${k}\``);
    }
    byKey.set(k, [keep]);
  }

  const get = (k) => (byKey.has(k) ? byKey.get(k)[0] : undefined);
  const data = () => {
    const out = {};
    for (const [k, list] of byKey) out[k] = valueJS(list[0]);
    for (const [p, nk] of renamed) out[nk] = valueJS(p);
    for (const [k, v] of setValues) out[k] = v;
    return out;
  };

  /** Fills an existing key whose value is empty (`key:`, `key: ""`, `key: ~`). */
  const fillEmpty = (pair, value) => {
    const kEnd = pair.key.range[1];
    const colon = fm.indexOf(':', kEnd);
    const le = lineEnd(kEnd);
    if (colon === -1 || colon > le) return false;
    const rest = fm.slice(colon + 1, le);
    const m = rest.match(/^[ \t]*(""|''|~|null|\[\])?[ \t]*(#.*)?$/);
    if (!m) return false;
    // the empty value must not continue on following indented lines
    if (YAML.isNode(pair.value) && pair.value.range && pair.value.range[1] > le + 1) return false;
    const comment = m[2] ? `  ${m[2]}` : '';
    edits.push({ start: colon + 1, end: le, text: ` ${scalarText(value)}${comment}` });
    return true;
  };

  // ── legacy keys ──
  for (const [from, to] of LEGACY_RENAMES) {
    const src = get(from);
    if (!src || removedPairs.has(src)) continue;
    const dst = get(to);
    if (!dst) {
      if (from === to) continue;
      edits.push({ start: src.key.range[0], end: src.key.range[1], text: to });
      renamed.set(src, to);
      byKey.delete(from);
      res.actions.push(`renamed \`${from}\` -> \`${to}\``);
      continue;
    }
    if (from === to) continue;
    const srcV = valueJS(src);
    const dstV = valueJS(dst);
    if (isEmpty(srcV)) {
      // nothing to carry over; an empty legacy key next to a canonical one
      if (singleLine(src)) {
        edits.push({ start: lineStart(src.key.range[0]), end: Math.min(lineEnd(src.key.range[0]) + 1, fm.length), text: '' });
        removedPairs.add(src);
        byKey.delete(from);
        res.actions.push(`dropped empty legacy \`${from}\` (\`${to}\` present)`);
      } else res.notes.push(`legacy \`${from}\` kept (multi-line, \`${to}\` present)`);
      continue;
    }
    if (isEmpty(dstV) && singleLine(src) && typeof srcV !== 'object' && fillEmpty(dst, srcV)) {
      edits.push({ start: lineStart(src.key.range[0]), end: Math.min(lineEnd(src.key.range[0]) + 1, fm.length), text: '' });
      removedPairs.add(src);
      byKey.delete(from);
      setValues.set(to, srcV);
      res.actions.push(`moved \`${from}\` value into empty \`${to}\``);
      continue;
    }
    res.notes.push(`legacy \`${from}\` kept: \`${to}\` already has a value`);
  }
  for (const k of REPORT_ONLY_KEYS) {
    if (get(k)) res.notes.push(`legacy \`${k}\` present (report only, not mapped)`);
  }

  // ── decide ──
  const d = data();
  const type = d.type;
  let decision;
  if (type === 'instrument') decision = 'instrument';
  else if (!isEmpty(type)) decision = 'non-instrument';
  else {
    const hits = SIGNAL_KEYS.filter((k) => !isEmpty(d[k]));
    if (hits.length >= 2) {
      decision = 'instrument';
      res.typedAdded = true;
      res.notes.push(`untyped, signals [${hits.join(', ')}] -> type: instrument`);
    } else {
      res.notes.push(`untyped, signals [${hits.join(', ')}] (<2) -> not an instrument, left untouched`);
      res.decision = 'skipped';
      res.actions = [];
      return res;
    }
  }
  res.decision = decision;
  if (decision === 'non-instrument') res.notes.push(`type \`${typeof type === 'string' ? type : JSON.stringify(type)}\` kept, publish: false`);

  // ── identity + type + publish ──
  const top = [];
  const want = (k, v) => {
    const p = get(k);
    if (p && !removedPairs.has(p)) {
      if (!isEmpty(valueJS(p))) return;
      if (fillEmpty(p, v)) {
        setValues.set(k, v);
        res.actions.push(`filled empty \`${k}\``);
        return;
      }
      res.notes.push(`\`${k}\` empty but not fillable in place, left as is`);
      return;
    }
    top.push(`${k}: ${scalarText(v)}`);
    setValues.set(k, v);
    res.actions.push(`added \`${k}\``);
  };
  want('id', snakeId(fileBase));
  want('title', fileBase);
  if (res.typedAdded) want('type', 'instrument');

  const firstPair = doc.contents.items.find((p) => p.key && p.key.range);
  if (top.length) {
    const pos = lineStart(firstPair.key.range[0]);
    edits.push({ start: pos, end: pos, text: top.join('\n') + '\n' });
  }

  const pub = get('publish');
  const publishValue = decision === 'instrument' ? publish : false;
  if (!pub) {
    const status = get('status');
    const line = `publish: ${publishValue}`;
    if (status && !removedPairs.has(status) && singleLine(status)) {
      const le = lineEnd(status.key.range[0]);
      edits.push(le === fm.length ? { start: le, end: le, text: '\n' + line } : { start: le + 1, end: le + 1, text: line + '\n' });
    } else {
      edits.push({ start: fm.length, end: fm.length, text: (fm.length ? '\n' : '') + line });
    }
    setValues.set('publish', publishValue);
    res.actions.push(`added \`publish: ${publishValue}\``);
  } else if (typeof valueJS(pub) !== 'boolean') {
    res.notes.push(`\`publish\` present but not boolean (${JSON.stringify(valueJS(pub))})`);
  }

  // ── reports ──
  const status = d.status;
  if (status != null && !CANONICAL_STATUS.includes(status)) res.notes.push(`non-canonical status \`${status}\``);
  if (/<%[\s\S]*?%>/.test(fm)) res.notes.push('Templater expression in frontmatter (left as is)');
  res.id = (setValues.get('id') ?? d.id) || undefined;

  if (!edits.length) return res;

  // ── apply edits (descending, non-overlapping) ──
  edits.sort((a, b) => b.start - a.start || b.end - a.end);
  for (let i = 1; i < edits.length; i++) {
    if (edits[i].end > edits[i - 1].start) throw new Error(`${relPath}: overlapping edits`);
  }
  let newFm = fm;
  for (const e of edits) newFm = newFm.slice(0, e.start) + e.text + newFm.slice(e.end);
  const out = text.slice(0, split.fmStart) + newFm + text.slice(split.fmEnd);

  // ── verify ──
  verifyBody(text, out);
  const newDoc = YAML.parseDocument(newFm, { uniqueKeys: true });
  if (newDoc.errors.length) throw new Error(`${relPath}: normalized YAML does not parse: ${newDoc.errors[0].message}`);
  const after = newDoc.toJS() ?? {};
  for (const [k, list] of byKey) {
    if (setValues.has(k)) continue;
    if (!isDeepStrictEqual(after[k], valueJS(list[0]))) throw new Error(`${relPath}: value of \`${k}\` changed`);
  }
  for (const [p, nk] of renamed) {
    if (!isDeepStrictEqual(after[nk], valueJS(p))) throw new Error(`${relPath}: renamed \`${nk}\` lost its value`);
  }
  for (const [k, v] of setValues) {
    if (!isDeepStrictEqual(after[k], v)) throw new Error(`${relPath}: \`${k}\` not set as expected`);
  }
  res.output = out;
  res.changed = out !== text;
  return res;
}

/** Throws unless `after` keeps the body of `before` byte-identical. */
export function verifyBody(before, after) {
  const b = splitNote(before).body;
  const a = splitNote(after).body;
  if (a !== b) throw new Error('body changed');
}

const SKIP_DIRS = new Set(['node_modules', 'scripts', '.git', '.obsidian', '.trash']);
const SKIP_ROOT_FILES = new Set(['readme.md', 'schema.md']);

export function listNotes(root) {
  const out = [];
  const walk = (dir, rel) => {
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      if (ent.name.startsWith('.')) continue;
      const r = rel ? `${rel}/${ent.name}` : ent.name;
      if (ent.isDirectory()) {
        if (!SKIP_DIRS.has(ent.name)) walk(path.join(dir, ent.name), r);
      } else if (ent.isFile() && /\.md$/i.test(ent.name)) {
        if (!rel && SKIP_ROOT_FILES.has(ent.name.toLowerCase())) continue;
        out.push(r);
      }
    }
  };
  walk(root, '');
  return out.sort((a, b) => a.localeCompare(b));
}

export function normalizeFolder(root, { publish }) {
  const results = listNotes(root).map((rel) => {
    const text = fs.readFileSync(path.join(root, rel), 'utf8');
    return normalizeNote(text, { relPath: rel, publish });
  });
  const ids = new Map();
  for (const r of results) {
    if (r.decision === 'skipped' || !r.id) continue;
    if (!ids.has(r.id)) ids.set(r.id, []);
    ids.get(r.id).push(r.relPath);
  }
  const duplicateIds = [...ids].filter(([, l]) => l.length > 1);
  return { results, duplicateIds };
}

const esc = (s) => String(s).replace(/\|/g, '\\|');

export function renderReport(root, publish, { results, duplicateIds }, applied) {
  const count = (f) => results.filter(f).length;
  const lines = [
    `# Normalizer ${applied ? 'apply' : 'dry-run'} — ${root}`,
    '',
    `default publish: ${publish}; files: ${results.length}; changed: ${count((r) => r.changed)}; ` +
      `instrument: ${count((r) => r.decision === 'instrument')} (typed-added: ${count((r) => r.typedAdded)}); ` +
      `non-instrument: ${count((r) => r.decision === 'non-instrument')}; skipped: ${count((r) => r.decision === 'skipped')}`,
    '',
    '| file | decision | changed | actions | notes |',
    '|---|---|---|---|---|',
    ...results.map(
      (r) =>
        `| ${esc(r.relPath)} | ${r.decision}${r.typedAdded ? ' (+type)' : ''} | ${r.changed ? 'yes' : 'no'} | ${esc(r.actions.join('; '))} | ${esc(r.notes.join('; '))} |`,
    ),
  ];
  if (duplicateIds.length) {
    lines.push('', '## Duplicate ids', '', ...duplicateIds.map(([id, l]) => `- \`${id}\`: ${l.join(', ')}`));
  }
  return lines.join('\n') + '\n';
}

function main(argv) {
  const args = argv.slice(2);
  const root = args.find((a, i) => !a.startsWith('--') && !['--publish', '--report'].includes(args[i - 1]));
  if (!root) {
    console.error('usage: normalize.mjs <folder> [--publish true|false] [--apply] [--report file.md] [--json]');
    process.exit(2);
  }
  const pi = args.indexOf('--publish');
  const publish = pi === -1 ? true : args[pi + 1] !== 'false';
  const apply = args.includes('--apply');
  const ri = args.indexOf('--report');
  const result = normalizeFolder(root, { publish });
  if (apply) {
    for (const r of result.results) if (r.changed) fs.writeFileSync(path.join(root, r.relPath), r.output);
  }
  const report = renderReport(root, publish, result, apply);
  if (ri !== -1) fs.writeFileSync(args[ri + 1], report);
  if (args.includes('--json')) {
    console.log(JSON.stringify(result.results.map(({ output, ...r }) => r), null, 2));
  } else console.log(report);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) main(process.argv);
