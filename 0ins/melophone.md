---
## CTX — MOAIE Instrument Node

# ── IDENTITY ──────────────────────────────────────────────────────────
id: melophone
title: Mélophone
tags:
  - dss
  - dss/case/instruments
  - dss/case/instruments/historical
  - instrument
  - aerophone
  - free-reed

# ── TAXONOMY ──────────────────────────────────────────────────────────
category: 2obj
type: instrument
kind: individual
corpus: case
origin: traditional
layer: acoustic

abrev: MLP
family: aerophone / free reed / bellows-blown, guitar-shaped body
sachs-hornbostel: "412.132 — free-reed aerophone with bellows (provisional; verify against MIMO/Wikidata, the Met gives only 'Aerophone-Free Reed-harmonium')"

# ── PEOPLE / META ─────────────────────────────────────────────────────
person: "[[Pierre Charles Leclerc]]"
performers: []
authors: [Pierre Charles Leclerc]
year: 1837
url: "https://www.metmuseum.org/art/collection/search/501776"
img: ""
bib: "Metropolitan Museum of Art. Melophone, object 89.4.1205 (Crosby Brown Collection, 1889). Yale Collection of Musical Instruments. Mélophone, 3522.1993."

# ── GRAPH CONNECTIONS ─────────────────────────────────────────────────
hyper:
  - "[[aerophone]]"
  - "[[free reed]]"
connect:
  - "[[accordion]]"
  - "[[concertina]]"
  - "[[harmonium]]"
  - "[[reed organ]]"
  - "[[violin]]"
  - "[[guitar]]"

# ── TOPOLOGY (2obj extension) ─────────────────────────────────────────
topology:
  shape: "guitar- or cello-like case with neck; double bellows inside the body; free reeds; keyboard of buttons on the neck"
  dimensions: "Met 89.4.1205: L 79 x W 30.5 x D 19.5 cm, case without neck 50 cm; Yale 3522.1993: overall length 73.4 cm"
  keys: "eight vertical fingering rows tuned in fifths (violin-like layout); thirteen buttons for the half steps; thumb lever as octave coupler"
  setup: handheld
  hold: "rests on the thigh; right hand works the bellows lever (push and draw), left hand works the keyboard"
  support_required: false

# ── FABRICATION ───────────────────────────────────────────────────────
fabrication:
  method: hand_made
  material_refs:
    - "[[maple]]"
    - "[[brass]]"
  complexity: medium
  files: []

# ── MOAIE VECTOR ──────────────────────────────────────────────────────
moaie:
  M: "[[maple-brass-free-reed]]"
  O: "[[bellows-free-reed-body]]"
  A: "[[human-performer]]"
  I: "[[bellows-lever-and-button-keyboard]]"
  E: "[[salon-opera]]"
  recursive: false
  vector: [0.55, 0.5, 0.5, 0.55, 0.2]
  # Estimates (tier T4), anchored to violin [0.7, 0.9, 0.5, 0.6, 0.25] and recorder [0.3, 0.7, 0.4, 0.5, 0.20].
  # M=0.55 maple case, brass reed plates and reeds, bellows: several materials, all hand-made, none exotic
  # O=0.5  a defined hybrid form (guitar body + bellows + reeds) but never canonical; short-lived
  # A=0.5  one performer; bellows arm, key hand and thigh support coordinate three body parts
  # I=0.55 free-reed excitation under bellows pressure, button keyboard in violin-style fifths
  # E=0.2  salon or opera room is context, not part of the signal chain

# ── INTERFACE PROFILE (4int dimensions) ───────────────────────────────
interface_profile:       # all values estimates (T4), to be rated by the author
  affordance: 0.55       # buttons are legible, the push-and-draw lever and the octave thumb lever are not
  liveness: 0.80         # air -> reed -> sound is direct; the reeds are hidden but the cause is audible at once
  playability: 0.45      # two coordinated actions (bellows, keys); first sounds come fast, evenness does not
  learnability: 0.50     # easy for violin and guitar players (Met), unknown for anyone else
  situatedness: 0.15     # one opera solo (1838), superseded by the harmonium; no living tradition
  mediality: 0.65        # right arm, left hand and thigh carry the instrument; the body is the support
  mapping: 0.60          # keys -> pitch discrete; bellows pressure -> dynamics continuous
  sensorimotor_scheme: 0.50   # the scheme is borrowed from the violin and guitar, none is built for the instrument
  ergonomics: 0.55       # 73-79 cm, rests on the thigh, one arm occupied by the bellows
  expressivity: 0.55     # swell and attack through the bellows; no vibrato or bowing nuance

