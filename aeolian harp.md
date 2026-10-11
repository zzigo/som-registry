---
## CTX — MOAIE Instrument Node

# ── IDENTITY ──────────────────────────────────────────────────────────
id: aeolian-harp
title: Aeolian Harp
tags:
  - dss
  - instrument
  - speculative-organology
  - dss/case/instruments

# ── TAXONOMY ──────────────────────────────────────────────────────────
category: 2obj
type: instrument
kind: individual
corpus: case
origin: traditional
layer: acoustic           # fully physical and simulable (aeroacoustics + string)
abrev: AEOL
family: wind-excited chordophones / environmental (autoexcited) instruments
sachs-hornbostel: "314 (box zither) — but aeolian wind excitation of a chordophone has no SH provision; SH encodes wind-sounding only for aerophones, so this is a taxonomic anomaly: a blown chordophone"

# ── PEOPLE / META ─────────────────────────────────────────────────────
person: "[[Athanasius Kircher]]"
performers: ["[[the wind]]"]
authors: [traditional]
year: 1650
url: https://www.youtube.com/watch?v=M9kbedYM4GE
img: https://i.imgur.com/FzRcP9R.png
bib: "@book{kircher1650musurgia, author={Kircher, Athanasius}, title={Musurgia Universalis}, year={1650}, note={Early description of the aeolian harp; the instrument itself is older/traditional}}"

# ── GRAPH CONNECTIONS ─────────────────────────────────────────────────
hyper:
  - "[[speculative organology]]"
hypo: []
connect:
  - "[[karman vortex]]"
  - "[[aeolian tone]]"
  - "[[autoexcitation]]"
  - "[[environment-as-agent]]"
  - "[[string resonance]]"
  - "[[air]]"

# ── TOPOLOGY (2obj extension) ─────────────────────────────────────────
topology:
  shape: long wooden soundbox with strings stretched along it, all of similar length; placed in a window or aperture where wind crosses the strings
  dimensions: box ~0.8–1.5 m, sized to a window opening
  modes: string transverse modes excited selectively by wind speed via vortex lock-in
  modularity: false
  proportional_basis: strings of equal length/tension but differing diameter, so a given wind speed locks different harmonics on different strings
  setup: sited in a draught (window, doorway, outdoor frame); no tuning to a target pitch beyond stringing
  hold: not held and not played — the wind excites it
  posture: distributed — the instrument and the moving air; no performer present during sounding
  support_required: true
  weight_class: installation
  movement_during_play: none by any human; the sound follows the wind

# ── FABRICATION ───────────────────────────────────────────────────────
fabrication:
  method: acoustic
  material_refs: ["gut or wire strings", "wooden resonating box"]
  complexity: low
  files: []
  variants: ["window harp", "large outdoor / wind-pavilion harps"]

# ── MOAIE VECTOR ──────────────────────────────────────────────────────
moaie:
  M: "[[string]] · [[wooden box]] — conventional, not the locus of novelty"
  O: "[[box zither]] — simple equal-length string array on a resonator"
  A: "[[environment-as-agent]] — no human performer at sounding; the human only builds and sites it"
  I: "[[aeolian tone]] — contactless vortex-shedding excitation; no player gesture"
  E: "[[the wind]] — the environment IS the excitation source and the player; maximal"
  recursive: false
  vector: [0.30, 0.40, 0.15, 0.50, 1.00]
  # M=0.30  conventional strings + box
  # O=0.40  simple zither-like body
  # A=0.15  no performer agency; human sites it only (cf. Sitter-Space boundary-condition logic)
  # I=0.50  novel excitation mechanism, but no player-instrument interaction
  # E=1.00  environment maximal — wind is the excitation and the agent

# ── INTERFACE PROFILE (4int dimensions) ───────────────────────────────
interface_profile:
  affordance:          0.25   # affords siting, not playing — no obvious human play action
  liveness:            0.30   # no performer gesture; the live causation is wind→tone, not hand→tone
  playability:         0.15   # intended results are not producible; output is wind-dependent
  learnability:        0.20   # nothing to learn to "play"; one learns to build and site
  situatedness:        0.40   # deep cultural roots (Romantic, Kircher) but no transferable playing technique
  mediality:           0.10   # essentially no performer body involvement
  mapping:             0.10   # no gesture-to-sound mapping
  sensorimotor_scheme: 0.10   # no motor-scheme transfer
  ergonomics:          0.30   # trivial to site; human comfort not a design axis
  expressivity:        0.45   # evocative evolving overtone drone, but no human expressive control

status: draft
publish: true
modified: 2026-06-08
---

