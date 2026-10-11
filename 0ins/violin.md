---
## CTX — MOAIE Instrument Node

# ── IDENTITY ──────────────────────────────────────────────────────────
id: violin
title: Violin
tags:
  - dss
  - dss/case/instruments
  - dss/case/instruments/primitive
  - instrument
  - chordophone
  - bowed-string
  - canonical

# ── TAXONOMY ──────────────────────────────────────────────────────────
category: 2obj
type: instrument
kind: individual
corpus: case
origin: traditional
layer: acoustic

abrev: VLN
family: chordophone / bowed string
sachs-hornbostel: "321.322-71 — composite chordophone, spike violin, with bow"

# ── PEOPLE / META ─────────────────────────────────────────────────────
person: "[[Antonio Stradivari]]"
performers: []
authors: []
year: 1700
url: ""
img: https://i.imgur.com/B1xB27j.png
bib: "Gough, Colin. 2007. Science and the Stradivarius. Physics World 13(4): 27–33."

# ── GRAPH CONNECTIONS ─────────────────────────────────────────────────
hyper:
  - "[[chordophone]]"
  - "[[bowed string instrument]]"
connect:
  - "[[strings]]"
  - "[[bow-string friction]]"
  - "[[Helmholtz motion]]"
  - "[[acoustic-chain]]"
  - "[[wood-soundboard]]"

# ── TOPOLOGY (2obj extension) ─────────────────────────────────────────
topology:
  shape: "waisted resonator body (spruce top, maple back/sides) + neck + fingerboard + four strings"
  dimensions: "body length ~356mm; total ~595mm with neck"
  modes: 4
  modularity: false
  proportional_basis: "Pythagorean string tuning (G–D–A–E); Stradivari plate thickness gradients"
  setup: handheld
  hold: "chin-shoulder mount; left hand on neck; right hand bows"
  posture: "standing | seated — instrument horizontal at chin level"
  support_required: false
  weight_class: light
  movement_during_play: "moderate — bow arm sweeps; performer can move freely"

# ── FABRICATION ───────────────────────────────────────────────────────
fabrication:
  method: traditional luthiery
  material_refs:
    - "[[spruce-soundboard]]"
    - "[[maple-back-sides]]"
    - "[[horsehair-bow]]"
  complexity: very_high
  files: []

# ── MOAIE VECTOR ──────────────────────────────────────────────────────
moaie:
  M: "[[wood-soundboard]]"
  O: "[[bowed-string-resonator]]"
  A: "[[human-performer]]"
  I: "[[Helmholtz-motion]]"
  E: "[[room-acoustic]]"
  recursive: false
  vector: [0.7, 0.9, 0.5, 0.6, 0.25]
  # M=0.7 two distinct woods (spruce top, maple body) — material selection is luthiery art
  # O=0.9 highly refined, 400yr optimized object form — canonical in the full sense
  # A=0.5 conventional human performer — maximum technique depth but standard role
  # I=0.6 bow-string Helmholtz motion: well-understood but nuanced (rosin, pressure, speed triangle)
  # E=0.25 room acoustic is context, not signal chain element

# ── INTERFACE PROFILE (4int dimensions) ───────────────────────────────
interface_profile:
  affordance: 0.50       # non-obvious — holding + bowing simultaneously is not intuitive at all
  liveness: 0.95         # maximally legible: bow on string, cause→effect fully visible
  playability: 0.30      # extremely difficult — sustained tone requires years of training
  learnability: 0.25     # one of the steepest learning curves of any instrument
  situatedness: 0.95     # highest cultural canonicity — the paradigm of "the instrument"
  mediality: 0.85        # body deeply coupled: shoulder, chin, jaw, arm all engaged
  mapping: 0.70          # bow speed→volume, pressure→timbre, position→pitch: multi-dimensional but learnable
  sensorimotor_scheme: 0.90  # deepest scheme acquisition — decades of practice tradition
  ergonomics: 0.85       # handheld, performer can stand and move, bow arm free
  expressivity: 0.95     # widest expressive range of any standard instrument; sul ponticello, harmonics, etc.

status: validated
publish: true
modified: 2026-05-16
---

## Organological Summary

The violin is the canonical bowed chordophone and the primary calibration point for the MOAIE vector space. It represents the extreme of cultural canonicity (O=0.9, situatedness=0.95), physical liveness (0.95), and expressive range (0.95) within the conventional instrument paradigm. Against this baseline, speculative instruments are measured.

## Acoustic Chain

```
bow (horsehair — rosin contact)
    ↓ [Helmholtz stick-slip motion: bow excites string into sawtooth oscillation]
string (gut / steel / synthetic — standing wave)
    ↓ [bridge coupling: string → plate modes]
top plate (spruce — primary radiator)
    ↓ [f-holes, back plate, ribs — complex cavity modes]
air / room
```

Recursion: none. Signal path is strictly feed-forward. `recursive: false`.

## Why O=0.9

Four centuries of luthiery optimization converge on a form so refined that deviations of millimeters in plate thickness change the acoustic response measurably. The violin body is the closest thing in organology to a mathematical optimum — approached asymptotically through Stradivari, Guarneri, and successive makers. O=0.9 reflects this extreme refinement: the object IS its function.

## Calibration Role in the Vector Space

The violin vector [0.7, 0.9, 0.5, 0.6, 0.25] defines a **canonical cluster** for acoustic bowed strings. Any instrument nearby in the space (viola, cello, viol da gamba) will score similarly. Distance from the violin is distance from this canonical cluster.

Grammar distance from violin to Luthemic: 3 operators (P4 → P3 → P1). Grammar distance from violin to Cicada: at least 5 operators. The grammar distance is a measure of speculative distance.

## Interface Profile Reading

The violin paradox: it is **maximally expressive** (0.95) but **minimally playable at onset** (0.30). This is the steepest expressivity/accessibility gradient in the instrument registry. The learning curve (sensorimotor_scheme=0.90) is the price paid for that expressivity. Liveness (0.95) is the highest in the registry because the bow-string contact is completely transparent as a causal mechanism.

## References

```bibtex
@article{gough2007science,
  author  = {Gough, Colin},
  title   = {Science and the Stradivarius},
  journal = {Physics World},
  volume  = {13},
  number  = {4},
  pages   = {27--33},
  year    = {2007},
  note    = {Acoustic analysis of plate modes, Helmholtz motion, f-hole radiation}
}

@book{hutchins1983acoustics,
  author    = {Hutchins, Carleen Maley},
  title     = {The Acoustics of Violin Plates},
  publisher = {Scientific American},
  year      = {1981},
  pages     = {170--176},
  note      = {Plate tuning and mode coupling in violin body design}
}
```
