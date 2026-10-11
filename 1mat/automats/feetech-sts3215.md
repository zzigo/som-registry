---
id: feetech_sts3215
title: Feetech STS3215 Serial Bus Servo
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
make: Feetech
model: STS3215
part_number: STS3215
origin: China
year: 2020
url: https://www.feetechrc.com/sts3215.html
img: ""
datasheet: ""
electrical:
  voltage_nominal: 12
  voltage_max: 12
  current_nominal: 700
  current_noload: 150
  current_stall: 3500
  power_nominal: 8
  back_emf_constant:
  terminal_resistance:
  inductance:
  poles:
mechanical:
  speed_noload: 50
  speed_nominal: 35
  torque_nominal: 800
  torque_stall: 1570
  torque_continuous_max: 1000
  efficiency:
  inertia_rotor:
  gear_ratio:
  gearbox_type: spur
  shaft_diameter:
  shaft_length:
  load_axial_max:
  load_radial_max:
  force_max:
  payload_tip: 0.8
physical:
  diameter:
  length: 50
  weight: 62
  mounting: bracket
  protection: none
  operating_temp: -10–60°C
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
drivers:
  - name: Direct UART (half-duplex)
    part: ""
    type: dedicated
    voltage_range: 7–12 V
    current_continuous: 3.5
    current_peak: 3.5
    control_in:
      - uart
    config_interface: uart
    compatible_mcu:
      - arduino
      - rpi
      - esp32
    circuit: MCU UART → 74LVC125A buffer → STS3215 DATA wire
    voltage_supply: 3.3 V (logic) + 12 V (servo)
    url: ""
    notes: "Feetech SMBL protocol (compatible subset with Dynamixel 1.0). Python library: SCServo_Python on RPi. Arduino: SCSerial library."
  - name: Waveshare Serial Bus Servo Driver
    part: SC3215 Driver Board
    type: dedicated
    voltage_range: 7–12.6 V
    current_continuous: 3.5
    current_peak: 3.5
    control_in:
      - uart
    config_interface: usb
    compatible_mcu:
      - rpi
      - laptop
    circuit: RPi/PC USB → Waveshare board → STS3215 bus
    voltage_supply: 12 V via board
    url: https://www.waveshare.com/bus-servo-adapter-a.htm
    notes: Plug-and-play USB adapter for PC/RPi control. Includes calibration software.
noise:
  acoustic:
    level_db:
    perceived: 2
    character: tonal
    dominant_freq_hz:
    source: gear
    organological: interference
    notes: "Metal spur gears are noisier than Dynamixel's planetary gears. At high torque load: significant gear mesh noise. At light load and low speed: moderate. Budget smart servo — trade-off: cost vs noise vs torque. Better than Dynamixel on cost (3–4×), worse on acoustic quality."
  vibration:
    perceived: 2
    dominant_freq_hz:
    source: gear
    notes: Metal gear mesh vibration. Anti-vibration mount recommended.
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
  notes: "Budget smart servo with Dynamixel-compatible bus protocol and 4096-step encoder. 16 kg·cm torque at 1/3 the price of MX-28T. Trade-off: metal spur gears (noise 2/5) vs planetary gears (noise 1/5) of Dynamixel. Valid for prototyping multi-servo OKA instruments before committing to Dynamixel ecosystem, or for mechanisms inside enclosed bodies where acoustic isolation is available."
hyper:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
connect:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
  - "[[serial-bus-servo]]"
  - "[[Feetech-SMBL-protocol]]"
  - "[[multi-servo-sync]]"
  - "[[current-based-position-control]]"
  - "[[embedded-motor-control]]"
  - "[[RT-actuation]]"
  - "[[organological-robotics]]"
bib: ""
---

## Feetech STS3215 Serial Bus Servo

Budget smart servo with TTL serial bus (Dynamixel Protocol 1.0 compatible), 4096-step absolute encoder, and current feedback. 16 kg·cm torque at ~1/3 the price of Dynamixel MX-28T. Trade-off: metal spur gears generate more noise than Dynamixel's planetary reduction. Valid for rapid prototyping of multi-servo OKA instruments before committing to the Dynamixel ecosystem budget.

## Noise Profile

| Domain | Level (0–5) | Source | Organological |
|---|---|---|---|
| Acoustic | 2 | metal spur gears | interference |
| Vibration | 2 | gear mesh | damping mount |
| EMI | 1 | switching | minor |
