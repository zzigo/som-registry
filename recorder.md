---
## CTX — MOAIE Instrument Node

# ── IDENTITY ──────────────────────────────────────────────────────────
id: recorder
title: Recorder
tags:
  - dss
  - dss/case/instruments
  - dss/case/instruments/primitive
  - instrument
  - aerophone
  - end-blown
  - canonical

# ── TAXONOMY ──────────────────────────────────────────────────────────
category: 2obj
type: instrument
layer: acoustic

abrev: REC
family: aerophone / edge-tone / duct flute
sachs-hornbostel: "421.221.12 — end-blown flute with internal duct and thumb hole"

# ── PEOPLE / META ─────────────────────────────────────────────────────
person: ""
performers: []
authors: []
year: 1400
url: ""
img: ""
bib: "Hunt, Edgar. 1962. The Recorder and Its Music. London: Herbert Jenkins."

# ── GRAPH CONNECTIONS ─────────────────────────────────────────────────
hyper:
  - "[[aerophone]]"
  - "[[duct flute]]"
connect:
  - "[[edge-tone excitation]]"
  - "[[open tube]]"
  - "[[acoustic-chain]]"
  - "[[breath-control]]"

# ── TOPOLOGY (2obj extension) ─────────────────────────────────────────
topology:
  shape: "cylindrical-to-conical bore; internal windway duct; eight finger holes + thumb hole"
  dimensions: "soprano: ~300mm; tenor: ~470mm; bass: ~650mm"
  modes: 3
  modularity: false
  proportional_basis: "equal temperament with cross-fingering corrections; bore taper controls register"
  setup: handheld
  hold: "both hands on tone holes; instrument angled 45° from vertical; no external support"
  posture: "standing | seated — instrument extends forward from mouth"
  support_required: false
  weight_class: very_light
  movement_during_play: "low — hands fixed on holes; performer can stand"

# ── FABRICATION ───────────────────────────────────────────────────────
fabrication:
  method: traditional turning / injection moulding (modern plastic)
  material_refs:
    - "[[wood-bore]]"
    - "[[plastic-bore]]"
  complexity: medium
  files: []

# ── MOAIE VECTOR ──────────────────────────────────────────────────────
moaie:
  M: "[[wood-bore]]"
  O: "[[duct-flute-resonator]]"
  A: "[[human-performer]]"
  I: "[[edge-tone-excitation]]"
  E: "[[room-acoustic]]"
  recursive: false
  vector: [0.3, 0.7, 0.4, 0.5, 0.20]
  # M=0.3 standard wood or plastic — low material novelty; material selection is minor
  # O=0.7 well-defined canonical form; bore geometry is the design variable
  # A=0.4 breath-controlled; performer role is standard; fingering is the primary technique
  # I=0.5 edge-tone: physically understood (Bernoulli instability at labium edge); standard in SH
  # E=0.20 room is entirely context — recorder does not respond to room in any constitutive way

# ── INTERFACE PROFILE (4int dimensions) ───────────────────────────────
interface_profile:
  affordance: 0.80       # very clear — blow here, cover holes; affordances are visually legible
  liveness: 0.90         # maximal — breath → sound causal chain is completely transparent
  playability: 0.75      # accessible — first sounds come quickly; tone production is not brutal
  learnability: 0.75     # moderate depth — basic technique accessible to children; extended techniques harder
  situatedness: 0.85     # strong cultural position — school instrument, early music canon
  mediality: 0.60        # mouth contact is intimate but hands-to-holes is not as embodied as violin chin mount
  mapping: 0.75          # fingering→pitch is discrete and learnable; breath→dynamics is continuous
  sensorimotor_scheme: 0.65  # established schemes (Baroque fingering, recorder method); transfer from flute possible
  ergonomics: 0.90       # optimal — very light, fully handheld, no support, minimal physical demand
  expressivity: 0.65     # moderate — limited dynamic range; extended techniques (flutter, multiphonics) expand range

status: validated
publish: true
modified: 2026-05-16
---

## Organological Summary

The recorder is the simplest canonical aerophone — minimum material novelty, clearly defined form, transparent excitation mechanism (edge-tone), no room dependence. It anchors the low end of M, I, and E in the MOAIE space. Its ergonomics (0.90) and playability (0.75) make it the most accessible instrument in the registry — the zero cost of entry against which all other instruments' learnability scores are read.

## Acoustic Chain

```
breath (steady airstream from player's lungs)
    ↓ [windway duct channels airstream to labium edge]
labium edge (Bernoulli instability — edge-tone vortex)
    ↓ [periodic vortex shedding excites bore resonances]
cylindrical/conical bore (standing wave column)
    ↓ [open end radiates; tone holes modify effective length]
air / room
```

Recursion: none. `recursive: false`. The bore standing wave feeds back into the edge-tone frequency (this is the oscillation sustain mechanism), but it is entirely internal to the instrument — not a room-constitutive feedback.

## Calibration Role in the Vector Space

The recorder vector [0.3, 0.7, 0.4, 0.5, 0.20] defines the **low-novelty aerophone cluster**. Its E=0.20 and I=0.5 establish the baseline for "standard acoustic instrument, room as context." Any instrument moving E toward 0.5+ is beginning to incorporate the room; any instrument moving I toward 0.7+ is introducing novel excitation.

Grammar distance from recorder to Luthemic: very large (different material family, different topology, different excitation class, feedback loop added, room enters chain). This confirms that Luthemic is a genuinely speculative departure.

## References

```bibtex
@book{hunt1962recorder,
  author    = {Hunt, Edgar},
  title     = {The Recorder and Its Music},
  publisher = {Herbert Jenkins},
  address   = {London},
  year      = {1962},
  note      = {Historical development and acoustic principles of the recorder}
}

@article{verge1997physical,
  author  = {Verge, Marc-Pierre and Causs\'e, Ren\'e and Fabre, Benoît},
  title   = {Acoustic Oscillations in a Flue Organ Pipe: A Physical Model},
  journal = {Acta Acustica},
  volume  = {83},
  year    = {1997},
  pages   = {385--400},
  note    = {Edge-tone physics; Bernoulli instability and vortex shedding at labium}
}
```
