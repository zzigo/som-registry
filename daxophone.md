---
## CTX — MOAIE Instrument Node

# ── IDENTITY ──────────────────────────────────────────────────────────
id: daxophone
title: Daxophone
tags:
  - dss
  - instrument
  - speculative-organology
  - dss/case/instruments/NewAcoustics
  - orq/perc

# ── TAXONOMY ──────────────────────────────────────────────────────────
category: 2obj
type: instrument
kind: individual
corpus: case
origin: contemporary
layer: acoustic           # physical, simulable; electroacoustic amplification stage
abrev: DAX
family: friction idiophone / bowed wooden lamella (electric, contact-mic amplified)
sachs-hornbostel: "132.1 (friction idiophone, after Reichel's own note) — but bowed-lamella excitation + contact-mic amplification + vocal-formant behaviour strain the idiophone class; the electric stage has no SH code"

# ── PEOPLE / META ─────────────────────────────────────────────────────
person: "[[Hans Reichel]]"
performers: ["[[Hans Reichel]]"]
authors: [Hans Reichel]
year: 1987
url: http://www.daxo.de/
img: https://i.imgur.com/rhOY556.png
bib: "@misc{reichel1987daxophone, author={Reichel, Hans}, title={The Daxophone}, year={1987}, note={daxo.de; first recorded use on the album The Dawn of Dachsman}}"

# ── GRAPH CONNECTIONS ─────────────────────────────────────────────────
hyper:
  - "[[speculative organology]]"
hypo: []
connect:
  - "[[friction excitation]]"
  - "[[cantilever oscillation]]"
  - "[[movable bridge]]"
  - "[[material-as-filter]]"
  - "[[contact microphone]]"
  - "[[formant]]"

# ── TOPOLOGY (2obj extension) ─────────────────────────────────────────
topology:
  shape: thin wooden tongue (~330×30×5 mm) clamped at one end to a block holding contact microphones; a separate hand-held wooden "dax" acts as a movable stop pressed against the free end
  dimensions: tongue ~330 mm long; dax ~150 mm long, ~50 mm tall
  modes: clamped cantilever bending modes (inharmonic); effective length and boundary set by dax position
  modularity: true            # interchangeable tongues (different woods / cut profiles)
  proportional_basis: tongue cut-profile and wood density set the modal/formant structure; dax position sets pitch (fretted side quantised on a logarithmic scale, unfretted side continuous)
  setup: tongue clamped to block on tripod or table; contact mics into amplifier
  hold: two hands — one draws a bow across the tongue edge, the other presses and slides the dax
  posture: seated or standing at the mounted block
  support_required: true
  weight_class: medium
  movement_during_play: bowing arm + continuous sliding/pressing of the dax along the tongue

# ── FABRICATION ───────────────────────────────────────────────────────
fabrication:
  method: hybrid            # acoustic body + electronic pickup
  material_refs: ["snakewood soundboard", "ebony / oak / light-wood tongues", "contact microphones", "rosined bow"]
  complexity: medium
  files: ["downloadable tongue templates (font format) from daxo.de"]
  variants: ["fretted dax side", "unfretted dax side", "tongue family (per-wood, per-shape)"]

# ── MOAIE VECTOR ──────────────────────────────────────────────────────
moaie:
  M: "[[material-as-filter]] — wood species + cut profile ARE the timbre/voice"
  O: "[[cantilever tongue]] + [[movable bridge]] — simple body, distinctive movable-stop"
  A: "[[two-handed performer]] — bow hand + dax hand; conventional human agency"
  I: "[[friction excitation]] + sliding stop — novel two-handed continuous-bridge coupling"
  E: "[[contact microphone]] → amplification — radiation electroacoustic, not recursive"
  recursive: false
  vector: [0.70, 0.55, 0.50, 0.70, 0.30]
  # M=0.70  wood species + cut profile determine the entire voice
  # O=0.55  simple cantilever body; movable dax is the topological twist
  # A=0.50  two-handed human performer, baseline agency
  # I=0.70  friction drive + sliding movable bridge — novel coupling
  # E=0.30  amplified radiation, room not in the loop

