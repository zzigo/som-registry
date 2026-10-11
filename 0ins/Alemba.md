---
## CTX — MOAIE Instrument Node

# ── IDENTITY ──────────────────────────────────────────────────────────
id: alemba
title: Alemba
tags:
- dss/case/instruments/perc

# ── TAXONOMY ──────────────────────────────────────────────────────────
category: 2obj
type: instrument
kind: individual
corpus: case
origin: contemporary
layer: functional
abrev: ALM
family: tuned metal idiophone / graduated triangle system
sachs-hornbostel: "111.222.2 — set of struck metal rod idiophones, row-arranged; each element is a metal rod bent to triangular form, struck with a beater; graduated by size to produce a chromatic pitch series"

# ── PEOPLE / META ─────────────────────────────────────────────────────
person: "[[Moya Henderson]]"
performers:
  - Rebecca Lloyd-Jones
  - Sydney Symphony Orchestra
authors: [Luciano Azzigotti]
year: 1983
url: "https://www.moyahenderson.com/"
img: https://i.imgur.com/8U43i9x.png
bib: "Henderson, Moya. 2024. 'Playing Up: The Alemba with Moya Henderson.' Limelight Arts, November 25. https://limelight-arts.com.au/features/playing-up-the-alemba-with-moya-henderson/"

# ── GRAPH CONNECTIONS ─────────────────────────────────────────────────
hyper:
  - "[[speculative organology]]"
  - "[[idiophone]]"
  - "[[tuned percussion]]"
hypo: []
connect:
  - "[[triangle]]"
  - "[[carillon]]"
  - "[[glockenspiel]]"
  - "[[Mauricio Kagel]]"
  - "[[CSIRO residency]]"
  - "[[systematization of timbre]]"

# ── TOPOLOGY (2obj extension) ─────────────────────────────────────────
topology:
  shape: "row of 13 metal triangles of graduated size, arranged horizontally from largest (lowest pitch) to smallest (highest pitch); each triangle is a single metal rod bent to triangular form; treble and bass versions exist"
  dimensions: "treble alemba: approximately 60–80cm span across the row; bass alemba: larger; each triangle approximately 4–20cm per side depending on position"
  modes: "13 chromatic pitches (treble); each triangle vibrates in complex bending modes; characteristic inharmonic partial spectrum with stretched overtones"
  modularity: false
  proportional_basis: "pitch determined by total rod length (perimeter of triangle) and cross-sectional properties; graduated perimeter length produces graduated fundamental frequency"
  setup: "mounted horizontally on a stand or frame; beater used for striking; plastic resonators (mineral water bottle bottoms) used in original development as acoustic amplifiers"
  hold: "standing or seated at a stand; one or two mallets/beaters; similar to marimba/glockenspiel posture"
  posture: "standing or seated, facing the instrument laterally"
  support_required: true
  weight_class: "light to medium; frame + metal triangles"
  movement_during_play: "mallet trajectory along the row; similar to keyboard percussion; arm motion across horizontal span"

# ── FABRICATION ───────────────────────────────────────────────────────
fabrication:
  method: "metal rod bending + tuning; each triangle formed from a single metal rod bent at two points; fine-tuning via material removal or addition"
  material_refs:
    - "metal rod (steel or alloy, circular cross-section)"
    - "mounting frame (wood or metal)"
    - "suspension cord or mechanism (like orchestral triangle)"
  complexity: medium
  files: []
  variants:
    - "treble alemba: 13 triangles, higher register"
    - "bass alemba: larger triangles, lower register; developed during second CSIRO residency (1986)"
    - "original prototype (1983): first collaboration with engineer Alan Forester; collection Powerhouse Museum, Sydney"

