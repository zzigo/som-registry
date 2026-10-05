---
## CTX — MOAIE Instrument Node

# ── IDENTITY ──────────────────────────────────────────────────────────
id: spectral-parrot
title: The Spectral Parrot
title_es: Spectral Parrot
tags:
  - dss
  - instrument
  - speculative-organology
  - dss/case/instruments/AI-based
  - dss/feedback

# ── TAXONOMY ──────────────────────────────────────────────────────────
category: 3syst           # 1obj / 2obj / 3syst / 4fict — cybernetic learning system
type: instrument
layer: ontological        # validated relationally (agency, learning behaviour), though physically acoustic
abrev: SPRL
family: feedback instruments / self-tuning string arrays / reinforcement-learning instruments
sachs-hornbostel: "314/321 string base, but motorised self-actuation + a reinforcement-learning controller are SH-null; closest electro/robotic tag 318.9"

# ── PEOPLE / META ─────────────────────────────────────────────────────
person: "[[Adam Pultz Melbye]]"
performers: ["[[Adam Pultz Melbye]]"]
authors: [Adam Pultz Melbye]
year: 2025
url: https://www.adampultz.com/spectralparrot
img: https://i.imgur.com/KVfV2EM.png
bib: "@misc{melbye2025parrot, author={Melbye, Adam Pultz}, title={The Spectral Parrot}, year={2025}, note={Debut Radialsystem Berlin, 15 Nov 2025; code at github.com/Adampultz/spectral-parrot}}"

# ── GRAPH CONNECTIONS ─────────────────────────────────────────────────
hyper:
  - "[[speculative organology]]"
hypo: []
connect:
  - "[[string feedback]]"
  - "[[distributed agency]]"
  - "[[reinforcement learning]]"
  - "[[co-performer]]"
  - "[[oracle]]"
  - "[[motorised tuner]]"

# ── TOPOLOGY (2obj extension) ─────────────────────────────────────────
topology:
  shape: 8-string resonator, each string terminated by a motorised tuning peg; transducers sustain the strings in acoustic/electromechanical feedback
  dimensions: instrument-scale resonator (custom build)
  modes: 8 controllable string fundamentals + feedback partials; configuration state is the 8-vector of tunings
  modularity: true
  proportional_basis: per-string tension set by motor position; the agent searches tuning space to match a target spectrum
  setup: instrument on stand; motor controller + audio I/O + RL process running; target audio supplied
  hold: not held — the system actuates itself; the human presents target sound and performs alongside
  posture: distributed — performer + autonomous instrument
  support_required: true
  weight_class: installation
  movement_during_play: the instrument's strings retune autonomously (motors turning); the human listens, presents sound, and improvises with it

# ── FABRICATION ───────────────────────────────────────────────────────
fabrication:
  method: robotic            # acoustic strings + motorised actuation + electronic/AI control
  material_refs: ["steel strings", "motorised tuners", "transducers / pickups", "resonator body"]
  complexity: high
  files: ["https://github.com/Adampultz/spectral-parrot"]
  variants: ["STIP-4 residency build 2024–2025", "Radialsystem debut configuration 2025"]

# ── MOAIE VECTOR ──────────────────────────────────────────────────────
moaie:
  M: "[[steel string]] · [[motorised tuner]] — conventional materials, not the locus of novelty"
  O: "[[self-tuning string array]] — 8 motor-tuned feedback strings; state is an 8-vector of tunings"
  A: "[[reinforcement learning]] agent (PPO actor-critic) — autonomous, learning, self-actuating"
  I: "agent listens to a target spectrum and acts (retunes) to approximate it; human co-performs / curates"
  E: "[[target spectrum]] / room sound IS the reward signal — environment is inside the learning loop"
  recursive: true
  vector: [0.35, 0.60, 0.90, 0.85, 0.70]
  # M=0.35  conventional strings + motors
  # O=0.60  novel self-tuning 8-string feedback array
  # A=0.90  autonomous deep-RL agent is the defining feature
  # I=0.85  perception→action loop; human role is curatorial/improvisatory
  # E=0.70  the sounding environment is the training target / reward

# ── INTERFACE PROFILE (4int dimensions) ───────────────────────────────
interface_profile:
  affordance:          0.30   # not "played" in the usual sense — sound is presented, the system self-tunes
  liveness:            0.30   # gesture→sound mediated by a slow learning agent; causality opaque in the moment
  playability:         0.25   # no direct control; autonomous and very slow
  learnability:        0.35   # the instrument learns; the human relationship is curatorial, not skill-acquired
  situatedness:        0.20   # no prior practice transfers; a new paradigm
  mediality:           0.25   # minimal performer-body involvement; listening/curating role
  mapping:             0.20   # human gesture → sound mapping is essentially absent / opaque (RL policy)
  sensorimotor_scheme: 0.15   # no motor-scheme transfer
  ergonomics:          0.40   # installation-style; human comfort not the design axis
  expressivity:        0.60   # rich emergent, failing, evolving behaviour — but the system's, not the player's

