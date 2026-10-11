---
## CTX — MOAIE Instrument Node

# ── IDENTITY ──────────────────────────────────────────────────────────
id: latigo-de-madera
title: "Látigo de madera / Frusta di legno (Slapstick)"
tags:
  - dss/case/instruments/idiophone
  - dss/case/instruments/cantilever-collision
  - dss/case/instruments/popular

# ── TAXONOMY ──────────────────────────────────────────────────────────
category: 2obj
type: instrument
kind: individual
corpus: case
layer: functional
abrev: LTG
family: "cantilever-collision plaque idiophone / direct concussion, fixed-handle"
sachs-hornbostel: "111.2 — concussion plaques (two flat sounding elements struck together by the player; fixed at one end / handle, free at striking end). Orchestral classification: Peitsche / frusta / whip / slapstick. See [[principle-cantilever-collision]]."

# ── PEOPLE / META ─────────────────────────────────────────────────────
person: "[[Italian immigrant carnival tradition]]"
performers: []
authors: [Luciano Azzigotti]
year: ~1800
url:
img:
bib: "Elschek, Oskar, and Erich Stockmann. 1969. 'Zur Theorie der Volksmusikforschung.' *Studia Musicologica* 11: 53–63. / Sachs, Curt. 1940. *The History of Musical Instruments*. New York: Norton. pp. 29–32 (concussion idiophones). / Blades, James. 1970. *Percussion Instruments and Their History*. London: Faber and Faber. pp. 341–345."

# ── GRAPH CONNECTIONS ─────────────────────────────────────────────────
hyper:
  - "[[speculative organology]]"
  - "[[idiophone]]"
  - "[[cantilever-collision]]"
  - "[[popular instrument]]"
hypo: []
connect:
  - "[[Bertoia - Sonambient]]"
  - "[[principle-cantilever-collision]]"
  - "[[sonaja]]"
  - "[[castañuela]]"
  - "[[clave]]"
  - "[[carnaval porteño]]"
  - "[[Italian immigrant music Argentina]]"
  - "[[frusta orchestral]]"
  - "[[Intonarumori]]"

# ── TOPOLOGY ─────────────────────────────────────────────────────────
topology:
  shape: "Two flat wooden slats (typically 30–60cm long, 5–8cm wide, 1–2cm thick), hinged or bound together at one end (the handle). The free ends are slightly separated at rest. When the player snaps the handle in a whip motion, the free ends come together sharply, producing a loud crack from the percussive air compression and wood-to-wood impact."
  dimensions: "Handle length: 10–20cm; slat length: 30–60cm; total: 40–80cm"
  modes: "Primarily transient: the crack is a broadband noise burst with a sharp attack and rapid decay. The wooden resonance adds a short low-frequency 'thump' following the initial impact. Some variants produce a second, softer impact as the slats rebound. Not pitched."
  modularity: false
  proportional_basis: "The crack intensity depends on: slat length (lever arm), slat stiffness (wood species), gap at rest (pre-load angle), and snap velocity. Longer slats → more leverage → louder crack. Stiffer wood → shorter, sharper attack transient."
  setup: "Hand-held; no stand required. Single performer."
  hold: "Gripped at the handle end; wrist snap generates the motion."
  posture: "Standing; the snap gesture is a throwing motion of the forearm with wrist acceleration at the end."
  support_required: false
  weight_class: "very light"
  movement_during_play: "Large, theatrical arm-and-wrist gesture. The sound is inseparable from the visual gesture — the látigo is a scenic instrument: it performs as much as it sounds."

