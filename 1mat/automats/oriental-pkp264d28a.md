---
id: oriental_pkp264d28a
title: Oriental Motor PKP264D28A
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
make: Oriental Motor
model: PKP264D28A
part_number: PKP264D28A
origin: Japan
year: 2010
url: https://www.orientalmotor.com/stepper-motors/pkp-series.html
img: ""
datasheet: https://www.orientalmotor.com/content/dam/orientalmotor/products/stepper-motors/PKP264D28A_datasheet.pdf
electrical:
  voltage_nominal: 2.8
  voltage_max: 24
  current_nominal: 2800
  current_noload: 800
  current_stall: 2800
  power_nominal: 16
  back_emf_constant:
  terminal_resistance: 0.64
  inductance: 2.3
  poles: 50
mechanical:
  speed_noload: 2000
  speed_nominal: 900
  torque_nominal: 900
  torque_stall: 1200
  torque_continuous_max: 1000
  efficiency: 75
  inertia_rotor: 280
  gear_ratio:
  gearbox_type: none
  shaft_diameter: 6.35
  shaft_length: 25
  load_axial_max: 30
  load_radial_max: 50
  force_max:
  payload_tip:
physical:
  diameter:
  length: 60
  weight: 700
  mounting: flange
  protection: none
  operating_temp: -10–50°C
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
drivers:
  - name: Oriental Motor NF Series Driver
    part: NF2913
    type: stepper_driver
    voltage_range: 18–75 V
    current_continuous: 3
    current_peak: 6
    control_in:
      - step_dir
    config_interface: dip
    compatible_mcu:
      - arduino
      - rpi
      - esp32
    circuit: MCU STEP/DIR → NF driver → PKP264D28A
    voltage_supply: 5 V (logic) + 18–75 V (motor)
    url: https://www.orientalmotor.com
    notes: Matched Oriental Motor driver. Handles 2-phase and 5-phase. Micro-step smoothing.
  - name: Trinamic TMC2160
    part: TMC2160
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
    circuit: MCU STEP/DIR + SPI → TMC2160 → PKP264D28A
    voltage_supply: 3.3/5 V (logic) + 24–48 V (motor)
    url: https://www.trinamic.com
    notes: StealthChop2 + StallGuard4. Highest current Trinamic IC — fits 2.8A coil requirement.
noise:
  acoustic:
    level_db:
    perceived: 2
    character: tonal
    dominant_freq_hz:
    source: cogging
    organological: interference
    notes: Larger mass/inertia → more vibration transmitted to mount at full step. Requires TMC StealthChop + vibration-damping mount for acoustic contexts. At microstepping, perceived drops to 1.
  vibration:
    perceived: 2
    dominant_freq_hz:
    source: rotor_imbalance
    notes: "High inertia rotor: significant vibration if direct-coupled to instrument body. Use flexible coupling."
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
  notes: "High-torque NEMA 23 for demanding loads: heavy bows, tensioned string mechanisms, multi-string tensioning. Japanese precision manufacturing — minimal step irregularity. Preferred where high force is required and acoustic isolation (flexible coupling + damping) can be implemented."
hyper:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
connect:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
  - "[[microstepping]]"
  - "[[chopper-drive]]"
  - "[[flexible-coupling]]"
  - "[[vibration-isolation]]"
  - "[[embedded-motor-control]]"
  - "[[RT-actuation]]"
  - "[[organological-robotics]]"
bib: ""
---

## Oriental Motor PKP264D28A

High-torque NEMA 23 stepper from Oriental Motor (Japan). 1200 mNm holding torque — the strongest in the automats catalog. Heavier and louder than NEMA 17, but irreplaceable when high force is needed (heavy bowing mechanisms, multi-string tension control). Requires vibration isolation mount and TMC StealthChop for acoustic contexts.

## Noise Profile

| Domain | Level (0–5) | Source | Organological |
|---|---|---|---|
| Acoustic | 2 | cogging + mass | isolation required |
| Vibration | 2 | high inertia | flexible coupling |
| EMI | 2 | chopper | shield cables |

## References

```bibtex
@manual{oriental_pkp264d28a,
  author = {{Oriental Motor Co., Ltd.}},
  title  = {PKP Series Stepper Motor Product Guide},
  year   = {2020},
  url    = {https://www.orientalmotor.com/stepper-motors/pkp-series.html},
}
```
