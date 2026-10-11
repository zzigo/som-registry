---
id: hitec_hs311
title: Hitec HS-311 Analog Servo
tags:
  - dss
  - dss/mat/automat
  - automat
  - automat/servo
category: 1mat
type: automat
status: validated
modified: 2026-06-17
subtype: servo
actuation_domain: rotary
motion_output: rotation
autonomy: embedded
make: Hitec
model: HS-311
part_number: HS-311
origin: South Korea
year: ~2000
url: https://www.hiteccs.com/servo/standard-series/hs-311/
img: https://i.imgur.com/6V09Nsf.png
datasheet: ""
stock: "2"
electrical:
  voltage_nominal: 6
  voltage_max: 6
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
  torque_stall: 340
  torque_continuous_max: 300
  efficiency:
  inertia_rotor:
  gear_ratio:
  gearbox_type: spur
  shaft_diameter: 4
  shaft_length:
  load_axial_max:
  load_radial_max:
  force_max:
  payload_tip: 0.3
physical:
  diameter:
  length:
  weight: 43
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
    voltage_range: 4.8–6.0 V
    current_continuous: 0.4
    current_peak: 0.9
    control_in:
      - pwm
    config_interface: none
    compatible_mcu:
      - arduino
      - rpi
      - esp32
      - pico
    circuit: MCU PWM (50Hz, 1–2ms pulse) → HS-311 signal wire (yellow)
    voltage_supply: 4.8–6 V (separate servo rail) + 3.3/5 V MCU
    url: ""
    notes: "Standard servo PWM: 50Hz frame, 1ms=0°, 1.5ms=90°, 2ms=180°. Use Servo.h (Arduino) or RPi.GPIO PWM. Always power servo from separate rail — never from MCU 3.3V."
  - name: PCA9685 PWM expander
    part: PCA9685
    type: servo_board
    voltage_range: 4.8–6.0 V
    current_continuous: 0.4
    current_peak: 0.9
    control_in:
      - i2c
    config_interface: i2c
    compatible_mcu:
      - arduino
      - rpi
      - esp32
      - pico
    circuit: MCU I2C → PCA9685 → up to 16 HS-311 servos
    voltage_supply: 3.3/5 V (I2C) + 5–6 V (servo power)
    url: https://www.adafruit.com/product/815
    notes: "PCA9685: I2C to 16-channel PWM. Essential for multi-servo OKA instruments. Already noted in HS-311 electronics entry. Adafruit library or custom I2C protocol."
noise:
  acoustic:
    level_db:
    perceived: 3
    character: tonal
    dominant_freq_hz:
    source: gear
    organological: interference
    notes: "Plastic/karbonite spur gears generate audible whine, especially when holding position against load (constant hunting). At free movement: moderate. Digital upgrade (HS-5086WP) reduces hunting noise significantly."
  vibration:
    perceived: 2
    dominant_freq_hz: 50
    source: cogging
    notes: Position hunting ('dithering') when holding against load — transmits 50Hz vibration to mount. Reduce by lowering PWM to 25Hz or using digital servo.
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
  notes: "Standard analog servo — the universal starting point for servo-based mechanisms. Two units in lab. Adequate for non-acoustic-critical applications: valve control, finger/key actuation in enclosed instrument bodies, slow mechanical gestures. For acoustic-sensitive contexts upgrade to digital servo (Hitec D485HW) or smart servo (Dynamixel XL430)."
hyper:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
connect:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
  - "[[PWM-servo-control]]"
  - "[[multi-servo-sync]]"
  - "[[PCA9685-expander]]"
  - "[[servo-hunting]]"
  - "[[embedded-motor-control]]"
  - "[[RT-actuation]]"
  - "[[organological-robotics]]"
bib: ""
---

## Hitec HS-311 Analog Servo

The universal entry-level servo. Two units in lab (migrated from electronics inventory). Standard PWM control (50Hz, 1–2ms pulse). Analog potentiometer feedback internal to servo — not accessible externally. Plastic/karbonite gears are the acoustic limitation: gear mesh whine at 3/5 perceived under load, plus 50Hz position hunting when holding static. Use for non-acoustic-critical mechanisms or as a starting prototype before upgrading to D485HW or Dynamixel.

**Pinout (existing notes):** yellow = PWM signal | red = power (4.8–6V) | black = ground.

## Actuation Profile

```
MCU PWM (50Hz) → HS-311 signal → internal controller → DC motor → gear train → output horn
```

| Parameter | Value |
|---|---|
| Control | PWM 50Hz, 1–2ms |
| Stall torque | 3.47 kg·cm @ 4.8V / 4.3 kg·cm @ 6V |
| Speed | 0.19 sec/60° @ 4.8V |
| Noise | perceived 3/5 (gear whine) |
| Stock | 2 units in lab |

## Noise Profile

| Domain | Level (0–5) | Source | Organological |
|---|---|---|---|
| Acoustic | 3 | spur gear + hunting | interference |
| Vibration | 2 | 50Hz hunting | damping mount |
| EMI | 1 | back-EMF | minor |

## References

```bibtex
@misc{hitec_hs311,
  author = {{Hitec RCD Korea Co.}},
  title  = {HS-311 Standard Servo},
  year   = {2000},
  url    = {https://www.hiteccs.com/servo/standard-series/hs-311/},
}
```
