---
## CTX — MOAIE Instrument Node

# ── IDENTITY ──────────────────────────────────────────────────────────
id: lirone
title: Lirone (Lira da Gamba / Lira da Gamba Perfetta)
tags:
- dss/case/instruments/chordophone
- dss/case/instruments/sympathetic
- dss/case/instruments/historical

# ── TAXONOMY ──────────────────────────────────────────────────────────
category: 1obj
type: instrument
layer: functional
abrev: LRN
family: bowed chordophone / lira family
sachs-hornbostel: "321.322-6 — composite chordophone, lute-type body with neck and leaf-shaped pegbox; bowed with horsehair bow across a flat bridge; 13–16 gut strings including sympathetic resonating strings not directly bowed in all registers"

# ── PEOPLE / META ─────────────────────────────────────────────────────
person:
  inventor: "[[Atalante Migliorotti]]"
  composer: "[[Giovanni Battista Fontana]]"
  rediscovery: "[[Erin Headley]]"
  luthier: "[[Paolo Biordi]]"
  related: "[[Claudio Monteverdi]]"
performers:
  - Erin Headley
authors: [Luciano Azzigotti]
year: 1505
url: "https://www.youtube.com/shorts/cVEt6kQ4UTM"
img:
bib: |
  Headley, Erin. 1996. 'The Lirone.' Early Music 24(4): 723–734.
  Pontécoulant, Louis de. 1861. Organographie. Paris: Castel.

# ── ICONOGRAPHIC SOURCES (lutherie) ───────────────────────────────────
iconographic_sources:
  - title: "Dame mit Lira da Gamba"
    author: "Ferdinand Bol"
    year: 1653
    medium: oil on canvas
    note: "one of two paintings used by Paolo Biordi as construction basis in 2002"
  - title: "Homer dictating"
    author: "Pier Francesco Mola"
    year: "1663–1666"
    medium: oil on canvas
    note: "second iconographic source for Biordi's 2002 Florence reconstruction"

# ── GRAPH CONNECTIONS ─────────────────────────────────────────────────
hyper:
  - "[[lira family]]"
  - "[[bowed chordophone]]"
  - "[[sympathetic resonance]]"
  - "[[Renaissance organology]]"
hypo: []
connect:
  - "[[lira da braccio]]"
  - "[[viola d'amore]]"
  - "[[baryton]]"
  - "[[L'Orfeo — Monteverdi]]"
  - "[[luthemic]]"
  - "[[reentrant tuning]]"
  - "[[speculative organology]]"
  - "[[Atalante Migliorotti]]"
  - "[[Leonardo da Vinci]]"

# ── TOPOLOGY ──────────────────────────────────────────────────────────
topology:
  shape: "guitar-like body (wider than viola, shallower ribs); very wide flat neck; leaf-shaped pegbox (folha = the distinguishing morphological marker); flat bridge (not curved — essential for multi-string bowing)"
  strings: "13–16 gut strings (sources vary; most reconstructions use 14–15); two off-board drone strings running beside the neck to auxiliary pegs"
  string_arrangement: "central stopped strings + two outer drones (not fingered, sounding continuously)"
  flat_bridge: true
  simultaneous_bow_contact: "7–9 strings contacted by a single bow stroke (bow hair width spans most of the string plane)"
  sympathetic_strings: "remaining strings (those not directly bowed) vibrate sympathetically from acoustic coupling through the bridge and soundboard"
  dimensions: "body length approx. 60–70cm; overall length with neck ~90cm; width at lower bout ~25cm"
  hold: "da gamba (between legs, cello-like); neck vertical or slightly angled outward"
  posture: "seated, instrument between knees, cello posture; right arm bowing from below"
  modularity: false

# ── TUNING — REENTRANT SYSTEM ─────────────────────────────────────────
tuning:
  system: reentrant
  description: "intervals do not ascend monotonically from lowest to highest string; alternate fifths and fourths produce a 'folded' pitch space — adjacent strings are a fourth or fifth apart but the sequence reverses direction periodically"
  pattern: "…up a fifth, down a fourth, up a fifth, down a fourth…"
  effect: "adjacent strings are always a fourth or fifth apart (maximum consonance for resonance coupling); non-adjacent strings may be closer in pitch than adjacent ones"
  typical_range: "approx. D2 to E4 (two octaves plus a third), with internal inversions"
  comparison: "analogous to Renaissance lute (G tuning in fourths with one major third), viola d'amore (sympathetic strings often reentrant), guitar's B string (G→B = major third breaks the perfect fourth sequence)"
  organological_consequence: "linear fingering does not produce linear melody; harmonic voicings are the primary mode — the instrument is constitutively chordal"