# ── FABRICATION ───────────────────────────────────────────────────────
fabrication:
  method: "Two identical slats of hardwood, bound or hinged at one end; the hinge is often leather or cord rather than metal. The simplest possible construction."
  material_refs:
    - "hardwood slats (beech, ash, oak — chosen for stiffness and impact resistance)"
    - "leather hinge or cord binding"
    - "optional: padding at the non-handle end to modify the impact character"
  complexity: low
  files: []
  variants:
    - "frusta orchestral: standardized concert version, used by Ravel (Bolero), Britten, Ligeti (Concert Românesc)"
    - "látigo popular carnaval: Argentine-Italian carnival variant; heavier wood, louder crack, more theatrical gesture"
    - "slapstick vaudeville/commedia: theatrical prop function dominates; the sound is secondary to the visual comedy"
    - "bullwhip: non-fixed variant; the crack is produced by the whip's tip exceeding the speed of sound — different mechanism, same acoustic result (sonic boom at small scale)"

# ── MOAIE VECTOR ──────────────────────────────────────────────────────
moaie:
  M: "[[hardwood-slat-hinge-material]]"
  O: "[[two-arm-cantilever-hinge-topology]]"
  A: "[[snap-gesture-direct-concussion-agency]]"
  I: "[[fixed-handle-free-end-collision-interaction]]"
  E: "[[crack-transient-scenic-gesture-environment]]"
  recursive: false
  vector: [0.20, 0.25, 0.35, 0.20, 0.30]
  # M=0.20 — minimal material: wood and leather, no acoustic engineering
  # O=0.25 — simple topology: two arms, one hinge; functionally minimal
  # A=0.35 — the snap gesture is specific but not complex; strength and timing matter
  # I=0.20 — interaction is conventional concussion; what is novel is the fixed-point geometry
  # E=0.30 — the crack is loud and startling; the gesture is theatrical; more scenic than acoustic

# ── NOTES / ANALYSIS ─────────────────────────────────────────────────
notes: |
  ## Taxonomic Position: Cantilever-Collision Idiophone, Direct Concussion Variant

  The látigo de madera is the simplest instance of the cantilever-collision class — see [[principle-cantilever-collision]].

  The instrument's structural logic: two elements share a fixed point (the hinge/handle). Both are free at the other end. The player's energy snap accelerates the free ends toward each other. The fixed point constrains the collision geometry: unlike sonajas (where elements collide in unpredictable directions), the látigo collision is geometrically determined by the hinge. The crack is highly reproducible.

  **Comparison with sonajas:**
  - Sonaja: elements are free on all axes; collision direction is random; sound is a noise texture from multiple simultaneous impacts
  - Látigo: elements are fixed at one axis; collision is constrained to one plane; sound is a single, sharp, precisely timed crack
  The fixed point is what converts chaotic noise (sonaja) into a controllable event (látigo).

  **Comparison with Bertoia Sonambient:**
  - Látigo: direct concussion (player produces the collision actively); A=high, I=low
  - Bertoia: emergent concussion (player triggers, system produces the collision); A=low (threshold), I=high
  Both share the cantilever topology; they diverge in the agency model. Together they mark the two poles of the cantilever-collision class: maximum player control (látigo) vs. maximum system emergence (Bertoia).

  ## Argentine-Italian Carnival Context
  The látigo de madera in the carnaval porteño tradition (murgas genovesas, comparsas italianas, late 19th – mid 20th century) functions primarily as a scenic-rhythmic instrument: it marks accent points in the procession, punctuates clown and comedic performance (slapstick), and signals transitions between sections. The sound is secondary to the gesture — the arm-and-wrist snap is a visual event read by the crowd before it is heard. This is an important point for MOAIE: the E-dimension here is partly scenic-visual, not only acoustic.

  The Italian tradition in Buenos Aires brought instruments from Liguria, Campania, and Calabria: the frusta, the tamburello, the raganella. The látigo's Argentine form tends to be heavier and louder than the orchestral frusta — adapted for outdoor carnival conditions rather than concert hall.

  ## Connection to Russolo's Intonarumori
  Russolo's noise-machine project (1913) also began from the observation that everyday sonic events — cracks, bangs, scrapes — were musically more interesting than conventional pitched tones. The látigo is, in this sense, a pre-Russolo instrument that already argues for noise as musical material. Its survival in the carnival tradition (while concert music marginalized it to special-effect status) suggests that vernacular practice was ahead of the avant-garde's theory.
publish: true
---
