# soog-instruments

The SOOG instrument catalogue: one Obsidian note per instrument (YAML
frontmatter + Markdown body). This folder lives inside the Obsidian vault at
`03-thesis/cases/case instruments/` and is its own git repo
(`zzigo/soog-instruments`); the vault repo ignores it.

- Edit notes in Obsidian as usual, then commit and push from this folder.
- The musiki engine pulls this repo as the `soog-instruments` content source and
  serves the notes with `type: instrument` and `publish: true` from
  `GET /api/public/instruments` (so.zztt.org in English, musiki in Spanish).
- Field reference: [SCHEMA.md](SCHEMA.md).

## Normalizer

`scripts/normalize.mjs` brings notes to the schema without touching note bodies
(it edits only frontmatter lines, keeps unknown keys, comments and key order,
and re-checks every file):

```sh
npm install            # dev dependency: yaml
npm test               # fixtures
node scripts/normalize.mjs . --publish true                   # dry-run table
node scripts/normalize.mjs . --publish true --apply           # write
node scripts/normalize.mjs "<vault>/08-output/z-instruments" --publish false
```

What it does per `.md` (subfolders included; `scripts/`, `node_modules/`,
dot-folders, `README.md`, `SCHEMA.md` are skipped):

- maps legacy keys (`image`→`img`, `link`→`url`, `creator`→`person` when person is
  empty, `Created`→`created`, `timelines`→`timeline`; `yearurl` is only reported);
- untyped notes with at least two non-empty of `family`, `sachs-hornbostel`,
  `abrev`, `person`, `performers`, `year` get `type: instrument`; untyped notes
  below that threshold are left untouched;
- adds `id` (snake_case of the file name) and `title` (file name) when missing or
  empty, and `publish` when missing (`--publish` default for instruments, `false`
  for other types such as `box` / `concept`);
- files without (or with an empty) frontmatter get a stub block
  (`id`, `title`, `type: instrument`, `status: stub`, `publish`) only when they sit
  in the scanned root or are the main note of an instrument folder (`foo/foo.md`);
  others are reported and skipped;
- YAML that does not parse is reported and left untouched.

`node_modules/` is git-ignored. Inside the vault, add `node_modules` to
Obsidian's *Excluded files* (or run `npm install` in a copy) so Obsidian does
not index the package's Markdown files.
