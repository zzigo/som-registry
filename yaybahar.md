---
id: yaybahar
title: Yaybahar
tags:
  - dss
  - instrument
  - speculative-organology
  - spring-family
category: 2obj
type: instrument
kind: individual
corpus: case
origin: contemporary
layer: acoustic
abrev: YBH
family: spring-coupled resonator instruments / dispersive transmission systems
sachs-hornbostel: partially null — chordophone excitation (321/322) radiated by membranophones (2) via an unclassified helical-spring transmission line; no SH class covers the coupling stage
person: "[[Görkem Şen]]"
authors: "[[Görkem Şen]]"
year: 2009
url: https://www.gorkemsen.com/gorkem-sen-s-yaybahar
img: https://i.imgur.com/Caj1rC5.png
bib: '@misc{sen2009yaybahar, author={{\c{S}}en, G{\"o}rkem}, title={Yaybahar — Patented Member of the Spring Family of Instruments}, year={2009}, note={Inventor statement, gorkemsen.com}}'
video: https://www.youtube.com/watch?v=_aY6TxC1ojA
hyper:
  - "[[speculative organology]]"
hypo: []
connect:
  - "[[spring reverb]]"
  - "[[dispersive waveguide]]"
  - "[[03-thesis/01-ctx/30-ctx-materials/transduction]]"
  - "[[coupling]]"
  - "[[frame drum]]"
  - "[[baglama]]"
topology:
  shape: long bilateral cantilever — a central horizontal pole carries long strings whose ends terminate, through coiled springs, on two membrane-headed frame drums; near-symmetric string/spring/drum chain on each side
  dimensions: pole length ~2–4 m; string scale length ~1.5–3 m; drum diameter ~0.4–0.6 m
  modes: string transverse modes (excitation) · spring longitudinal/transverse dispersive modes (transmission) · membrane Bessel modes (radiation)
  modularity: false
  proportional_basis: string scale length sets pitch register; spring length sets dispersive delay/decay; membrane diameter sets radiating band — three independent acoustic stages tuned by ratio
  setup: assembled on stands; strings tensioned, springs coupled between string termination and drum head; tuned before play
  hold: not held — performer stands at the instrument and bows or plucks the strings; both hands active
  posture: standing, mobile along the pole
  support_required: true
  weight_class: installation
  movement_during_play: performer moves laterally along the pole to reach distinct string/spring/drum stations; large-amplitude bowing and plucking gestures
fabrication:
  method: acoustic
  material_refs:
    - steel coil springs
    - metal/gut strings
    - stretched leather membranes
    - tempered metal
    - wood
  complexity: high
  files: []
  variants:
    - early prototypes (2009–)
    - refined concert instrument
moaie:
  M: "[[steel spring]] · [[membrane]] · [[string]] — conventional materials in unconventional coupling role"
  O: "[[bilateral cantilever]] — string→spring→membrane chain; novel morphology, weak SH fit"
  A: "[[single human performer]] — fully manual, no algorithmic/distributed agency"
  I: "[[bowing]]/[[plucking]] familiar gesture, but dispersive spring coupling scrambles gesture→sound causality"
  E: "[[membrane radiation]] — spatial, room-immersive, but not in a feedback loop"
  recursive: false
  vector:
    - 0.35
    - 0.75
    - 0.2
    - 0.6
    - 0.3
interface_profile:
  affordance: 0.55
  liveness: 0.35
  playability: 0.45
  learnability: 0.4
  situatedness: 0.5
  mediality: 0.7
  mapping: 0.4
  sensorimotor_scheme: 0.6
  ergonomics: 0.45
  expressivity: 0.8
status: draft
publish: true
modified: 2026-06-08
---

## Organological Summary