# ── MOAIE VECTOR ──────────────────────────────────────────────────────
moaie:
  M: "[[metal-rod-triangle-material]]"
  O: "[[graduated-row-topology]]"
  A: "[[single-performer-mallet-agency]]"
  I: "[[struck-idiophone-interaction]]"
  E: "[[acoustic-concert-space]]"
  recursive: false
  vector: [0.35, 0.40, 0.25, 0.35, 0.20]
  # M=0.35 simple material — metal rod bent to form; the acoustic behavior
  #        (inharmonic spectrum, pure tone quality) is the entire invention;
  #        no composite materials, no electronics; the material IS the timbre
  # O=0.40 row topology, like keyboard percussion; coherent and elegant
  #        but not structurally complex; the graduation is the design
  # A=0.25 single performer, mallet technique; close to marimba agency;
  #        the performer has direct causal control with standard percussion vocabulary
  # I=0.35 striking with mallet; well within known percussion interaction space;
  #        the novelty is the resonator + the graduated triangle form, not the gesture
  # E=0.20 not environment-dependent; acoustic space affects sustain but
  #        instrument does not constitute the environment or depend on it constitutively

# ── INTERFACE PROFILE (4int dimensions) ───────────────────────────────
interface_profile:
  affordance: 0.80      # mallet + row of objects → clear; prior keyboard percussion knowledge transfers directly
  liveness: 0.85        # direct striking → immediate causal response; highly transparent
  playability: 0.70     # standard mallet technique applies; requires consistent striking angle for pure tone
  learnability: 0.75    # strong transfer from glockenspiel, marimba, xylophone background
  situatedness: 0.40    # instrument is rare; no established performance tradition yet; limited pedagogical infrastructure
  mediality: 0.45       # arm/wrist/hand; standard percussion body engagement; not highly embodied
  mapping: 0.80         # pitch layout is graduated left-to-right; immediately legible to any keyboardist or percussionist
  sensorimotor_scheme: 0.75  # substantial transfer from marimba/glockenspiel — angle, pressure, speed apply
  ergonomics: 0.70      # standing at a frame, standard percussion posture; comfortable for standard performance duration
  expressivity: 0.55    # dynamics + articulation + vibrato (shaking the triangle); limited timbral variation
                        # but the characteristic tone quality is itself the expressive medium

status: draft
publish: true
modified: 2026-06-03
timeline:
  - dssCaseInstruments
---

https://www.youtube.com/watch?v=2qxLaZMBC7w

---

## Organological Summary

The Alemba is a tuned percussion instrument consisting of a row of 13 metal triangles of graduated size, each formed from a single metal rod bent to triangular form and struck with a beater. Invented by Australian composer Moya Henderson in 1983 at a CSIRO residency, it emerged from a commission in the mid-1970s: sculptor Helfried Hagenberg offered Mauricio Kagel a set of 27 triangles — Kagel declined and passed the project to his student Henderson. Only one of the 27 actually looked like a triangle, but all behaved acoustically like one. Henderson's key discovery was the "beautiful, single, pure identifiable sound" latent in the triangle family — a timbre entirely unexploited as a pitched instrument system — and the potential of plastic resonators (mineral water bottle bases) to amplify and focus that sound.

The Alemba's constitutive property is the **systematization of a timbre into a pitched instrument**: the triangle, traditionally an un-tuned or barely-tuned orchestral percussion accessory, is here graduated into a chromatic pitched series. This is an organological operation of the same order as Cage's prepared piano — taking a specific acoustic quality and formalizing it into a compositional system. The speculative question the Alemba enacts: what other single-timbre acoustic objects contain untapped pitched potential that a graduated series would reveal?

---

## Formal Structure

Each triangle is a single metal rod of length $L$ bent at two points into triangular form. The fundamental frequency of a thin elastic rod depends on its bending modes. For a free-free rod:

$$f_n = \frac{\pi}{2} \cdot \frac{k_n^2}{L^2} \sqrt{\frac{EI}{\rho A}}$$

