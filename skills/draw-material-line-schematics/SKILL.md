---
name: draw-material-line-schematics
description: Convert architectural photographs, renders, screenshots, sketches, site plans, floor plans, roof plans, elevations, and sections into standalone or coordinated clean schematic drawings with disciplined line hierarchy and extremely pale material notation for floors, walls, ceilings, roofs, glazing, and fixed joinery. Use for individual orthographic drawings, complete plan-elevation-section sets, competition drawings, cutaways, or feedback that a line drawing is too empty, too rendered, too dark, materially ambiguous, uniformly weighted, or missing subtle paving, panel, board, and surface information.
---

# Draw Material-Line Schematics

Make architecture readable through a strict line hierarchy, then use barely visible material lines to explain the orientation, scale, and construction of the principal spatial surfaces. The drawing should remain schematic at first glance and become materially informative only on closer inspection.

## Choose the deliverable mode

- **Standalone:** Create one named site plan, floor plan, roof plan, elevation, section, cutaway, or perspective as a full-resolution file.
- **Coordinated set:** Create every requested view as a separate file with one geometry ledger and one pale-material graphic standard.
- **Summary sheet:** Combine completed standalone files only when the user explicitly requests a sheet; preserve the originals.

Never force several small drawings onto one page when the user asks for an individual drawing. For multi-view agreement, compose with `generate-consistent-architectural-sets` and reuse its coordinates, levels, element IDs, material schedule, and camera records.

## Core workflow

1. Inspect the source and lock crop, projection, camera if perspective, geometry, openings, levels, stairs, fixed joinery, furniture, people, planting, and program.
2. Identify actual cuts, visible architectural edges, entourage, and the principal floor, wall, ceiling, roof, and glazing materials.
3. Draw the complete architecture with no material notation first.
4. Establish the line hierarchy before adding any surface lines.
5. Add the minimum material lines needed to identify surface type, module, direction, and scale.
6. Generate one full-resolution file per requested view unless a summary sheet is explicit.
7. Compare all grids and joints with the architecture; remove any line that becomes texture noise.
8. Correct one graphic layer at a time.

Read [references/prompt-template.md](references/prompt-template.md) when composing a production prompt.

## Use five graphic levels

1. **Cut construction:** strongest restrained black poche or line only where the section physically cuts material.
2. **Visible architecture:** medium-fine lines for walls, slabs, openings, frames, stairs, rails, ceilings, and fixed joinery.
3. **Entourage:** lighter lines for furniture, people, planting, books, and loose objects.
4. **Entourage detail:** very fine lines for seams, shelves, leaves, and internal detail.
5. **Material notation:** palest lines in the drawing, typically about 10–15 percent black in appearance.

Material lines must never compete with people, furniture, visible architecture, or cut construction.

## Explain principal surfaces lightly

- Floors: use perspective- or projection-correct paving joints, boards, strips, or panels aligned with thresholds, bays, and circulation.
- Walls: use sparse formwork modules, masonry courses, panel joints, lining seams, or a few representative mineral marks.
- Ceilings and soffits: keep mostly white; add only widely spaced acoustic, board, baffle, or panel joints required to identify the finish.
- Roofs: show a few parallel build-up or seam lines at visible or cut edges.
- Glass: use frames and one or two pale convention marks without reflections.
- Timber and fixed joinery: align fine board or panel joints with real component direction.

Stop lines at openings, corners, furniture, rugs, fixtures, people, and material transitions. Do not run a grid indiscriminately across the drawing.

## Keep tone flat and schematic

Use white space and line density rather than rendered light. Limited flat accent color is acceptable when requested for circulation, planting, program, or another explicit diagram layer; it must not become material rendering.

Avoid gradients, ambient occlusion, shadows, reflective highlights, smooth gray washes, watercolor, paper grain, photographic texture, wood-grain illustration, dense hatch, and checkerboard paving.

## Validate before delivery

Check that:

- projection, geometry, levels, openings, stairs, and fixed elements match the source;
- actual cuts remain strongest and visible architecture remains clear;
- material lines are the palest graphic layer;
- paving and board joints follow the correct direction and scale;
- wall, ceiling, roof, glass, and joinery conventions stop at boundaries;
- every major spatial surface is identifiable without being filled or shaded;
- ceilings remain quiet and entourage remains subordinate;
- the image reads as a schematic drawing from a distance and reveals material only up close;
- no fake labels, dimensions, text, logos, or watermark appear.
- every standalone file remains legible and matches the approved set without depending on a combined sheet.
