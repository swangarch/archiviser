---
name: generate-consistent-architectural-sets
description: Generate or coordinate one architectural design across plans, elevations, sections, axonometrics, section-perspectives, and perspective renders using a single geometric source of truth and calibrated projections. Use when a drawing package or image set must depict exactly the same building, when plans and sections do not align, when elevations contradict openings or levels, when an axonometric must reconstruct from orthographic drawings, or when rendered cameras need accurate perspective and traceable agreement with technical views.
---

# Generate Consistent Architectural Sets

Build the project once, then derive every view from the same geometry. Treat independent visual invention in each view as failure.

## Establish authority

Assign every input one role:

- **Geometric authority:** BIM, CAD, 3D model, dimensioned drawings, or a mutually consistent orthographic set.
- **Constraint evidence:** survey, sketch, photograph, or render that confirms only visible facts.
- **Design authority:** approved material, facade, furniture, landscape, and lighting decisions.
- **Style reference:** graphic or atmospheric direction only.

Prefer editable 3D or dimensioned geometry over images. Never let a render or style reference override measured geometry.

If no complete geometry source exists, reconstruct one provisional project definition before generating outputs. Mark hidden depth, rear facades, thicknesses, structure, or levels unsupported by evidence as assumptions. Ask for missing evidence when different assumptions would materially change the building.

## Use one geometry ledger

Create a geometry ledger before producing the first final view. Read [references/geometry-ledger.md](references/geometry-ledger.md) and record:

- coordinate origin, north, primary axes, grids, and overall extents;
- every level and floor-to-floor height;
- wall, slab, roof, column, beam, stair, and envelope thicknesses;
- opening IDs, widths, heights, sill and head levels, and host surfaces;
- room boundaries, vertical voids, cores, circulation, and fixed joinery;
- material IDs and where each begins and ends;
- landscape anchors and all objects that must repeat across views.

Give repeated elements stable IDs. Do not describe the same window, stair, or column differently in separate prompts.

## Resolve the project in dependency order

1. Audit the inputs for contradictions, missing dimensions, and ambiguous hidden geometry.
2. Set a coordinate system, levels, grids, and stable element IDs.
3. Resolve the canonical plan and footprints.
4. Resolve vertical geometry through at least two elevations and the required sections.
5. Reconcile plan, elevation, and section intersections before making pictorial views.
6. Derive one un-exploded axonometric from the reconciled geometry.
7. Calibrate each perspective camera from the same model.
8. Apply one shared material and object schedule.
9. Generate each requested view as a separate asset.
10. Run the cross-view audit before delivery.

Do not proceed downstream while an upstream contradiction remains. A polished render cannot repair an unresolved plan or section.

## Control every projection

### Plans

Use orthographic projection with one horizontal cut plane. Keep grids, wall thicknesses, columns, openings, stairs, voids, furniture anchors, and exterior edges registered to the ledger. Show elements above or below only through a consistent convention.

### Elevations

Project orthogonally from the canonical model. Align opening centerlines and edges with the plan; align sills, heads, slabs, parapets, eaves, and roofs with the level schedule. Do not improve facade rhythm independently.

### Sections

Name one continuous cut plane in plan. Every cut element must occur where that plane intersects the model. Align levels, stairs, voids, openings, structure, and roof geometry with both plan and elevation. Never jump the cut silently.

### Axonometrics

Use parallel projection. Keep parallel axes parallel and verticals vertical. Start with a complete un-exploded model; if an exploded view is required, displace coherent systems along one declared axis while retaining registration guides.

### Perspective renders and section-perspectives

Use true perspective with a declared camera position, target, eye height, sensor or lens equivalent, aspect ratio, horizon, vertical correction, and crop. Read [references/camera-and-projection.md](references/camera-and-projection.md). Place the camera in plan and verify visible edges, occlusions, opening order, and repeated bay convergence against the model before styling.

Do not mix axonometric parallelism with perspective convergence. Do not repair perspective by bending straight architecture.

## Generate without drift

- Use orthographic drawings or model views as geometry controls, not merely as mood references.
- State locked invariants and the exact editable scope in every generation prompt.
- Reuse the same element IDs, dimensions, levels, material schedule, and object schedule.
- Render one view at a time; never ask a single image to invent an entire drawing sheet of unrelated projections.
- When image generation cannot guarantee a dimension, preserve the geometry source and correct the specific failed layer rather than regenerating the whole design freely.
- For revisions, update the ledger first, identify every affected view, and regenerate or edit all dependent outputs.

Read [references/prompt-template.md](references/prompt-template.md) when composing production prompts.

## Audit cross-view agreement

Overlay or compare views wherever possible. Use [references/validation-matrix.md](references/validation-matrix.md) and reject the set if any of these fail:

- plan edges do not project to matching elevation edges;
- section cuts disagree with plan location;
- levels, openings, bays, stair landings, voids, or roof profiles shift between views;
- axonometric footprints or heights cannot collapse back to the orthographic set;
- perspective visibility or occlusion contradicts the camera location in plan;
- materials, furniture, landscape, or fixtures move without an approved revision;
- mirrored or repeated elements change count, spacing, handedness, or orientation.

Report unresolved assumptions. Do not claim verified consistency when the source evidence supports only a plausible interpretation.

## Compose with specialized skills

- Use `match-archviz-multiview` for additional rendered cameras after the technical geometry is resolved.
- Use `lock-architecture-shell` for finish or object changes that must preserve approved construction.
- Use `draw-section-perspectives` for an inhabited perspective cutaway.
- Use `draw-construction-axonometric` for an exploded assembly view.
- Use the relevant rendering skill only after geometry and camera are locked.