The Yaybahar (Görkem Şen, 2009) is a fully acoustic instrument in which long strings are not radiated by a soundboard but by frame-drum membranes reached through coiled springs. Its constitutive property is the spring bridge: a helical transmission line inserted between excitation (string) and radiator (membrane) that does not merely conduct vibration but *transforms* it, dispersing the signal in frequency and returning a long, chirped, reverberant tail with no electronic stage. The instrument is therefore a three-stage acoustic chain — string → dispersive spring → membrane — where the middle stage is normally a hidden electromechanical effect (the spring reverb) made structural, central, and played. For speculative organology it enacts a precise question: when the sound-defining element of an instrument is neither its vibrating source nor its radiator but the *coupling medium between them*, where does Sachs–Hornbostel place it? The Yaybahar answers by being chordophone, membranophone, and unclassifiable transmission line at once.

---

## Formal Structure

The instrument is a cascade of three acoustic systems. Sound is defined less by any one stage than by the dispersive transfer of the middle one.

1. String (excitation). Ideal transverse string, linear wave equation
$$
\mu\,\partial_{tt} y = T\,\partial_{xx} y,\qquad
f_n = \frac{n}{2L_s}\sqrt{\frac{T}{\mu}},\quad n=1,2,\dots
$$
with tension $T$, linear density $\mu$, scale length $L_s$. Bowing sustains a near-harmonic Helmholtz regime; plucking gives a decaying harmonic series. This stage supplies a quasi-harmonic input spectrum.

2. Spring (dispersive transmission — the constitutive stage). A long, soft helical spring does not behave as a non-dispersive string. To leading order its transverse motion is governed by a stiffness-dominated, beam-like equation
$$
\partial_{tt} u + \kappa^{2}\,\partial_{xxxx} u = 0,
\qquad \kappa^{2}=\frac{EI}{\rho A},
$$
giving the dispersion relation and group velocity
$$
\omega(k)=\kappa\,k^{2},\qquad
v_g(\omega)=\frac{d\omega}{dk}=2\kappa k = 2\sqrt{\kappa\,\omega}.
$$
Because $v_g\propto\sqrt{\omega}$, high-frequency components travel faster than low-frequency ones, so the per-frequency propagation delay over spring length $\ell$ is
$$
\tau(\omega)=\frac{\ell}{v_g(\omega)}=\frac{\ell}{2\sqrt{\kappa\,\omega}}.
$$
A single impulse entering the spring leaves it smeared into a descending-glide chirp — the characteristic "spring reverb" signature, here produced structurally rather than as a studio effect. (For a full helical-coil treatment, longitudinal and torsional branches add further dispersive modes; the beam term above captures the dominant audible behaviour.)

3. Membrane (radiation). Each spring terminates on a circular membrane of radius $a$, wave speed $c=\sqrt{\mathcal{T}/\sigma}$ (tension per length $\mathcal{T}$, areal density $\sigma$), with modes
$$
f_{mn}=\frac{c\,\alpha_{mn}}{2\pi a},
$$
$\alpha_{mn}$ the $n$-th zero of the Bessel function $J_m$. The membrane is an efficient low-impedance radiator into the room.

Cascade. Treating the chain as linear, the instrument transfer function from bowing force to radiated pressure is
$$
H(\omega)=\underbrace{H_{\text{str}}(\omega)}_{\text{harmonic comb}}\;
\underbrace{H_{\text{spr}}(\omega)\,e^{-i\omega\tau(\omega)}}_{\text{dispersive delay}}\;
\underbrace{H_{\text{mem}}(\omega)}_{\text{radiation}} .
$$
The audible identity of the Yaybahar lives in the middle factor: the frequency-dependent phase $\omega\tau(\omega)\propto\sqrt{\omega}$ is exactly the term a conventional bridge is built to avoid.

---

## Coupling as Constitutive Stage

Conventional acoustic instruments minimise the bridge: it should transmit string energy to the radiator with as little colouration as possible. The Yaybahar inverts this design imperative — the coupling medium is maximised, made dispersive, and turned into the instrument's voice.