# ── FABRICATION ───────────────────────────────────────────────────────
fabrication:
  method: "carved wood lutherie; maple back and ribs, spruce top; gut strings; horsehair bow wider than standard viol bow to span multiple strings"
  complexity: high
  known_examples:
    - luthier: "Paolo Biordi"
      year: 2002
      location: Florence
      count: 2
      sources: ["Ferdinand Bol painting 1653", "Pier Francesco Mola painting 1663–1666"]
      note: "no surviving original instruments; all modern examples are reconstructions from iconographic sources"
  variants:
    - "Lira da Braccio (smaller, arm-held predecessor, fewer strings)"
    - "Lirone Perfetto (largest form; also called 'accordo' in some sources)"
    - "Chitarrone (related plucked family, not bowed)"

# ── MOAIE VECTOR ──────────────────────────────────────────────────────
moaie:
  M: "[[carved-wood-gut-string-material]]"
  O: "[[flat-bridge-reentrant-multistring-topology]]"
  A: "[[bow-chord-harmonic-agency]]"
  I: "[[multi-string-bow-contact-sympathetic-interaction]]"
  E: "[[acoustic-room-resonance-environment]]"
  recursive: false
  vector: [0.40, 0.75, 0.60, 0.80, 0.45]
  # M=0.40 traditional lutherie materials — no novel material invention;
  #        the flat bridge and wide neck ARE material-formal decisions that
  #        determine the entire acoustic possibility space of the instrument
  # O=0.75 the topology is the instrument's entire identity: flat bridge,
  #        reentrant tuning, leaf pegbox, string distribution. Remove any one
  #        element and you have a different instrument. High organological specificity.
  # A=0.60 bow agency is conventional in mechanism; but the absence of melodic
  #        linear fingering and the chord-first playing paradigm constitute a
  #        genuinely different agency model from all other bowed strings
  # I=0.80 the multi-string simultaneous bow contact + sympathetic resonance
  #        interaction is the instrument's defining acoustic event. The sounding
  #        body is always larger than what is intentionally excited — the instrument
  #        generates acoustic surplus. This is the highest-specificity parameter.
  # E=0.45 the acoustic room matters (sympathetic resonance is amplified by room
  #        reflections) but the instrument is not constitutively environment-dependent
  #        in the way of ecosystemic instruments

# ── INTERFACE PROFILE ─────────────────────────────────────────────────
interface_profile:
  affordance: 0.40      # looks like a large viol — prior string knowledge transfers partially;
                        # but the flat bridge (unusual) and reentrant tuning immediately disable
                        # most transferred skill; high disorientation for any string player
  liveness: 0.70        # bow contact is direct and immediately acoustic; sympathetic vibration
                        # introduces a secondary uncontrolled sound layer
  playability: 0.30     # one of the most demanding historical instruments to play;
                        # bow must contact 7-9 strings simultaneously with controlled voicing;
                        # reentrant tuning requires complete remapping of left hand
  learnability: 0.25    # almost no transfer from modern string technique;
                        # closest analogues (baryton, hurdy-gurdy, viol) are themselves rare;
                        # Erin Headley's reconstruction was a multi-year research project
  situatedness: 0.20    # extremely rare; two known modern reconstructions (Biordi 2002);
                        # no established living performance tradition outside Headley's work
  mediality: 0.65       # whole-arm bow gesture; left hand chord shapes across wide neck;
                        # instrument between legs changes center of gravity — high body engagement
  mapping: 0.30         # reentrant tuning breaks the linear pitch-position mapping;
                        # there is no direct correspondence between string position and pitch height
  sensorimotor_scheme: 0.35   # novel; closest to hurdy-gurdy in chord-first paradigm;
                               # but no crank — bow skill required
  ergonomics: 0.45      # da gamba position is familiar (cello-like); wide bow grip is unusual;
                        # sustained chording causes arm fatigue specific to this instrument
  expressivity: 0.80    # the instrument's acoustic richness (9 strings + sympathetic layer)
                        # produces a harmonic density unavailable on any other bowed string;
                        # dynamics, vibrato, bow pressure, voicing all independently expressive

status: draft
publish: true
modified: 2026-06-19
timeline:
  - dssCaseInstruments
