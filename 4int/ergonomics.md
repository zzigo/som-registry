---
id: ergonomics
title: Ergonomics
tags:
  - dss
  - dss/4int
  - ergonomics
  - setup
  - physicality
  - body-instrument
category: 4int
type: interaction
layer: acoustic
def: The physical configuration constraints and support requirements imposed by the instrument on the performer's body, posture, and performance infrastructure; encodes whether the instrument is handheld, tabletop, rack-mounted, wearable, or body-suspended (Alperson 2007:46; Hardjowirogo 2017).
hyper:
  - "[[interaction]]"
  - "[[instrumentality]]"
  - "[[embodied interaction]]"
hypo:
  - "[[handheld]]"
  - "[[tabletop-instrument]]"
  - "[[wearable-instrument]]"
  - "[[distributed-setup]]"
connect:
  - "[[mediality]]"
  - "[[situatedness]]"
  - "[[sensorimotor-scheme]]"
  - "[[03-thesis/03-soog/4int/affordance]]"
  - "[[tip-surface-resonator]]"
instruments:
  - "[[Cicada]]"
interaction:
  excitation:
  gesture_type: body-setup configuration
  coupling: direct | external
  loop: false
ergonomics_spec:
  setup: handheld | table | stand | floor | rack | wearable | body-mounted | suspended | hybrid
  hold: none | single-hand | two-hand | hands-free | body | external
  posture: seated | standing | floor | any
  support_required: true | false
  weight_class: light (<1kg) | medium (1–5kg) | heavy (>5kg)
  movement_during_play: static | restricted | free | ambulatory
metrics:
  scale: 0.0–1.0
  low_anchor: Fully externally supported — instrument requires dedicated infrastructure (table, rack, stand, floor mount); performer body is not the primary support structure; high setup overhead
  high_anchor: Fully body-integrated — instrument is handheld, wearable, or body-mounted; no external infrastructure required; performer can move freely during performance
  measurable: true
  method: physical
status: validated
modified: 2026-05-16
---

# Ergonomics

The physical setup layer of the instrument-performer interaction: what infrastructure the instrument requires, how the performer's body is positioned relative to it, and what constraints on movement this imposes. Ergonomics is not a quality of sound production but a prerequisite condition for all other interactions.

## Why Ergonomics Matters Organologically

Alperson (2007:46) notes that many instruments are so intimately tied to their players that "it is difficult to know where the instrument ends and the rest of the body begins." This observation presupposes a handheld or body-mounted instrument. Tabletop instruments (piano, clavichord, prepared piano, flat-plate resonators) establish a fundamentally different body-instrument relationship: the instrument is fixed in space; the body moves relative to it. Wearable instruments (gloves, exoskeletons, Mi.Mu) invert this entirely — the instrument moves with the body.

The setup configuration is not incidental; it shapes:
- The range of gestures available to the performer
- The social and staging implications (performer visible vs. hidden behind equipment)
- The acoustic behaviour (floor-coupling changes resonance; handheld instruments carry the player's body resonance)
- The sensorimotor scheme that develops (seated piano technique differs fundamentally from standing guitar technique)

## Setup Taxonomy

| Setup type | Description | Ergonomics value | Examples |
|---|---|---|---|
| handheld | Instrument held by one or two hands; player provides all support | 0.9–1.0 | Violin, trumpet, maraca |
| body-mounted | Worn on body; player supports via harness or strap | 0.7–0.9 | Accordion, bass guitar (strap), exoskeleton |
| floor | Placed on floor; player crouches or sits | 0.5–0.7 | Cello, bass drum, prepared piano with floor-level objects |
| table | Requires horizontal surface; player seated or standing over it | 0.2–0.4 | Piano (keyboard layout), flat-plate resonators, tabla in traditional posture |
| stand | Requires dedicated stand infrastructure | 0.1–0.3 | Gong, vibraphone, some electronic rigs |
| rack | Requires equipment rack; fixed in performance space | 0.0–0.1 | Modular synthesizer, server-rack sound installation |

## Example: Tabletop Resonator Ergonomics

A flat-plate resonator placed on a table represents a characteristic ergonomics profile. The soundboard lies flat; an actuator assembly is placed on top. The performer's hands are free but constrained to the table workspace. The key ergonomic constraints are:

- The instrument is **not handheld** — it cannot be played while walking or standing freely
- It requires a **stable, flat, hard surface** (soft surfaces dampen soundboard resonance)
- The performer is typically **seated or standing over** the table, with hands approaching from above
- The gesture space is **two-dimensional** (surface plane) plus **vertical** (pressure/distance)

Ergonomics value for this setup class: **0.2** — tabletop dependency, significant setup overhead, free posture (seated/standing) but not ambulatory. This contrasts with handheld instruments (e.g. maraca ≈ 1.0, violin ≈ 0.95). Specific instrument ergonomics values are recorded in their respective instrument nodes.

## Cross-Reference with 2obj topology

The `setup` and `hold` fields encode ergonomics at the object level:
```yaml
topology:
  setup: table
  hold: external
  posture: seated | standing
  support_required: true
```
This should be populated in `2obj/tip-surface-resonator.md` and in individual instrument nodes.

## See Also

- [[mediality]] — how ergonomic configuration shapes the felt body-instrument relation
- [[situatedness]] — ergonomics is always culturally and contextually situated
- [[tip-surface-resonator]] — 2obj node where tabletop ergonomics fields are encoded for flat-plate resonator topology

## References

```bibtex
@article{alperson2008instrumentality,
  author  = {Alperson, Philip},
  title   = {The Instrumentality of Music},
  journal = {Journal of Aesthetics and Art Criticism},
  volume  = {66},
  number  = {1},
  year    = {2008},
  pages   = {37--51}
}

@incollection{hardjowirogo2017instrumentality,
  author    = {Hardjowirogo, Sarah-Indriyati},
  title     = {Instrumentality. On the Construction of Instrumental Identity},
  booktitle = {Musical Instruments in the 21st Century},
  year      = {2017},
  publisher = {Springer Nature Singapore},
  pages     = {9--24}
}
```