Where:
- $L$ = effective vibrating length (proportional to total rod length = triangle perimeter)
- $E$ = Young's modulus of the metal
- $I$ = second moment of area of the cross-section ($I = \pi r^4/4$ for circular rod of radius $r$)
- $\rho$ = density of the metal
- $A$ = cross-sectional area
- $k_n$ = mode shape factor for mode $n$ ($k_1 = 1.875$, $k_2 = 4.694$, ...)

For the Alemba, graduated pitch is achieved by varying $L$ (rod length / triangle perimeter) while keeping material and cross-section constant. A larger triangle (longer perimeter) produces a lower fundamental; a smaller triangle produces a higher one. The partial structure of each triangle is **inharmonic** — overtones do not align with integer multiples of the fundamental — giving the characteristic shimmering, bell-like quality distinct from the glockenspiel's more harmonic spectrum.

The plastic resonator (mineral water bottle) acts as a Helmholtz resonator, boosting specific partials near its resonant frequency and increasing radiation efficiency. This was Henderson's practical discovery before the formal acoustic theory.

---

## Systematization of Timbre — The Alemba's Organological Operation

The orchestral triangle occupies a specific acoustic niche: high partial content, long sustain, inharmonic spectrum, minimal pitch definition. Its role has historically been punctuation — a single pitch or indefinite-pitch accent. Henderson's move was to ask: what if this timbre were the main voice of an instrument?

| aspect | orchestral triangle | alemba |
|---|---|---|
| pitch | indefinite or single fixed | 13 graduated pitches |
| role | punctuation, color | melodic, harmonic, contrapuntal |
| partial structure | inharmonic, shimmering | inharmonic, shimmering (preserved) |
| performer agency | single strike or roll | full melodic vocabulary |
| instrument class | accessory | principal instrument |

The organological operation is: **P1 (Gradiate) + P4 (Multiply) applied to triangle → Alemba**. The timbral identity of the triangle is preserved and simultaneously musicalized. This preserves what was distinctive (the characteristic sound) while removing the limitation (single pitch). It is the same logic as the marimba's relation to the wood block, or the tubular bells' relation to a single church bell.

The key consequence: compositions written for the Alemba exist in a timbral world unavailable to any other instrument. Its inharmonic spectrum and characteristic partial profile mean that intervals and chords produce beating patterns and interference effects specific to this instrument — no other pitched instrument replicates the acoustic environment of the Alemba.

---

## MOAIE Reading

**M=0.35** — The material is simple: a metal rod. The entire invention is in the form (triangle) and the series (graduation). This is a case where M is low but completely load-bearing: the metal triangle's acoustic behavior is the whole point. Nothing is added electronically or computationally.

**O=0.40** — Row topology is clean and functional. The graduation is the design. Not structurally complex, but the conceptual elegance is high: 13 triangles of graduated size produce a chromatic system from a form that was previously considered pitch-irrelevant.

**A=0.25** — Standard mallet percussion agency. The performer controls pitch, dynamics, articulation, and rhythm with a familiar vocabulary. No novel agency model — the innovation is in the instrument, not in the performance paradigm.

**I=0.35** — Striking with mallet is the most ancient percussion interaction. The novelty is entirely in what is being struck, not in how. The plastic resonator manipulation during Henderson's research phase adds a secondary interaction mode (resonator placement/angle) not retained in the final instrument.

**E=0.20** — The Alemba does not constitute its environment, nor is it meaningfully transformed by it beyond normal acoustic space considerations. Compare: Lucier's *I Am Sitting in a Room* (E=0.95) where the room IS the instrument.

---

## OPS Derivation

```
P1(gradiate pitch) + P4(multiply × 13) applied to: triangle_primitive
→ Alemba

Grammar distance from glockenspiel: 2 steps
  (material change: metal bars → metal triangular rods; form change: bar → triangle)
Grammar distance from carillon: 3 steps
  (scale reduction; material change; form change: bell → triangle)
Grammar distance from orchestral triangle: 2 steps
  (P1: gradiate; P4: multiply)
```

