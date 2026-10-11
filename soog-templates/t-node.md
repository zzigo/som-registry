---
# ── IDENTITY ──────────────────────────────────────────────────────────
id: <snake_case_id>
title: <Human Readable Title>
tags:
  - dss
  - dss/<category>
  - <type-tag>

# ── TAXONOMY ──────────────────────────────────────────────────────────
category: 1mat | 2obj | 3agn | 4int | 5env | 0pri | 0dict
type: material | metamaterial | bio-material | object | fictional-object | hybrid-object | agent-human | agent-ai | agent-automat | agent-nonhuman | interaction | excitation | principle | paradigm | environment | network | schema | concept | instrument | process

layer: acoustic | ontological | fictional | all

# ── GRAPH CONNECTIONS ─────────────────────────────────────────────────
hyper:
  - "[[parent concept]]"
hypo:
  - "[[child concept]]"
connect:
  - "[[related node]]"

# ── CATEGORY EXTENSIONS ───────────────────────────────────────────────
# Uncomment the block for the relevant category

## 1mat — Materials
# acoustic:
#   resonance_mode: <string>
#   propagation: air | liquid | solid | electromagnetic | virtual
#   impedance: <float MRayl>
#   frequency_range: "<range>"
#   sim_method: FEM | FDTD | modal | analytic | none
# fabrication:
#   method: 3d_print | cnc | casting | hand_made | electronic | virtual | bio
#   material_class: <string>
#   complexity: low | medium | high
#   files: []

## 2obj — Objects
# topology:
#   shape: <string>
#   dimensions: <string>
#   modes: <int>
#   modularity: true | false
#   proportional_basis: <string>
# fabrication:
#   method: 3d_print | cnc | casting | hand_made | hybrid
#   material_refs: []
#   files: []

## 3agn — Agents
# agent:
#   class: human | ai | automat | nonhuman | hybrid
#   embodiment: physical | virtual | distributed
#   autonomy: tool | responsive | autonomous | co-constitutive
#   sensorimotor: true | false
#   training_data: <string>

## 4int — Interactions
# interaction:
#   excitation: blown | bowed | plucked | percussed | electromagnetic | feedback | modulated
#   gesture_type: <string>
#   latency_ms: <float>
#   coupling: direct | mediated | networked | virtual
#   loop: true | false

## 0pri — Principles of Function
# principle:
#   axes:
#     autonomy: tool | responsive | autonomous | co-constitutive
#     entanglement: separated | mediated | fused
#   paradigm_pattern: <string>
#   applies_to: [1mat, 2obj, 3agn, 4int, 5env]
#   precedents:
#     - "<Reference (Author, Year)>"

## 5env — Environments
# environment:
#   medium: air | liquid | solid | electromagnetic | virtual | hybrid
#   scale: local | room | distributed | networked | global
#   acoustic_properties:
#     reverberation_ms: <float>
#     reflection_index: <float>
#   nodes: <int>
#   coordinates: <string>

person: <name or [[link]]>
year: <YYYY>
status: draft | validated | deprecated
modified: <YYYY-MM-DD>
---

# <Title>

<Core definition: 1–2 sentences. What is this node? What does it encode?>

## <Main section — mechanism / properties / formal model>

<Body text. Include mathematical formulation in LaTeX if applicable.>

## See Also

- [[related-node-1]] — <why related>
- [[related-node-2]] — <why related>

## References

```bibtex
@<type>{<key>,
  author = {},
  title  = {},
  year   = {},
  ...
}
```

---

## Schema extensions (2026-05-16)

### `def` field (all nodes)
```yaml
def: "One-sentence operational definition for KG hover and structured responses. Cite source where possible (Author Year:p)."
```
Mandatory for any node marked `status: validated`. Should be self-contained and intelligible without reading the body.

### `metrics` block (4int nodes)
```yaml
metrics:
  scale: "0.0–1.0"
  low_anchor: "What value 0.0 encodes for this concept"
  high_anchor: "What value 1.0 encodes for this concept"
  measurable: true | false
  method: observational | computational | survey | physical | composite
```
Used to populate `interface_profile` values in instrument nodes (donut graph axes).

### `interface_profile` block (instrument nodes only)
```yaml
interface_profile:
  affordance: 0.0        # perceived action possibilities
  liveness: 0.0          # transparency of action-to-sound causality
  playability: 0.0       # motor ease and immediate access
  learnability: 0.0      # acquisition curve (inverted: 1=easy)
  situatedness: 0.0      # environmental/cultural embeddedness
  mediality: 0.0         # body-instrument fusion degree
  mapping: 0.0           # directness of gesture-to-sound correspondence
  sensorimotor_scheme: 0.0  # internalization depth
  ergonomics: 0.0        # body integration (0=external support, 1=handheld)
  expressivity: 0.0      # resolution and dimensionality of control space
```
Drives the donut/radar visualisation in soog-dashboard and structured comparison responses.

### `setup` fields (2obj topology extension)
```yaml
topology:
  ...
  setup: handheld | table | stand | floor | rack | wearable | body-mounted | suspended
  hold: none | single-hand | two-hand | hands-free | body | external
  posture: seated | standing | floor | any
  support_required: true | false
```
