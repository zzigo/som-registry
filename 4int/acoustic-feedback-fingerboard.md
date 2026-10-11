---
id: acoustic-feedback-fingerboard
title: Acoustic Feedback Fingerboard
def: A closed electroacoustic loop in which fingertip microphones capture room-radiated sound from co-located microspeakers and re-inject it into the same transduction chain, producing sustained oscillation whose frequency, timbre, and stability are functions of the performer's hand position, the instrument body's acoustic filter, and the room impulse response.
tags:
  - dss
  - dss/soog/4int
  - interface
  - excitation
  - feedback
  - acoustic
  - speculative
category: 4int
type: interaction
layer: electroacoustic
subcategory: excitation
hyper:
  - "[[acoustic feedback]]"
  - "[[electroacoustic excitation]]"
connect:
  - "[[acoustic-chain]]"
  - "[[room-acoustic]]"
  - "[[soundboard-material-filter]]"
  - "[[fingertip-microphone-array]]"
  - "[[mapping]]"
  - "[[liveness]]"
  - "[[ergonomics]]"
instruments:
  - "[[08-output/z-instruments/luthemic/luthemic]]"
interaction:
  excitation: electroacoustic-feedback
  coupling: acoustic-air-path
  loop: true
  latency_ms: variable — c. 5–20ms depending on mic-to-speaker distance and room RT
metrics:
  scale:
    - 0
    - 1
  low_anchor: no feedback — signal chain is open; each transducer is independent
  high_anchor: fully constitutive feedback loop — room and body are inseparable signal elements
  measurable: true
  method: spectral analysis of loop gain G(ω) = H_mic(ω)·H_room(ω)·H_speaker(ω)·H_body(ω); loop sustains when |G(ω)| ≥ 1 for any ω
modified: 2026-05-16
---

## Concept

The acoustic feedback fingerboard generalises the principle of acoustic feedback (Larsen effect, guitar feedback) into a deliberately structured, performatively controllable interface where:

- the **microphone** is the performer's finger (five channels, frequency-filtered)
- the **speaker** replaces the string at the same spatial position
- the **acoustic path** runs through room air and the instrument body
- the **performer's body position** is a continuous control parameter

This is not incidental feedback (the performer fighting howl) but **feedback as primary compositional material**.

## Loop Transfer Function

The feedback loop has the form:

$$G(\omega) = H_{\text{mic}}(\omega) \cdot H_{\text{room}}(\omega) \cdot H_{\text{speaker}}(\omega) \cdot H_{\text{body}}(\omega)$$

Sustained oscillation (feedback tone) occurs when the Nyquist criterion is met:

$$|G(\omega)| \geq 1 \quad \text{and} \quad \angle G(\omega) = 2\pi k, \quad k \in \mathbb{Z}$$

The **fingertip bandpass filter** $H_{\text{mic}}(\omega)$ narrows the frequency range in which this condition can be met, pinning each finger to one spectral region. Each of the five fingers is thus a single-channel feedback oscillator whose onset, sustain, and timbre are shaped by the remaining transfer functions — all of which are continuous and spatially dependent.

### Control Parameters

| Parameter | Physical correlate | Effect on loop |
|---|---|---|
| Finger position on neck | Mic-to-speaker distance | Changes $H_{\text{room}}$ path length |
| Body orientation | Room reflections reaching mic | Changes $H_{\text{room}}(\omega)$ — gain and phase |
| Distance to room surfaces | RT60, early reflections | Loop gain shifts — onset threshold changes |
| Right-hand damping | Microspeaker surface contact | Attenuates $H_{\text{speaker}}(\omega)$ — breaks loop |
| Filter Q (hardware) | Mic bandpass bandwidth | Controls spectral selectivity of oscillation |
| Wood species / body | $H_{\text{body}}(\omega)$ | Shapes radiation pattern and resonant peaks |

## Relation to Existing Excitation Typologies

Acoustic feedback fingerboard does not map onto Sachs-Hornbostel excitation categories (struck, plucked, bowed, blown). It is:

- not **struck** — no impulse energy input
- not **blown** — not aeroacoustic
- not **plucked** — no stored elastic energy release
- not **bowed** — no stick-slip friction

It belongs to a class of **recirculative excitation** — sound that sustains itself through a closed electromechanical-acoustic loop. Related mechanisms:

- Larsen effect (microphone in front of speaker)
- Guitar amplifier feedback (Jimi Hendrix; studied in Sanfilippo & Valle 2012)
- Feedback flute (Michel Waisvisz)

The acoustic feedback fingerboard is distinguished from these precedents by **frequency-selective, body-embedded, spatially distributed** microphone positions with fixed spectral assignments per finger.

## Comparison with tip-surface-coupling

| Dimension | tip-surface-coupling | acoustic-feedback-fingerboard |
|---|---|---|
| Excitation class | Electromagnetic → intermittent mechanical | Electroacoustic → closed air loop |
| Energy source | Voice coil current | Amplifier gain |
| Nonlinearity source | Contact threshold F_c = k_c(x−x_gap)^n | Loop gain G(ω) ≥ 1 threshold |
| Control variable | Tip amplitude + CV | Finger position + body orientation |
| Room dependence | Low (E=0.3) | High (E=0.7) |
| Recursion type | Soundboard state → next tip event | Output → mic → same loop |
| Setup requirement | Table (ergonomics=0.20) | Handheld (ergonomics=0.80) |

## MOAIE Position

In the MOAIE model, acoustic-feedback-fingerboard occupies primarily the **I** slot (Interaction). However, it also implicates **E** (Environment/room) at unusual depth: the room is inside the loop, not outside it. Any instrument implementing this excitation mode will therefore carry an elevated E value — unusually high for an instrument that is not a site-specific installation.

The recursive flag `recursive: true` applies to the instrument as a whole; the feedback fingerboard is the mechanism that generates the recursion.

## References

```bibtex
@article{sanfilippo2012feedback,
  author  = {Sanfilippo, Dario and Valle, Andrea},
  title   = {Feedback Systems: An Analytical Framework},
  journal = {Computer Music Journal},
  volume  = {36},
  number  = {2},
  pages   = {12--22},
  year    = {2012}
}

@inproceedings{eldridge2017feedback,
  author    = {Eldridge, Alice and Kiefer, Chris},
  title     = {Toward a Taxonomy of Feedback Musics},
  booktitle = {Proceedings of the International Computer Music Conference},
  year      = {2017},
  pages     = {198--204}
}

@book{waisvisz1985cracklebox,
  author    = {Waisvisz, Michel},
  title     = {The Cracklebox and Touch-Sensitive Electronic Instruments},
  year      = {1985},
  publisher = {STEIM},
  note      = {Body-embedded microphone feedback; early precedent for Luthemic excitation mode}
}
```