The short grammar distance from the orchestral triangle is the instrument's conceptual power: it is a minimal transformation of an existing instrument-type that produces a maximally different instrument-character.

---

## Veo3 Brief

```
COMMON AESTHETICS: 35mm film grain (Kodak 5219), shallow depth of field T1.6,
dark near-black neutral background, desaturated cold palette with warm metallic
light accents, hard directional light from above-left, no text, photorealistic documentary.

— PLANE A · General context —
A concert stage or recital space. A horizontal row of 13 metal triangles suspended on
a wooden frame, ranging from large (bass, leftmost) to small (treble, rightmost).
The triangles glint individually under stage light — each one a distinct presence.
A percussionist stands behind the frame, mallet raised. The triangles are perfectly
still. The space is quiet. Hold 4 seconds before the first strike.

— PLANE B · Interface macro —
Cut to the mallet at the moment of impact on a mid-register triangle. T1.4 — the mallet
tip and the triangle's lower vertex in focus. The metal surface shows fine grain.
On impact, a faint vibration ring is visible in the metal. The sound — pure, shimmering,
slightly inharmonic — begins. The mallet withdraws. The triangle sustains. In the
background: the blurred row of other triangles, their metallic surfaces catching
fragments of stage light. Hold 5 seconds of sustain.

— PLANE C · Detail macro —
Cut to a close-up of two adjacent triangles: a large one and a small one, separated
by 3–4cm. Both are vibrating simultaneously after being struck in sequence.
The vibration is imperceptible to the eye but the image trembles very slightly —
a suggestion of acoustic activity in the metal. At the point of closest approach
between the two triangles, a narrow space of air. Hold 3 seconds.

Camera: slow downward drift during A (revealing the full row from above).
Locked on B and C. Hard cuts.

Sound design: pure inharmonic tone, long sustain, very slight shimmer in the partials
at 4–6x the fundamental. Two triangles at minor second interval produce audible beats
(~2Hz beating) as their inharmonic partials interact. No attack transient visible —
the beginning of the sound is the impact itself, not a pre-attack. Spatial: monophonic
or very slightly spread; the instrument radiates from a narrow horizontal line.

Duration: 15s total (4s + 5s + 3s + 3s sustained)
Tags: alemba, Moya Henderson, triangle, tuned idiophone, CSIRO, metal percussion,
      inharmonic spectrum, speculative organology, graduated percussion
```

---

## References

```bibtex
@article{henderson2024alemba,
  author  = {Henderson, Moya},
  title   = {Playing Up: The Alemba with Moya Henderson},
  journal = {Limelight Arts},
  year    = {2024},
  month   = {November},
  url     = {https://limelight-arts.com.au/features/playing-up-the-alemba-with-moya-henderson/},
  note    = {First-person account of the Alemba's origin — Kagel commission, CSIRO residency, plastic resonator discovery}
}

@misc{powerhouse2024alemba,
  author  = {{Powerhouse Museum}},
  title   = {Alemba musical instrument made by Moya Henderson and Alan Forester},
  year    = {1983},
  url     = {https://collection.powerhouse.com.au/object/79064},
  note    = {Collection object — prototype Alemba, Sydney}
}

@misc{amc_henderson,
  author  = {{Australian Music Centre}},
  title   = {Moya Henderson: Represented Artist Profile},
  url     = {https://www.australianmusiccentre.com.au/artist/henderson-moya},
  note    = {Biography and catalogue of works including Alemba compositions}
}

@misc{grove_alemba,
  author  = {{Oxford Music Online / Grove Music}},
  title   = {Alemba},
  url     = {https://www.oxfordmusiconline.com/grovemusic/view/10.1093/gmo/9781561592630.001.0001/omo-9781561592630-e-4002261226},
  note    = {Grove Music entry for the Alemba}
}
```
