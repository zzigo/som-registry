---
id: dynamixel_xl430_w250_t
title: Dynamixel XL430-W250-T (Smart Servo)
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
make: Robotis
model: XL430-W250-T
part_number: 902-0168-000
origin: South Korea
year: 2017
url: https://www.robotis.us/dynamixel-xl430-w250-t/
img: ""
datasheet: https://emanual.robotis.com/docs/en/dxl/x/xl430-w250/
electrical:
  voltage_nominal: 12
  voltage_max: 14.8
  current_nominal: 210
  current_noload: 55
  current_stall: 1250
  power_nominal: 2.5
  back_emf_constant:
  terminal_resistance:
  inductance:
  poles:
mechanical:
  speed_noload: 57
  speed_nominal: 40
  torque_nominal: 700
  torque_stall: 1500
  torque_continuous_max: 900
  efficiency: 70
  inertia_rotor:
  gear_ratio: 353.5
  gearbox_type: planetary
  shaft_diameter:
  shaft_length:
  load_axial_max:
  load_radial_max:
  force_max:
  payload_tip: 0.6
physical:
  diameter:
  length: 46.5
  weight: 53.5
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
  - name: Robotis U2D2 (USB-TTL)
    part: U2D2
    type: dedicated
    voltage_range: 10–14.8 V
    current_continuous: 1.25
    current_peak: 1.25
    control_in:
      - uart
    config_interface: usb
    compatible_mcu:
      - rpi
      - laptop
    circuit: PC/RPi USB → U2D2 → XL430 TTL bus
    voltage_supply: 12 V (servo) via separate rail
    url: https://www.robotis.us/u2d2/
    notes: "Official USB-to-Dynamixel adapter. DYNAMIXEL Wizard 2.0 for calibration. RPi: use with dynamixel_sdk Python library."
  - name: Dynamixel Shield (Arduino)
    part: Dynamixel Shield
    type: dedicated
    voltage_range: 7–14.8 V
    current_continuous: 1.25
    current_peak: 1.25
    control_in:
      - uart
    config_interface: usb
    compatible_mcu:
      - arduino
    circuit: Arduino → Dynamixel Shield → XL430 TTL bus
    voltage_supply: 12 V via shield barrel jack
    url: https://www.robotis.us/dynamixel-shield/
    notes: Simplest Arduino integration. DynamixelShield library. Half-duplex handled by shield.
  - name: TTL half-duplex buffer (DIY)
    part: SN74LVC125A or 74HC241
    type: dedicated
    voltage_range: 7–14.8 V
    current_continuous: 1.25
    current_peak: 1.25
    control_in:
      - uart
    config_interface: none
    compatible_mcu:
      - arduino
      - rpi
      - esp32
      - teensy
    circuit: MCU UART TX/RX → 74LVC125A buffer → XL430 DATA wire (3-wire TTL half-duplex)
    voltage_supply: 3.3 V (logic) + 12 V (servo)
    url: ""
    notes: "DIY half-duplex buffer. ESP32: use UART2 with custom half-duplex pin control. Requires careful timing — use dynamixel_sdk library."
noise:
  acoustic:
    level_db:
    perceived: 1
    character: tonal
    dominant_freq_hz:
    source: gear
    organological: context-dependent
    notes: "Planetary gearbox significantly quieter than spur gears. Current-controlled commutation reduces hunting noise. At low speed under light load: barely perceptible. Best servo option for acoustic contexts after Faulhaber coreless."
  vibration:
    perceived: 1
    dominant_freq_hz:
    source: gear
    notes: Minimal position hunting — digital closed-loop. Much better than HS-311.
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
  notes: "The best-in-class smart servo for musical robotics: 4096-step absolute encoder, current feedback (measures force/contact), TTL multi-drop bus (up to 253 servos on one wire), position + velocity + current + extended position modes. Current feedback enables contact detection — essential for pressure-controlled bowing or key-striking. Multi-drop bus enables synchronized multi-joint instrument control from single MCU UART."
hyper:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
connect:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
  - "[[serial-bus-servo]]"
  - "[[Dynamixel-protocol-2]]"
  - "[[current-based-position-control]]"
  - "[[multi-servo-sync]]"
  - "[[PID-position-control]]"
  - "[[contact-detection]]"
  - "[[embedded-motor-control]]"
  - "[[RT-actuation]]"
  - "[[organological-robotics]]"
bib: ""
---

## Dynamixel XL430-W250-T

**The recommended smart servo for OKA musical robotics.** TTL serial bus (Dynamixel Protocol 2.0): up to 253 servos on one 3-wire connection, each addressable independently. 4096-step absolute encoder. Current feedback enables contact/pressure sensing — the servo can report how much force it's exerting, enabling nuanced bow pressure control without external force sensors. Planetary gearbox (perceived noise 1/5) is far quieter than standard spur-gear servos.

## Actuation Profile

```
MCU UART TX/RX → TTL half-duplex bus → XL430 (address N) → planetary gear → output horn
                                      ↘ XL430 (address N+1) → ...  (multi-drop)
```

| Parameter | Value |
|---|---|
| Stall torque | 1.5 Nm @ 12V |
| Encoder | 4096 steps absolute |
| Interface | TTL UART, Dynamixel Protocol 2.0 |
| Multi-drop | Up to 253 units on 1 bus |
| Current feedback | Yes (force sensing) |
| Noise | perceived 1/5 |

## Noise Profile

| Domain | Level (0–5) | Source | Organological |
|---|---|---|---|
| Acoustic | 1 | planetary gear | context-dependent |
| Vibration | 1 | digital closed-loop | minimal hunting |
| EMI | 1 | switching | negligible |

## References

```bibtex
@manual{robotis_xl430,
  author = {{Robotis Co., Ltd.}},
  title  = {DYNAMIXEL XL430-W250-T eManual},
  year   = {2022},
  url    = {https://emanual.robotis.com/docs/en/dxl/x/xl430-w250/},
}
```
