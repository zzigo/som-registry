---
id: nanotec_st4118s1006
title: Nanotec ST4118S1006-A
tags:
  - dss
  - dss/mat/automat
  - automat
  - automat/stepper
category: 1mat
type: automat
status: stub
modified: 2026-06-17
subtype: stepper
actuation_domain: rotary
motion_output: rotation
autonomy: embedded
make: Nanotec
model: ST4118S1006-A
part_number: ST4118S1006-A
origin: Germany
year: 2016
url: https://en.nanotec.com/products/1601-st4118s1006-a/
img: ""
datasheet: https://en.nanotec.com/products/1601-st4118s1006-a/
electrical:
  voltage_nominal: 3.4
  voltage_max: 24
  current_nominal: 1000
  current_noload: 300
  current_stall: 1000
  power_nominal: 7
  back_emf_constant:
  terminal_resistance: 3.4
  inductance: 5
  poles: 50
mechanical:
  speed_noload: 1200
  speed_nominal: 600
  torque_nominal: 330
  torque_stall: 380
  torque_continuous_max: 350
  efficiency: 71
  inertia_rotor: 60
  gear_ratio:
  gearbox_type: none
  shaft_diameter: 5
  shaft_length: 20
  load_axial_max: 12
  load_radial_max: 25
  force_max:
  payload_tip:
physical:
  diameter:
  length: 40
  weight: 260
  mounting: flange
  protection: none
  operating_temp: -20–70°C
control:
  interface: step_dir
  driver_required: true
  encoder: false
  encoder_type: none
  encoder_ppr:
  feedback: none
  microcontroller_tested:
    - arduino
    - rpi
    - esp32
    - teensy
drivers:
  - name: Nanotec SMCI36
    part: SMCI36-2
    type: stepper_driver
    voltage_range: 12–48 V
    current_continuous: 3.5
    current_peak: 5
    control_in:
      - step_dir
      - can
      - rs485
    config_interface: uart
    compatible_mcu:
      - rpi
      - arduino
      - esp32
    circuit: MCU STEP/DIR or CAN → SMCI36 → ST4118S1006
    voltage_supply: 12–48 V (motor + logic from motor supply)
    url: https://en.nanotec.com/products/controllers-and-drivers/
    notes: Nanotec matched driver. CAN bus option enables multi-axis sync. Field-weakening for extended speed range.
  - name: Trinamic TMC2209
    part: TMC2209-LA
    type: stepper_driver
    voltage_range: 4.75–29 V
    current_continuous: 2
    current_peak: 2.8
    control_in:
      - step_dir
      - uart
    config_interface: uart
    compatible_mcu:
      - arduino
      - rpi
      - esp32
      - teensy
      - pico
    circuit: MCU STEP/DIR → TMC2209 (StealthChop2) → ST4118S1006
    voltage_supply: 3.3/5 V (logic) + 12–24 V (motor)
    url: https://www.trinamic.com
    notes: Third-party but excellent. StealthChop2 quiets this motor effectively. Preferred for acoustic contexts.
noise:
  acoustic:
    level_db:
    perceived: 1
    character: tonal
    dominant_freq_hz:
    source: cogging
    organological: context-dependent
    notes: "German precision winding — lower step-angle irregularity than generic NEMA 17. With TMC2209: perceived 1. Wide operating temp range useful for outdoor/variable-environment installations."
  vibration:
    perceived: 1
    dominant_freq_hz:
    source: cogging
    notes: ""
  emi:
    perceived: 2
    type: switching
    shielding_needed: true
    notes: ""
  measurement:
    measured: false
    conditions: ""
    date:
organological:
  role: general
  moves: ""
  instrument_refs: []
  moaie_layer: A
  notes: Higher quality winding than generic NEMA 17 → lower step irregularity → smoother low-speed motion. Extended temperature range (-20–70°C) relevant for outdoor or body-heat-exposed instrument installations. CAN option via Nanotec driver for synchronized multi-axis OKA ecosystems.
hyper:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
connect:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
  - "[[microstepping]]"
  - "[[StealthChop2]]"
  - "[[CAN-bus-multi-axis]]"
  - "[[open-loop-position]]"
  - "[[embedded-motor-control]]"
  - "[[RT-actuation]]"
  - "[[organological-robotics]]"
bib: ""
---

## Nanotec ST4118S1006-A

German-precision NEMA 17 stepper with tighter winding tolerances than Chinese generics, resulting in lower step-angle irregularity and smoother low-speed motion — critical for continuous bowing or slow expressive gestures. Extended operating range (-20–70°C) opens installation contexts beyond climate-controlled stages.

## Noise Profile

| Domain | Level (0–5) | Source | Organological |
|---|---|---|---|
| Acoustic | 1 | precision winding | near-silent w/ TMC |
| Vibration | 1 | low irregularity | minimal coupling |
| EMI | 2 | chopper | shield |

## References

```bibtex
@misc{nanotec_st4118s1006,
  author = {{Nanotec Electronic GmbH}},
  title  = {ST4118S1006-A Stepper Motor},
  year   = {2020},
  url    = {https://en.nanotec.com/products/1601-st4118s1006-a/},
}
```