| dimension | conventional string instrument | Yaybahar | consequence |
|---|---|---|---|
| coupling element | rigid bridge, near-transparent | long helical spring, strongly dispersive | the "effect" becomes the instrument |
| transfer goal | flat, fast, colourless | frequency-dependent delay $\tau(\omega)\propto\omega^{-1/2}$ | chirped reverberant tail, acoustically generated |
| radiator | soundboard (rigid plate) | frame-drum membrane | low-impedance, room-immersive radiation |
| gesture→sound | direct, transparent (high liveness) | delayed, transformed (low liveness) | expressivity rises as causal legibility falls |

Görkem Şen's own description — springs that "co-exist and co-vibrate" and act "like a creation and annihilation operator in relation to each other" — names this coupling in the language of interconnection. Formally, the creation/annihilation image corresponds to the spring's role as a mode-redistributing transfer stage: energy injected at one frequency is not conserved at that frequency but spread across the dispersive band before radiation.

---

## MOAIE Reading

Vector: **[0.35, 0.75, 0.20, 0.60, 0.30]**, recursive = false.

**M = 0.35** — Materials (steel springs, strings, leather membranes, wood) are entirely conventional. Novelty is not in the substance but in the *role* assigned to the spring; M stays low because no new material class is introduced.

**O = 0.75** — The highest score. The bilateral string→spring→membrane cantilever is a genuinely new body topology with no clean Sachs–Hornbostel home. O carries the instrument's originality.

**A = 0.20** — Low. A single human performer drives everything manually; there is no algorithmic, autonomous, or distributed agency. The Yaybahar is agentially classical even as it is morphologically novel.

**I = 0.60** — Mid-high, and the interesting tension. The *gesture* (bowing, plucking) transfers directly from string practice (so sensorimotor transfer is high), yet the dispersive spring breaks the transparent gesture→sound link, raising interaction novelty. Familiar hands, unfamiliar consequence.

**E = 0.30** — The membranes radiate spatially and the long decay engages the room, but the room is not inside a feedback loop; E is radiation, not recursion. recursive = false.

Surprising profile: O ≫ M with low A. Most instruments with O this high reach it through new materials (high M) or machine agency (high A). The Yaybahar achieves topological novelty with neither — purely by re-purposing the coupling stage. This is its signature in the vector space.

---

## OPS Derivation

Base symbol: a long-necked bowed/plucked string (monochord / bağlama lineage), $S=[0.35,0.50,0.20,0.50,0.20]$.

```
Step 0  bowed long-string (baglama/monochord)   [0.35, 0.50, 0.20, 0.50, 0.20]  R=false  acoustic
Step 1  P4  morphological inversion              [0.35, 0.75, 0.20, 0.60, 0.20]  R=false
            keep the string-playing interface; replace the rigid bridge/soundboard
            coupling with a dispersive spring → membrane radiator
            (O: 0.50→0.75 new topology;  I: 0.50→0.60 coupling becomes non-transparent)
Step 2  P1  transpose radiator material           [0.35, 0.75, 0.20, 0.60, 0.30]  R=false
            soundboard → stretched membrane (E: 0.20→0.30 spatial radiation)
→ Yaybahar
```

```
P1(soundboard→membrane) ∘ P4(rigid bridge→dispersive spring) (bowed long-string) → Yaybahar
Grammar distance from bowed monochord / bağlama: 2 steps
Grammar distance from violin: 3 steps (add P1 on scale length)
```

