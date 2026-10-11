---
## CTX — MOAIE Instrument Node

# ── IDENTITY ──────────────────────────────────────────────────────────
id: cymbal
title: Cymbal
tags:
  - dss
  - dss/case/instruments
  - dss/case/instruments/primitive
  - instrument
  - idiophone
  - percussion
  - canonical

# ── TAXONOMY ──────────────────────────────────────────────────────────
category: 2obj
type: instrument
kind: individual
corpus: case
origin: traditional
layer: acoustic

abrev: CYM
family: idiophone / concussion / percussion
sachs-hornbostel: "111.142 — vessel-shaped concussion idiophone (clashed or struck)"

# ── PEOPLE / META ─────────────────────────────────────────────────────
person: ""
performers: []
authors: []
year: -1200
url: ""
img: ""
bib: "Blades, James. 1970. Percussion Instruments and Their History. London: Faber and Faber."

# ── GRAPH CONNECTIONS ─────────────────────────────────────────────────
hyper:
  - "[[idiophone]]"
  - "[[percussion instrument]]"
connect:
  - "[[struck-idiophone-excitation]]"
  - "[[circular-plate-modes]]"
  - "[[acoustic-chain]]"
  - "[[bronze-alloy]]"

# ── TOPOLOGY (2obj extension) ─────────────────────────────────────────
topology:
  shape: "circular bronze disk with central dome (bell); slightly domed profile; lathed ridges"
  dimensions: "ride: 508–560mm diam.; crash: 356–457mm; hi-hat: 356–406mm"
  modes: "many — inharmonic plate mode spectrum (no fundamental pitch)"
  modularity: false
  proportional_basis: "empirical — thickness profile, alloy blend, and lathing pattern determine tonal character"
  setup: "stand-mounted | handheld-clashed"
  hold: "stand with wing-nut tilt adjustment; or hand-held pair for orchestral clash"
  posture: "seated (drum kit) | standing (orchestra)"
  support_required: true
  weight_class: medium
  movement_during_play: "static — mounted on stand; crash cymbals can be swept"

# ── FABRICATION ───────────────────────────────────────────────────────
fabrication:
  method: "cast bronze + hammering + lathing"
  material_refs:
    - "[[bronze-alloy-B20]]"
    - "[[cast-bell-bronze]]"
  complexity: high
  files: []

# ── MOAIE VECTOR ──────────────────────────────────────────────────────
moaie:
  M: "[[bronze-alloy-B20]]"
  O: "[[circular-plate-resonator]]"
  A: "[[human-performer]]"
  I: "[[struck-idiophone-excitation]]"
  E: "[[room-acoustic]]"
  recursive: false
  vector: [0.4, 0.5, 0.4, 0.3, 0.20]
  # M=0.4 bronze B20 alloy — specific but traditional; alloy variation is known variable
  # O=0.5 circular plate — geometrically simple; topological complexity hidden in lathing/hammering
  # A=0.4 percussionist — standard role; mallets, sticks, brushes as sub-variants
  # I=0.3 impact excitation — most elementary SH category; lowest I score in the registry
  # E=0.20 room is context; cymbals sustain long enough to reveal room but not constitutively

# ── INTERFACE PROFILE (4int dimensions) ───────────────────────────────
interface_profile:
  affordance: 0.90       # maximally obvious — hit it; no technique needed to produce a sound
  liveness: 0.95         # impact-to-sound causal chain is instant and fully visible
  playability: 0.90      # immediate access; no hold-off period; extended techniques (bowing) add depth
  learnability: 0.85     # basic technique trivially learnable; nuance (muffling, zone differentiation) takes time
  situatedness: 0.80     # strong cultural position (jazz, rock, orchestra) but role is always secondary
  mediality: 0.35        # minimal body coupling — arm strike, no sustained contact; short interaction
  mapping: 0.60          # strike velocity→volume fairly direct; zone (bell/edge/bow) maps to timbre non-linearly
  sensorimotor_scheme: 0.60  # moderate depth — established schemes for kit playing; mallet technique separate
  ergonomics: 0.55       # stand-mounted: requires support (support_required=true) but performer is free
  expressivity: 0.55     # limited — transient-dominated; main variable is velocity + zone; bowing expands range

status: validated
publish: true
modified: 2026-05-16
---

## Organological Summary

The cymbal is the lowest-I instrument in the registry — impact excitation (I=0.3) is the most elementary SH category, requiring no sustained coupling mechanism and no feedback loop. Its O=0.5 reflects that the circular plate topology is geometrically simple even if the manufacturing process (lathing, hammering, alloy selection) is highly skilled. The cymbal anchors the **low-novelty idiophone cluster** and defines the minimum I score for physically instantiated instruments.

## Acoustic Chain

```
mallet / stick (striker — kinetic energy input)
    ↓ [impact excitation — impulse force applied to plate]
bronze disk (circular plate — inharmonic mode spectrum)
    ↓ [free-plate radiation — all modes excited simultaneously]
air / room
```

No coupling, no feedback, no recursion. The cymbal is acoustically maximally simple. `recursive: false`.

## Why I=0.3 Is the Floor

The cymbal's interaction is a single impulsive event: transfer kinetic energy → excite modes → radiate. There is no sustained coupling, no friction, no feedback, no nonlinearity in the excitation mechanism (the plate itself responds nonlinearly at high amplitudes, but this is a material property, not an interaction design). I=0.3 represents the baseline — every instrument with a more complex interaction mechanism scores higher.

## The Inharmonic Plate as a Conceptual Contrast

The cymbal's inharmonic spectrum (plate modes are not in simple harmonic ratios) contrasts with the recorder's harmonic tube modes and the violin's near-harmonic string modes. The percussive family of inharmonic idiophones (cymbal, gong, tam-tam) occupies a distinct cluster in timbral space — Scarano's ML classifier places them clearly separated from harmonic instruments.

## Fabrication Complexity vs. Interaction Novelty

The cymbal illustrates the independence of M fabrication complexity (high — B20 alloy, casting, hammering, lathing) from I interaction novelty (low — just hit it). A highly crafted material object can have a trivially simple interaction. This decoupling is one of the arguments for tracking M and I as independent MOAIE dimensions.

## References

```bibtex
@book{blades1970percussion,
  author    = {Blades, James},
  title     = {Percussion Instruments and Their History},
  publisher = {Faber and Faber},
  address   = {London},
  year      = {1970},
  note      = {Historical and organological survey of idiophones including cymbals; pp. 148--162}
}

@article{fletcher1999nonlinear,
  author  = {Fletcher, Neville H.},
  title   = {Nonlinear Frequency Shifts in Quasi-Spherical-Cap Shells: Pitch Glides in Cymbals},
  journal = {Journal of the Acoustical Society of America},
  volume  = {105},
  number  = {2},
  pages   = {1213--1219},
  year    = {1999},
  note    = {Nonlinear plate modes in cymbals; amplitude-dependent pitch glide at high SPL}
}
```
