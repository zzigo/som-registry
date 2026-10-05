import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import YAML from 'yaml';
import { normalizeNote, normalizeFolder, snakeId, splitNote, looksInstrumentByFolder } from './normalize.mjs';

const run = (text, relPath = 'Foo Bar.md', publish = true) => normalizeNote(text, { relPath, publish });
const fmOf = (out) => YAML.parse(splitNote(out).fm);

test('snakeId', () => {
  assert.equal(snakeId("potentiomètre d'espace"), 'potentiometre_d_espace');
  assert.equal(snakeId('Oscil  Twins'), 'oscil_twins');
  assert.equal(snakeId('Ü'), 'u');
});

test('folder rule', () => {
  assert.equal(looksInstrumentByFolder('a.md'), true);
  assert.equal(looksInstrumentByFolder('luthemic/luthemic.md'), true);
  assert.equal(looksInstrumentByFolder('luthemic/luthemic S1.md'), false);
});

test('typed instrument: adds id/title/publish, keeps comments, order, body', () => {
  const text = [
    '---',
    '## CTX header comment',
    '',
    '# ── IDENTITY',
    'tags:',
    '  - dss',
    'category: 1obj            # keep this comment',
    'type: instrument',
    'year: 1987',
    'status: draft',
    'modified: 2026-06-08',
    '---',
    '',
    'Body with --- and key: value',
    '',
  ].join('\n');
  const r = run(text);
  assert.equal(r.decision, 'instrument');
  assert.equal(r.typedAdded, false);
  assert.ok(r.changed);
  assert.ok(r.output.includes('category: 1obj            # keep this comment'));
  assert.ok(r.output.includes('# ── IDENTITY\nid: foo_bar\ntitle: Foo Bar\ntags:'));
  assert.ok(r.output.includes('status: draft\npublish: true\nmodified:'));
  assert.equal(splitNote(r.output).body, splitNote(text).body);
  const d = fmOf(r.output);
  assert.deepEqual(Object.keys(d), ['id', 'title', 'tags', 'category', 'type', 'year', 'status', 'publish', 'modified']);
});

test('untyped note with >=2 signals gets type: instrument', () => {
  const r = run('---\nabrev:\nfamily: wind\nperson: Someone\nyear: 2016\n---\nbody\n');
  assert.equal(r.decision, 'instrument');
  assert.equal(r.typedAdded, true);
  const d = fmOf(r.output);
  assert.equal(d.type, 'instrument');
  assert.equal(d.publish, true);
  assert.equal(r.output.endsWith('\n---\nbody\n'), true);
});

test('untyped note with <2 signals is left untouched', () => {
  const text = '---\nabrev:\nfamily:\nperson:\nperformers: "[[]]"\nyear: 2016\nimg: x\n---\nbody\n';
  const r = run(text);
  assert.equal(r.decision, 'skipped');
  assert.equal(r.changed, false);
  assert.equal(r.output, text);
});

test('box keeps its type and gets publish: false; legacy keys renamed in place', () => {
  const r = run('---\nabrev:\ncreator: "[[Ted Nelson]]"\nlink: https://x\nimage: https://i\ntimelines: [a]\nCreated: 2022\nyearurl:\ntype: box\n---\nb');
  assert.equal(r.decision, 'non-instrument');
  const d = fmOf(r.output);
  assert.equal(d.type, 'box');
  assert.equal(d.publish, false);
  assert.equal(d.person, '[[Ted Nelson]]');
  assert.equal(d.url, 'https://x');
  assert.equal(d.img, 'https://i');
  assert.deepEqual(d.timeline, ['a']);
  assert.equal(d.created, 2022);
  assert.equal(d.creator, undefined);
  assert.ok(r.notes.some((n) => n.includes('yearurl')));
  assert.ok(r.output.includes('person: "[[Ted Nelson]]"\nurl: https://x\n'));
});

test('creator is not moved when person has a value', () => {
  const r = run('---\ntype: instrument\nperson: A\ncreator: B\n---\n');
  const d = fmOf(r.output);
  assert.equal(d.person, 'A');
  assert.equal(d.creator, 'B');
});

test('creator moves into an empty person', () => {
  const r = run('---\ntype: instrument\nperson:\ncreator: B\n---\n');
  const d = fmOf(r.output);
  assert.equal(d.person, 'B');
  assert.equal('creator' in d, false);
});

test('empty id/title are filled in place', () => {
  const r = run('---\nid:\ntitle: ""\ntype: instrument\nstatus: draft\n---\nx', 'ADDAC120.md');
  const d = fmOf(r.output);
  assert.equal(d.id, 'addac120');
  assert.equal(d.title, 'ADDAC120');
  assert.ok(r.output.startsWith('---\nid: addac120\ntitle: ADDAC120\ntype: instrument\n'));
});

test('existing id/title/publish are kept', () => {
  const text = '---\nid: my-id\ntitle: Nice\ntype: instrument\npublish: false\n---\nx';
  const r = run(text);
  assert.equal(r.changed, false);
  assert.equal(r.output, text);
});

test('empty duplicate key line is dropped', () => {
  const r = run('---\nimg: \nyear: 2014\nperson: J\nimg: https://i\n---\nx');
  const d = fmOf(r.output);
  assert.equal(d.img, 'https://i');
  assert.ok(r.actions.some((a) => a.includes('duplicate')));
});

test('no frontmatter: stub at folder root, skipped in sub-note', () => {
  const r = run('# names\nbody', 'aerophore.md', false);
  assert.equal(r.decision, 'instrument');
  assert.equal(r.output, '---\nid: aerophore\ntitle: aerophore\ntype: instrument\nstatus: stub\npublish: false\n---\n# names\nbody');
  const s = run('text', 'mask/acoustic vocal modifiers.md', false);
  assert.equal(s.decision, 'skipped');
  assert.equal(s.changed, false);
});

test('no frontmatter body is preserved exactly after the stub', () => {
  const body = '\n\nsome text\n';
  const r = run(body, 'x.md');
  assert.ok(r.output.endsWith('---\n' + body));
});

test('empty frontmatter block gets a stub by folder rule', () => {
  const r = run('---\n\n---\n\n## body', 'biogel.md', false);
  assert.equal(r.decision, 'instrument');
  assert.equal(fmOf(r.output).id, 'biogel');
  assert.ok(r.output.endsWith('\n---\n\n## body'));
});

test('invalid YAML is reported and left untouched', () => {
  const text = '---\ntags:\nyear\nurl: \n---\nx';
  const r = run(text);
  assert.equal(r.decision, 'skipped');
  assert.equal(r.output, text);
  assert.ok(r.notes[0].includes('parse error'));
});

test('folder run reports duplicate ids and skips README/SCHEMA/scripts', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'norm-'));
  fs.writeFileSync(path.join(dir, 'README.md'), '# readme');
  fs.mkdirSync(path.join(dir, 'scripts'));
  fs.writeFileSync(path.join(dir, 'scripts', 'x.md'), 'x');
  fs.writeFileSync(path.join(dir, 'a.md'), '---\nid: same\ntype: instrument\n---\n');
  fs.writeFileSync(path.join(dir, 'b.md'), '---\nid: same\ntype: instrument\n---\n');
  const { results, duplicateIds } = normalizeFolder(dir, { publish: true });
  assert.deepEqual(results.map((r) => r.relPath), ['a.md', 'b.md']);
  assert.deepEqual(duplicateIds, [['same', ['a.md', 'b.md']]]);
});
