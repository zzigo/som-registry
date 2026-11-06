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
layer: functional

abrev: MLP
family: aerophone / free reed / bellows-blown, guitar-shaped body
sachs-hornbostel: "412.132 — free-reed aerophone with bellows (provisional; verify against MIMO/Wikidata, the Met gives only 'Aerophone-Free Reed-harmonium')"

# ── PEOPLE / META ─────────────────────────────────────────────────────
person: "[[Pierre Charles Leclerc]]"
performers: []
authors: [Luciano Azzigotti]
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
  vector: [0, 0, 0, 0, 0]   # unscored

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

soogfinding:: Interface (I) is not always derived from the agent (A) or the object (O): the Mélophone imports a sensorimotor scheme from another Hornbostel-Sachs class. Its eight fingering rows in fifths copy the violin and the guitar, so the habit of the body precedes the object and the instrument is a transfer of technique across families. [facet:: I] [kind:: counterexample] [bears-on:: A-to-I derivation]

## Open points

- Confirm the Hornbostel-Sachs code and the Wikidata/MIMO record.
- Read the fandom entry; check Hopkin's essay on the names Melophone/Harmoniphone (EMI catalog, 12-references/medios).
- Decide whether Leclerc earns a person note (12-references/prs) or stays a link.
- Score the MOAIE vector and the interface profile.
