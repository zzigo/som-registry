---
id: dynamixel_mx28t
title: Dynamixel MX-28T (Smart Servo, High Torque)
tags:
  - dss
  - dss/mat/automat
  - automat
  - automat/servo
category: 1mat
type: automat
status: stub
modified: 2026-06-17
subtype: servo
actuation_domain: rotary
motion_output: rotation
autonomy: embedded
make: Robotis
model: MX-28T
part_number: 902-0083-000
origin: South Korea
year: 2012
url: https://www.robotis.us/dynamixel-mx-28t/
img: ""
datasheet: https://emanual.robotis.com/docs/en/dxl/mx/mx-28/
electrical:
  voltage_nominal: 12
  voltage_max: 14.8
  current_nominal: 530
  current_noload: 90
  current_stall: 2200
  power_nominal: 6
  back_emf_constant:
  terminal_resistance:
  inductance:
  poles:
mechanical:
  speed_noload: 55
  speed_nominal: 35
  torque_nominal: 1200
  torque_stall: 2500
  torque_continuous_max: 1500
  efficiency: 70
  inertia_rotor:
  gear_ratio: 193
  gearbox_type: planetary
  shaft_diameter:
  shaft_length:
  load_axial_max:
  load_radial_max:
  force_max:
  payload_tip: 1
physical:
  diameter:
  length: 50.6
  weight: 72
  mounting: bracket
  protection: none
  operating_temp: -5–80°C
control:
  interface: uart
  driver_required: false
  encoder: true
  encoder_type: absolute
  encoder_ppr: 4096
  feedback: position
  microcontroller_tested:
    - arduino
    - rpi
    - esp32
    - opencm
drivers:
  - name: Robotis U2D2
    part: U2D2
    type: dedicated
    voltage_range: 10–14.8 V
    current_continuous: 2.2
    current_peak: 2.2
    control_in:
      - uart
    config_interface: usb
    compatible_mcu:
      - rpi
      - laptop
    circuit: PC/RPi USB → U2D2 → MX-28T TTL bus
    voltage_supply: 12 V (separate) + USB logic
    url: https://www.robotis.us/u2d2/
    notes: Same protocol as XL430 — Dynamixel Protocol 1.0 (MX-28T also supports 2.0 via firmware update).
  - name: Dynamixel Shield (Arduino)
    part: Dynamixel Shield
    type: dedicated
    voltage_range: 7–14.8 V
    current_continuous: 2.2
    current_peak: 2.2
    control_in:
      - uart
    config_interface: usb
    compatible_mcu:
      - arduino
    circuit: Arduino → Dynamixel Shield → MX-28T TTL
    voltage_supply: 12 V via barrel
    url: https://www.robotis.us/dynamixel-shield/
    notes: ""
noise:
  acoustic:
    level_db:
    perceived: 2
    character: tonal
    dominant_freq_hz:
    source: gear
    organological: context-dependent
    notes: Planetary gear, heavier than XL430 — slightly more noise under load. Still much quieter than spur-gear servos. Preferred when high torque (2.5 Nm) is needed and acoustic isolation is partially possible.
  vibration:
    perceived: 1
    dominant_freq_hz:
    source: gear
    notes: ""
  emi:
    perceived: 1
    type: switching
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
  notes: "When XL430 torque (1.5 Nm) is insufficient: MX-28T provides 2.5 Nm. Identical control protocol — drop-in upgrade on same Dynamixel bus. Heavier actuated mechanisms: large bow arms, heavy valve assemblies, multi-string bridges. Same current feedback and multi-drop bus as XL430."
hyper:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
connect:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
  - "[[serial-bus-servo]]"
  - "[[Dynamixel-protocol-2]]"
  - "[[current-based-position-control]]"
  - "[[multi-servo-sync]]"
  - "[[embedded-motor-control]]"
  - "[[RT-actuation]]"
  - "[[organological-robotics]]"
bib: ""
---

## Dynamixel MX-28T

High-torque Dynamixel servo (2.5 Nm) on the same TTL bus as XL430. Drop-in upgrade when XL430's 1.5 Nm is insufficient. 72g, 4096-step absolute encoder, current feedback. Slightly noisier than XL430 due to higher gear reduction (193:1) — use XL430 when torque allows.

## Noise Profile

| Domain | Level (0–5) | Source | Organological |
|---|---|---|---|
| Acoustic | 2 | planetary gear | isolation recommended |
| Vibration | 1 | digital closed-loop | minimal |
| EMI | 1 | switching | negligible |
