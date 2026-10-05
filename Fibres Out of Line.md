---
## CTX — MOAIE Instrument Node

# ── IDENTITY ──────────────────────────────────────────────────────────
id: fibres_out_of_line
title: Fibres Out of Line
tags:
  - dss
  - dss/case/instruments
  - dss/case/instruments/robotic
  - dss/case/automats
  - instrument
  - robotic-agent
  - networked-performance
  - rhythm

# ── TAXONOMY ──────────────────────────────────────────────────────────
category: 2obj
type: instrument
layer: acoustic

abrev: FOL
family: robotic percussion / autonomous musical agents (networked installation-performance)
sachs-hornbostel: "outside standard H-S — electroacoustic robotic percussion agents (tapping idiophones, 111.2) under autonomous AI control"

# ── PEOPLE / META ─────────────────────────────────────────────────────
person: "Michael Krzyżaniak (lead, Dr. Squiggles)"
performers:
  - "Jennifer Gerry — dancer (remote, California)"
authors:
  - "Michael Krzyżaniak"
  - "Jennifer Gerry"
  - "Dongho Kwak"
  - "Çağrı Erdem"
  - "Qichao Lan"
  - "Kyrre Glette"
  - "Alexander Refsum Jensenius"
year: 2021
url: 
- "https://www.uio.no/ritmo/english/news-and-events/events/conferences/2021/RPPW/performances/dr-squiggles/"
- "https://www.uio.no/ritmo/english/projects/dr-squiggles/"
img: https://i.imgur.com/UhOAeAw.png
bib: "Krzyżaniak, Michael et al. 2021. Fibres Out of Line (Dr. Squiggles). RITMO Centre, University of Oslo; performed at RPPW 2021."

def: "Networked interactive installation-performance by RITMO (Univ. of Oslo): eight autonomous Dr. Squiggles rhythm robots (octopus-like, knitted) plus two software agents that listen to rhythm and play along, improvising in real time over Zoom with a remote dancer in California."

# ── GRAPH CONNECTIONS ─────────────────────────────────────────────────
hyper:
  - "[[robotic instrument]]"
  - "[[autonomous musical agent]]"
hypo:
  - "[[Dr. Squiggles]]"
connect:
  - "[[RITMO]]"
  - "[[Jim Tørresen]]"
  - "[[rhythm-perception]]"
  - "[[onset-detection]]"
  - "[[call-and-response]]"
  - "[[networked-performance]]"
  - "[[telematic-music]]"
  - "[[toward agentic music]]"

# ── TOPOLOGY (2obj extension) ─────────────────────────────────────────
topology:
  shape: "eight octopus-like robots (3D-printed core + soft knitted balaclava, blinking eye), each with tapping tentacle-arms striking acoustic surfaces; plus two loudspeaker-driven software agents"
  dimensions: "tabletop-scale robots; distributed across an Oslo room + one remote dancer node in California"
  modes: 8
  modularity: true
  proportional_basis: "rhythmic interaction (onset timing, beat induction) — temporal, not pitch-geometric"
  setup: table
  hold: hands-free
  posture: any
  support_required: true
  weight_class: light
  movement_during_play: "robots stationary, tentacles actuate; human dancer fully mobile (remote)"

# ── FABRICATION ───────────────────────────────────────────────────────
fabrication:
  method: hybrid
  pipeline: "3D-printed bodies + textile (knitted) covers + solenoid/servo tappers + microphone input + onboard rhythm-listening software; networked over Zoom for telematic performance"
  material_refs:
    - "[[3d-printed-shell]]"
    - "[[knitted-textile]]"
    - "[[solenoid-actuator]]"
  complexity: high
  notes: "Design intentionally cute/fluffy (octopus + balaclava, blinking eye) to make the autonomous agent legible and approachable."
  files: []

# ── MOAIE VECTOR ──────────────────────────────────────────────────────
moaie:
  M: "[[knitted-textile]] + [[3d-printed-shell]]"
  O: "[[robotic-octopus-array]]"
  A: "[[autonomous-rhythm-agent]] + [[software-agent]] + [[remote-human-dancer]]"
  I: "[[rhythm-listening]] + [[percussive-tapping]] + [[networked-call-response]]"
  E: "[[telematic-distributed-environment]]"
  recursive: true
  vector: [0.55, 0.6, 0.95, 0.85, 0.9]
  # M=0.55 expressive craft materials (textile + print) chosen for approachability
  # O=0.6 novel robotic-array object, modular and replicated (×8) rather than singular
  # A=0.95 the defining axis: robots autonomously listen, infer beat, and play along — co-constitutive agency, plus software agents and a human dancer
  # I=0.85 onset-detection listening + percussive output in a closed call-and-response loop, networked
  # E=0.9 telematic environment (Oslo ↔ California over Zoom) is constitutive, not incidental