# ── SOM CRITERIA (typed record, see 03-som/SOM-criteria.md) ───────────
crit:
  O.sh: ["412.132"]
  O.fam: [aerophone]
  O.year: 1837
  O.orig: traditional
  O.mod: false
  O.elec: none
  O.setup: handheld
  O.hold: two-hand
  O.disp: fixed
  O.ext: none
  O.sys: articulated
  A.class: human
  A.emb: physical
  A.aut: tool
  A.adapt: fixed
  A.deleg: []
  A.sm: true
  A.eff: [hand-left, hand-right]
  A.n: one
  A.post: seated chair
  A.ctrl: sole
  I.exc: blown
  I.coup: direct
  I.loop: false
  I.en: muscle
  I.cont: [key]
  I.map: one-to-one
  I.cont2: mixed
  I.hap: passive
  I.amp: [none]
  I.out: [sound]
  E.med: air
  E.scale: room
  E.ctx: concert
  E.tech: craft
  X.pri: ["[[cantilever oscillation]]"]
  X.layer: acoustic
  X.cls: possible
  X.rec: false
  X.perf: performable
  X.cyb: analog
src:
  O.sh: "estimate: the Met gives only 'Aerophone-Free Reed-harmonium'; 412.132 to be checked against MIMO/Wikidata"
  O.elec: "knowledge: no electrical stage in the chain"
  O.sys: "estimate: moving parts (bellows lever, key action, octave coupler)"
  A.post: "note: Yale: rests on the thigh, which implies seated play"
  I.en: "note: Met and Yale: bellows worked by the right hand, not by breath"
  I.exc: "estimate: free reed set into oscillation by bellows air; 'blown' is the closest value in the closed vocabulary"
  I.cont: "note: Met: eight rows of buttons, thirteen half-step buttons, thumb lever"
  I.map: "estimate"
  E.ctx: "estimate: Met mentions salons and opera; 'concert' is the closest single value"
  X.pri: "estimate: a free reed is a cantilevered tongue driven by the air flow"
  moaie.vector: "estimate: author's judgement, tier T4, not used by the distance"
  interface_profile: "estimate: author's judgement, tier T4, anchored to violin and recorder"

status: draft
publish: true
created: 2026-11-06
modified: 2026-11-06

# ── DATA NOTES ────────────────────────────────────────────────────────
def: "Free-reed aerophone invented in Paris in 1837 by Pierre Charles Leclerc. A bellows, worked by a lever with the right hand, drives free reeds in a guitar-shaped case; the left hand plays buttons laid out so that violin and guitar players can transfer their technique. It entered the opera salons through a solo in Halévy's Guido et Ginevra (1838) and was displaced by the harmonium in the 1850s and 1860s."
sources:
  - "Met 89.4.1205: maple, brass; ca. 1850–55; not on view"
  - "Yale 3522.1993: ca. 1850; anonymous gift; materials not listed"
  - "https://musical-instruments.fandom.com/wiki/M%C3%A9lophone (not retrieved; to read)"
discrepancy: "Leclerc is a music-box maker in the Met description and a Parisian watchmaker in the Yale record; the two trades are close but unreconciled."
---

## Organological Summary

Free reeds fed by a bellows, as in the accordion and the harmonium, but with the body of a bowed or plucked string instrument and a fingering built to import string technique. The case-instrument question it poses: the interface (I) is designed from another family's habit, so the instrument is a transfer of sensorimotor scheme across Hornbostel-Sachs classes.

## Findings

soogfinding:: Interface (I) is not always derived from the agent (A) or the object (O): the Mélophone imports a sensorimotor scheme from another Hornbostel-Sachs class. Its eight fingering rows in fifths copy the violin and the guitar, so the habit of the body precedes the object and the instrument is a transfer of technique across families. [facet:: I] [kind:: counterexample] [bears-on:: A-to-I]

## Open points

- Confirm the Hornbostel-Sachs code and the Wikidata/MIMO record.
- Read the fandom entry; check Hopkin's essay on the names Melophone/Harmoniphone (EMI catalog, 12-references/medios).
- Decide whether Leclerc earns a person note (12-references/prs) or stays a link.
- Rate the estimates (src entries marked estimate) and decide whether the Mélophone enters the calibration set for the promotion test.