---

https://www.youtube.com/shorts/cVEt6kQ4UTM

---

## Organological Summary

The Lirone (also *lira da gamba*, *lira da gamba perfetta*, or *accordo*) is a bowed chordophone of the lira family, invented by **Atalante Migliorotti** around 1505. Migliorotti was a student of Leonardo da Vinci — the organological lineage is thus: a pupil of the most systematic visual-engineering mind of the Renaissance creates an instrument whose defining property is the deliberate multiplication of simultaneously sounding strings beyond the performer's direct control.

No original instruments survive. The modern reconstruction is entirely iconographic: **Paolo Biordi** built two examples in Florence in 2002, drawing from two paintings — Ferdinand Bol's *Dame mit Lira da Gamba* (1653) and Pier Francesco Mola's *Homer dictating* (1663–1666). Both paintings depict the instrument's distinctive morphology: the wide flat body, the extremely wide neck, and above all the **leaf-shaped pegbox** (*testa a foglia*) — the instrument's most recognizable formal marker.

**Giovanni Battista Fontana** (c. 1589–1630) composed for the Lirone; his sonatas are among the few surviving primary sources. The instrument appears explicitly in **Monteverdi's *L'Orfeo*** (1607): the ritornello of Act III specifies two Lirones in the basso continuo texture, contributing the harmonic carpet beneath Orfeo's descent into Hades.

The instrument was considered obsolete by the late 17th century and remained unknown until **Erin Headley**'s musicological and performative rediscovery in the 1990s. Headley's reconstruction established the reentrant tuning system and multi-string bowing technique through systematic study of the iconographic sources and acoustic experimentation.

---

## The Flat Bridge and the Acoustic Surplus

The Lirone's constitutive mechanical decision is the **flat bridge** — as opposed to the curved bridge of all modern bowed strings. On a cello, the curved bridge ensures that only one or two strings contact the bow hair at any point; the player moves the bow arm to select strings. On the Lirone, the flat bridge places all strings in the same plane. A single bow stroke contacts **7–9 strings simultaneously**.

This produces a sound object that has no equivalent in the modern orchestral string family: a **sustained bowed chord** in which all voicings ring simultaneously and continuously. The remaining strings (those not directly bowed in a given configuration) vibrate **sympathetically** — driven acoustically by the resonating soundboard and the standing waves in the air cavity.

The total sounding body is therefore always larger than the intentionally excited body:

$$S_{\text{total}} = S_{\text{bowed}} + S_{\text{sympathetic}}$$

where $S_{\text{bowed}}$ is under the performer's direct control (which strings the bow contacts, bow pressure, speed) and $S_{\text{sympathetic}}$ is determined by the acoustic coupling coefficients between string pairs — a function of bridge mass, soundboard stiffness, and the ratio of string frequencies.

The sympathetic coupling between two strings at frequencies $f_i$ and $f_j$ is strongest when their frequency ratio approximates a simple integer ratio (1:2, 2:3, 3:4). The reentrant tuning is thus not merely an ergonomic choice: it **maximizes sympathetic coupling** by ensuring that adjacent strings (which are in bow-hair proximity) are always a fourth or fifth apart — the strongest coupling ratios.

---

## Reentrant Tuning — Structural Analysis

In a standard bowed string instrument (violin, cello), pitches ascend monotonically from lowest string to highest:

$$f_1 < f_2 < f_3 < f_4$$

In reentrant tuning (Lirone, Renaissance lute, some vihuela), the sequence is non-monotonic:

$$f_1 < f_3 < f_2 < f_4 < f_3' \ldots$$

For the Lirone, the pattern follows alternating perfect fifths (↑P5) and perfect fourths (↓P4):

$$\text{string } n: \quad f_{n+1} = f_n \cdot \frac{3}{2} \quad (\text{P5 up})$$
$$\text{string } n+1: \quad f_{n+2} = f_{n+1} \cdot \frac{3}{4} \quad (\text{P4 down})$$

Net interval across two strings: $\frac{3}{2} \cdot \frac{3}{4} = \frac{9}{8}$ — a major second upward. So the *overall* pitch sequence ascends by major seconds (a whole-tone scale) while the *local* interval alternates P5/P4. This means:

- Adjacent strings are maximally consonant (fifth or fourth) — strong sympathetic coupling
- The instrument spans roughly two octaves with ~7 string pairs
- No linear fingering is possible: the same left-hand position produces different interval content depending on which string pairs are fingered
- The instrument is **constitutively harmonic** — its primary expressive unit is the chord, not the melodic line

