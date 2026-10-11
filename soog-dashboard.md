---
tags: [[dss, dss/ops, dashboard, moaie, soog]]
category: 0dict
type: schema
status: operational
updated: 2026-06-08
---



Central monitoring view for the SOOG knowledge graph. Use this to check graph coherence, MOAIE coverage, and node status across all six categories.

```dataviewjs
// SOOG MOAIE Dashboard for Obsidian DataviewJS — DYNAMIC.
// Instruments are NOT hardcoded. The registry is read live from the case-instruments
// folder: any node with type: instrument and a 5-value moaie.vector appears automatically.
// Tick the instruments you want to overlay on the MOAIE and interface-profile radars.
// Requires internet access for Chart.js CDN unless Chart.js is already available.

const root = dv.el("div", "", {
  attr: { class: "soog-dashboard" }
});

root.innerHTML = `
<style>
.soog-dashboard {
  --soog-bg-soft: color-mix(in srgb, var(--background-modifier-border) 18%, transparent);
  --soog-bg-card: color-mix(in srgb, var(--background-primary) 88%, transparent);
  --soog-bg-button: color-mix(in srgb, var(--background-secondary) 85%, transparent);
  --soog-text: var(--text-normal);
  --soog-muted: var(--text-muted);
  --soog-faint: var(--text-faint);
  --soog-border: color-mix(in srgb, var(--text-normal) 14%, transparent);

  box-sizing: border-box;
  font-family: var(--font-interface);
  background: transparent;
  color: var(--soog-text);
  max-width: 900px;
  margin: auto;
  padding: 1rem 0;
}

.soog-dashboard *,
.soog-dashboard *::before,
.soog-dashboard *::after {
  box-sizing: border-box;
}

.soog-dashboard h1 {
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 .25rem 0;
  color: var(--soog-text);
}

.soog-sub {
  font-size: 13px;
  color: var(--soog-muted);
  margin-bottom: 2rem;
}

.soog-section {
  margin: 2rem 0;
}

.soog-section-label {
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: .06em;
  color: var(--soog-muted);
  margin-bottom: .75rem;
}

.soog-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 8px;
  margin-bottom: 1.5rem;
}

.soog-card {
  background: var(--soog-bg-card);
  border: 0.5px solid var(--soog-border);
  border-radius: 8px;
  padding: .75rem 1rem;
}

.soog-card-val {
  font-size: 24px;
  font-weight: 500;
  color: var(--soog-text);
}

.soog-card-lbl {
  font-size: 12px;
  color: var(--soog-muted);
  margin-top: 2px;
}

.soog-instrument-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  align-items: start;
}

.soog-inst-select {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 1rem;
}

.soog-inst-btn {
  background: var(--soog-bg-button);
  border: 0.5px solid var(--soog-border);
  border-radius: 8px;
  padding: 5px 14px;
  font-size: 13px;
  cursor: pointer;
  color: var(--soog-muted);
  transition: all .15s;
}

.soog-inst-btn:hover {
  color: var(--soog-text);
  border-color: color-mix(in srgb, var(--text-normal) 28%, transparent);
}

.soog-inst-btn.active {
  border-color: color-mix(in srgb, var(--text-normal) 34%, transparent);
  color: var(--soog-text);
  background: var(--soog-bg-card);
}

.soog-inst-meta {
  font-size: 13px;
  color: var(--soog-muted);
  line-height: 1.8;
}

.soog-inst-meta strong {
  color: var(--soog-text);
  font-weight: 500;
}

.soog-vector-title {
  margin-top: 1rem;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: .04em;
  color: var(--soog-faint);
  margin-bottom: .5rem;
  text-transform: uppercase;
}

.soog-vector-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 5px 0;
}

.soog-vector-label {
  width: 16px;
  font-size: 12px;
  font-weight: 500;
  color: var(--soog-muted);
}

.soog-vector-bar-wrap {
  flex: 1;
  background: var(--soog-bg-button);
  border-radius: 4px;
  height: 8px;
  overflow: hidden;
}

.soog-vector-bar {
  height: 100%;
  border-radius: 4px;
  transition: width .4s cubic-bezier(.4,0,.2,1);
}

.soog-vector-val {
  font-size: 11px;
  color: var(--soog-faint);
  width: 28px;
  text-align: right;
}

.soog-connect {
  margin-top: .75rem;
  font-size: 12px;
  color: var(--soog-muted);
}

.soog-connect-label {
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: .04em;
  color: var(--soog-faint);
}

.soog-node-tag {
  background: var(--soog-bg-button);
  border: 0.5px solid var(--soog-border);
  border-radius: 4px;
  padding: 1px 6px;
  font-size: 11px;
  margin: 2px;
  display: inline-block;
}

.soog-node-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 6px;
}

.soog-node-pill {
  background: var(--soog-bg-card);
  border: 0.5px solid var(--soog-border);
  border-radius: 6px;
  padding: 7px 10px;
}

.soog-node-cat {
  font-size: 10px;
  font-weight: 500;
  color: var(--soog-faint);
  text-transform: uppercase;
  letter-spacing: .04em;
}

.soog-node-name {
  font-size: 12px;
  color: var(--soog-text);
  margin-top: 2px;
}

.soog-node-type {
  font-size: 11px;
  color: var(--soog-muted);
}

.soog-status-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-right: 4px;
  vertical-align: 2px;
}

