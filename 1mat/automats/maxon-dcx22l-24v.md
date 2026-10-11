---
id: maxon_dcx22l_24v
title: Maxon DCX 22 L 24V (Coreless DC)
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
make: Maxon
model: DCX 22 L 24V
part_number: DCX22L-24V
origin: Switzerland
year: 2015
url: https://www.maxongroup.com/maxon/view/content/dcx-info
img: ""
datasheet: ""
electrical:
  voltage_nominal: 24
  voltage_max: 24
  current_nominal: 200
  current_noload: 28
  current_stall: 3200
  power_nominal: 4.5
  back_emf_constant: 3.2
  terminal_resistance: 7.5
  inductance: 0.2
  poles:
mechanical:
  speed_noload: 7500
  speed_nominal: 6800
  torque_nominal: 15
  torque_stall: 96
  torque_continuous_max: 25
  efficiency: 87
  inertia_rotor: 3.5
  gear_ratio:
  gearbox_type: none
  shaft_diameter: 3
  shaft_length: 14
  load_axial_max: 8
  load_radial_max: 14
  force_max:
  payload_tip:
physical:
  diameter: 22
  length: 45
  weight: 55
  mounting: flange
  protection: none
  operating_temp: -30–100°C
control:
  interface: analog
  driver_required: true
  encoder: false
  encoder_type: none
  encoder_ppr:
  feedback: none
  microcontroller_tested: []
drivers:
  - name: Maxon ESCON 36/2
    part: "409510"
    type: dedicated
    voltage_range: 10–36 V
    current_continuous: 2
    current_peak: 6
    control_in:
      - pwm
      - analog
    config_interface: usb
    compatible_mcu:
      - arduino
      - rpi
      - esp32
    circuit: MCU PWM → ESCON 36/2 → DCX 22 L
    voltage_supply: 3.3/5 V (logic) + 10–36 V (motor)
    url: https://www.maxongroup.com
    notes: Maxon matched driver. Speed/torque mode. Encoder feedback optional.
  - name: DRV8871
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
    circuit: MCU 2×PWM → DRV8871 → DCX 22 L
    voltage_supply: 3.3/5 V + 24 V
    url: https://www.ti.com/product/DRV8871
    notes: Simple H-bridge. No feedback. Open-loop speed control.
noise:
  acoustic:
    level_db:
    perceived: 0
    character: broadband
    dominant_freq_hz:
    source: bearing
    organological: feature
    notes: Coreless, 87% efficiency = minimal heat and near-zero acoustic noise. DCX system allows modular add-on of encoder (ENX10/16) or gearbox (GPX22) — system scalability advantage.
  vibration:
    perceived: 0
    dominant_freq_hz:
    source: bearing
    notes: ""
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
  notes: "Highest efficiency (87%) in the coreless DC class. The DCX system's modularity is key: encoder (ENX16), planetary gearbox (GPX22), and brake (AB22) can be snapped on without special tools. Ideal for OKA modular instrument systems where the same motor unit is reconfigured across different instrument setups."
hyper:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
connect:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
  - "[[H-bridge]]"
  - "[[PWM-speed-control]]"
  - "[[coreless-motor]]"
  - "[[modular-drive-system]]"
  - "[[planetary-gearbox]]"
  - "[[embedded-motor-control]]"
  - "[[RT-actuation]]"
  - "[[organological-robotics]]"
bib: ""
---

## Maxon DCX 22 L 24V

Maxon's DCX series: coreless brushed DC with a modular snap-on system (encoder, gearbox, brake — no tools). 87% peak efficiency — highest in the brushed DC class. The modularity is the key differentiator for OKA: the same motor unit can be reconfigured across instrument prototypes without mechanical adaptation work.

## Noise Profile

| Domain | Level (0–5) | Source | Organological |
|---|---|---|---|
| Acoustic | 0 | bearing only | silent |
| Vibration | 0 | near zero | negligible |
| EMI | 1 | brush | 100nF cap |
