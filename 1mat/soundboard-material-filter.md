---
id: soundboard_material_filter
title: Soundboard as Material Filter
tags:
  - dss
  - dss/1mat
  - material
  - acoustic-filter
  - physical-synthesis
  - modular
category: 1mat
type: material
layer: acoustic
hyper:
  - "[[resonant material]]"
  - "[[acoustic filter]]"
  - "[[idiophone material]]"
hypo:
  - "[[wood-soundboard]]"
  - "[[EVA-foam-soundboard]]"
connect:
  - "[[tip-surface-coupling]]"
  - "[[tip-surface-resonator]]"
  - "[[material-as-filter]]"
  - "[[soundboard]]"
instruments:
  - "[[Cicada]]"
acoustic:
  resonance_mode: plate modes (Chladni patterns)
  propagation: solid
  impedance:
  frequency_range: "material-dependent: wood 200Hz–12kHz, EVA foam 40Hz–3kHz"
  sim_method: modal
fabrication:
  method: hand_made
  material_class: variable — wood, EVA foam, acrylic, metal (modular)
  complexity: low
  files: []
status: validated
modified: 2026-05-16
---

# Soundboard as Material Filter

A material node encoding the principle that the soundboard in a modular tip-surface instrument is not a neutral acoustic amplifier but an active spectral filter whose transfer function is determined entirely by its physical properties: density, stiffness, internal damping, geometry, and boundary conditions.

## Material-as-Filter Principle

In conventional acoustic instrument design, the soundboard (top plate of a violin, guitar, piano) is optimised for broad-spectrum radiation with maximal efficiency. In the tip-surface resonator architecture, the soundboard is instead treated as a **selectable filter module**: swapping the soundboard is equivalent to reconfiguring the instrument's spectral output without any change to the excitation mechanism or control electronics.

This is the [[material-as-filter]] paradigm as a concrete implementation: the MOAIE vector position M changes discretely when the soundboard is swapped, while I, O, A, E remain constant.

## Acoustic Properties by Material

| Material | ρ (kg/m³) | E (GPa) | η (damping) | f_range | Spectral character |
|---|---|---|---|---|---|
| Wood (spruce) | ~450 | ~10 | low (~0.01) | 200Hz–12kHz | Bright, harmonic-rich, distorted |
| EVA foam | ~35–80 | ~0.005 | high (~0.2) | 40Hz–3kHz | Bass-emphasised, low-pass |
| Acrylic | ~1190 | ~3.2 | low-medium | 500Hz–15kHz | Clear, glassy, extended high |
| Aluminium | ~2700 | ~70 | very low | 1kHz–20kHz | Metallic, long decay, bright |

The transfer function $H(\omega)$ of each soundboard variant shapes the excitation spectrum from [[tip-surface-coupling]]:

$$Y(\omega) = H_{\text{material}}(\omega) \cdot X(\omega)$$

where $X(\omega)$ is the nonlinear contact excitation spectrum and $H_{\text{material}}$ is the plate's frequency response — determined by plate modes, modal density, and damping.

## Modular Implications

Because the material is modular (physically interchangeable without instrument disassembly), a tip-surface resonator instantiates a *family* of MOAIE tuples rather than a single instrument identity. Each soundboard variant defines a distinct instrument in the vector space:

```
variant_wood:    [0.6, 0.6, ?, ?, ?]   # M varies; O, A, I, E constant
variant_foam:    [0.3, 0.6, ?, ?, ?]
variant_acrylic: [0.7, 0.6, ?, ?, ?]
```

Only M varies; the family structure is explicit in the vector space. This is a test case for MOAIE as a generative organological family — the soundboard axis M becomes a continuous parameter for instrument design exploration. Specific vector assignments for implemented instruments are recorded in their respective instrument nodes.

## See Also

- [[tip-surface-coupling]] — the excitation mechanism acting on this material (4int)
- [[tip-surface-resonator]] — the complete object topology of which this material is part (2obj)
- [[material-as-filter]] — the abstract principle (ctx: 0-ctx-materials)
- instrument nodes (see `instruments:` frontmatter field) — specific tuples per implementation

## References

```bibtex
@book{fletcher1998physics,
  author    = {Fletcher, Neville H. and Rossing, Thomas D.},
  title     = {The Physics of Musical Instruments},
  edition   = {2nd},
  year      = {1998},
  publisher = {Springer},
  address   = {New York},
  pages     = {182--210}
}

@misc{chang2022cicada,
  author = {Chang, Herbert H.C. and Topel, Spencer},
  title  = {Cicada: Nonlinear Tip-Surface Musical Interface},
  year   = {2022},
  url    = {https://www.youtube.com/watch?v=uUAyattrP1Y}
}
```
