---
## CTX — MOAIE Instrument Node

# ── IDENTITY ──────────────────────────────────────────────────────────
id: cicada
title: Cicada
tags:
  - dss
  - dss/case/instruments
  - dss/case/instruments/physicalSynthesis
  - instrument
  - electroacoustic
  - nonlinear
  - physical-synthesis

# ── TAXONOMY ──────────────────────────────────────────────────────────
category: 2obj
type: instrument
kind: individual
corpus: case
origin: contemporary
layer: acoustic

abrev: CICADA
family: electroacoustic / physical synthesis
sachs-hornbostel: "318.3 / 111.2 — electromechanical idiophonic hybrid"

# ── PEOPLE / META ─────────────────────────────────────────────────────
person: "[[Herbert H.C. Chang]]"
performers: Spencer Topel
authors: [Herbert H.C. Chang, Spencer Topel]
year: 2022
url: https://www.youtube.com/watch?v=uUAyattrP1Y
img: https://i.imgur.com/vwGWlWo.png
bib: "Chang, Herbert H.C., and Spencer Topel. 2022. Cicada: Nonlinear Tip-Surface Musical Interface."

# ── GRAPH CONNECTIONS ─────────────────────────────────────────────────
hyper:
  - "[[electroacoustic instrument]]"
  - "[[physical synthesis]]"
  - "[[modular instrument]]"
hypo: []
connect:
  - "[[tip-surface-coupling]]"
  - "[[soundboard-material-filter]]"
  - "[[tip-surface-resonator]]"
  - "[[nonlinear-contact-modulation]]"
  - "[[acoustic-chain]]"
  - "[[voice-coil-motor]]"
  - "[[material-as-filter]]"

# ── TOPOLOGY (2obj extension) ─────────────────────────────────────────
topology:
  shape: "flat plate resonator with actuator bridge and tip"
  dimensions: "variable — modular soundboard system"
  modes: 4
  modularity: true
  proportional_basis: "material acoustic properties (density, stiffness, internal damping)"
  setup: table
  hold: external
  posture: "seated | standing (over table)"
  support_required: true
  weight_class: medium
  movement_during_play: static

# ── FABRICATION ───────────────────────────────────────────────────────
fabrication:
  method: hybrid
  material_refs:
    - "[[wood-soundboard]]"
    - "[[EVA-foam-soundboard]]"
  complexity: high
  files: []

# ── MOAIE VECTOR ──────────────────────────────────────────────────────
moaie:
  M: "[[soundboard-material-filter]]"
  O: "[[tip-surface-resonator]]"
  A: "[[human-performer]]"
  I: "[[tip-surface-coupling]]"
  E: "[[room-acoustic]]"
  recursive: true
  vector: [0.5, 0.6, 0.4, 0.8, 0.3]
  # M=0.5 modular multi-material soundboard
  # O=0.6 flat plate + bridge topology
  # A=0.4 conventional human performer, touch + CV
  # I=0.8 highly novel: electromagnetic → nonlinear contact → modulation
  # E=0.3 standard room acoustic

# ── INTERFACE PROFILE (4int dimensions) ───────────────────────────────
interface_profile:
  affordance: 0.6         # moderate — clear push/press interaction, but nonlinear response opaque at first
  liveness: 0.75          # actuator motion and tip contact visible; causal chain partially legible
  playability: 0.65       # touch input accessible; immediate sound; fine control takes practice
  learnability: 0.40      # steep nonlinear response curve; new sensorimotor scheme required
  situatedness: 0.55      # physical synthesis / noise music context; not culturally canonical
  mediality: 0.55         # electromagnetic transduction hidden; mechanical bridge partially visible
  mapping: 0.65           # amplitude→contact fairly direct; nonlinearity adds indirection
  sensorimotor_scheme: 0.20  # new instrument — scheme acquisition from near zero
  ergonomics: 0.20        # table-dependent; not handheld; static performance posture
  expressivity: 0.80      # continuous pressure + CV; nonlinear regime adds expressive depth

status: validated
publish: true
modified: 2026-05-16
---

![](https://i.imgur.com/vwGWlWo.png)

## Organological Summary

Cicada (Chang & Topel, 2022) is an electromechanical physical-synthesis instrument built around a patented **tip-surface nonlinear interaction**. Voice-coil motors inside the actuator generate vibrations transmitted through a bridge to a tip, which engages intermittently with an interchangeable soundboard. The contact is periodic and intermittent, converting a linear electromagnetic input into a nonlinear modulation output. The soundboard is not a neutral resonator: it actively filters and shapes the spectrum — the material IS the filter.

## Acoustic Chain

```
voice-coil motor (electromagnetic exciter)
    ↓
bridge → tip (coupling mechanism: intermittent contact)
    ↓ [nonlinear modulation threshold]
soundboard flat plate (resonating body + radiating surface)
    ↓
air / room acoustic (medium)
```

Recursion: soundboard resonant state feeds back into next tip-contact event. `recursive: true`.

## Ergonomics Note

Cicada requires a **table or horizontal surface**. The soundboard lies flat; the actuator is placed on top. The performer sits or stands over the table. This is categorically different from handheld instruments (maraca, violin): Cicada cannot be played while walking, cannot be freely oriented in space, and requires a stable surface whose stiffness affects the sound. The ergonomics value (0.20) reflects this external-support dependency.

This has staging implications: Cicada performance is desk-based, similar to turntablism or modular synthesis — the performer is visible but sedentary. Unlike laptop performance, the physical contact with the instrument and the audible consequence of that contact maintain liveness (0.75).

## Material-as-Filter Paradigm

| Soundboard | Material class | Spectral character |
|---|---|---|
| Wood | High density, high stiffness | Bright, distorted, harmonic-rich |
| EVA foam | Low density, high damping | Low-pass filtered, bass-emphasized |

Each soundboard swap shifts the M vector while O, A, I, E remain constant — making Cicada a test case for vector-space organology across a material family.

## Interface Profile Reading

The instrument's strongest dimension is **expressivity** (0.80): continuous pressure + CV offer fine-grained multi-dimensional control, amplified by the nonlinear threshold's sensitivity. The weakest is **ergonomics** (0.20) and **sensorimotor_scheme** (0.20): the first is structural (table dependency), the second is temporal (new scheme needed). **Liveness** is solid (0.75): the actuator's mechanical action and the soundboard contact are physically legible.

## References

```bibtex
@misc{chang2022cicada,
  author = {Chang, Herbert H.C. and Topel, Spencer},
  title  = {Cicada: Nonlinear Tip-Surface Musical Interface},
  year   = {2022},
  url    = {https://www.youtube.com/watch?v=uUAyattrP1Y}
}
```
