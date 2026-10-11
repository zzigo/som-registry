---
id: faulhaber_2230_024s
title: Faulhaber 2230 024S (Coreless DC)
tags:
  - dss
  - dss/mat/automat
  - automat
  - automat/dc_motor
category: 1mat
type: automat
status: validated
modified: 2026-06-17
subtype: dc_motor
actuation_domain: rotary
motion_output: rotation
autonomy: embedded
make: Faulhaber
model: 2230 024S
part_number: 2230024S
origin: Germany
year: 2000
url: https://www.faulhaber.com/en/products/series/2230/
img: ""
datasheet: https://www.faulhaber.com/fileadmin/Import/Media/EN_2230_SR_DFF.PDF
electrical:
  voltage_nominal: 24
  voltage_max: 24
  current_nominal: 130
  current_noload: 18
  current_stall: 900
  power_nominal: 3
  back_emf_constant: 2.84
  terminal_resistance: 26.6
  inductance: 0.32
  poles:
mechanical:
  speed_noload: 8200
  speed_nominal: 7600
  torque_nominal: 4
  torque_stall: 29
  torque_continuous_max: 9
  efficiency: 83
  inertia_rotor: 0.85
  gear_ratio:
  gearbox_type: none
  shaft_diameter: 2
  shaft_length: 10
  load_axial_max: 5
  load_radial_max: 10
  force_max:
  payload_tip:
physical:
  diameter: 22
  length: 30
  weight: 56
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
  microcontroller_tested:
    - arduino
    - rpi
    - esp32
drivers:
  - name: Faulhaber MCBL 3006 S
    part: MCBL 3006 S
    type: dedicated
    voltage_range: 12–30 V
    current_continuous: 0.6
    current_peak: 3
    control_in:
      - analog
      - pwm
      - uart
    config_interface: uart
    compatible_mcu:
      - arduino
      - rpi
      - esp32
    circuit: MCU analog/PWM → MCBL 3006 S → 2230
    voltage_supply: 12–30 V (motor powers logic)
    url: https://www.faulhaber.com/en/products/series/mcbl-3006-s/
    notes: Matched Faulhaber driver. Speed control with encoder feedback option. Ultra-compact.
  - name: DRV8833 (TI) — dual H-bridge
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
      - rpi
      - esp32
      - pico
    circuit: MCU 2×PWM → DRV8833 → 2230 (bidirectional)
    voltage_supply: 3.3/5 V (logic) + 3.3–10.8 V (motor)
    url: https://www.ti.com/product/DRV8833
    notes: Simple H-bridge for bidirectional DC control. Coreless motor + DRV8833 = minimal noise floor. Max 10.8V limits speed range — use DRV8871 for 24V.
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
    circuit: MCU 2×PWM → DRV8871 → 2230
    voltage_supply: 3.3/5 V (logic) + 6.5–45 V (motor)
    url: https://www.ti.com/product/DRV8871
    notes: Single H-bridge, 45V. Correct voltage range for 24V Faulhaber. Simple and reliable.
  - name: L298N (already in lab)
    part: L298N
    type: hbridge
    voltage_range: 5–46 V
    current_continuous: 2
    current_peak: 3
    control_in:
      - pwm
    config_interface: none
    compatible_mcu:
      - arduino
      - rpi
      - esp32
    circuit: MCU 2×PWM + EN → L298N → 2230
    voltage_supply: 5 V (logic separate) + 5–46 V (motor)
    url: ""
    notes: Already in lab (Aitrip L298N). Usable for basic control — 1.4V voltage drop in H-bridge limits efficiency. OK for prototyping.
noise:
  acoustic:
    level_db:
    perceived: 0
    character: broadband
    dominant_freq_hz:
    source: bearing
    organological: feature
    notes: "BENCHMARK: coreless DC motors have NO iron core → zero magnetic cogging → the smoothest, quietest rotation available. Only noise is bearing friction. At low speed: virtually silent. Exploitable as acoustic element: bearing hiss adds texture at high rpm."
  vibration:
    perceived: 0
    dominant_freq_hz:
    source: bearing
    notes: Virtually zero structural vibration at nominal speed. Ultra-low rotor inertia (0.85 g·cm²) → negligible coupling.
  emi:
    perceived: 1
    type: back_emf
    shielding_needed: false
    notes: "Brushed motor: minor brush sparking at commutation. Low current → negligible. Add 100nF cap across motor terminals."
  measurement:
    measured: false
    conditions: ""
    date:
organological:
  role: bow
  moves: ""
  instrument_refs: []
  moaie_layer: A
  notes: The quietest motor class for musical robotics. Coreless design eliminates cogging entirely. Ideal for continuous friction bow rotation, smooth tape/ribbon drives, or any mechanism requiring imperceptible mechanical noise. Small diameter (22mm) enables tight embedding in instrument bodies. High no-load speed (8200 rpm) requires gearbox for most organological applications — use Faulhaber's integrated planetary gearbox options.
hyper:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
connect:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
  - "[[H-bridge]]"
  - "[[PWM-speed-control]]"
  - "[[coreless-motor]]"
  - "[[encoder-feedback]]"
  - "[[planetary-gearbox]]"
  - "[[friction-bow-drive]]"
  - "[[embedded-motor-control]]"
  - "[[RT-actuation]]"
  - "[[organological-robotics]]"
bib: ""
---

## Faulhaber 2230 024S (Coreless DC)

**The acoustic benchmark for musical robotics.** Faulhaber's coreless DC motor eliminates the iron stator core entirely — no magnetic cogging, zero periodic torque ripple, pure smooth rotation. The 2230 (22mm diameter, 30mm length) is one of the most widely used precision DC motors in scientific instrumentation. At nominal speed, the only noise source is bearing friction. 83% peak efficiency.

## Actuation Profile

```
MCU PWM → DRV8871 (H-bridge) → 2230 coreless DC → 2mm shaft → [gearbox]
```

| Parameter | Value |
|---|---|
| Nominal voltage | 24 V |
| No-load speed | 8200 rpm |
| Nominal torque | 4.0 mNm (9.0 mNm continuous max) |
| Peak efficiency | 83% |
| Acoustic noise | perceived 0/5 (zero cogging) |

## Organological Notes

Candidate for continuous friction bow: motor runs at constant speed, bow pressure modulated by solenoid or servo. Planetary gearbox (e.g. Faulhaber 22/1) reduces 8200 rpm to useful 100–800 rpm range while preserving the silent rotation. DRV8871 in lab with L298N as backup.

## Noise Profile

| Domain | Level (0–5) | Source | Organological |
|---|---|---|---|
| Acoustic | 0 | bearing only | silent / exploitable |
| Vibration | 0 | near zero | negligible coupling |
| EMI | 1 | brush commutation | 100nF cap across terminals |

## References

```bibtex
@manual{faulhaber_2230,
  author = {{Dr. Fritz Faulhaber GmbH & Co. KG}},
  title  = {DC-Micromotor Series 2230 Technical Data},
  year   = {2022},
  url    = {https://www.faulhaber.com/fileadmin/Import/Media/EN_2230_SR_DFF.PDF},
}
```