status: draft
publish: true
modified: 2026-06-08
---
<!--lang:en-->

![](https://i.imgur.com/KVfV2EM.png)

## Organological Summary

The Spectral Parrot (Adam Pultz Melbye, debut Radialsystem Berlin, 15 November 2025) is an eight-string self-actuating feedback instrument whose tuning pegs are motorised and driven by a deep reinforcement-learning agent. The agent — a proximal-policy-optimisation (PPO) actor-critic — listens to a target audio spectrum and turns the motors to retune the strings until the instrument's own feedback spectrum approximates the target. Its constitutive property is that the learning happens in physical time: because motors take time to turn and sound takes time to manifest in the room, the agent cannot be accelerated on GPUs, so it may need 20–40 hours to approximate even a single static spectrum, and it fails conspicuously in early training. The instrument is named after Bender et al.'s "stochastic parrots," and it literally parrots spectra rather than tokens. For speculative organology it is a limit case on the A and E dimensions: the player is not the source of agency but its curator, and the room's sound is not context but the reward signal — the instrument argues that an organology built only around human performers cannot describe a machine that learns its own technique by listening.

---

## Formal Structure

The Spectral Parrot is a controller coupled to an acoustic plant: an RL agent acting on a physical, feedback-sustained string array.

1. Acoustic plant (the strings). Each string $i$ is held in self-oscillation by transducer feedback and tuned by a motor that sets its tension $T_i$, so its fundamental is
$$
f_i = \frac{1}{2L}\sqrt{\frac{T_i}{\mu}} ,
$$
and the instrument's radiated spectrum $S_\theta(\omega)$ is the superposition of the eight strings' feedback partials. The configuration is an 8-vector of tunings $\mathbf{T}=(T_1,\dots,T_8)$ — the plant's controllable state.

2. The agent (PPO). The control problem is a Markov decision process: state $s_t$ encodes the current produced spectrum (and target), action $a_t$ is a set of motor increments $\Delta\mathbf{T}$, and the reward penalises spectral distance to the target $S^\*$,
$$
r_t = -\,\mathcal{D}\!\left(S_{\theta}(\cdot\,;\mathbf{T}_t),\ S^{\*}\right),
$$
with $\mathcal{D}$ a spectral distance (e.g. log-magnitude STFT). PPO is an actor-critic method: the actor $\pi_\phi(a\mid s)$ proposes tunings, the critic $V_\psi(s)$ estimates value, and the policy is updated by the clipped surrogate objective
$$
L^{\text{CLIP}}(\phi)=\mathbb{E}_t\!\left[\min\!\big(\rho_t(\phi)\,\hat A_t,\ \operatorname{clip}(\rho_t(\phi),\,1-\epsilon,\,1+\epsilon)\,\hat A_t\big)\right],
\quad \rho_t(\phi)=\frac{\pi_\phi(a_t\mid s_t)}{\pi_{\phi_{\text{old}}}(a_t\mid s_t)},
$$
where $\hat A_t$ is the advantage. The clip term is the safeguard against destabilising policy jumps that Melbye cites.

3. Embodiment as rate limit. The MDP step duration is bounded below by motor slew time $\tau_{\text{motor}}$ and acoustic settling time $\tau_{\text{ac}}$:
$$
\Delta t_{\text{step}} \ge \tau_{\text{motor}} + \tau_{\text{ac}} .
$$
Total wall-clock learning time is $N_{\text{steps}}\,\Delta t_{\text{step}}$ and cannot be parallelised away, since each sample requires a real string to be physically retuned and actually sounded. This single inequality is the instrument's thesis: it is not less data-efficient than a GPU cluster, only un-accelerable.

So the instrument is the loop
$$
\text{target }S^{\*}\ \rightarrow\ \text{agent }\pi_\phi\ \rightarrow\ \text{motors }\Delta\mathbf{T}\ \rightarrow\ \text{strings }S_\theta\ \rightarrow\ \text{microphone}\ \rightarrow\ \text{reward}\ \rightarrow\ \text{agent},
$$
closed through physical sound rather than simulation. recursive = true.

---

## Learning in Physical Time

The Spectral Parrot makes a critique structural rather than rhetorical. Large models are trained in a "purely digital space scaffolded by thousands of GPUs," collapsing months of experience into hours. The Parrot reinstates the body's clock.

| dimension | accelerated ML (GPU training) | Spectral Parrot (embodied training) | consequence |
|---|---|---|---|
| time base | virtual, parallelised | physical motor + acoustic time | learning cannot be sped up |
| sample cost | a forward/backward pass | a string physically retuned and sounded | each datum is an event in a room |
| failure | hidden in logs | audible, on stage, in early training | failure becomes the performance |
| reward | scalar loss | spectral distance to a live target | the room is the objective function |

The name fixes the reference: against the "stochastic parrot" that recombines tokens with no access to meaning, the *spectral* parrot mimics sound with no access to a score, and does so slowly enough that the mimicry is visibly a struggle. The aesthetic object is the learning curve itself.

---

## MOAIE Reading

Vector: **[0.35, 0.60, 0.90, 0.85, 0.70]**, recursive = true.

**M = 0.35** — Conventional: steel strings, motors, transducers. Material is not where the novelty lives, so M stays low — the inverse of the daxophone.

**O = 0.60** — A genuinely new object: eight feedback strings each under motorised control, whose state is an 8-vector of tunings. Moderate — the body is a means, not the message.

**A = 0.90** — The defining score and the highest among the physically real (non-fictional) instruments in the registry. A PPO agent autonomously controls the instrument and improves by learning; the human supplies targets and plays alongside. Agency has migrated into the instrument. Compare OntoSonic Matrix (A = 0.90) — but here the agency is an explicit, inspectable RL policy.

**I = 0.85** — Perception-to-action: the instrument senses a spectrum and acts to match it. The human interaction is curatorial and improvisatory rather than gestural, which is precisely the novelty.

**E = 0.70** — High and constitutive. The sounding environment is not context but the reward signal; the target spectrum and the room's acoustics are inside the learning loop. With recursive = true this places the Parrot firmly in the feedback cluster.

Surprising profile: A and I dominate while M sits low and E is high — a vector almost orthogonal to the daxophone's (high M, low A). The two nodes bracket the catalogue: timbre-authored-in-matter versus technique-learned-by-machine.

---

## OPS Derivation

Base symbol: a feedback string instrument — a self-oscillating, hand-tuned string array (Melbye's own Feedback-Actuated Augmented Bass lineage), $S=[0.35,0.55,0.50,0.70,0.60]$, R = true.

```
Step 0  feedback string array (hand-tuned)      [0.35, 0.55, 0.50, 0.70, 0.60]  R=true   acoustic
Step 1  P2  invert agent                         [0.35, 0.60, 0.90, 0.85, 0.70]  R=true   ontological
            replace the human tuner with motorised tuners + a PPO reinforcement-learning
            controller; the instrument becomes a self-actuating learning agent
            (A: 0.50→0.90;  I: 0.70→0.85;  E: 0.60→0.70;  layer → ontological)
→ The Spectral Parrot
```

```
P2(invert agent → PPO controller) (feedback string array) → Spectral Parrot
Grammar distance from a feedback string instrument: 1 step (single but radical P2)
Grammar distance from violin: 2 steps  (violin → P3 close-the-loop → P2 invert-agent)
```

Distance check (heuristic #6). Nearest canonical = violin $[0.70,0.90,0.50,0.60,0.25]$:
$$
d=\sqrt{0.35^2+0.30^2+0.40^2+0.25^2+0.45^2}=\sqrt{0.6375}\approx 0.80 \;\gg\;0.30.\;\checkmark
$$
Among the largest distances from any canonical primitive in the catalogue — consistent with an instrument whose agency, interaction and environment dimensions are all radically displaced. Per heuristic #4, recursive = true demands a stability story; here PPO's clipped objective is exactly that control-stability vocabulary, made the artistic subject.

---

## Veo3 Brief

```
COMMON AESTHETICS: 35mm film grain (Kodak 5219), shallow depth of field T1.6,
dark near-black neutral background, desaturated cold palette with warm instrument-light
accents, hard directional light, no text, photorealistic documentary.

— PLANE A · General context —
A dim stage. An eight-string instrument stands alone on a frame, no hands on it. A person
sits to the side, listening. The strings sound on their own — a slow, searching chord that
keeps re-tuning itself. Nothing is being "played." Hold 5s.

— PLANE B · Interface macro —
Cut to a single motorised tuning peg. T1.4 — the small motor turning the peg a few degrees,
the string pitch sliding, a faint whine of the gear. What is in focus: a machine adjusting a
string the way a hand would, but deciding for itself.

— PLANE C · Detail macro —
Cut to all eight pegs in series, each twitching at different moments as the system searches.
The composite tone drifts toward a target, overshoots, corrects — a chord learning to be a
chord. Hold on the cluster of turning motors.

Camera: slow push on A; locked tripod on B and C; hard cut between planes.
Sound design: eight feedback-sustained strings, microtonal drift and re-tuning, occasional
spectacular mistuning; no human attack; an evolving, self-correcting drone.
Duration: 14s total.
Tags: spectral parrot, Adam Pultz Melbye, feedback, reinforcement learning, self-tuning, agency
```

---

## Source note (Recent Sources, 2025)

Primary facts (8 strings, motorised tuners, PPO deep-RL controller, embodied/slow learning, debut Radialsystem 15 Nov 2025, named after "stochastic parrots") are from Melbye's project page and code repository, retrieved June 2026. The reinforcement-learning and string-acoustics formalism is standard (Training Data).

---

## References

```bibtex
@misc{melbye2025spectralparrot,
  author = {Melbye, Adam Pultz},
  title  = {The Spectral Parrot},
  year   = {2025},
  howpublished = {\url{https://www.adampultz.com/spectralparrot}},
  note   = {Self-actuating 8-string feedback instrument; debut Radialsystem Berlin, 15 Nov 2025; code: \url{https://github.com/Adampultz/spectral-parrot}}
}

@inproceedings{bender2021parrots,
  author    = {Bender, Emily M. and Gebru, Timnit and McMillan-Major, Angelina and Shmitchell, Shmargaret},
  title     = {On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?},
  booktitle = {Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency (FAccT '21)},
  pages     = {610--623},
  year      = {2021},
  note      = {Source of the instrument's name; critique of scale-as-understanding}
}

@article{schulman2017ppo,
  author  = {Schulman, John and Wolski, Filip and Dhariwal, Prafulla and Radford, Alec and Klimov, Oleg},
  title   = {Proximal Policy Optimization Algorithms},
  journal = {arXiv preprint arXiv:1707.06347},
  year    = {2017},
  note    = {The PPO clipped-objective actor-critic method driving the tuners}
}

@book{sutton2018reinforcement,
  author    = {Sutton, Richard S. and Barto, Andrew G.},
  title     = {Reinforcement Learning: An Introduction},
  edition   = {2},
  publisher = {MIT Press},
  year      = {2018},
  note      = {MDP / agent-environment loop underlying the control formalism}
}

@inproceedings{melbye2020faab,
  author    = {Melbye, Adam Pultz and {\'U}lfarsson, Halld{\'o}r},
  title     = {Sculpting the Behaviour of the Feedback-Actuated Augmented Bass},
  booktitle = {Proceedings of the International Conference on New Interfaces for Musical Expression (NIME)},
  year      = {2020},
  note      = {Feedback-string lineage and base instrument for the OPS derivation}
}
```
<!--/lang-->

<!--lang:es-->
El Spectral Parrot es un instrumento autoaccionado (con retroalimentación) de ocho cuerdas, cada una de las cuales está controlada por un afinador motorizado. Los motores están controlados por un [[deep reinforcement learning algorithm |algoritmo de aprendizaje profundo]] por refuerzo que aprende a afinar las cuerdas del instrumento para aproximarse a un espectro de audio objetivo.

Muchas redes de aprendizaje profundo se entrenan previamente antes de ser puestas en práctica. Este entrenamiento suele realizarse (al menos en el caso de los grandes modelos de lenguaje y los generadores de imágenes con los que muchos están familiarizados) en un espacio puramente digital y se apoya en miles de potentes GPU, lo que significa que el tiempo de entrenamiento se acelera a velocidades extremas. Por el contrario, dado que el Parrot está limitado por su realidad física —los motores tardan en girar y el sonido acústico tarda en manifestarse—, el aprendizaje es muy lento. Una estimación ambiciosa es que le tomaría entre 20 y 40 horas aprender a aproximar incluso un solo sonido estático. Cuánto le tomaría aprender a modelar un espectro que cambia dinámicamente es una pregunta sin respuesta.

Es importante destacar que el Parrot no es necesariamente menos eficiente que las infraestructuras de entrenamiento acelerado, simplemente es más lento.

<iframe title="On the Learning of Spectral Parrots (excerpt)" height="240" width="426" src="https://player.vimeo.com/video/1160167959?h=ab6f3ae002&amp;app_id=122963" allowfullscreen="" allow="fullscreen" style="aspect-ratio: 1.775 / 1; width: 100%; height: 100%;"></iframe>
<!--/lang-->