Distance check (heuristic #6, ≥0.3 Euclidean from nearest canonical). Nearest canonical = bowed string / violin $[0.70,0.90,0.50,0.60,0.25]$:
$$
d=\sqrt{0.35^2+0.15^2+0.30^2+0.00^2+0.05^2}=\sqrt{0.2275}\approx 0.48 \;>\;0.30.\;\checkmark
$$
The instrument clears the speculative-distance threshold while remaining a physically instantiated (layer = acoustic) node — a real instrument that already sits in speculative-organology space. Per heuristic #5, its SH-null coupling stage is a thesis statement: the taxonomy has no slot for the element that defines the sound.

---

## Veo3 Brief

```
COMMON AESTHETICS: 35mm film grain (Kodak 5219), shallow depth of field T1.6,
dark near-black neutral background, desaturated cold palette with warm instrument-light
accents, hard directional light, no text, photorealistic documentary.

— PLANE A · General context —
A dim hall. A single performer stands at the centre of a long horizontal pole that
spans most of the frame, strings running its length, a low frame-drum at each far end.
The instrument is larger than the player. Stillness, then a slow bow stroke. Hold 4s.

— PLANE B · Interface macro —
Cut to the bowing hand against a string. T1.4 — rosin dust, the string biting, the
bow drawing a sustained tone. The gesture is unmistakably that of a string player.
What is in focus: the contact point and the faint tremor travelling away from it.

— PLANE C · Detail macro —
Cut to the coiled spring between string-end and drum head — the thing no conventional
instrument shows. The coil shivers; a single pluck races down it and the membrane
answers a beat late with a long descending metallic chirp. Hold on the vibrating coil.

Camera: slow push on A; locked tripod on B and C; hard cut between planes.
Sound design: bowed quasi-harmonic source → dispersive chirped reverberant tail
(high frequencies first, falling glide), membrane bloom radiating into the room,
no electronic processing audible. Attack soft, sustain long, release very long.
Duration: 12s total.
Tags: yaybahar, spring reverb, dispersive coupling, acoustic, membrane radiator, Görkem Şen
```

---

## Source statement (Görkem Şen, primary)

> "The uniqueness of yaybahar is based on the innovative bridging system made of springs between the body and strings of the instrument. The springs in the bridge system co-exist and co-vibrate with the strings and the membranes of the drums. […] Vibrations of the springs in the bridging system act like a creation and annihilation operator in relation to each other."

Sanatçı Görkem Şen'in icat ettiği, telli ve yaylı enstrümanların tınısını akustik olarak yeniden yorumlayan Yaybahar, alışılmadık rezonans yapısıyla meditatif ve dönüştürücü bir dinleme deneyimi sunar.

---

## References

```bibtex
@misc{sen2009yaybahar,
  author = {{\c{S}}en, G{\"o}rkem},
  title  = {Yaybahar — Patented Member of the Spring Family of Instruments},
  year   = {2009},
  note   = {Inventor statement and documentation, \url{https://www.gorkemsen.com/gorkem-sen-s-yaybahar}}
}

@book{fletcher1998physics,
  author    = {Fletcher, Neville H. and Rossing, Thomas D.},
  title     = {The Physics of Musical Instruments},
  edition   = {2},
  publisher = {Springer},
  year      = {1998},
  pages     = {39--85, 102--134},
  note      = {Ideal string wave equation; circular membrane Bessel modes — stages 1 and 3 of the cascade}
}

@article{bilbao2010spring,
  author  = {Bilbao, Stefan and Parker, Julian},
  title   = {A Virtual Model of Spring Reverberation},
  journal = {IEEE Transactions on Audio, Speech, and Language Processing},
  volume  = {18},
  number  = {4},
  pages   = {799--808},
  year    = {2010},
  note    = {Dispersive wave propagation in helical springs; basis for stage 2 chirp model}
}

@inproceedings{parker2009spring,
  author    = {Parker, Julian and Bilbao, Stefan},
  title     = {Spring Reverberation: A Physical Perspective},
  booktitle = {Proc. 12th Int. Conf. on Digital Audio Effects (DAFx-09)},
  address   = {Como, Italy},
  pages     = {1--4},
  year      = {2009},
  note      = {Group velocity v_g ∝ sqrt(omega); frequency-dependent delay tau(omega)}
}

@article{wittrick1966elastic,
  author  = {Wittrick, W. H.},
  title   = {On Elastic Wave Propagation in Helical Springs},
  journal = {International Journal of Mechanical Sciences},
  volume  = {8},
  number  = {1},
  pages   = {25--47},
  year    = {1966},
  note    = {Full longitudinal/torsional/transverse dispersion branches of a helical coil}
}
```

![](https://i.imgur.com/zERJ5Pi.png)