# ── INTERFACE PROFILE (4int dimensions) ───────────────────────────────
interface_profile:
  affordance: 0.85       # cute, approachable form openly invites rhythmic interaction
  liveness: 0.80         # tapping cause→sound visible, but AI decision and network add mediation
  playability: 0.70      # one "plays" by making rhythm for it to answer — low barrier
  learnability: 0.75     # intuitive call-and-response; easy entry, deep ceiling
  situatedness: 0.55     # novel artifact, strong RITMO/research situ but no broad canon
  mediality: 0.35        # body-decoupled: the agent is autonomous, not body-fused; remote dancer adds distance
  mapping: 0.45          # indirect — your rhythm is interpreted by an AI, not directly transduced
  sensorimotor_scheme: 0.40  # little internalized technique; interaction is conversational
  ergonomics: 0.60       # hands-free, but requires table/setup and the network
  expressivity: 0.70     # rich at the rhythmic/interactional level; narrow in timbre

status: draft
publish: true
modified: 2026-06-07
---



## Organological Summary

Fibres Out of Line (2021) is a networked interactive installation-performance from the RITMO Centre (University of Oslo), built on the Dr. Squiggles autonomous rhythm robots (lead: Michael Krzyżaniak). For RPPW 2021 it staged eight octopus-like robots plus two software agents that listen to incoming rhythm and play along, improvising in real time with dancer Jennifer Gerry — who performed remotely from California while the robots were in Oslo, all joined over Zoom so the parties could see, hear, and respond to one another. The robots' cute, fluffy design (octopus body, knitted balaclava, blinking eye) is a deliberate strategy to make autonomous agency legible and approachable.

## Why this node matters to SOOG

This is a near-pure case of the agential axis (A) that [[toward agentic music]] theorizes: the object's identity is defined less by its material or shape than by its degree and type of operative autonomy. The robots do not wait to be played — they perceive rhythm (onset detection / beat induction), decide, and act in a closed call-and-response loop (`recursive: true`). It therefore sits at the opposite end of the MOAIE space from the [[violin]] (A=0.5, O=0.9): here A=0.95 and the object becomes a distributed array of agents rather than a singular refined body.

$$ \text{violin: } O \gg A \qquad\Longleftrightarrow\qquad \text{Fibres Out of Line: } A \gg O $$

It also foregrounds the environment axis (E): the performance is constitutively telematic. The network is not a delivery channel but part of the instrument — latency, framing, and remote presence shape what the piece is. This connects directly to [[AI for live performance]]: the robots are a concrete instance of low-latency rhythmic listening + responsive agency, though here the loop tolerates network latency that a tightly-coupled gesture-sound instrument could not.

## Interaction chain

```
human/dancer or another robot → rhythmic sound (onset events)
    ↓ [microphone input → onset detection / beat induction]
autonomous agent (per robot) decides when/what to tap
    ↓ [solenoid/servo tentacle strikes acoustic surface]
acoustic rhythm output
    ↓ [heard by other robots + remote dancer over the network]
collective adaptation (call-and-response loop)
```

Recursion: yes — each agent's output is another's input; the ensemble mutually adapts. `recursive: true`, `loop: true`.

## Relevance threads

- Agency / organology: the clearest case-instrument for the A-axis and for "ontology of behaviour, not of material" ([[toward agentic music]]).
- Norway / RITMO: ties to [[Jim Tørresen]] and the Oslo robotics-music milieu (see [[ai people]] → local pioneers, Norway).
- Networked performance: telematic, distributed E-axis — relevant to installation and remote-collaboration formats in your practice.

## See Also

- [[violin]] — MOAIE contrast: object-dominant vs agent-dominant.
- [[GD Violin]] — another digital-fabrication instrument case, but tool-paradigm rather than agent-paradigm.
- [[toward agentic music]] — the theoretical frame this instrument instantiates.
- [[AI for live performance]] — responsive agency and rhythmic listening in real time.

## References

```bibtex
@misc{Krzyzaniak2021FibresOutOfLine,
  author       = {Krzy\.{z}aniak, Michael and Gerry, Jennifer and Kwak, Dongho and Erdem, \c{C}a\u{g}r{\i} and Lan, Qichao and Glette, Kyrre and Jensenius, Alexander Refsum},
  title        = {Fibres Out of Line (Dr. Squiggles)},
  howpublished = {RITMO Centre for Interdisciplinary Studies in Rhythm, Time and Motion, University of Oslo; performed at RPPW 2021},
  year         = {2021},
  url          = {https://www.uio.no/ritmo/english/news-and-events/events/conferences/2021/RPPW/performances/dr-squiggles/}
}

@misc{Krzyzaniak2021DrSquiggles,
  author       = {Krzy\.{z}aniak, Michael},
  title        = {Dr. Squiggles: An AI Rhythm Robot},
  howpublished = {RITMO, University of Oslo},
  year         = {2021},
  note         = {Autonomous musical robot: listens to rhythm via onset detection and plays along}
}
```