![](https://i.imgur.com/FzRcP9R.png)

## Organological Summary

The aeolian harp — described by Athanasius Kircher in his *Musurgia Universalis* (1650), though the instrument is older and traditional — is a stringed soundbox played by the wind. Strings of similar length and tension but varying diameter are stretched along a box and set in a draught; moving air sheds vortices off each string, and when the shedding rate matches a string's natural frequency the string resonates, producing a slowly shifting chord of overtones that rises and falls with the wind. Its constitutive property is that the agent and the environment are the same thing: there is no performer at the moment of sounding, only the wind, which both excites and "plays" the instrument. For speculative organology the aeolian harp is the limit case of the E dimension and a direct challenge to a performer-centred organology — it is a 1650 object that already occupies the speculative space's environmental extreme, and it forces the question of whether "agency" (A) and "environment" (E) are separable when the room is the player.

---

## Formal Structure

The aeolian harp couples an aeroacoustic source to a resonant string; the string acts as a sharply tuned filter that selects from a wind-driven excitation.

1. String (resonant filter). Each string is an ideal transverse oscillator
$$
f_n = \frac{n}{2L}\sqrt{\frac{T}{\mu}},\qquad n = 1,2,\dots
$$
with length $L$, tension $T$, linear density $\mu$.

2. Aeolian excitation (the wind). Air of speed $U$ flowing past a string of diameter $d$ sheds a Kármán vortex street, with alternating vortices exerting an oscillating transverse (lift) force at the Strouhal frequency
$$
f_s = \mathrm{St}\,\frac{U}{d},\qquad \mathrm{St}\approx 0.2 .
$$

3. Lock-in (mode selection). When the shedding frequency approaches a string mode, $f_s \approx f_n$, the fluid–structure system locks in and that mode is driven into audible resonance. Because $f_s \propto U$, rising wind sweeps the excitation upward through the harmonic series:
$$
n^{\*}(U) \;\approx\; \frac{2L\,\mathrm{St}\,U}{d}\Big/\!\sqrt{\tfrac{T}{\mu}} ,
$$
so increasing wind speed lights up successively higher partials — the characteristic ascending aeolian glissando. With equal $L,T$ but several diameters $d$, a single wind speed satisfies lock-in for different $n$ on different strings simultaneously, giving the instrument's shifting overtone chord.

4. The instrument as a wind-to-pitch transducer. The map is
$$
U \;\longrightarrow\; f_s = \mathrm{St}\,U/d \;\longrightarrow\; \text{nearest } f_n \;\longrightarrow\; \text{radiated tone},
$$
an open-loop chain in which the only "controller" is the weather. There is no feedback in the signal-chain sense (recursive = false); the nonlinearity is the lock-in resonance, not a closed loop.

---

## When the Environment Is the Agent

Every other instrument in the catalogue separates the agent (who acts) from the environment (where it acts). The aeolian harp collapses them.

| | violin | Spectral Parrot | Aeolian harp |
|---|---|---|---|
| who excites the string | human bow | motorised feedback + RL agent | the wind |
| where agency sits | performer (A≈0.5) | machine (A≈0.9) | environment (E=1.0, A→0) |
| human role at sounding | continuous control | curatorial | absent |
| controllability | high | indirect | none |

This is why I scored A low (0.15) and E maximal (1.0) rather than reading the wind as a high-A "agent." The choice follows the registry's own precedent: the Sitter-Space node sets E = 1.0 with A = 0.25 by treating the performer as a boundary condition and folding the active medium into E. The aeolian harp is the cleaner case — there is no performer at all — so A falls further and E saturates. The wind's agency is modelled as a property of the environment, not of an A-type agent.

That decision is also the node's contribution to the model: it shows that MOAIE's A and E are not always independent, and that the system needs an explicit convention for *environmental agency* — either (a) always absorb non-human, non-instrumental forcing into E (the choice made here), or (b) add a source-tag to A distinguishing human / machine / environmental agency. The aeolian harp is the test instrument for that convention.

---

## MOAIE Reading

Vector: **[0.30, 0.40, 0.15, 0.50, 1.00]**, recursive = false.

**M = 0.30** — Conventional strings and a wooden box. Material is not the point.

**O = 0.40** — A simple equal-length string array on a resonator; close to a zither. Topology is ordinary; the instrument's radicality is not in its body.

**A = 0.15** — Near the floor. No human performs it; the human only strings and sites it. Scored by the Sitter-Space boundary-condition convention, with the wind's agency assigned to E rather than A (see above).

**I = 0.50** — Mid. The *excitation mechanism* (contactless vortex lock-in) is genuinely novel, which lifts I off the floor, but there is no player-instrument interaction to speak of — the novelty is in how it is sounded, not in how it is played.

**E = 1.00** — Maximal and constitutive. The wind is the excitation, the controller, and the performer. This is the defining value and the reason the node exists in the catalogue.

Surprising profile: a 1650 instrument lands at Euclidean distance ≈ 1.05 from the violin — among the farthest in the catalogue — purely by saturating E and emptying A. Historical age and organological radicality are orthogonal: the speculative space already contained the aeolian harp three centuries before "speculative organology" had a name.

---

## OPS Derivation

Base symbol: a box zither — open strings plucked on a resonator, $S=[0.40,0.50,0.45,0.50,0.20]$.

```
Step 0  box zither (plucked)                    [0.40, 0.50, 0.45, 0.50, 0.20]  R=false  acoustic
Step 1  P2e  invert agent → environment          [0.30, 0.40, 0.15, 0.50, 1.00]  R=false
             remove the human performer; excitation supplied by aeolian vortex shedding;
             agency is relinquished to the wind and modelled as environment
             (A: 0.45→0.15;  E: 0.20→1.00;  M,O relax toward a bare string-box)
→ Aeolian Harp
```

```
P2e(invert agent → environmental wind) (box zither) → Aeolian Harp
Grammar distance from box zither: 1 step
Grammar distance from violin: 2 steps (violin → P1 simplify-to-zither → P2e environmental)
```

Distance check (heuristic #6). Nearest canonical = violin $[0.70,0.90,0.50,0.60,0.25]$:
$$
d=\sqrt{0.40^2+0.50^2+0.35^2+0.10^2+0.75^2}=\sqrt{1.105}\approx 1.05 \;\gg\;0.30.\;\checkmark
$$

OPS note. The standard P2 (invert agent) rewrites human → algorithmic/autonomous *machine*. The aeolian harp needs **P2e**, a variant whose new agent is the *environment* and whose effect is to drive E → 1.0 while collapsing A. The Spectral Parrot is P2 (machine); the aeolian harp is P2e (environment). Proposing P2e as a named production is this node's contribution to the OPS grammar — and it pairs with the A/E-independence question raised above.

---

## Veo3 Brief

```
COMMON AESTHETICS: 35mm film grain (Kodak 5219), shallow depth of field T1.6,
dark near-black neutral background, desaturated cold palette with warm instrument-light
accents, hard directional light, no text, photorealistic documentary.

— PLANE A · General context —
An open window at dusk. A long stringed box rests across the sill. No one is there. The
curtains stir; a low chord swells out of the strings on its own and fades as the air settles.
The room is empty and sounding. Hold 6s.

— PLANE B · Interface macro —
Cut to the strings in the draught. T1.4 — fine wires trembling, no hand near them, dust
moving in the light. What is in focus: a string vibrating with nothing touching it.

— PLANE C · Detail macro —
Cut to a single string edge against moving air. As the gust strengthens, the tone climbs
through its overtones — second, third, fourth partial — a glissando drawn by wind speed.
Hold as the pitch rises and slips back down.

Camera: locked tripod throughout; the only motion is air and string; slow cross-dissolves.
Sound design: pure-ish string partials drifting in and out, an ascending/descending overtone
chord tracking the wind, breath of air under it, no attack, no human sound.
Duration: 16s total.
Tags: aeolian harp, wind, Kármán vortex, environment-as-agent, autoexcitation, Kircher
```

---

## Existing context (preserved)

Described by Athanasius Kircher in 1650 (*Musurgia Universalis*). The instrument is named after Aeolus, keeper of the winds, and has older, traditional roots; it became emblematic in the Romantic period as an image of nature sounding itself.

---

## References

```bibtex
@book{kircher1650musurgia,
  author    = {Kircher, Athanasius},
  title     = {Musurgia Universalis},
  publisher = {Francesco Corbelletti},
  address   = {Rome},
  year      = {1650},
  note      = {Early description of the aeolian harp}
}

@article{strouhal1878tonerregung,
  author  = {Strouhal, Vincenc},
  title   = {{\"U}ber eine besondere Art der Tonerregung},
  journal = {Annalen der Physik und Chemie},
  volume  = {241},
  number  = {10},
  pages   = {216--251},
  year    = {1878},
  note    = {The Strouhal number: vortex-shedding frequency f_s = St·U/d}
}

@book{rayleigh1896theory,
  author    = {Strutt, John William (Lord Rayleigh)},
  title     = {The Theory of Sound, Vol. II},
  edition   = {2},
  publisher = {Macmillan},
  year      = {1896},
  note      = {Aeolian tones and vortex excitation of strings; lock-in resonance}
}

@book{fletcher1998physics,
  author    = {Fletcher, Neville H. and Rossing, Thomas D.},
  title     = {The Physics of Musical Instruments},
  edition   = {2},
  publisher = {Springer},
  year      = {1998},
  pages     = {39--58, 511--514},
  note      = {Ideal string modes; aeroacoustic (aeolian) excitation and the aeolian harp}
}
```
