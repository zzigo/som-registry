---
tags:
  - dss
  - dss/mat/automat
  - moc
  - automat
category: 1mat
type: moc
status: operational
modified: 2026-06-17
---

# Automats — Mechanical Actuator Catalog

MOC for all actuators, motors, servos, and mechatronic drivers within the OKA/SOOG material layer. Covers any mechanism that produces **controllable physical motion** from an electrical signal — whether driven by embedded computing, autonomous feedback loops, or direct DC excitation.

Subtypes tracked: `dc_motor` · `bldc` · `servo` · `stepper` · `linear_actuator` · `solenoid` · `pneumatic` · `piezo` · `sma`

---

## Index

```dataview
TABLE WITHOUT ID
  file.link AS Entry,
  subtype AS Type,
  make + " " + model AS Model,
  mechanical.torque_nominal + " mNm" AS Torque,
  mechanical.speed_nominal + " rpm" AS Speed,
  control.interface AS Interface,
  organological.role AS Role,
  status AS Status
FROM "03-thesis/03-soog/1mat/automats"
WHERE type = "automat"
SORT subtype ASC, make ASC
```

---

## By Actuation Domain

### Rotary

```dataview
LIST file.link
FROM "03-thesis/03-soog/1mat/automats"
WHERE type = "automat" AND actuation_domain = "rotary"
SORT make ASC
```

### Linear

```dataview
LIST file.link
FROM "03-thesis/03-soog/1mat/automats"
WHERE type = "automat" AND actuation_domain = "linear"
SORT make ASC
```

### Oscillatory / Vibration

```dataview
LIST file.link
FROM "03-thesis/03-soog/1mat/automats"
WHERE type = "automat" AND actuation_domain = "oscillatory"
SORT make ASC
```

---

## Control Interface Breakdown

```dataviewjs
const pages = dv.pages('"03-thesis/03-soog/1mat/automats"')
  .where(p => p.type === "automat");

const groups = {};
for (const p of pages) {
  const iface = p.control?.interface ?? "unknown";
  groups[iface] = (groups[iface] ?? 0) + 1;
}

dv.paragraph("**By control interface:**");
for (const [iface, count] of Object.entries(groups).sort()) {
  dv.paragraph(`- \`${iface}\` — ${count}`);
}
```

---

## Organological Role Breakdown

```dataviewjs
const pages = dv.pages('"03-thesis/03-soog/1mat/automats"')
  .where(p => p.type === "automat");

const roles = {};
for (const p of pages) {
  const role = p.organological?.role ?? "unclassified";
  roles[role] = (roles[role] ?? 0) + 1;
}

dv.paragraph("**By organological role:**");
for (const [role, count] of Object.entries(roles).sort()) {
  dv.paragraph(`- \`${role}\` — ${count}`);
}
```

---

## .base — Raw Data Table

```dataviewjs
const pages = dv.pages('"03-thesis/03-soog/1mat/automats"')
  .where(p => p.type === "automat")
  .sort(p => p.make, "asc");

const rows = pages.map(p => [
  p.file.link,
  p.subtype ?? "—",
  p.make ?? "—",
  p.model ?? "—",
  p.part_number ?? "—",
  p.electrical?.voltage_nominal != null ? p.electrical.voltage_nominal + " V" : "—",
  p.mechanical?.speed_nominal != null ? p.mechanical.speed_nominal + " rpm" : "—",
  p.mechanical?.torque_nominal != null ? p.mechanical.torque_nominal + " mNm" : "—",
  p.mechanical?.efficiency != null ? p.mechanical.efficiency + "%" : "—",
  p.control?.interface ?? "—",
  p.control?.encoder ? "✓" : "✗",
  p.physical?.diameter != null ? p.physical.diameter + " mm" : "—",
  p.organological?.role ?? "—",
  p.status ?? "—"
]);

dv.table(
  ["Entry", "Subtype", "Make", "Model", "Part#", "Vnom", "RPM nom", "Torque nom", "η%", "Interface", "Enc", "⌀", "Org. Role", "Status"],
  rows
);
```

---

*Template: [[t-automats]] · Parent: [[1mat]] · System: [[soog-dashboard]]*
