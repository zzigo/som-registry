# SOOG instrument note schema

One Markdown file per instrument: YAML frontmatter + free body. The canonical
shape comes from the SOOG templates in the vault
(`03-thesis/03-soog/soog-templates/t-moaie.md` = full MOAIE node,
`t-dssi.md` = stub). The same schema is used for the user's own instruments in
`08-output/z-instruments/` (kept in the vault, not in this repo, `publish: false`).

The musiki engine reads these files as the `soog-instruments` content source and
serves `GET /api/public/instruments`. Only the fields marked **public** below are
ever exposed (see `src/lib/instruments/projection.ts` in the engine); the body
text is never part of the public payload.

## Visibility

A note is public only when **both** hold:

| key | type | meaning |
|---|---|---|
| `type` | string | must be `instrument`. Other values (`box`, `concept`, `distributed-object`, …) are kept for the vault's own uses and never exposed. |
| `publish` | boolean | `true` = shown by the public API; `false` = private. Independent of `status`. |

`status` keeps its editorial meaning and does **not** control visibility:
`stub` | `draft` | `validated` | `deprecated` (older notes may still carry
`fictional`, `speculative`, `concept`, …; the normalizer reports these).

## Fields

Public = read by the engine projection (`projectInstrument`). Templater
expressions (`<% … %>`) in the frontmatter are tolerated (replaced by today's
date at read time). Wikilinks `[[Target|Alias]]` are reduced to `Target`.

### Identity

| key | type | public | meaning / example |
|---|---|---|---|
| `id` | string | yes (as the record id) | stable id; snake_case or kebab-case. `daxophone`, `spectral-parrot`. Added from the file name when missing. |
| `title` | string | yes | human title. `The Spectral Parrot`. Falls back to the file name. |
| `title_es` (and `<key>_es`) | string | yes (es tenants) | translation of a text field; the API picks `title_es` for Spanish tenants, falling back to `title`. |
| `lang` | string | — | optional: language of an un-blocked body (`en` default, `es`). |
| `tags` | list | no | Obsidian tags. `[dss, dss/case/instruments, instrument]` |

### Taxonomy

| key | type | public | meaning / example |
|---|---|---|---|
| `category` | string | no | SOOG category code: `1mat`, `2obj` (all instruments), `3agn`, `4int`, `5env`, `0pri`, `0dict`. Legacy `1obj`, `3syst`, `4fict` were mapped to `2obj`. |
| `type` | string | gate | `instrument` (see Visibility). |
| `layer` | string | yes | `acoustic` \| `functional` \| `ontological` \| `fictional` \| `all`. `fictional` marks the instrument as fictional in the API. |
| `abrev` | string | no | short code. `DAX` |
| `family` | string | yes | instrument family, free text. `friction idiophone / bowed wooden lamella` |
| `sachs-hornbostel` | string | yes (`sachsHornbostel`) | SH code + description. `"111.142 — vessel-shaped concussion idiophone"` |

### People / meta

| key | type | public | meaning / example |
|---|---|---|---|
| `person` | string or list | yes (string form) | maker / inventor. `"[[Hans Reichel]]"` |
| `performers` | string or list | no | performers. `["[[Hans Reichel]]"]` |
| `authors` | list | yes | authors of the note / analysis. `[Luciano Azzigotti]` |
| `year` | number | yes | year of invention (negative = BCE; `~1800` strings are not numeric and are dropped by the API). |
| `url` | string | yes (only `https://…`) | reference link. |
| `img` | string | yes (only `https://…`) | image URL. |
| `bib` | string | no | citation string or BibTeX. |
| `created`, `modified` | date | no | `YYYY-MM-DD`. |
| `timeline` | list | no | timeline ids used by vault dashboards. |

### Graph connections

| key | type | public | meaning / example |
|---|---|---|---|
| `hyper` | list | yes | broader nodes. `["[[speculative organology]]"]` |
| `hypo` | list | no | narrower nodes. |
| `connect` | list | yes | related nodes. `["[[string feedback]]"]` |

### Topology / fabrication (2obj extension)

| key | type | public | meaning |
|---|---|---|---|
| `topology` | map | no | `shape`, `dimensions`, `modes`, `modularity`, `proportional_basis`, … |
| `fabrication` | map | no | `method` (`3d_print` \| `cnc` \| `casting` \| `hand_made` \| `electronic` \| `hybrid` \| `virtual` \| `bio`), `material_refs`, `complexity`, `files`. |

### MOAIE vector

| key | type | public | meaning |
|---|---|---|---|
| `moaie.M` … `moaie.E` | string | yes (`moaie.text`) | Material, Object, Agent, Interaction, Environment readings (wikilinks reduced). |
| `moaie.recursive` | boolean | yes | feedback/recursive instrument. |
| `moaie.vector` | list of 5 numbers | yes | `[M, O, A, I, E]` in 0..1; anything other than exactly 5 numbers → `null`; all zeros → flagged `empty` (not yet scored). |

### Interface profile (4int)

`interface_profile` (map, public as `profile`): `affordance`, `liveness`,
`playability`, `learnability`, `situatedness`, `mediality`, `mapping`,
`sensorimotor_scheme`, `ergonomics`, `expressivity` — numbers in 0..1. All
zero / missing → `null` (unscored).

### Other keys

Unknown keys (`def`, `notes`, `video`, `som_*`, `aat-render-enabled`, …) are
allowed and kept by the normalizer; they are not public.

## Findings (inline fields)

Interpretive claims that bear on the thesis are not parametric data, so they live in the body, not in the YAML. Write one per line as a Dataview inline field, with optional bracketed fields:

```markdown
soogfinding:: claim in one or two sentences. [facet:: I] [kind:: counterexample] [bears-on:: A-to-I]
```

`facet` is one of M, O, A, I, E; `kind` is `counterexample`, `confirmation`, `anomaly` or `question`; `bears-on` is one thesis id from the controlled list below (the dashboard flags any other value). Findings are never part of the public payload.

Thesis ids (extend deliberately, one line each):

| id | thesis |
|---|---|
| `A-to-I` | the interface is derived from the agent |
| `O-to-I` | the interface is derived from the object |
| `genotype-threshold` | when a variant becomes a new genotype |
| `latent-space` | what the MOAIE distance does or fails to capture |
| `calibration` | what the promotion test or the vector scores get wrong |

The dashboard reads the raw lines of the notes in `0ins` (Dataview does not keep bracketed fields attached to their line), so the format above must stay on one line.

## Body and languages

The body is free Markdown. When a translation exists, wrap each language in a block:

```markdown
<!--lang:en-->
English text…
<!--/lang-->

<!--lang:es-->
Texto en español…
<!--/lang-->
```

Tenants pick by locale (so → en, musiki → es) and fall back to the other
language. Text outside blocks belongs to `lang` (default `en`).

## Minimal examples

Stub (`t-dssi`):

```yaml
---
id: daxophone
title: Daxophone
type: instrument
family: friction idiophone
person: "[[Hans Reichel]]"
year: 1987
img: https://i.imgur.com/rhOY556.png
status: stub
publish: true
---
```

Full node: see `t-moaie.md` (adds `layer`, `sachs-hornbostel`, `authors`,
`hyper`/`connect`, `topology`, `fabrication`, `moaie`, `interface_profile`).

## Legacy keys (mapped by the normalizer)

| legacy | canonical |
|---|---|
| `image` | `img` |
| `link` | `url` |
| `creator` | `person` (only when `person` is empty) |
| `Created` | `created` |
| `timelines` | `timeline` |
| `yearurl` | reported only |
