# Production prompt template

Use case: architectural set generation.

Geometry authority: identify the exact model, drawing set, or ledger. State that no other reference may override it.

Requested view: name one plan, elevation, section, axonometric, section-perspective, or camera render.

Projection: state orthographic, parallel axonometric, or calibrated perspective. Include cut plane or camera record where applicable.

Locked geometry: list levels, grids, walls, slabs, roofs, structure, openings, stairs, voids, and fixed joinery visible in this view by stable ID.

Shared design schedule: list material IDs, furniture, fixtures, landscape, and repeated objects visible in this view.

Editable scope: identify only what may change.

Graphic or rendering direction: define line hierarchy, materials, light, atmosphere, and entourage after geometry is locked.

Avoid: redesigned proportions, shifted openings, changed element counts, mirrored layouts, invented structure, mixed projection, bent straight edges, false visibility, arbitrary crop, text, logo, watermark.

Validation: name at least five anchors that must agree with the ledger and adjacent views. Generate this view as a separate asset.
