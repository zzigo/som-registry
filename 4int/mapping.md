---
id: mapping
title: Mapping
tags:
  - dss
  - dss/4int
  - mapping
  - control
  - gesture-sound
category: 4int
type: interaction
layer: acoustic
def: The structural correspondence between gestural input parameters and acoustic output parameters; the translation function defining how performer action becomes sound (Malloch et al. 2006; Hunt et al. 2000).
hyper:
  - "[[interaction]]"
  - "[[control interface]]"
  - "[[tripartite instrument model]]"
hypo:
  - "[[one-to-one mapping]]"
  - "[[many-to-many mapping]]"
  - "[[cross-adaptive mapping]]"
connect:
  - "[[expressivity]]"
  - "[[liveness]]"
  - "[[03-thesis/03-soog/4int/affordance]]"
  - "[[sensorimotor-scheme]]"
  - "[[tip-surface-coupling]]"
interaction:
  excitation: modulated
  gesture_type: parameterized control input
  coupling: direct | mediated | virtual
  loop: false
metrics:
  scale: 0.0–1.0
  low_anchor: Highly indirect mapping — one gesture drives multiple independent acoustic parameters in non-intuitive ways; or N:1 convergent mapping collapsing gesture space
  high_anchor: Fully direct 1:1 mapping — one physical parameter controls one acoustic parameter in real-time with linear proportionality and no intermediary (physical instrument ideal)
  measurable: true
  method: computational
person: "[[Malloch]]"
year: 2006
status: validated
modified: 2026-05-16
---

# Mapping

The translation layer between a performer's gestural action and the acoustic output of the instrument. In the tripartite model of digital musical instruments (Malloch et al. 2006), mapping is the third component alongside the sound generator and the control interface. In traditional acoustic instruments, mapping is physically implemented by the instrument's mechanical structure; in electronic instruments, it is an explicit design choice.

## Mapping Typology

Following Hunt, Wanderley, and Paradis (2000), mappings can be characterised by:

**Dimensionality ratio**: the number of input parameters to the number of output parameters.

$$M: \mathbb{R}^m \to \mathbb{R}^n$$

- $m = n = 1$: one-to-one (direct, intuitive)
- $m = 1, n > 1$: one-to-many (one gesture drives multiple acoustic parameters)
- $m > 1, n = 1$: many-to-one (gesture convergence — loss of expressive resolution)
- $m > 1, n > 1$: many-to-many (complex cross-coupling, high expressive potential but high cognitive load)

**Linearity**: whether the mapping function is linear ($f(x) = ax + b$), polynomial, exponential, or lookup-table based. Nonlinear mappings can amplify sensitivity in musically relevant ranges.

**Latency**: the time delay between input event and acoustic output. Values above ~10ms are perceptible and disruptive to sensorimotor integration.

**Reversibility**: whether the performer can infer their gesture position from the acoustic output alone (a requirement for closed-loop instrumental control).

## Mapping and Instrumentality

Hardjowirogo (2017) notes that the transparency of the mapping relationship is central to instrumentality as perceived by audiences. When the mapping is direct and physically legible (e.g., the bow moving faster = louder), the instrument reads as a musical instrument. When the mapping is hidden and non-intuitive (e.g., laptop gesture triggering DSP chain), the system loses instrumentality in the public eye.

The NIME community has extensively documented that "expressive mappings" are the crucial design variable for new electronic instruments. Neither 1:1 (under-expressive) nor arbitrary N:M (cognitively opaque) mappings are optimal: the best mappings are those that match the dimensionality of the gesture space to the dimensionality of the desired acoustic parameter space.

## For Cicada

Cicada's mapping: touch pressure / CV amplitude → voice-coil displacement → tip contact depth → nonlinear harmonic spectrum. This is approximately 1:2 (one input driving both contact intensity and spectral richness), with a nonlinear transfer function at the contact threshold. Mapping value ~0.65: more direct than software synthesis, less direct than acoustic instrument.

## See Also

- [[expressivity]] — the output dimensionality that mapping enables
- [[liveness]] — the perceptual legibility of the mapping to observers
- [[sensorimotor-scheme]] — how mapping becomes internalized through practice
- [[tip-surface-coupling]] — specific mapping instance in Cicada

## References

```bibtex
@inproceedings{malloch2006concert,
  author    = {Malloch, Joseph and others},
  title     = {A Network-Based Framework for Collaborative Development and Performance of Digital Musical Instruments},
  booktitle = {Proc. Computer Music Conference},
  year      = {2006}
}

@article{hunt2000mapping,
  author  = {Hunt, Andy and Wanderley, Marcelo M. and Paradis, Matthew},
  title   = {The Importance of Parameter Mapping in Electronic Instrument Design},
  journal = {Journal of New Music Research},
  volume  = {32},
  number  = {4},
  year    = {2000},
  pages   = {429--440}
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
