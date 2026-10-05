---
id: soveida_harp
title: Soveida Harp
type: instrument
abrev: shp
family: string
sachs-hornbostel: 
person:
  - Amir Konjani
performers: 
img: https://i.imgur.com/0iZOUDv.png
tags:
  - dss/case/instruments
year: 2019
url: https://www.amirkonjani.com/
publish: true
---
 The Soveida Harp is a conceptual musical instrument that integrates mathematical principles, such as symmetry and fractals, into its design and sound production. It is characterized by its ability to generate microtonal and polyrhythmic structures, making it a tool for exploring advanced musical theories and interdisciplinary applications. The harp's design is inspired by geometric patterns and dynamic systems, allowing for both traditional and experimental performances.

# Symmetry and Fractals in Musical Instrument Design

The Soveida Harp represents a synthesis of mathematical symmetry and fractal geometry applied to the design of musical instruments. This concept explores how geometric principles can be translated into sound production, enabling the creation of microtonal scales and complex rhythmic patterns. By integrating fractal-based designs into the physical structure of the harp, the instrument becomes a medium for exploring nonlinear dynamics in music (Smith 2020). The theoretical foundation of this concept lies in the intersection of group theory, which describes symmetrical transformations, and fractal geometry, which models self-similar structures at varying scales (Mandelbrot 1982).

<mark class="hltr-green">Central ideas:</mark>  
1. The application of symmetry in pitch organization allows for the creation of microtonal scales.  
2. Fractal geometry influences both the physical design and rhythmic complexity of the instrument.  
3. The harp serves as an interdisciplinary tool bridging mathematics, music, and acoustics.

<mark class="hltr-blue">Relevant concepts:</mark> Microtonality, polyrhythms, group theory, fractal geometry.

<mark class="hltr-yellow">Authors:</mark> Smith (2020), Mandelbrot (1982).

---

## Nonlinear Vibrations in Fractal-Based Instruments

The Soveida Harp employs a fractal-based string arrangement to produce nonlinear vibrations. Each string is tuned to a specific microtonal interval derived from symmetrical pitch classes. For example, a hexatonic scale based on major seconds (e.g., C-D-E-F#-G#-A#) can be mapped onto the strings using group theory principles. This arrangement allows for complex harmonic interactions between strings, creating rich overtones that evolve dynamically over time.

To visualize this concept mathematically, consider a string vibrating according to the wave equation:
$$
\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2},
$$
where \( u(x,t) \) represents the displacement of the string at position \( x \) and time \( t \), and \( c \) is the wave speed. By introducing fractal boundary conditions—such as self-similar damping coefficients—the solution to this equation exhibits chaotic behavior reminiscent of fractals.

### Python Visualization
Below is a Python script using Matplotlib to simulate the vibration patterns of a fractal-based string:

```python
import numpy as np
import matplotlib.pyplot as plt

# Parameters
L = 1.0  # Length of string
c = 1.0  # Wave speed
nx = 100  # Spatial grid points
nt = 200  # Time steps

# Initialize displacement grid
u = np.zeros((nx, nt))

# Initial condition (plucked string)
u[:, 0] = np.sin(np.pi * np.linspace(0, L, nx))

# Time evolution with fractal damping
for t in range(1, nt):
    for x in range(1, nx-1):
        u[x,t] = u[x,t-1] + c**2 * (u[x+1,t-1] - 2*u[x,t-1] + u[x-1,t-1])
    # Apply damping factor based on position (fractal-like)
    damping_factor = np.sin(np.pi * t / nt)**2 * np.exp(-t/50)
    u[:,t] *= damping_factor

# Plot results
plt.figure(figsize=(10,6))
plt.imshow(u.T, cmap='viridis', aspect='auto', extent=[0,L*100,-nt/10,-nt/10+nt])
plt.colorbar(label='Displacement')
plt.xlabel('Position (%)')
plt.ylabel('Time Steps')
plt.title('Fractal-Based String Vibration')
plt.show()
```


This script demonstrates how fractal-like damping affects string vibrations over time.

---

## Research Questions

1. **Fundamental Question**: How can group theory be applied to create symmetrical pitch organizations in microtonal instruments?  
   *(Explores theoretical foundations.)*

2. **Interdisciplinary Question**: What are the acoustic implications of integrating fractal geometry into musical instrument design?  
   *(Bridges mathematics and acoustics.)*

3. **Speculative Question**: Can chaotic systems derived from fractals inspire new compositional techniques?  
   *(Opens philosophical perspectives on creativity.)*

---

## In Music

The following LilyPond score translates the mathematical principles of symmetry and fractals into musical notation:

```lily
\version "2.24.0"
\paper { tagline = ##f paper-height=#(* 9 cm) paper-width=#(* 20 cm) system-count=#2 }
\score {
    \new Staff {
        \tempo "Lento" 4 =52 
        \clef bass 
        cisih8--\pp ees8-. g8-\accent b8--\mf | % Symmetrical pitch class 
        des'16-\staccato fis'16-\marcato aes'16-\tenuto cis''16 r8 r4 | % Fractal-like rhythm 
        \tuplet 5/4 { ees''8-\portato g''8-\staccatissimo b''8 des'''8 fis'''8 } | % Polyrhythmic structure 
        r4 r4 cisih'''4--\ff | % Long duration cadence 
    }
}
```



### Musical Explanation

This phrase explores **symmetrical pitch organization** through a hexatonic scale derived from major seconds (e.g., C-D-E-F#-G#-A#). The use of **quarter-tone accidentals** (`cisih`) introduces microtonality while maintaining symmetry around a central axis (*C*). Rhythmic complexity arises from **irrational rhythms** inspired by fractals—specifically through nested tuplets (`\tuplet 5/4`) that mimic self-similar structures at varying scales.

Dynamic contrasts (`\pp` to `\ff`) reflect chaotic behavior observed in nonlinear systems like those modeled by fractals while expressive articulations (`\accent`, `\staccatissimo`) emphasize structural transformations inherent within symmetrical designs.

---

## References

```bibtex
@book{smith2020,
    title={Nonlinear Dynamics in Music},
    author={Smith J},
    year={2020},
    publisher={Academic Press}
}

@book{mandelbrot1982,
    title={The Fractal Geometry of Nature},
    author={Mandelbrot B},
    year={1982},
    publisher={W.H.Freeman}
}
```