.soog-status-validated { background: #1D9E75; }
.soog-status-draft { background: #EF9F27; }
.soog-status-stub { background: var(--text-muted); }
.soog-status-speculative { background: #7F77DD; }
.soog-status-fictional { background: #8A8A9A; }

.soog-gap-item {
  font-size: 13px;
  color: var(--soog-muted);
  padding: 6px 0;
  border-bottom: 0.5px solid color-mix(in srgb, var(--text-normal) 8%, transparent);
  display: flex;
  gap: 10px;
  align-items: baseline;
}

.soog-gap-cat {
  font-size: 11px;
  font-weight: 500;
  color: var(--soog-faint);
  min-width: 36px;
}

.soog-radar-wrap {
  position: relative;
  height: 260px;
}

.soog-profile-note {
  font-size: 12px;
  color: var(--soog-muted);
  margin-bottom: 1rem;
}

.soog-profile-wrap {
  position: relative;
  height: 360px;
}

.soog-error {
  border: 0.5px solid var(--soog-border);
  background: var(--soog-bg-card);
  color: var(--soog-muted);
  border-radius: 8px;
  padding: 1rem;
  font-size: 13px;
}

.soog-sel-controls { display:flex; gap:6px; margin-bottom:.75rem; }
.soog-inst-checks { display:grid; grid-template-columns:repeat(auto-fill,minmax(170px,1fr)); gap:5px; }
.soog-check { display:flex; align-items:center; gap:7px; padding:5px 9px; border:0.5px solid var(--soog-border); border-radius:6px; cursor:pointer; font-size:12px; color:var(--soog-muted); background:var(--soog-bg-button); transition:all .15s; }
.soog-check.on { color:var(--soog-text); background:var(--soog-bg-card); border-color:color-mix(in srgb,var(--text-normal) 30%,transparent); }
.soog-check input { margin:0; cursor:pointer; }
.soog-check-name { flex:1; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.soog-check-meta { font-size:10px; color:var(--soog-faint); }
.soog-check-dot { width:6px; height:6px; border-radius:50%; flex:none; }
.soog-compare-row { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; align-items:start; }
.soog-meta-row { display:flex; gap:8px; align-items:flex-start; margin:7px 0; font-size:13px; color:var(--soog-muted); line-height:1.5; }
.soog-meta-swatch { width:10px; height:10px; border-radius:2px; margin-top:4px; flex:none; }
.soog-meta-row strong { color:var(--soog-text); font-weight:500; }

@media (max-width: 700px) {
  .soog-instrument-row { grid-template-columns: 1fr; }
  .soog-compare-row { grid-template-columns: 1fr; }
}
</style>

<h1>SOOG MOAIE Dashboard</h1>
<div class="soog-sub">Dynamic registry · reads completed instrument nodes from the case-instruments folder · Speculative Organology</div>

<div class="soog-section">
  <div class="soog-section-label">Knowledge graph stats</div>
  <div class="soog-cards">
    <div class="soog-card"><div class="soog-card-val" data-role="stat-inst">-</div><div class="soog-card-lbl">Instruments (full MOAIE)</div></div>
    <div class="soog-card"><div class="soog-card-val" data-role="stat-incomplete">-</div><div class="soog-card-lbl">Pending vector</div></div>
    <div class="soog-card"><div class="soog-card-val" data-role="stat-nodes">-</div><div class="soog-card-lbl">SOOG nodes active</div></div>
    <div class="soog-card"><div class="soog-card-val" data-role="stat-gaps">-</div><div class="soog-card-lbl">Coverage gaps</div></div>
  </div>
</div>

<div class="soog-section">
  <div class="soog-section-label">Select instruments to compare</div>
  <div class="soog-sel-controls">
    <button class="soog-inst-btn" data-role="sel-all">Select all</button>
    <button class="soog-inst-btn" data-role="sel-none">Clear</button>
  </div>
  <div class="soog-inst-checks" data-role="inst-checks"></div>
</div>

<div class="soog-section">
  <div class="soog-section-label">MOAIE vector · interface profile — selected instruments</div>
  <div class="soog-compare-row">
    <div>
      <div class="soog-vector-title">MOAIE vector — M O A I E</div>
      <div class="soog-radar-wrap"><canvas data-role="moaie-radar" role="img" aria-label="MOAIE radar — five axes M O A I E, 0 to 1, one series per selected instrument."></canvas></div>
    </div>
    <div>
      <div class="soog-vector-title">Interface profile — 10 dimensions</div>
      <div class="soog-profile-wrap"><canvas data-role="profile-radar" role="img" aria-label="Interface profile radar — 10 dimensions, one series per selected instrument."></canvas></div>
    </div>
  </div>
  <div class="soog-inst-meta" data-role="inst-meta"></div>
</div>

<div class="soog-section">
  <div class="soog-section-label">Active SOOG nodes</div>
  <div class="soog-node-grid" data-role="node-grid"></div>
</div>

<div class="soog-section">
  <div class="soog-section-label">Coverage gaps</div>
  <div data-role="gaps"></div>
</div>
`;

const $ = (role) => root.querySelector(`[data-role="${role}"]`);

// ── config ──────────────────────────────────────────────────────────
const SOURCE = '"03-thesis/cases/case instruments" or "03-thesis/cases/case instruments fictional"';
const PROFILE_KEYS = ["affordance","liveness","playability","learnability","situatedness","mediality","mapping","sensorimotor_scheme","ergonomics","expressivity"];
const PROFILE_LABELS = ["Affordance","Liveness","Playability","Learnability","Situatedness","Mediality","Mapping","Sensorimotor","Ergonomics","Expressivity"];
const AXIS = ["M","O","A","I","E"];
const PALETTE = ["#1D9E75","#3266ad","#A32D2D","#7F77DD","#EF9F27","#2AACBB","#D4602A","#B2983E","#8A8A9A","#1C3C78","#C0518A","#5BA646"];
const DEFAULT_N = 4;

function nm(x){ if(x==null) return null; if(typeof x==="string") return x.replace(/\[\[|\]\]/g,"").trim(); if(x.path) return String(x.path).split("/").pop().replace(/\.md$/,""); if(x.display) return x.display; return String(x); }
function num(x){ const n = Number(x); return isFinite(n) ? n : 0; }
function rgba(hex,a){ const h=hex.replace("#",""); return `rgba(${parseInt(h.slice(0,2),16)},${parseInt(h.slice(2,4),16)},${parseInt(h.slice(4,6),16)},${a})`; }

// ── kept SOOG-node + gap summaries (hand-maintained) ────────────────
const nodes = [
  { cat: "4int", name: "tip-surface-coupling", type: "excitation", status: "validated" },
  { cat: "1mat", name: "soundboard-material-filter", type: "material", status: "validated" },
  { cat: "2obj", name: "tip-surface-resonator", type: "object", status: "validated" },
  { cat: "0-pri", name: "nonlinear-contact-modulation", type: "principle", status: "validated" },
  { cat: "0-pri", name: "co-performer", type: "paradigm", status: "validated" },
  { cat: "0-pri", name: "cantilever oscillation", type: "principle", status: "validated" },
  { cat: "0-pri", name: "doppelganger", type: "paradigm", status: "draft" },
  { cat: "0-pri", name: "chimera", type: "paradigm", status: "draft" },
  { cat: "0-pri", name: "oracle", type: "paradigm", status: "draft" },
  { cat: "0-pri", name: "parasite", type: "paradigm", status: "draft" },
  { cat: "2obj", name: "flat plate", type: "object", status: "draft" },
  { cat: "3agn", name: "humans", type: "agent-human", status: "stub" },
  { cat: "4int", name: "acoustic-feedback-fingerboard", type: "excitation", status: "validated" },
  { cat: "2obj", name: "lute-body-resonator", type: "object", status: "speculative" },
  { cat: "4int", name: "fingertip-microphone-array", type: "sensor", status: "speculative" }
];

const gaps = [
  { cat: "5env", label: "5env/ sparse — hyperreality and air nodes exist; no underwater, distributed, or networked environment nodes" },
  { cat: "3agn", label: "Generic stubs only — no instrument-specific agent nodes; 7lis schema not yet applied to individual agent files" },
  { cat: "1mat", label: "2 nodes only (string, wood) — no piezo, foam, PLA, acrylic, metal, or synthetic-morphogenic material nodes" },
  { cat: "0-pri", label: "AI paradigm nodes (chimera, oracle, parasite) still drafts; fictional/ nodes (crystallization, proximity-activation, dissolution-by-contact)" },
  { cat: "vec", label: "Vector codebook undefined — float values are provisional design estimates; no measurement protocol for I and E" }
];

// ── dynamic registry from the case-instruments folder ───────────────
const raw = dv.pages(SOURCE).where(p => p.type === "instrument").array();
const registry = [];
let incompleteCount = 0;
for (const p of raw) {
  const v = p.moaie ? p.moaie.vector : null;
  const vec = v ? Array.from(v).map(num) : null;
  if (!vec || vec.length !== 5) { incompleteCount++; continue; }
  const ip = p.interface_profile;
  const profile = ip ? PROFILE_KEYS.map(k => num(ip[k])) : null;
  registry.push({
    key: p.file.path,
    title: nm(p.title) || p.file.name,
    person: nm(p.person) || "—",
    year: (p.year ?? "—"),
    family: p.family || "—",
    sh: p["sachs-hornbostel"] || "—",
    layer: p.layer || "—",
    status: p.status || "—",
    recursive: !!(p.moaie && p.moaie.recursive),
    vector: vec,
    profile: profile,
    connect: (p.connect ? Array.from(p.connect) : []).map(nm).filter(Boolean)
  });
}
registry.sort((a, b) => String(a.title).localeCompare(String(b.title)));

const selected = new Set(registry.slice(0, DEFAULT_N).map(r => r.key));

// ── static panels ───────────────────────────────────────────────────
$("stat-inst").textContent = registry.length;
$("stat-incomplete").textContent = incompleteCount;
$("stat-nodes").textContent = nodes.length;
$("stat-gaps").textContent = gaps.length;

$("node-grid").innerHTML = nodes.map(n => `
  <div class="soog-node-pill">
    <div class="soog-node-cat">${n.cat}</div>
    <div class="soog-node-name"><span class="soog-status-dot soog-status-${n.status}"></span>${n.name}</div>
    <div class="soog-node-type">${n.type}</div>
  </div>`).join("");

$("gaps").innerHTML = gaps.map(g => `
  <div class="soog-gap-item"><span class="soog-gap-cat">${g.cat}</span><span>${g.label}</span></div>`).join("");

// ── selection UI ────────────────────────────────────────────────────
function renderChecks() {
  $("inst-checks").innerHTML = registry.length ? registry.map(r => `
    <label class="soog-check ${selected.has(r.key) ? "on" : ""}" data-key="${r.key.replace(/"/g,"&quot;")}">
      <input type="checkbox" ${selected.has(r.key) ? "checked" : ""}/>
      <span class="soog-check-dot soog-status-${r.status}"></span>
      <span class="soog-check-name">${r.title}</span>
      <span class="soog-check-meta">${r.year}</span>
    </label>`).join("") : `<div class="soog-error">No completed instrument nodes in the case-instruments folder. Add a node with a 5-value moaie.vector to make it appear here.</div>`;

  $("inst-checks").querySelectorAll(".soog-check").forEach(el => {
    el.addEventListener("change", () => {
      const k = el.dataset.key;
      if (selected.has(k)) selected.delete(k); else selected.add(k);
      el.classList.toggle("on", selected.has(k));
      renderAll();
    });
  });
}

$("sel-all").addEventListener("click", () => { registry.forEach(r => selected.add(r.key)); renderChecks(); renderAll(); });
$("sel-none").addEventListener("click", () => { selected.clear(); renderChecks(); renderAll(); });

function renderMeta(sel) {
  $("inst-meta").innerHTML = sel.length ? sel.map((r, i) => `
    <div class="soog-meta-row">
      <span class="soog-meta-swatch" style="background:${PALETTE[i % PALETTE.length]}"></span>
      <div><strong>${r.title}</strong> <span style="color:var(--soog-faint)">· ${r.year} · ${r.person}</span><br>
      <span style="font-size:11px">[${r.vector.map(x => x.toFixed(2)).join(", ")}] · ${r.layer} · recursive ${r.recursive ? "yes" : "no"} · ${r.family} · SH ${r.sh}</span></div>
    </div>`).join("") : `<div class="soog-inst-meta">No instruments selected.</div>`;
}

// ── charts ──────────────────────────────────────────────────────────
let moaieChart = null, profileChart = null;
function cssVar(n, f) { const v = getComputedStyle(document.body).getPropertyValue(n).trim(); return v || f; }
function theme() { return { text: cssVar("--text-normal", "#2c2c2a"), muted: cssVar("--text-muted", "#888780"), grid: "rgba(128,128,128,.22)" }; }
function radarOpts(t, legend) {
  return { responsive: true, maintainAspectRatio: false,
    plugins: { legend: legend ? { display: true, position: "bottom", labels: { font: { size: 11 }, color: t.text, boxWidth: 12, padding: 14 } } : { display: false } },
    scales: { r: { min: 0, max: 1, ticks: { stepSize: .25, font: { size: 9 }, backdropColor: "transparent", color: t.muted }, grid: { color: t.grid }, angleLines: { color: t.grid }, pointLabels: { font: { size: 12, weight: "500" }, color: t.text } } } };
}
function ds(r, i) { const c = PALETTE[i % PALETTE.length]; return { label: r.title, fill: true, backgroundColor: rgba(c, .10), borderColor: c, borderWidth: 1.5, pointBackgroundColor: c, pointRadius: 2.5 }; }

function renderCharts(sel) {
  if (!window.Chart) return;
  const t = theme();
  if (moaieChart) moaieChart.destroy();
  moaieChart = new Chart($("moaie-radar").getContext("2d"), {
    type: "radar",
    data: { labels: AXIS, datasets: sel.map((r, i) => ({ ...ds(r, i), data: r.vector })) },
    options: radarOpts(t, false)
  });
  const withP = sel.map((r, i) => ({ r, i })).filter(o => o.r.profile);
  if (profileChart) profileChart.destroy();
  profileChart = new Chart($("profile-radar").getContext("2d"), {
    type: "radar",
    data: { labels: PROFILE_LABELS, datasets: withP.map(o => ({ ...ds(o.r, o.i), data: o.r.profile })) },
    options: radarOpts(t, true)
  });
}

function renderAll() {
  const sel = registry.filter(r => selected.has(r.key));
  renderMeta(sel);
  renderCharts(sel);
}

// ── Chart.js loader ─────────────────────────────────────────────────
function loadChartJs() {
  if (window.Chart) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const ex = document.querySelector('script[data-soog-chartjs="true"]');
    if (ex) { ex.addEventListener("load", resolve); ex.addEventListener("error", reject); return; }
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js";
    s.dataset.soogChartjs = "true"; s.onload = resolve; s.onerror = reject;
    document.head.appendChild(s);
  });
}

renderChecks();

loadChartJs().then(() => {
  renderAll();
  const observer = new MutationObserver(() => renderAll());
  observer.observe(document.body, { attributes: true, attributeFilter: ["class", "style"] });
}).catch(() => {
  const error = document.createElement("div");
  error.className = "soog-error";
  error.textContent = "Chart.js could not be loaded. Check internet access or replace the CDN with a local Chart.js file.";
  root.appendChild(error);
  renderMeta(registry.filter(r => selected.has(r.key)));
});
```


---

## Instrument Registry

All nodes with `type: instrument` across the vault:

```dataview
TABLE
  moaie.vector AS "Vector [M,O,A,I,E]",
  moaie.recursive AS "Recursive",
  sachs-hornbostel AS "SH Code",
  person AS "Maker",
  year AS "Year",
  status AS "Status"
FROM "03-thesis"
WHERE type = "instrument"
SORT year ASC
```

---

## MOAIE Node Coverage

### 1mat — Materials

```dataview
TABLE
  acoustic.propagation AS "Propagation",
  acoustic.frequency_range AS "f_range",
  fabrication.method AS "Fab",
  status AS "Status"
FROM "03-thesis/03-soog/1mat"
WHERE type = "material" OR type = "metamaterial" OR type = "bio-material"
SORT file.name ASC
```

### 2obj — Objects

```dataview
TABLE
  topology.shape AS "Shape",
  topology.modularity AS "Modular",
  fabrication.method AS "Fab",
  status AS "Status"
FROM "03-thesis/03-soog/2obj"
SORT file.name ASC
```

### 3agn — Agents

```dataview
TABLE
  agent.class AS "Class",
  agent.autonomy AS "Autonomy",
  agent.embodiment AS "Embodiment",
  status AS "Status"
FROM "03-thesis/03-soog/3agn"
SORT file.name ASC
```

### 4int — Interactions

```dataview
TABLE
  interaction.excitation AS "Excitation",
  interaction.coupling AS "Coupling",
  interaction.loop AS "Loop",
  status AS "Status"
FROM "03-thesis/03-soog/4int"
SORT file.name ASC
```

### 0pri — Principles of Function

```dataview
TABLE
  principle.paradigm_pattern AS "Pattern",
  principle.applies_to AS "Applies to",
  layer AS "Layer",
  status AS "Status"
FROM "03-thesis/03-soog/0-pri"
WHERE type = "principle" OR type = "paradigm"
SORT category ASC
```

### 5env — Environments

```dataview
TABLE
  environment.medium AS "Medium",
  environment.scale AS "Scale",
  status AS "Status"
FROM "03-thesis/03-soog/5env"
SORT file.name ASC
```

---

## Graph Health — Missing Fields

Instruments with empty MOAIE vector (not yet parameterised):

```dataview
TABLE person, year, status
FROM "03-thesis"
WHERE type = "instrument" AND moaie.vector = null
SORT year ASC
```

Nodes without `status` field:

```dataview
TABLE type, category, file.folder AS "Folder"
FROM "03-thesis/03-soog"
WHERE status = null AND type != null
SORT category ASC
```

Nodes with `status: draft` (not yet validated):

```dataview
TABLE type, category, modified AS "Last modified"
FROM "03-thesis/03-soog"
WHERE status = "draft"
SORT modified ASC
```

---

## Case Instruments in ctx

All case instrument stubs in `01-ctx/cases/`:

```dataview
TABLE
  person AS "Maker",
  year AS "Year",
  family AS "Family",
  status AS "Status"
FROM "03-thesis/01-ctx/cases"
WHERE type = "instrument" OR contains(tags, "dss/case/instruments")
SORT year ASC
```

---

## Principles of Function — AI Paradigms

```dataview
TABLE
  principle.paradigm_pattern AS "Pattern",
  principle.axes.autonomy AS "Autonomy",
  principle.axes.entanglement AS "Entanglement",
  status AS "Status"
FROM "03-thesis/03-soog/0-pri/ai"
SORT file.name ASC
```

---

## Quick Stats

```dataview
TABLE WITHOUT ID
  "1mat" AS "Category",
  length(rows) AS "Node count"
FROM "03-thesis/03-soog/1mat"
FLATTEN "1mat" AS cat
GROUP BY cat
```

> For full interactive graph including MOAIE radar charts and vector-space embedding, open `soog-dashboard.html` in browser (generated from this vault via the OKA pipeline).

---

## Ops Notes

- Vector codebook not yet defined — current float values are provisional design estimates, not measurements
- `5env/` (5env layer) is empty: populate with acoustic-space, distributed, virtual environment nodes
- `3agn/` has generic stubs (humans, mammals, distributed agency) — needs dedicated agent nodes per instrument
- Instrument family pending full MOAIE treatment: phosphorbone, biogel-feedbacker, aerophone-family
- Luthemic: registered 2026-05-16 — speculative status; acoustic-feedback-fingerboard node active
- Interactive registry is now dynamic: it reads every `type: instrument` node with a 5-value `moaie.vector` from `01-ctx/cases/case instruments` and `.../case instruments fictional`. Add a completed node and it appears automatically; tick the boxes to overlay any subset.



---

## OPS — Transformation Engine State

```dataviewjs
// ── OPS State Dashboard ──────────────────────────────────────────────
const root = dv.el("div", "", { attr: { class: "soog-dashboard" } });

// ── Live vault queries ───────────────────────────────────────────────
const priNodes  = dv.pages('"03-thesis/02-ops/0-pri"')
  .where(p => !p.file.name.startsWith("."))
  .array();

const priByGroup = {};
priNodes.forEach(p => {
  const grp = p.file.folder.split("/").pop();
  priByGroup[grp] = (priByGroup[grp] || []);
  priByGroup[grp].push(p.file.name);
});

const grammarFiles = dv.pages('"03-thesis/02-ops/grammar"').array();
const filterFiles  = dv.pages('"03-thesis/02-ops/filters"').array();
const totalOps     = Object.keys(priByGroup).length;

// ── Grammar productions (design-defined, not from files) ─────────────
const productions = [
  { id:"P1", name:"Transpose Material", dim:"M", layer:"acoustic",
    effect:"Substitute material family; O/A/I/E held constant",
    example:"Cicada_wood → Cicada_EVA  [.5,.6,.4,.8,.3]→[.3,.6,.4,.8,.3]" },
  { id:"P2", name:"Invert Agent",       dim:"A", layer:"ontological",
    effect:"Replace human performer with autonomous/algorithmic process; I increases",
    example:"violin → robotic self-bow  A: 0.5→1.0, I: 0.6→0.75" },
  { id:"P3", name:"Close the Loop",     dim:"I+E", layer:"acoustic",
    effect:"Introduce feedback recursion; I += 0.15–0.25, E += 0.2–0.4, R=true",
    example:"[.7,.9,.5,.6,.25] → [.6,.8,.5,.85,.70] R=true" },
  { id:"P4", name:"Morphological Inversion", dim:"O+I", layer:"ontological",
    effect:"Preserve historical form (O fixed), invert function (I jumps sharply)",
    example:"lute body → Luthemic  O stays 0.8, I: 0.6→0.85" },
  { id:"P5", name:"Speculate",          dim:"layer", layer:"fictional",
    effect:"Enter fictional layer — remove physical constraints on I and E",
    example:"cymbal + speculate → cymbal made of sound (acousmatic object)" },
  { id:"P6", name:"Canonize",           dim:"all", layer:"acoustic",
    effect:"Inverse speculation — collapse to nearest SH primitive (validation check)",
    example:"fictional instrument → nearest acoustic realisation" },
  { id:"P7", name:"Compose",            dim:"—", layer:"any",
    effect:"Chain two operators: compose(f,g)(x) = g(f(x))",
    example:"compose(P4, P3)(violin) = Luthemic  (3-step derivation)" },
];

// ── Known derivation distances ────────────────────────────────────────
const distances = [
  { from:"violin",   to:"Luthemic",  dist:3, path:["P4","P3","P1"] },
  { from:"violin",   to:"Cicada",    dist:5, path:["P4","P1","P2","P3","P1"] },
  { from:"recorder", to:"Luthemic",  dist:6, path:["P4","P1","P3","P2","P1","P1"] },
  { from:"cymbal",   to:"Cicada",    dist:4, path:["P1","P4","P3","P2"] },
];

// ── Layer badge colors ────────────────────────────────────────────────
const layerColor = { acoustic:"#1D9E75", ontological:"#3266ad", fictional:"#7F77DD", any:"#EF9F27" };

// ── Render ────────────────────────────────────────────────────────────
root.innerHTML = `
<style>
.ops-pill {
  display:inline-block;
  font-size:10px;font-weight:600;
  padding:1px 7px;border-radius:10px;
  border:0.5px solid currentColor;
  opacity:.85;letter-spacing:.03em;
}
.ops-rule {
  background: color-mix(in srgb, var(--background-primary) 88%, transparent);
  border: 0.5px solid color-mix(in srgb, var(--text-normal) 14%, transparent);
  border-radius:8px;padding:.75rem 1rem;margin-bottom:.5rem;
}
.ops-rule-head {
  display:flex;align-items:center;gap:.5rem;margin-bottom:.35rem;
}
.ops-rule-id {
  font-size:11px;font-weight:700;color:var(--text-faint);
  min-width:24px;letter-spacing:.04em;
}
.ops-rule-name { font-size:13px;font-weight:500;color:var(--text-normal); }
.ops-rule-effect { font-size:12px;color:var(--text-muted);margin-bottom:.25rem; }
.ops-rule-example {
  font-size:11px;color:var(--text-faint);
  font-family:var(--font-monospace);
  background:color-mix(in srgb, var(--background-secondary) 70%, transparent);
  padding:3px 7px;border-radius:4px;display:inline-block;margin-top:2px;
}
.ops-dist-row {
  display:flex;align-items:center;gap:.5rem;padding:6px 0;
  border-bottom:0.5px solid color-mix(in srgb, var(--text-normal) 8%, transparent);
  font-size:12px;
}
.ops-dist-num {
  font-size:18px;font-weight:600;min-width:28px;text-align:center;
  color:var(--text-normal);
}
.ops-dist-path {
  font-size:10px;color:var(--text-faint);font-family:var(--font-monospace);
}
.ops-group-grid {
  display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:6px;
}
.ops-group-card {
  background:color-mix(in srgb, var(--background-primary) 88%, transparent);
  border:0.5px solid color-mix(in srgb, var(--text-normal) 14%, transparent);
  border-radius:8px;padding:.6rem .9rem;
}
.ops-group-count { font-size:22px;font-weight:500;color:var(--text-normal); }
.ops-group-name  { font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:.04em; }
</style>`;

// Stats row
root.innerHTML += `
<div class="soog-section">
<div class="soog-section-label">OPS · Transformation Engine</div>
<div class="soog-cards">
  <div class="soog-card"><div class="soog-card-val">${priNodes.length}</div><div class="soog-card-lbl">Principles (0-pri)</div></div>
  <div class="soog-card"><div class="soog-card-val">${productions.length}</div><div class="soog-card-lbl">Grammar productions</div></div>
  <div class="soog-card"><div class="soog-card-val">${Object.keys(priByGroup).length}</div><div class="soog-card-lbl">Principle subcategories</div></div>
  <div class="soog-card"><div class="soog-card-val">${grammarFiles.length + filterFiles.length}</div><div class="soog-card-lbl">MOC files (grammar+filters)</div></div>
</div>
</div>`;

// 0-pri by group
let groupCards = Object.entries(priByGroup)
  .sort((a,b) => b[1].length - a[1].length)
  .map(([grp, nodes]) => `
    <div class="ops-group-card">
      <div class="ops-group-count">${nodes.length}</div>
      <div class="ops-group-name">${grp}</div>
    </div>`)
  .join("");

root.innerHTML += `
<div class="soog-section">
<div class="soog-section-label">0-pri principles by subcategory</div>
<div class="ops-group-grid">${groupCards}</div>
</div>`;

// Grammar productions
let ruleHTML = productions.map(p => `
  <div class="ops-rule">
    <div class="ops-rule-head">
      <span class="ops-rule-id">${p.id}</span>
      <span class="ops-rule-name">${p.name}</span>
      <span class="ops-pill" style="color:${layerColor[p.layer]}">${p.layer}</span>
      <span style="font-size:11px;color:var(--text-faint);margin-left:auto">acts on: <strong style="color:var(--text-muted)">${p.dim}</strong></span>
    </div>
    <div class="ops-rule-effect">${p.effect}</div>
    <div class="ops-rule-example">${p.example}</div>
  </div>`).join("");

root.innerHTML += `
<div class="soog-section">
<div class="soog-section-label">Transformation grammar — production rules</div>
${ruleHTML}
</div>`;

// Grammar distance matrix
let distHTML = distances.map(d => `
  <div class="ops-dist-row">
    <div class="ops-dist-num">${d.dist}</div>
    <div style="flex:1">
      <span style="color:var(--text-normal);font-weight:500">${d.from}</span>
      <span style="color:var(--text-faint);margin:0 5px">→</span>
      <span style="color:var(--text-normal);font-weight:500">${d.to}</span>
    </div>
    <div class="ops-dist-path">${d.path.join(" · ")}</div>
  </div>`).join("");

root.innerHTML += `
<div class="soog-section">
<div class="soog-section-label">Grammar distance — speculative derivation paths</div>
<div style="font-size:12px;color:var(--text-muted);margin-bottom:.75rem">Min operators to derive target from source. Lower = more conservative transformation.</div>
${distHTML}
</div>`;
```

---

## Onto-lab — Ontological Engine State

```dataviewjs
// ── Onto-lab State Dashboard ─────────────────────────────────────────
const root = dv.el("div", "", { attr: { class: "soog-dashboard" } });

// ── Live vault queries ────────────────────────────────────────────────
const refs = dv.pages('"03-thesis/02-ops/onto-lab" or "03-thesis/01-ctx/13-ctx-ontologies"')
  .where(p => p.type === "reference")
  .array();

const concepts = dv.pages('"03-thesis/02-ops/onto-lab" or "03-thesis/01-ctx/13-ctx-ontologies"')
  .where(p => p.type === "concept")
  .array();

const allOnto = dv.pages('"03-thesis/02-ops/onto-lab" or "03-thesis/01-ctx/13-ctx-ontologies"')
  .where(p => !p.file.name.startsWith("."))
  .array();

// ── Taxonomy of taxonomies (meta-MOAIE vectors — analytical) ──────────
const taxSystems = [
  { name:"Sachs-Hornbostel",      year:1914, vec:[0.8,0.9,0.1,0.1,0.0], primary:"Material medium" },
  { name:"Schaeffer typomorph.",  year:1966, vec:[0.2,0.6,0.5,0.3,0.3], primary:"Perceptual object" },
  { name:"Smalley spectromor.",   year:1986, vec:[0.1,0.4,0.6,0.5,0.4], primary:"Spectral motion" },
  { name:"Hopkin families",       year:1996, vec:[0.7,0.7,0.3,0.4,0.2], primary:"Physical mechanism" },
  { name:"Hardjowirogo",          year:2017, vec:[0.4,0.5,0.8,0.6,0.4], primary:"Performer agency" },
  { name:"Tullberg affordance",   year:2022, vec:[0.3,0.5,0.7,0.8,0.7], primary:"Situated interaction" },
  { name:"Lee super-facets",      year:2018, vec:[0.5,0.6,0.4,0.5,0.6], primary:"Global KG facets" },
  { name:"MOAIE (this system)",   year:2026, vec:[0.7,0.7,0.5,0.9,0.7], primary:"Vector balance — no primary" },
];

const MOAIE_LABELS = ["M","O","A","I","E"];
const COLORS = ["#1D9E75","#3266ad","#A32D2D","#7F77DD","#EF9F27"];

// ── Open problems (from onto-lab-MOC) ─────────────────────────────────
const openProblems = [
  { id:1, label:"MOAIE dimensionality", note:"Is 5 dims sufficient? Lee→cultural C as 6th dim (MOAIEC)", severity:"high" },
  { id:2, label:"Reflexivity / self-reference", note:"MOAIE has its own meta-vector — Yoneda: objects characterised by morphisms", severity:"medium" },
  { id:3, label:"Groundtruth anchoring", note:"Float values are estimates; Scarano→acoustic features can anchor M and I_acoustic; A and E still need method", severity:"high" },
  { id:4, label:"Temporal OPS", note:"Current grammar is static; dynamic OPS would model instruments that shift MOAIE during performance", severity:"low" },
  { id:5, label:"Cross-cultural validity", note:"MOAIE designed with NIME bias; applying to non-Western instruments requires E dimension calibration", severity:"medium" },
];

const sevColor = { high:"#A32D2D", medium:"#EF9F27", low:"#1D9E75" };

// ── Render ────────────────────────────────────────────────────────────
root.innerHTML = `
<style>
.onto-table { width:100%;border-collapse:collapse;font-size:12px;margin-bottom:.5rem; }
.onto-table th {
  font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;
  color:var(--text-faint);border-bottom:1px solid color-mix(in srgb,var(--text-normal) 12%,transparent);
  padding:4px 8px;text-align:left;
}
.onto-table td { padding:6px 8px;border-bottom:0.5px solid color-mix(in srgb,var(--text-normal) 7%,transparent);vertical-align:middle; }
.onto-table tr:last-child td { border-bottom:none; }
.onto-table tr.onto-self td { background:color-mix(in srgb,var(--background-secondary) 60%,transparent); }
.onto-mini-bars { display:flex;gap:2px;align-items:flex-end;height:22px; }
.onto-mini-bar  { width:10px;border-radius:2px 2px 0 0; }
.onto-prob {
  display:flex;gap:.75rem;align-items:baseline;padding:8px 0;
  border-bottom:0.5px solid color-mix(in srgb,var(--text-normal) 8%,transparent);
}
.onto-prob-id   { font-size:11px;font-weight:700;color:var(--text-faint);min-width:18px; }
.onto-prob-lbl  { font-size:13px;font-weight:500;color:var(--text-normal); }
.onto-prob-note { font-size:12px;color:var(--text-muted); }
.onto-sev { font-size:9px;font-weight:700;padding:2px 6px;border-radius:8px;letter-spacing:.04em; }
</style>`;

// Stats
root.innerHTML += `
<div class="soog-section">
<div class="soog-section-label">Onto-lab · Ontological Engine</div>
<div class="soog-cards">
  <div class="soog-card"><div class="soog-card-val">${taxSystems.length}</div><div class="soog-card-lbl">Classification systems indexed</div></div>
  <div class="soog-card"><div class="soog-card-val">${refs.length}</div><div class="soog-card-lbl">Reference nodes (papers)</div></div>
  <div class="soog-card"><div class="soog-card-val">${concepts.length}</div><div class="soog-card-lbl">Concept nodes</div></div>
  <div class="soog-card"><div class="soog-card-val">${allOnto.length}</div><div class="soog-card-lbl">Total onto-lab files</div></div>
</div>
</div>`;

// Taxonomy of taxonomies table
const rows = taxSystems.map(s => {
  const bars = s.vec.map((v,i) => {
    const h = Math.round(v * 22);
    return `<div class="onto-mini-bar" style="height:${h}px;background:${COLORS[i]};opacity:.8"></div>`;
  }).join("");
  const isSelf = s.name.startsWith("MOAIE");
  return `<tr${isSelf?' class="onto-self"':''}>
    <td style="font-weight:${isSelf?'600':'400'}">${s.name}</td>
    <td style="color:var(--text-faint)">${s.year}</td>
    <td><div class="onto-mini-bars">${bars}</div></td>
    ${MOAIE_LABELS.map((_,i) => `<td style="text-align:center;font-size:11px;color:var(--text-muted)">${s.vec[i].toFixed(1)}</td>`).join("")}
    <td style="color:var(--text-faint);font-size:11px">${s.primary}</td>
  </tr>`;
}).join("");

root.innerHTML += `
<div class="soog-section">
<div class="soog-section-label">Taxonomy of taxonomies — meta-MOAIE vectors</div>
<div style="font-size:12px;color:var(--text-muted);margin-bottom:.75rem">Each classification system evaluated on the same MOAIE dimensions it uses to classify instruments.</div>
<table class="onto-table">
  <thead><tr>
    <th>System</th><th>Year</th>
    <th style="min-width:70px">M O A I E</th>
    ${MOAIE_LABELS.map(l=>`<th style="text-align:center">${l}</th>`).join("")}
    <th>Primary criterion</th>
  </tr></thead>
  <tbody>${rows}</tbody>
</table>
</div>`;

// Reference nodes live list
const refList = refs.map(p => {
  const year = p.year || "—";
  const title = p.title || p.file.name;
  return `<div class="soog-gap-item">
    <span class="soog-gap-cat">${year}</span>
    <span>${title}</span>
  </div>`;
}).join("") || `<div style="font-size:13px;color:var(--text-muted)">No reference nodes with type: reference found.</div>`;

root.innerHTML += `
<div class="soog-section">
<div class="soog-section-label">Reference nodes (live from onto-lab)</div>
${refList}
</div>`;

// Open problems
const probHTML = openProblems.map(p => `
  <div class="onto-prob">
    <span class="onto-prob-id">#${p.id}</span>
    <div style="flex:1">
      <div class="onto-prob-lbl">${p.label}
        <span class="onto-sev" style="background:${sevColor[p.severity]}22;color:${sevColor[p.severity]};margin-left:6px">${p.severity}</span>
      </div>
      <div class="onto-prob-note">${p.note}</div>
    </div>
  </div>`).join("");

root.innerHTML += `
<div class="soog-section">
<div class="soog-section-label">Open problems</div>
${probHTML}
</div>`;
```
