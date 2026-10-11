---
id: portescap_22n28_210e
title: Portescap 22N28 210E (Coreless DC)
tags:
  - dss
  - dss/mat/automat
  - automat
  - automat/dc_motor
category: 1mat
type: automat
status: stub
modified: 2026-06-17
subtype: dc_motor
actuation_domain: rotary
motion_output: rotation
autonomy: embedded
make: Portescap
model: 22N28 210E
part_number: 22N28 210E
origin: Switzerland
year: ~2008
url: https://www.portescap.com/en/products/brushed-dc-motors/22n-winding
img: ""
datasheet: ""
electrical:
  voltage_nominal: 12
  voltage_max: 18
  current_nominal: 200
  current_noload: 30
  current_stall: 1400
  power_nominal: 2.2
  back_emf_constant: 3
  terminal_resistance: 8.2
  inductance: 0.18
  poles:
mechanical:
  speed_noload: 3900
  speed_nominal: 3400
  torque_nominal: 6
  torque_stall: 44
  torque_continuous_max: 12
  efficiency: 81
  inertia_rotor: 1.8
  gear_ratio:
  gearbox_type: none
  shaft_diameter: 2
  shaft_length: 10
  load_axial_max: 5
  load_radial_max: 8
  force_max:
  payload_tip:
physical:
  diameter: 22
  length: 28
  weight: 45
  mounting: flange
  protection: none
  operating_temp: -30–85°C
control:
  interface: analog
  driver_required: true
  encoder: false
  encoder_type: none
  encoder_ppr:
  feedback: none
  microcontroller_tested: []
drivers:
  - name: DRV8833 (TI)
    part: DRV8833
    type: hbridge
    voltage_range: 2.7–10.8 V
    current_continuous: 1.5
    current_peak: 2
    control_in:
      - pwm
    config_interface: none
    compatible_mcu:
      - arduino
      - esp32
      - pico
    circuit: MCU 2×PWM → DRV8833 → 22N28 (at 5–10.8V)
    voltage_supply: 3.3 V (logic) + 5–10.8 V (motor)
    url: https://www.ti.com/product/DRV8833
    notes: Matched if running at 5–10V. For 12V use DRV8871.
  - name: DRV8871 (TI)
    part: DRV8871
    type: hbridge
    voltage_range: 6.5–45 V
    current_continuous: 3.6
    current_peak: 3.6
    control_in:
      - pwm
    config_interface: none
    compatible_mcu:
      - arduino
      - rpi
      - esp32
    circuit: MCU 2×PWM → DRV8871 → 22N28 (at 12V)
    voltage_supply: 3.3/5 V + 12 V
    url: https://www.ti.com/product/DRV8871
    notes: Preferred for 12V operation. Simple wiring.
noise:
  acoustic:
    level_db:
    perceived: 0
    character: broadband
    dominant_freq_hz:
    source: bearing
    organological: feature
    notes: Coreless DC. Compact 22mm body, 45g. Quietest per gram in catalog. Bearing hiss only.
  vibration:
    perceived: 0
    dominant_freq_hz:
    source: bearing
    notes: "Ultra-low inertia (1.8 g·cm²): negligible vibration coupling."
  emi:
    perceived: 1
    type: brush_sparking
    shielding_needed: false
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
  notes: Lightest and most compact coreless DC in catalog (45g, 22×28mm). Portescap quality is equivalent to Faulhaber/Maxon but historically more affordable. Ideal for small embedded bow mechanisms or lightweight rotation drives. Lower nominal torque than RE 25 — pair with gearbox for demanding loads.
hyper:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
connect:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
  - "[[H-bridge]]"
  - "[[PWM-speed-control]]"
  - "[[coreless-motor]]"
  - "[[planetary-gearbox]]"
  - "[[embedded-motor-control]]"
  - "[[RT-actuation]]"
  - "[[organological-robotics]]"
bib: ""
---

## Portescap 22N28 210E

Swiss-made coreless DC motor — comparable quality to Faulhaber and Maxon, in a 22×28mm body weighing 45g. Zero cogging, 81% efficiency. The most compact coreless DC in the automats catalog per mass. Preferred for ultra-light mechanisms where every gram matters.

## Noise Profile

| Domain | Level (0–5) | Source | Organological |
|---|---|---|---|
| Acoustic | 0 | bearing only | silent |
| Vibration | 0 | ultra-low inertia | negligible |
| EMI | 1 | brush | 100nF cap |
