---
id: hitec_d485hw
title: Hitec D485HW Digital HV Servo
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
make: Hitec
model: D485HW
part_number: D485HW
origin: South Korea
year: 2018
url: https://www.hiteccs.com/servo/digital-series/d485hw/
img: ""
datasheet: ""
electrical:
  voltage_nominal: 7.4
  voltage_max: 7.4
  current_nominal:
  current_noload:
  current_stall:
  power_nominal:
  back_emf_constant:
  terminal_resistance:
  inductance:
  poles:
mechanical:
  speed_noload:
  speed_nominal:
  torque_nominal:
  torque_stall: 550
  torque_continuous_max: 400
  efficiency:
  inertia_rotor:
  gear_ratio:
  gearbox_type: spur
  shaft_diameter: 4
  shaft_length:
  load_axial_max:
  load_radial_max:
  force_max:
  payload_tip: 0.4
physical:
  diameter:
  length:
  weight: 47.5
  mounting: bracket
  protection: none
  operating_temp: -20–60°C
control:
  interface: pwm
  driver_required: false
  encoder: false
  encoder_type: none
  encoder_ppr:
  feedback: position
  microcontroller_tested:
    - arduino
    - rpi
    - esp32
    - pico
drivers:
  - name: Direct MCU PWM
    part: ""
    type: servo_board
    voltage_range: 6–7.4 V
    current_continuous: 0.5
    current_peak: 1.2
    control_in:
      - pwm
    config_interface: none
    compatible_mcu:
      - arduino
      - rpi
      - esp32
      - pico
    circuit: MCU PWM (50–333Hz) → D485HW signal
    voltage_supply: 6–7.4 V (HV servo rail)
    url: ""
    notes: "Digital servo: accepts PWM 50–333Hz (vs 50Hz only for analog). Higher update rate reduces hunting noise. Use 200Hz for tighter position hold with less dither."
  - name: PCA9685
    part: PCA9685
    type: servo_board
    voltage_range: 6–7.4 V
    current_continuous: 0.5
    current_peak: 1.2
    control_in:
      - i2c
    config_interface: i2c
    compatible_mcu:
      - arduino
      - rpi
      - esp32
      - pico
    circuit: MCU I2C → PCA9685 → D485HW (up to 16 channels)
    voltage_supply: 3.3/5 V (I2C) + 6–7.4 V (servo rail)
    url: https://www.adafruit.com/product/815
    notes: Multi-servo expansion. Set PCA9685 frequency to 200Hz for digital servo.
noise:
  acoustic:
    level_db:
    perceived: 2
    character: tonal
    dominant_freq_hz:
    source: gear
    organological: interference
    notes: "Digital control significantly reduces hunting noise vs HS-311. Karbonite (plastic composite) gears quieter than metal. At 200Hz update rate: smooth position hold. Still audible under load — not suitable for acoustically transparent contexts."
  vibration:
    perceived: 1
    dominant_freq_hz:
    source: cogging
    notes: Digital servo reduces 50Hz dither. Better than HS-311 on vibration.
  emi:
    perceived: 1
    type: back_emf
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
  notes: "Upgrade from HS-311: digital control, karbonite gears, HV operation. Perceived noise drops from 3 to 2. Suitable for mechanisms inside enclosed bodies where servo noise is partially attenuated. Not smart-servo (no current feedback, no multi-drop bus) — use Dynamixel XL430 when those features are needed."
hyper:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
connect:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
  - "[[PWM-servo-control]]"
  - "[[digital-servo]]"
  - "[[multi-servo-sync]]"
  - "[[PCA9685-expander]]"
  - "[[embedded-motor-control]]"
  - "[[RT-actuation]]"
  - "[[organological-robotics]]"
bib: ""
---

## Hitec D485HW Digital HV Servo

Digital upgrade of the HS-311 class. Higher PWM update rate (up to 333Hz vs 50Hz) reduces position hunting noise. Karbonite gears (plastic composite) are quieter than metal spur gears. HV operation (7.4V) gives more torque. Still a conventional servo (no current feedback, no bus protocol) — intermediate step between analog servo and smart servo.

## Noise Profile

| Domain | Level (0–5) | Source | Organological |
|---|---|---|---|
| Acoustic | 2 | gear + digital hunting | interference / enclosed use |
| Vibration | 1 | reduced dither at 200Hz | manageable |
| EMI | 1 | back-EMF | minor |
