---
id: tip_surface_resonator
title: Tip-Surface Resonator
tags:
  - dss
  - dss/2obj
  - object
  - resonator
  - flat-plate
  - modular
  - physical-synthesis
category: 2obj
type: object
layer: acoustic
hyper:
  - "[[idiophone]]"
  - "[[plate resonator]]"
  - "[[modular resonator]]"
hypo: []
connect:
  - "[[tip-surface-coupling]]"
  - "[[soundboard-material-filter]]"
  - "[[flat plate]]"
  - "[[nonlinear-contact-modulation]]"
instruments:
  - "[[Cicada]]"
topology:
  shape: flat plate (soundboard) + actuator assembly with bridge and tip
  dimensions: soundboard variable; actuator ~150mm × 80mm × 40mm
  modes: 4
  modularity: true
  proportional_basis: plate resonance modes — material-dependent (see [[soundboard-material-filter]])
  setup: table
  hold: external
  posture: seated | standing (over table)
  support_required: true
  weight_class: medium
  movement_during_play: static
fabrication:
  method: hybrid
  material_refs:
    - "[[soundboard-material-filter]]"
    - "[[voice-coil-motor]]"
  files: []
status: validated
modified: 2026-05-16
---

# Tip-Surface Resonator

A modular flat-plate resonator topology: a soundboard in combination with an electromagnetic actuator assembly comprising voice-coil motors, bridge, and tip. The topology encodes both the resonating body and the mechanical structure that delivers excitation to it.

## Structural Architecture

The object is a two-component assembly:

**Actuator module (fixed)**
- Voice-coil motors: Lorentz force transducers, linear displacement proportional to current
- Bridge: mechanical transmission structure, amplifies motor displacement to tip
- Tip: contact element, initiates intermittent surface interaction
- Electronics: CV input stage, touch interface

**Soundboard module (interchangeable)**
- Flat plate in various materials (see [[soundboard-material-filter]])
- Free boundary conditions at edges (not clamped)
- Receives intermittent tip excitation across its surface

## Plate Mechanics

A free rectangular plate vibrates according to the biharmonic equation:

$$D \nabla^4 w + \rho h \ddot{w} = F(x, y, t)$$

where $D = \frac{Eh^3}{12(1-\nu^2)}$ is the flexural rigidity, $\rho$ is density, $h$ is plate thickness, and $F(x,y,t)$ is the distributed or point force from tip contact.

Natural frequencies of a free rectangular plate ($a \times b$):

$$f_{mn} = \frac{\pi}{2} \sqrt{\frac{D}{\rho h}} \left[ \left(\frac{m}{a}\right)^2 + \left(\frac{n}{b}\right)^2 \right]$$

(approximate, Rayleigh-Ritz; exact values depend on mode index and boundary conditions). The mode shapes form Chladni patterns — the location of tip contact relative to these nodal lines determines which modes are preferentially excited.

## Topology in MOAIE Context

This object topology is notable for what it is not: it lacks a defined resonating body of fixed material, fixed dimensions, or standard acoustic geometry. It is explicitly a *modular* topology — the O dimension of the MOAIE vector is fixed (flat-plate + actuator assembly) while M varies freely across the soundboard material space.

This separates two dimensions that are conflated in most classical instruments: the topology (O) and the material (M). In a violin, spruce and maple are intrinsic to the topology — you cannot swap them without changing the instrument category. This topology is material-agnostic by design. This is the organological contribution: a proof-of-concept for M/O decoupling in instrument design.

## See Also

- [[tip-surface-coupling]] — the excitation mode applied to this object (4int)
- [[soundboard-material-filter]] — the material completing this object (1mat)
- [[flat plate]] — generic flat plate node in 2obj
- [[nonlinear-contact-modulation]] — the governing principle (0-pri/nonlinear)

## References

```bibtex
@book{leissa1969vibration,
  author    = {Leissa, Arthur W.},
  title     = {Vibration of Plates},
  year      = {1969},
  publisher = {NASA},
  address   = {Washington D.C.},
  note      = {NASA SP-160},
  pages     = {1--50}
}

@book{fletcher1998physics,
  author    = {Fletcher, Neville H. and Rossing, Thomas D.},
  title     = {The Physics of Musical Instruments},
  edition   = {2nd},
  year      = {1998},
  publisher = {Springer},
  address   = {New York},
  pages     = {57--90}
}
```
