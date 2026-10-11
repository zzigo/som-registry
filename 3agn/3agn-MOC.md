---
id: 3agn-moc
title: 3AGN — Agents MOC
type: moc
category: soog
tags:
  - dss/soog/agents
  - MOAIE/A
layer: ontological
modified: 2026-05-16
---

# 3AGN — Agents

The A dimension of the MOAIE vector. A ranges from 0.0 (no agent, purely passive material response) to 1.0 (fully autonomous algorithmic or non-human agent). Human performers occupy the mid-range (A ≈ 0.5); hybrid or distributed agents can reach 0.7–0.9.

## Agent Types

| File | Type | A range | Notes |
|---|---|---|---|
| [[humans]] | Human performer | 0.4–0.6 | Embodied, culturally situated, fatigues, learns |
| [[cyborgs]] | Human + technology hybrid | 0.6–0.75 | Prosthetic or augmented body |
| [[avatars]] | Digital stand-in | 0.65–0.80 | Representation without body |
| [[distributed agency]] | Collective / swarm | 0.7–0.9 | No singular locus of control |
| [[mammals]] | Non-human animal | 0.3–0.5 | Biological but non-symbolic |
| [[plants]] | Biological slow agent | 0.1–0.3 | Growth-rate decision, chemical signaling |
| [[trees]] | Biological architectural agent | 0.1–0.2 | Structure-generating, non-real-time |
| [[03-thesis/03-soog/3agn/fungui]] | Network intelligence | 0.2–0.4 | Distributed chemical-electrical network |

Since 2026-10-11: [[cyborgs]], [[avatars]] and [[distributed agency]] are configurations (`type: agent-configuration`), not agent classes. The classes are human, ai, automat and nonhuman ([[SOM-criteria]] 2.3); hybridity is derived from A.deleg at the instrument level. The A ranges in the table above are the old hand-set scale and are not used by the distance.

## A=1.0 — Fully Autonomous Agents

When A reaches 1.0 the performer is replaced by a generative or algorithmic process. This is OPS production rule **P2 (Invert Agent)**. The interaction dimension I typically rises when A→1.0 because a new coupling must be designed to replace embodied control.

## 7lis — Listening Situations as Agent Property

**7lis is not a MOAIE category.** It is a schema extension of the A dimension: agents can be modelled as listeners in addition to being modelled as sound producers or controllers.

A listening situation characterizes how an agent receives and processes acoustic information from the environment:

| Code | Situation | Description |
|---|---|---|
| L0 | Isolated | No acoustic input processed; agent acts without listening |
| L1 | Passive | Agent registers sound but does not modify behavior |
| L2 | Reactive | Agent modifies action in response to sound (reflex-level) |
| L3 | Interactive | Agent builds a model of the acoustic event and responds intentionally |
| L4 | Co-creative | Agent and sound mutually shape each other in real time |
| L5 | Evaluative | Agent applies aesthetic or structural judgment to what it hears |
| L6 | Acousmatic | Agent cannot identify sound source; responds to signal only |

In the SOOG schema, 7lis is an optional field under agent nodes:

```yaml
listening_situation: L3   # default for human concert listener
lis_notes: "evaluative frame activated only after familiarization period"
```

The distinction matters for instrument design: an instrument intended for L4 (co-creative) demands much higher I and E values than one for L1 (passive). The Luthemic, for instance, operates in L3–L4 — the performer must listen to room feedback to navigate the feedback loop. The Cicada is performable in L2. A self-bowing AI violin with compositional agency requires L5 from its algorithmic agent.

See also: [[situatedness]], [[4int/expressivity]], [[MOAIE MOC]]

## Schema Extension (future)

```yaml
agent:
  type: human
  A: 0.5
  listening_situation: L3
  lis_notes: ""
  fatigue_model: false
  learning_curve: moderate
```

The `listening_situation` field will eventually become a computable parameter connecting agent nodes to environment nodes (5env) — perception is the bridge between E_physical and E_fictional. An agent at L6 (acousmatic) treats hyperreality.md as equivalent to air.md; an agent at L0 collapses the E dimension entirely.