# ── INTERFACE PROFILE (4int dimensions) ───────────────────────────────
interface_profile:
  affordance:          0.35   # non-obvious — bow a wooden blade, press a sliding block
  liveness:            0.75   # friction and stop-position map audibly and directly to sound
  playability:         0.30   # notoriously hard to stabilise pitch; the instrument resists
  learnability:        0.30   # steep, idiosyncratic; little prior practice to lean on
  situatedness:        0.35   # niche free-improv / new-acoustics lineage; partial bow transfer
  mediality:           0.75   # whole-body, two hands, bowing + stopping
  mapping:             0.35   # pitch/timbre mapping highly nonlinear and shape-dependent
  sensorimotor_scheme: 0.45   # bowing scheme transfers; dax hand is a new scheme
  ergonomics:          0.45   # mounted, two-handed, seated; not portable in play
  expressivity:        0.90   # enormous vocal/animal timbral range — its signature

status: draft
publish: true
modified: 2026-06-08
---

![](https://i.imgur.com/rhOY556.png)

## Organological Summary

The daxophone (Hans Reichel, first recorded 1987) is a bowed wooden tongue: a thin cantilever blade clamped to an amplified block and excited by a rosined bow, while the other hand presses a separate wooden block — the *dax* — against the tongue to set its sounding length. Its constitutive property is that timbre is carved, not played: the species of wood and the cut profile of each interchangeable tongue fix an inharmonic modal series and a set of vocal formants, so the instrument's "voice" is fabricated into the material before any gesture occurs. The performer then drives that fixed spectral identity with friction and slides the dax to bend pitch continuously (or stops it on a logarithmically fretted edge). For speculative organology the daxophone enacts a sharp question about the M dimension: when the sound is determined chiefly by the *shape and substance of a passive blade* rather than by how it is excited, the instrument argues that material design — not excitation or resonance — is the primary site of organological authorship.

---

## Formal Structure

The daxophone is a friction-driven cantilever beam whose boundary is movable, read out electroacoustically.

1. Tongue (resonator, inharmonic). The wooden tongue is a thin beam governed by the Euler–Bernoulli equation
$$
\rho A\,\partial_{tt} y + EI\,\partial_{xxxx} y = 0 ,
$$
with density $\rho$, cross-section $A$, Young's modulus $E$, second moment $I$. For a clamped–free beam of length $L$ the modal frequencies are
$$
f_n = \frac{(\beta_n L)^2}{2\pi L^2}\sqrt{\frac{EI}{\rho A}},\qquad
\beta_n L = 1.875,\ 4.694,\ 7.855,\ \dots
$$
The ratios $f_2{:}f_1 \approx 6.27$, $f_3{:}f_1 \approx 17.5$ are strongly inharmonic — the physical root of the daxophone's non-pitched, speech-like quality. A non-uniform cut profile $A(x)$, $I(x)$ shifts these ratios and weights radiated partials, which is how each tongue shape encodes a distinct formant signature.

2. Dax (movable boundary). Pressing the dax at position $x = \ell$ converts the free end into a stopped boundary, replacing $L$ by an effective length $\ell$ and changing the modal set:
$$
f_n(\ell) \propto \frac{1}{\ell^{2}} .
$$
Sliding $\ell$ continuously sweeps pitch (glissando); the fretted dax edge quantises $\ell$ onto a logarithmic scale. The $1/\ell^2$ law (versus the string's $1/\ell$) makes the daxophone's pitch map with bending stiffness, not tension.

3. Bow (friction drive). The bow imposes a stick–slip friction force with velocity-dependent coefficient $\mu(v_{\text{rel}})$ at the contact point, sustaining self-oscillation by pumping energy into the beam's bending modes — the same nonlinear mechanism as the bowed string, applied to a stiff inharmonic bar.

4. Pickup (electroacoustic read-out). A small wooden tongue radiates weakly; contact microphones on the snakewood soundboard sense bending strain and feed an amplifier. The instrument is constitutively electroacoustic — the body is a transducer, not a radiator.

Cascade. Radiated pressure follows
$$
H(\omega)=\underbrace{H_{\text{bow}}(\omega)}_{\text{friction drive}}\;
\underbrace{H_{\text{tongue}}(\omega;\,\text{shape},\ell)}_{\text{inharmonic + formant filter}}\;
\underbrace{H_{\text{pickup}}(\omega)}_{\text{contact-mic + amp}} .
$$
The instrument's identity sits in the middle factor, and that factor is set by woodworking — the parameter the luthier carves rather than the gesture the player makes.

---

## Material as Authored Voice

The daxophone inverts the usual division of labour between maker and player. In a violin the maker fixes the resonant body once; pitch and most timbral nuance are then the player's continuous responsibility. In the daxophone the *spectral identity itself* is selected by swapping a carved tongue, and the player inherits it.

| dimension | violin | daxophone | consequence |
|---|---|---|---|
| where timbre is fixed | maker (body), once | maker (tongue shape + wood), per swappable tongue | timbre becomes a chosen, modular asset |
| pitch law | string, $f \propto 1/\ell$ (tension) | beam, $f \propto 1/\ell^{2}$ (stiffness) | bending pitch is non-linear in stop position |
| harmonicity | near-harmonic (Helmholtz) | strongly inharmonic (beam modes) | speech/animal timbre instead of stable pitch |
| radiation | acoustic body | contact-mic + amplifier | small passive blade, electroacoustic voice |

Reichel — a typeface designer by his other profession — distributed proven tongue shapes as a downloadable *font*. The analogy is exact: a tongue profile is a glyph, a carved letterform whose geometry is the meaning. The daxophone is thus an instrument whose "score" partly lives in its parts catalogue.

---

## MOAIE Reading

Vector: **[0.70, 0.55, 0.50, 0.70, 0.30]**, recursive = false.

**M = 0.70** — The defining score, and the point of the node. Wood species and cut profile set the inharmonic series and formants; the same gesture on a different tongue is a different instrument. M here means material *determinacy*, matching the violin's 0.70 and Cicada's material-as-filter logic — but the daxophone pushes determinacy onto an interchangeable, authored part.

**O = 0.55** — Moderate. The body is a simple clamped blade; topological interest is concentrated in the one device that is unusual — the hand-held movable dax. Below the violin's refined 0.90.

**A = 0.50** — Baseline human agency, like the violin, but split across two asymmetric hands (bow vs dax). No autonomy or distribution; agency is classical, just doubled.

**I = 0.70** — Above the violin (0.60). Two coupled, dissimilar gestures — a friction drive and a continuously sliding stop — form a coupling with no standard analogue. The instrument's difficulty and its expressivity both live here.

**E = 0.30** — Amplified radiation; the room is not in a feedback loop. Near the violin's E-floor. recursive = false.

Surprising profile: highest where the violin is high (M) but for the opposite reason — not centuries of body refinement but the displacement of timbral authorship into a swappable carved part. The daxophone and Yaybahar are near-mirror cases: Yaybahar's novelty is the coupling stage (O, I); the daxophone's is the material stage (M).

---

## OPS Derivation

Base symbol: a bowed flexible bar (musical saw) — a friction idiophone with continuous, stiffness-controlled pitch, $S=[0.50,0.40,0.50,0.55,0.25]$.

```
Step 0  bowed flexible bar (musical saw)        [0.50, 0.40, 0.50, 0.55, 0.25]  R=false  acoustic
Step 1  P1  transpose material                  [0.70, 0.45, 0.50, 0.55, 0.25]  R=false
            metal blade → shaped wooden tongue; cut profile encodes inharmonic + formant set
            (M: 0.50→0.70)
Step 2  P4  morphological inversion              [0.70, 0.55, 0.50, 0.70, 0.25]  R=false
            add the hand-held dax as a movable stop → two-handed variable-bridge coupling
            (O: 0.45→0.55;  I: 0.55→0.70)
Step 3  P1  transpose radiator                   [0.70, 0.55, 0.50, 0.70, 0.30]  R=false
            acoustic radiation → contact-mic + amplifier (E: 0.25→0.30)
→ Daxophone
```

```
P1(amplify) ∘ P4(add movable dax) ∘ P1(metal→shaped wood) (bowed bar) → Daxophone
Grammar distance from bowed bar / musical saw: 3 steps
Grammar distance from violin: 4 steps
```

Distance check (heuristic #6, ≥0.3 Euclidean from nearest canonical). Nearest canonical = bowed string / violin $[0.70,0.90,0.50,0.60,0.25]$:
$$
d=\sqrt{0.00^2+0.35^2+0.00^2+0.10^2+0.05^2}=\sqrt{0.135}\approx 0.37 \;>\;0.30.\;\checkmark
$$
The whole distance is carried by O (simpler body) and I (stranger coupling) — the daxophone is a violin-adjacent vector whose divergence is morphological and interactional, not material. Per heuristic #5, its SH placement (Reichel's 132.1) understates it: a bowed lamella that produces vocal formants and reads out through a pickup sits across the idiophone class and outside the taxonomy's electric blind spot.

---

## Veo3 Brief

```
COMMON AESTHETICS: 35mm film grain (Kodak 5219), shallow depth of field T1.6,
dark near-black neutral background, desaturated cold palette with warm instrument-light
accents, hard directional light, no text, photorealistic documentary.

— PLANE A · General context —
A seated player at a small mounted block on a tripod, a slim wooden blade rising from it.
One hand holds a bow, the other a curved wooden block. Quiet, intent posture. The thing
looks like a tool, not an instrument. A first bow stroke draws a voice-like cry. Hold 4s.

— PLANE B · Interface macro —
Cut to the two hands. T1.4 — the bow biting the edge of the tongue while the other hand
presses and slides the dax along it. What is in focus: the contact point and the dax
sliding, pitch bending under it like a throat.

— PLANE C · Detail macro —
Cut to the carved profile of the tongue itself — the cut silhouette of the wood, grain
and edge. The blade shivers; as the dax moves, the timbre morphs from animal growl to
near-speech. Hold on the vibrating carved edge.

Camera: slow push on A; locked tripod on B and C; hard cut between planes.
Sound design: bowed stick-slip friction → strongly inharmonic, formant-rich, speech/animal
timbres; continuous glissando under the moving stop; amplified, close, dry.
Attack scraped, sustain vocal, release short.
Duration: 12s total.
Tags: daxophone, Hans Reichel, friction idiophone, bowed tongue, formant, movable bridge
```

---

## Existing context (preserved)

The *dax* in *daxophone* derives from the German *Dachs* ("badger"), referencing the animal sounds the instrument generates, altered to *dax* so the name echoes Adolphe Sax's saxophone. First musical use: Hans Reichel's album *The Dawn of Dachsman* (1987).

Construction: a wooden tongue (~330 × 30 × 5 mm) fixed to a block holding one or more contact microphones; the block has a chiselled cavity and a snakewood soundboard with the mics glued to it. Timbre depends on tongue shape and wood (denser woods — ebony, oak — sound mellower than light woods). The *dax* (~150 × 50 mm, curved both sides) sets pitch: one edge fretted on a logarithmic succession, the other unfretted and cardboard-faced for a mellower sound. Reichel published downloadable plans and a library of proven tongue shapes distributed as a font.

---

## References

```bibtex
@misc{reichel_daxophone,
  author = {Reichel, Hans},
  title  = {The Daxophone — construction plans and tongue shapes},
  howpublished = {\url{http://www.daxo.de/}},
  year   = {1987},
  note   = {First recorded use on the album The Dawn of Dachsman (1987)}
}

@book{fletcher1998physics,
  author    = {Fletcher, Neville H. and Rossing, Thomas D.},
  title     = {The Physics of Musical Instruments},
  edition   = {2},
  publisher = {Springer},
  year      = {1998},
  pages     = {55--64, 277--287},
  note      = {Transverse vibration of bars (clamped-free beam modes, inharmonic series); friction excitation}
}

@book{graff1975wave,
  author    = {Graff, Karl F.},
  title     = {Wave Motion in Elastic Solids},
  publisher = {Dover Publications},
  year      = {1975},
  pages     = {140--180},
  note      = {Euler-Bernoulli beam equation and eigenvalues — basis for tongue modal model}
}

@article{mcintyre1983oscillations,
  author  = {McIntyre, M. E. and Schumacher, R. T. and Woodhouse, J.},
  title   = {On the Oscillations of Musical Instruments},
  journal = {Journal of the Acoustical Society of America},
  volume  = {74},
  number  = {5},
  pages   = {1325--1345},
  year    = {1983},
  note    = {Nonlinear friction / stick-slip self-oscillation — bow drive applied to the tongue}
}
```