---

## Sympathetic Resonance as Compositional Principle

The Lirone's sympathetic layer is not merely acoustic background. It is a compositional element: the performer can choose bow contact configuration to emphasize certain sympathetic strings and suppress others, essentially mixing a direct (bowed) layer and a diffuse (sympathetic) layer in real time.

This anticipates by four centuries what Di Scipio calls "ecosystemic sound" — a sound that is constituted by interactions within a system, not by the performer's direct causal action. The Lirone player is always negotiating between the directly controlled bowed register and the indirectly excited sympathetic halo. The instrument's sound at any moment is the vector sum of two independently generated fields:

$$Y(t) = \alpha \cdot Y_{\text{bowed}}(t) + (1-\alpha) \cdot Y_{\text{sympathetic}}(t)$$

where $\alpha$ is an emergent parameter — not controlled directly, but determined by the acoustic context, the tuning accuracy, the bow pressure, and the room.

---

## Connection to Luthemic

The Lirone is the most significant historical precedent for **Luthemic** in the case instruments catalog. The structural homologies are precise:

| Property | Lirone (1505) | Luthemic (speculative) |
|----------|---------------|----------------------|
| Excited body | 7–9 strings under bow | microspeakers on lute body under finger contact |
| Unexcited resonant body | 4–7 sympathetic strings | remaining lute body and air cavity resonances |
| Control | bow position, pressure, speed | finger-mounted mic filtering per frequency |
| Acoustic surplus | sympathetic layer beyond direct control | feedback overtones beyond finger-frequency assignment |
| Tuning system | reentrant (non-monotonic) | frequency-filtered channels per finger (non-linear assignment) |
| Primary mode | chordal, harmonic, continuous | chordal feedback fields per combination of fingers |
| Body | carved wood lute-type | carved wood lute-type (same) |

The key conceptual transfer: in both instruments, **the sounding body is always larger than the directly excited body**. The player acts on a subset of the acoustic system; the system responds with its full resonant field. This is the organological operation that connects a 1505 Renaissance instrument to a 21st-century speculative electroacoustic one.

A second connection: the **reentrant tuning principle** maps onto Luthemic's five finger-frequency assignments. In the Lirone, the frequency assignment to each string is non-linear (not ascending by string order). In Luthemic, each finger is assigned a filtered frequency band that does not correspond to anatomical order — the mapping is deliberately non-intuitive, forcing a new sensorimotor schema.

---

## Presence in L'Orfeo (Monteverdi, 1607)

The Lirone appears in the **ritornello of Act III** of *L'Orfeo* — the scene of Orfeo's descent to the underworld. Monteverdi specifies two Lirones in the basso continuo group alongside regal, harpsichords, and chitarrone.

The choice is not arbitrary. The Lirone's harmonic density — a sustained chord of 7–9 voices in a wash of sympathetic resonance — creates an acoustic environment of **diffuse, continuous harmonic presence**: the music of the underworld is not clearly articulated or rhythmically pointed; it is suffused, enveloping, ambient. The Lirone's acoustic character — dense, resonant, blurred at the edges by sympathetic vibration — is the sonic metaphor for Hades.

The organological interpretation: Monteverdi selected an instrument whose *physical mechanism* enacted the dramaturgical content. The Lirone does not play "music of the underworld" — it *is* that music at the level of its acoustic physics.

---

## OPS Derivation

```
P4 (multiply strings × 13–16) + P6 (flatten bridge geometry) 
applied to: lira_da_braccio_primitive
→ Lirone

Grammar distance from viol (viola da gamba): 3 steps
  (bridge flattened; string count × 3; tuning reentrant)
Grammar distance from lira da braccio: 2 steps
  (body scaled up; string count × 2–3)
Grammar distance from hurdy-gurdy: 4 steps
  (bowing mechanism manual not crank; string plane flat not curved;
   tuning reentrant; sympathetic strings added)
Grammar distance from Luthemic: ∞ (different material domain)
  → but functional isomorphism score: 0.85
  (shared: acoustic surplus, non-linear parameter assignment, harmonic primacy)
```

---

## Veo3 Brief

