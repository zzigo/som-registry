---
id: maxon_ec_226008
title: Maxon EC Motor 226008
tags:
  - dss
  - dss/mat/automat
  - automat
  - automat/bldc
category: 1mat
type: automat
status: stub
modified: 2026-06-17
subtype: bldc
actuation_domain: rotary
motion_output: rotation
autonomy: embedded
make: Maxon
model: EC 226008
part_number: "226008"
origin: Switzerland
year: ~2000
url: https://www.maxongroup.com
img: ""
datasheet: ""
electrical:
  voltage_nominal:
  voltage_max:
  current_nominal: 450
  current_noload:
  current_stall:
  power_nominal:
  back_emf_constant:
  terminal_resistance:
  inductance:
  poles:
mechanical:
  speed_noload: 2000
  speed_nominal:
  torque_nominal:
  torque_stall:
  torque_continuous_max:
  efficiency:
  inertia_rotor:
  gear_ratio:
  gearbox_type: none
  shaft_diameter:
  shaft_length:
physical:
  diameter:
  length:
  weight:
  mounting: flange
  protection: none
  operating_temp: ""
control:
  interface: pwm
  driver_required: true
  encoder: true
  encoder_type: incremental
  encoder_ppr:
  feedback: position
  microcontroller_tested: []
drivers:
  - name: Maxon ESCON 50/5
    part: "354537"
    type: dedicated
    voltage_range: 10–50 V
    current_continuous: 5
    current_peak: 15
    control_in:
      - pwm
      - analog
    config_interface: usb
    compatible_mcu:
      - arduino
      - rpi
      - esp32
      - teensy
      - pico
    circuit: MCU PWM (1–2 kHz, 10–90%) → ESCON 50/5 → 3-phase BLDC
    voltage_supply: 3.3/5 V (logic) + 10–50 V (motor)
    url: https://www.maxongroup.com/maxon/view/product/control/4-Q-Servokontroller/354537
    notes: Gold standard for this motor. Closed-loop speed/torque via encoder. Configure with ESCON Studio (USB). Enable pin + direction pin sufficient from MCU.
  - name: Maxon EPOS4 Compact 50/8
    part: "519038"
    type: dedicated
    voltage_range: 11–50 V
    current_continuous: 8
    current_peak: 16
    control_in:
      - can
      - usb
      - uart
    config_interface: usb
    compatible_mcu:
      - rpi
      - arduino
      - esp32
      - teensy
    circuit: MCU CAN/USB → EPOS4 → 3-phase BLDC (full position/velocity/torque control)
    voltage_supply: 3.3/5 V (logic) + 11–50 V (motor)
    url: https://www.maxongroup.com/maxon/view/product/control/Positionierung/519038
    notes: "Full motion controller: position, velocity, torque modes. CANopen + EtherCAT. Overkill for simple rotation but ideal for synchronized multi-axis OKA setups."
  - name: ODrive v3.6
    part: ODrive-v3.6-56V
    type: esc
    voltage_range: 12–56 V
    current_continuous: 40
    current_peak: 60
    control_in:
      - uart
      - can
      - pwm
      - step_dir
      - analog
    config_interface: usb
    compatible_mcu:
      - arduino
      - rpi
      - esp32
      - teensy
      - pico
    circuit: MCU UART/CAN → ODrive → 3-phase BLDC (+ encoder feedback)
    voltage_supply: 3.3/5 V (logic) + 12–56 V (motor)
    url: https://odriverobotics.com
    notes: Open-source, 2-axis. Requires motor calibration sequence on first run. Supports hall + incremental encoder. Excellent price/performance ratio for lab prototyping.
  - name: VESC 6 (Benjamin Vedder ESC)
    part: VESC-6-MkVI
    type: vesc
    voltage_range: 8–60 V
    current_continuous: 50
    current_peak: 100
    control_in:
      - uart
      - can
      - pwm
      - ppm
      - analog
      - nrf
    config_interface: usb
    compatible_mcu:
      - arduino
      - rpi
      - esp32
      - teensy
    circuit: MCU UART → VESC → 3-phase BLDC
    voltage_supply: 5 V (logic, USB) + 8–60 V (motor)
    url: https://vesc-project.com
    notes: Open-source, highly configurable. UART library available for Arduino/ESP32. Supports FOC (Field Oriented Control) for ultra-smooth low-speed operation — reduces cogging noise significantly. Preferred for acoustic-sensitive contexts.
  - name: DRV8302 breakout (TI)
    part: DRV8302
    type: drv
    voltage_range: 8–45 V
    current_continuous: 2.5
    current_peak:
    control_in:
      - pwm
      - spi
    config_interface: spi
    compatible_mcu:
      - arduino
      - esp32
      - teensy
      - stm32
    circuit: MCU SPI + 3×PWM → DRV8302 gate driver → external MOSFETs → 3-phase BLDC
    voltage_supply: 3.3/5 V (logic) + 8–45 V (motor)
    url: https://www.ti.com/product/DRV8302
    notes: Gate driver IC — requires external FETs for full current. DIY-friendly for custom PCB designs. Good for custom OKA embedded boards. Needs 3-phase PWM generation (e.g. STM32 TIM1 or Teensy analogWriteFrequency).
