---
id: trinamic_qsh4218_tmc2130
title: Trinamic QSH4218-35-10-035 + TMC2130
tags:
  - dss
  - dss/mat/automat
  - automat
  - automat/stepper
category: 1mat
type: automat
status: validated
modified: 2026-06-17
subtype: stepper
actuation_domain: rotary
motion_output: rotation
autonomy: embedded
make: Trinamic
model: QSH4218-35-10-035
part_number: QSH4218-35-10-035
origin: Germany
year: 2014
url: https://www.trinamic.com/products/drives/stepper-motors-details/qsh4218-35-10-035/
img: ""
datasheet: https://www.trinamic.com/fileadmin/assets/Products/Motors_Documents/QSH4218_DATASHEET.pdf
electrical:
  voltage_nominal: 24
  voltage_max: 24
  current_nominal: 1000
  current_noload: 300
  current_stall: 1000
  power_nominal: 5
  back_emf_constant:
  terminal_resistance: 3
  inductance: 4.5
  poles: 50
mechanical:
  speed_noload: 1500
  speed_nominal: 700
  torque_nominal: 280
  torque_stall: 350
  torque_continuous_max: 310
  efficiency: 72
  inertia_rotor: 54
  gear_ratio:
  gearbox_type: none
  shaft_diameter: 5
  shaft_length: 21
  load_axial_max: 10
  load_radial_max: 22
  force_max:
  payload_tip:
physical:
  diameter:
  length: 35
  weight: 220
  mounting: flange
  protection: none
  operating_temp: 0–50°C
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
  - name: Trinamic TMC2130
    part: TMC2130
    type: stepper_driver
    voltage_range: 4.75–46 V
    current_continuous: 1.2
    current_peak: 2.5
    control_in:
      - step_dir
      - spi
    config_interface: spi
    compatible_mcu:
      - arduino
      - rpi
      - esp32
      - teensy
    circuit: MCU STEP/DIR + SPI → TMC2130 → QSH4218
    voltage_supply: 3.3/5 V (logic) + 24 V (motor)
    url: https://www.trinamic.com/products/integrated-circuits/details/tmc2130/
    notes: Matched driver for Trinamic motors. StealthChop + StallGuard2 (sensorless homing). SPI config gives full parameter access. The definitive quiet stepper solution.
  - name: Trinamic TMC5160
    part: TMC5160
    type: stepper_driver
    voltage_range: 8–60 V
    current_continuous: 3
    current_peak: 4.5
    control_in:
      - step_dir
      - spi
    config_interface: spi
    compatible_mcu:
      - arduino
      - rpi
      - esp32
      - teensy
    circuit: MCU SPI → TMC5160 (integrated ramp gen) → QSH4218
    voltage_supply: 3.3/5 V (logic) + 8–60 V (motor)
    url: https://www.trinamic.com/products/integrated-circuits/details/tmc5160/
    notes: Integrated motion controller (ramp generator on chip). S-curve acceleration built in — eliminates jerk artifacts at gesture onset. Preferred for RT musical control.
noise:
  acoustic:
    level_db:
    perceived: 1
    character: tonal
    dominant_freq_hz:
    source: cogging
    organological: feature
    notes: Motor+driver from same manufacturer = optimally tuned. StallGuard2 enables sensorless homing — eliminates mechanical endstop click.
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
  notes: "Best-in-class quiet stepper: motor + driver from same vendor, matched specifications. TMC5160 S-curve ramp generation allows musically expressive acceleration profiles without step loss or jerk. StallGuard2 sensorless homing avoids endstop clicks. Ideal for bow-arm mechanisms with gestural onset control."
hyper:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
connect:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
  - "[[microstepping]]"
  - "[[StealthChop2]]"
  - "[[StallGuard2]]"
  - "[[S-curve-acceleration]]"
  - "[[sensorless-homing]]"
  - "[[embedded-motor-control]]"
  - "[[RT-actuation]]"
  - "[[organological-robotics]]"
bib: ""
---

## Trinamic QSH4218-35-10-035 + TMC2130

Trinamic's own NEMA 17 stepper paired with their TMC2130 driver — the most acoustically optimized stepper combination available. Motor and driver are co-developed: the QSH4218 winding inductance is matched to TMC2130's chopper frequency for minimal residual noise. StallGuard2 allows sensorless homing (no endstop click). With TMC5160 upgrade: integrated S-curve ramp generator enables expressive gesture onset without jerk or step loss.

## Noise Profile

| Domain | Level (0–5) | Source | Organological |
|---|---|---|---|
| Acoustic | 1 | cogging suppressed | near-silent |
| Vibration | 1 | low | decouple mount |
| EMI | 2 | chopper | shield cables |

## References

```bibtex
@manual{trinamic_qsh4218,
  author = {{Trinamic Motion Control GmbH}},
  title  = {QSH4218 Stepper Motor Datasheet},
  year   = {2018},
  url    = {https://www.trinamic.com/fileadmin/assets/Products/Motors_Documents/QSH4218_DATASHEET.pdf},
}
```