```
COMMON AESTHETICS: 35mm film grain (Kodak 5213), very shallow depth of field T1.4,
dark warm background (chiaroscuro, Bol/Caravaggio register), amber-gold practical 
light from lower left, cool shadow fill, photorealistic, no text.

— PLANE A · Contextual —
A seated performer (period dress or neutral contemporary — ambiguous) holds 
the Lirone between their knees, cello position. The instrument is large — 
the body spans from pelvis to mid-chest. The pegbox is clearly visible above: 
a carved leaf shape, symmetrical, slightly wider than the neck. 
14 gut strings run from bridge to pegbox. 
The bow is wide — noticeably wider than a modern cello bow.
Warm amber light catches the top of the soundboard. 
The room is dark and undefined. Hold 4 seconds.

— PLANE B · Bow contact macro —
Cut to extreme close-up: the bow hair contacts 7–8 strings simultaneously. 
The strings are not in a curved plane — they are flat, parallel, almost like 
a harp seen from the side. The bow moves slowly across them.
Each string vibrates in a slightly different mode — visible as a faint shimmer.
In the background (deep focus), the remaining strings vibrate faintly: 
sympathetic resonance — not bowed, but moving.
Hold 6 seconds during sustained chord.

— PLANE C · Pegbox detail —
Cut to the leaf-shaped pegbox from directly in front.
Gut strings fan out from individual tuning pegs — alternating spacing, 
wider at the bottom, narrower at the top.
Two drone strings run off to the side, attached to small auxiliary pegs 
below the pegbox.
Very slight string tension visible — they are gut, not steel; they move 
fractionally in the air movement from the bow.

Camera: very slow downward drift on A; locked on B and C.
Sound design: a dense 9-voice bowed chord, slightly inharmonic,
with a sympathetic halo — a wash of overtones 1–2 semitones wide around 
each fundamental. Not vibrato: shimmer. The sound is warm, diffuse, amber. 
Sub-bass from the body resonance. No sharp attack — the chord builds over 
the first 800ms as the bow establishes contact. Spatial: slightly wide stereo 
from the sympathetic spread across the body.
Duration: 16s total.
Tags: lirone, lira da gamba, Atalante Migliorotti, Erin Headley, Paolo Biordi,
      reentrant tuning, sympathetic resonance, Renaissance chordophone,
      bowed chord, Monteverdi, L'Orfeo, speculative organology
```

---

## References

```bibtex
@article{headley1996lirone,
  author  = {Headley, Erin},
  title   = {The Lirone},
  journal = {Early Music},
  volume  = {24},
  number  = {4},
  year    = {1996},
  pages   = {723--734},
  note    = {Primary source for reconstruction; tuning system, iconographic analysis, performance practice}
}

@book{pryer1993monteverdi,
  author    = {Whenham, John},
  title     = {Claudio Monteverdi: Orfeo},
  publisher = {Cambridge University Press},
  year      = {1986},
  series    = {Cambridge Opera Handbooks},
  note      = {Instrumentation of L'Orfeo; Act III ritornello scoring including two Lirones}
}

@book{boyden1965history,
  author    = {Boyden, David D.},
  title     = {The History of Violin Playing from Its Origins to 1761},
  publisher = {Oxford University Press},
  year      = {1965},
  note      = {Background on lira family; contextualizes Lirone within bowed string development}
}

@article{feldmann1960lira,
  author  = {Feldmann, Fritz},
  title   = {Zur Frage des 'Tenore' in der instrumentalen Ensemblemusik der ersten Hälfte des 17. Jahrhunderts},
  journal = {Archiv für Musikwissenschaft},
  volume  = {17},
  year    = {1960},
  pages   = {40--64},
  note    = {Historical document on lira da gamba in continuo practice}
}

@misc{biordi2002lirone,
  author = {Biordi, Paolo},
  title  = {Lirone reconstruction},
  year   = {2002},
  note   = {Two instruments built in Florence based on Ferdinand Bol (1653) and Pier Francesco Mola (1663–1666). No publication — instrument-builder documentation}
}

@painting{bol1653dame,
  author = {Bol, Ferdinand},
  title  = {Dame mit Lira da Gamba},
  year   = {1653},
  medium = {Oil on canvas},
  note   = {Iconographic source for Biordi reconstruction; shows instrument morphology including leaf pegbox and flat bridge}
}

@painting{mola1663homer,
  author = {Mola, Pier Francesco},
  title  = {Homer dictating},
  year   = {1663--1666},
  medium = {Oil on canvas},
  note   = {Second iconographic source for Biordi reconstruction}
}
```