noise:
  acoustic:
    level_db:
    perceived: 1
    character: tonal
    dominant_freq_hz:
    source: bearing
    organological: context-dependent
    notes: At low RPM (<300), cogging creates periodic 'notch' vibrations audible if motor is coupled to resonant body. At nominal speed, near-silent. FOC mode on VESC eliminates most cogging.
  vibration:
    perceived: 1
    dominant_freq_hz:
    source: rotor_imbalance
    notes: Flat disc form factor may transmit vibration to instrument body if hard-mounted. Use compliant mount (silicone standoffs) to decouple if vibration is unwanted.
  emi:
    perceived: 2
    type: pwm_harmonics
    shielding_needed: true
    notes: PWM harmonics can couple into sensor circuits (microphones, piezo pickups) if cabling is unshielded. Twisted pair for phase wires + ferrite beads at driver output recommended.
  measurement:
    measured: false
    conditions: ""
    date:
organological:
  role: general
  moves: ""
  instrument_refs: []
  moaie_layer: A
  notes: |
    High-precision Swiss brushless motor with integrated encoder feedback. The flat pancake form factor is advantageous for thin instrument bodies or turntable/rotor assemblies. Sub-milliamp control resolution via ESCON driver enables nuanced expressive actuation. Candidate for bowed-string automation, friction-driven resonator control, or rotating-mass acoustic excitation in speculative organology.
hyper:
  - "[[03-thesis/03-soog/1mat/automats/automats]]"
connect: []
bib: ""
---

## Maxon EC Motor 226008

A Swiss-made brushless DC (EC = electronically commutated) motor by Maxon Group, identifiable by part number 226008. The flat pancake body and integrated FFC ribbon-cable encoder board suggest a disc-rotor topology optimized for low axial height and high torque density. Label reads: `226008 · 555/450 · swiss made · 2000` — exact interpretation of `555/450` and `2000` pending datasheet confirmation.

> [!warning] Stub
> Electrical and mechanical specs require datasheet verification. Fields marked `null` must be populated. Retrieve from [Maxon product portal](https://www.maxongroup.com) using part number 226008.

## Actuation Profile

```
PWM signal → ESCON/EPOS driver → 3-phase BLDC commutation → Disc rotor → Output shaft
                                                           ↑
                                                  Hall/encoder feedback
```

| Parameter | Value |
|---|---|
| Nominal voltage | — (confirm) |
| No-load speed | ~2000 rpm (label) |
| Nominal current | ~450 mA (label) |
| Interface | PWM via ESCON or EPOS |
| Encoder | Yes — integrated via FFC ribbon |
| Form factor | Flat disc / pancake |
| Origin | Switzerland |

## Organological Notes

The pancake geometry is acoustically and mechanically relevant: minimal axial footprint allows embedding within instrument bodies without protruding shaft mechanisms. The precision encoder feedback (sub-degree resolution typical of Maxon EC encoders) allows closed-loop position control — enabling controlled bowing speed, string tension modulation, or periodic excitation patterns that can be synchronized with compositional time structures.

Candidate use cases within OKA instruments:
- Rotating friction bow (rosin-coated disc pressing against string)
- Variable-tension string driver (shaft coupled to tensioning screw)
- Rotating resonant mass for acoustic amplitude modulation

## Driver Options

| Driver | Type | Voltage | I_cont | Control in | MCU | Circuit |
|---|---|---|---|---|---|---|
| Maxon ESCON 50/5 | dedicated | 10–50 V | 5 A | PWM / analog | any | MCU PWM → ESCON → motor |
| Maxon EPOS4 Compact | dedicated | 11–50 V | 8 A | CAN / USB | any | MCU CAN → EPOS4 → motor |
| ODrive v3.6 | ESC open | 12–56 V | 40 A | UART / CAN / PWM | any | MCU UART → ODrive → motor |
| VESC 6 | ESC open | 8–60 V | 50 A | UART / CAN / PWM | any | MCU UART → VESC → motor |
| DRV8302 + FETs | gate driver | 8–45 V | FET-limited | SPI + 3×PWM | arduino/STM32 | MCU → DRV8302 → FETs → motor |

**Recommended for OKA lab:** VESC 6 (FOC mode → minimal cogging noise) or ESCON 50/5 (maximum precision, direct Maxon integration). For RPi: UART to VESC or ODrive. For Arduino: UART to VESC (`VescUart` library) or PWM to ESCON.

**Voltage supply:** motor circuit needs 10–50 V DC (bench PSU or 3S–12S LiPo); logic side 3.3 V / 5 V from MCU's own supply. Keep power rails separate with common ground.

## Noise Profile

| Domain | Level (0–5) | dB(A) | Character | Source | Organological |
|---|---|---|---|---|---|
| Acoustic | 1 | — | tonal | bearing + cogging | context-dependent |
| Vibration | 1 | — | periodic | rotor disc | decouple mount |
| EMI | 2 | — | pwm harmonics | driver switching | shield cables |

> [!note] Measurement status
> `measured: false` — values estimated. BLDC/brushless advantage: no brush sparking, near-silent at nominal RPM. Cogging audible below ~300 rpm; use **FOC mode** (VESC) to eliminate. Measure in lab: free-run at 500/1000/2000 rpm, mic at 10 cm and 1 m, record spectrum.

## References

```bibtex
@manual{maxon_ec_226008,
  author       = {{Maxon Group}},
  title        = {EC Motor Product Line — Brushless DC Motors},
  institution  = {Maxon Group AG, Sachseln, Switzerland},
  year         = {2000},
  url          = {https://www.maxongroup.com},
  note         = {Part number 226008; specifications pending full datasheet retrieval},
}
```
