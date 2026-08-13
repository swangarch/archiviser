---
name: draw-unified-orthographic-sets
description: Create precise black-and-white architectural site plans, floor plans, roof plans, elevations, and sections as standalone drawings or coordinated multi-file sets with one shared graphic standard. Use for individual orthographic deliverables, full plan-elevation-section packages, competition drawings, permit-style schematic sets, or feedback that drawings use inconsistent line weights, poche, grids, material symbols, scale, entourage, projection, or geometry.
---

# Draw Unified Orthographic Sets

Create each drawing as an independent deliverable while keeping the whole project visually and geometrically unified.

## Choose the output mode

- **Standalone:** Generate only the named site plan, level plan, roof plan, elevation, or section as one full-resolution file.
- **Coordinated set:** Generate every requested view as a separate full-resolution file. Reuse the same geometry ledger and graphic standard.
- **Summary sheet:** Compose several completed drawings onto one sheet only when the user explicitly requests a sheet. Keep the standalone originals.

Never substitute a sheet of small drawings when standalone files were requested.

## Lock geometry before graphics

Use `generate-consistent-architectural-sets` when more than one view must agree. Read its geometry ledger and preserve coordinates, levels, grids, opening IDs, stairs, voids, roof profiles, structure, and fixed objects. For one supplied drawing, treat that source as the geometry authority and do not redesign it.

## Use one orthographic language

Apply the same hierarchy to every file:

1. strongest restrained black line or compact poche at actual cuts;
2. medium lines for visible envelopes, slabs, frames, stairs, and principal edges;
3. fine lines for doors, glazing, rails, fixtures, furniture, and landscape boundaries;
4. finest sparse lines for material joints and entourage detail.

Use pure white background and black linework. Keep annotation, symbols, grids, north arrows, scale bars, and view titles consistent when requested. Never invent dimensions or labels unsupported by the source.

## Resolve each drawing type

- **Site plan:** Show property and context edges, access, terrain, building footprint, roof or ground convention, landscape, north, and scale at appropriate hierarchy.
- **Floor plan:** Declare level and horizontal cut plane. Resolve wall thickness, structure, openings, swing, stairs, voids, fixed joinery, furniture, and exterior thresholds.
- **Roof plan:** Resolve perimeter, falls or seams, parapets, drainage, rooflights, plant, and adjacent context without confusing it with a floor plan.
- **Elevation:** Use orthographic projection. Align bays, openings, sill/head levels, slabs, parapets, eaves, roofs, terrain, and material coursing with the plans.
- **Section:** Declare one continuous cut line. Align levels, stairs, voids, structure, openings, roof, terrain, and cut poche with plan and elevation.

Read [references/deliverable-manifest.md](references/deliverable-manifest.md) before multi-file production and [references/prompt-template.md](references/prompt-template.md) for each output.

## Avoid graphic and geometric drift

- Do not beautify one elevation by moving openings.
- Do not change wall thickness, stair direction, column count, roof shape, or terrain between files.
- Do not use perspective in plans, elevations, or ordinary sections.
- Do not wrap every object in a heavy outline.
- Do not add gray render washes, shadows, gradients, reflections, blueprint color, paper texture, sketch wobble, dense hatch, fake text, logos, or watermarks.

## Validate every file and the set

Check standalone legibility first. Then compare shared axes, footprint, levels, openings, structure, stairs, voids, roof, terrain, materials, scale behavior, line hierarchy, symbols, and entourage weight across the set. A late standalone addition must match the approved standard without requiring a new summary sheet.
