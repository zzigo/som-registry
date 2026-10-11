---
## CTX — MOAIE Instrument Node

# ── IDENTITY ──────────────────────────────────────────────────────────
id: <snake_case_id>
title: <Human Readable Title>
tags:
  - dss
  - dss/case/instruments
  - instrument
  - <family-tag>

# ── TAXONOMY ──────────────────────────────────────────────────────────
category: 2obj
kind: individual          # class | individual
origin: contemporary      # traditional | contemporary | fictional | generated
corpus: case              # omit if the instrument is not in the studied corpus
publish: false
type: instrument
layer: acoustic | ontological | fictional | all

abrev: <ABBREV>
family: <instrument family>
sachs-hornbostel: "<SH code> — <description>"

# ── PEOPLE / META ─────────────────────────────────────────────────────
person: "[[Maker Name]]"
performers: <performer names>
authors: [Name One, Name Two]
year: <YYYY>
url: <url>
img: <img-url>
bib: "<Full citation string>"

# ── GRAPH CONNECTIONS ─────────────────────────────────────────────────
hyper:
  - "[[broader instrument family]]"
hypo: []
connect:
  - "[[related concept or node]]"

# ── TOPOLOGY (2obj extension) ─────────────────────────────────────────
topology:
  shape: <shape description>
  dimensions: <dimensions>
  modes: <int>
  modularity: true | false
  proportional_basis: <basis if any>

# ── FABRICATION ───────────────────────────────────────────────────────
fabrication:
  method: 3d_print | cnc | casting | hand_made | electronic | hybrid | virtual | bio
  material_refs:
    - "[[material node]]"
  complexity: low | medium | high
  files: []

# ── MOAIE VECTOR ──────────────────────────────────────────────────────
moaie:
  M: "[[material node id]]"
  O: "[[object node id]]"
  A: "[[agent node id]]"
  I: "[[interaction node id]]"
  E: "[[environment node id]]"
  recursive: true | false
  vector: [0.0, 0.0, 0.0, 0.0, 0.0]
  # M= <note>
  # O= <note>
  # A= <note>
  # I= <note>
  # E= <note>

status: draft | validated | deprecated
modified: <YYYY-MM-DD>
---

## Organological Summary

<2–3 sentence description of the instrument, its core mechanism, and organological significance.>

## Signal Chain

```
<input> → <transducer> → <coupling> → <resonator> → <output>
```

## MOAIE Reading

<Paragraph explaining which MOAIE dimension is most novel or analytically significant, and why.>

## References

```bibtex
@<type>{<key>,
  author = {},
  title  = {},
  year   = {},
  ...
}
```
