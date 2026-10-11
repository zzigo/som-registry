---
id: pololu_37d_50_1_gearmotor
title: Pololu 37D 50:1 Metal Gearmotor (4752)
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
make: Pololu
model: 37D 50:1 Metal Gearmotor with 64 CPR Encoder
part_number: "4752"
origin: USA (designed) / China (manufactured)
year: 2018
url: https://www.pololu.com/product/4752
img: ""
datasheet: https://www.pololu.com/product/4752
electrical:
  voltage_nominal: 12
  voltage_max: 12
  current_nominal: 1200
  current_noload: 300
  current_stall: 5000
  power_nominal: 13
  back_emf_constant:
  terminal_resistance:
  inductance:
  poles:
mechanical:
  speed_noload: 110
  speed_nominal: 80
  torque_nominal: 4000
  torque_stall: 7000
  torque_continuous_max: 5000
  efficiency: 65
  inertia_rotor:
  gear_ratio: 50
  gearbox_type: spur
  shaft_diameter: 6
  shaft_length: 12
  load_axial_max: 20
  load_radial_max: 50
  force_max:
  payload_tip:
physical:
  diameter: 37
  length: 78
  weight: 190
  mounting: bracket
  protection: none
  operating_temp: 0–40°C
control:
  interface: pwm
  driver_required: true
  encoder: true
  encoder_type: incremental
  encoder_ppr: 64
  feedback: position
  microcontroller_tested:
    - arduino
    - rpi
    - esp32
drivers:
  - name: DRV8833 dual H-bridge
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
    circuit: MCU 2×PWM → DRV8833 → 37D motor
    voltage_supply: 3.3/5 V (logic) + up to 10.8 V (motor)
    url: https://www.ti.com/product/DRV8833
    notes: Sufficient for light loads. For 12V use DRV8871 or L298N.
  - name: L298N (in lab)
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
    circuit: MCU 2×PWM + EN → L298N → 37D motor
    voltage_supply: 5 V logic + 12 V motor
    url: ""
    notes: Already in lab. Works but 1.4V drop reduces effective voltage. Adequate for prototyping.
  - name: Cytron MDD10A
    part: MDD10A
    type: hbridge
    voltage_range: 5–30 V
    current_continuous: 10
    current_peak: 30
    control_in:
      - pwm
      - sign_magnitude
    config_interface: none
    compatible_mcu:
      - arduino
      - rpi
      - esp32
    circuit: MCU PWM+DIR → MDD10A → 37D motor
    voltage_supply: 5 V logic + 12 V motor
    url: https://www.cytron.io/p-10amp-5v-30v-dc-motor-driver-2-channels
    notes: 10A continuous — overkill for this motor but useful when motor stalls (5A stall). Recommended for high-load applications.
noise:
  acoustic:
    level_db:
    perceived: 3
    character: tonal
    dominant_freq_hz:
    source: gear
    organological: interference
    notes: "Spur metal gearbox generates gear mesh noise — the dominant acoustic source. At low speed (<50 rpm): moderate whir. At high speed: significant tonal content. Anti-vibration mounting reduces structural transmission. Not ideal for quiet acoustic contexts — consider Faulhaber + planetary gearbox instead."
  vibration:
    perceived: 3
    dominant_freq_hz:
    source: gear
    notes: Gear mesh vibration transmitted to mount. Silicone damping mount recommended.
  emi:
    perceived: 2
    type: brush_sparking
    shielding_needed: true
    notes: Brushed motor at 5A stall current — substantial EMI. Use ferrite beads + 100nF across motor terminals.
  measurement:
    measured: false
    conditions: ""
    date:
organological:
  role: general
  moves: ""
  instrument_refs: []
  moaie_layer: A
  notes: "High torque at low cost — the practical workhorse when acoustic isolation can be implemented (separate chamber, damping mounts). 7 Nm stall torque opens heavy-load applications: large bow mechanisms, tensioning thick strings, rotating heavy resonating bodies. Integrated encoder (3200 CPR effective) enables closed-loop position control. Noise is the trade-off: use only where gear mesh can be acoustically isolated or exploited."
hyper:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
connect:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
  - "[[H-bridge]]"
  - "[[PWM-speed-control]]"
  - "[[encoder-feedback]]"
  - "[[PID-speed-control]]"
  - "[[vibration-isolation]]"
  - "[[spur-gearbox]]"
  - "[[embedded-motor-control]]"
  - "[[RT-actuation]]"
  - "[[organological-robotics]]"
bib: ""
---

## Pololu 37D 50:1 Metal Gearmotor (4752)

High-torque brushed DC with integrated 50:1 spur gearbox and 64 CPR encoder. The strongest DC motor in the catalog at lowest cost. Trade-off: spur gearbox generates audible gear mesh noise (perceived 3/5). Use when force requirements exceed coreless DC capability and acoustic isolation can be implemented via damping mount or spatial separation.

## Noise Profile

| Domain | Level (0–5) | Source | Organological |
|---|---|---|---|
| Acoustic | 3 | spur gear mesh | interference — isolate |
| Vibration | 3 | gear mesh | damping mount required |
| EMI | 2 | brush sparking | ferrite + 100nF cap |

## References

```bibtex
@misc{pololu_4752,
  author = {{Pololu Corporation}},
  title  = {37D Metal Gearmotor 50:1 with 64 CPR Encoder, 12V},
  year   = {2018},
  url    = {https://www.pololu.com/product/4752},
}
```
