---
name: draw-section-perspectives
description: Convert architectural photographs, renders, sketches, or CG views into human-eye section-perspectives that combine an inhabited perspective with readable cut construction. Use for material section-perspectives, perspective cutaways, sectional interiors, eye-level cut views, wall/floor/roof build-ups, stair and skylight details, node enlargements, and feedback about cut poche, line hierarchy, perspective accuracy, material notation, or entourage weight.
---

# Draw Section Perspectives

Create a section-perspective that reads first as space and second as construction. Keep the source view recognizable while revealing how floors, walls, roofs, stairs, glazing, and fixed joinery are assembled.

## Core workflow

1. Inspect the source and lock camera, crop, horizon, vanishing points, spatial proportions, openings, stairs, fixed joinery, and program.
2. Choose one plausible vertical cut plane. State what it intersects and what remains visible beyond it.
3. Separate three graphic layers: cut construction, visible architecture, and entourage.
4. Inventory the assemblies exposed by the cut.
5. Draw the full section-perspective before adding detail enlargements.
6. Add no more than two or three linked node enlargements when they explain an important junction.
7. Compare geometry and grids with the source; correct one failed layer at a time.

Read [references/prompt-template.md](references/prompt-template.md) when writing a generation prompt or reviewing the result.

## Preserve the human-eye view

- Keep an eye-level or deliberately specified low/high human viewpoint; do not silently convert to an axonometric or flat orthographic section.
- Preserve the source lens impression, horizon, dominant vanishing directions, verticals, and recognizable spatial sequence.
- Use the cut to reveal construction, not to invent a different room.
- Keep people at credible scale and use them to confirm eye height, tread dimensions, guards, furniture, and room depth.

For strict preservation, compose with `lock-architecture-shell`. For several views of one project, compose with `match-archviz-multiview`.

## Distinguish cut from view

Use the strongest restrained line and limited hatch or poche only where the cutting plane physically passes through material:

- structural slabs, walls, columns, beams, roof build-ups, stair subframes, and foundations;
- finish, substrate, insulation, membrane, cavity, structure, and lining when visible at a cut edge;
- closed section profiles for timber, metal, concrete, masonry, and glazing frames.

Use medium-fine linework for architecture seen beyond the cut. Use lighter outlines for furniture, books, people, planting, instruments, and loose objects. Never darken an entire visible wall merely to simulate depth.

## Explain assemblies credibly

- Align every layer across corners and adjacent details.
- Give slabs, treads, frames, boards, insulation, and finishes plausible relative thicknesses.
- Show how elements meet: bearing, fixing, reveal, shadow gap, sill, curb, nosing, trim, or movement joint.
- Use material conventions rather than rendered color or light.
- Keep floor paving or boards perspective-correct and slightly clearer than wall-surface texture.
- Leave ceilings white except for essential joints, layers, or structure.

If evidence is insufficient, infer a conventional assembly consistent with the visible design and label it as an interpretive drawing rather than a verified construction document.

## Keep technical output black and white by default

Use a white background and black linework. Express materials through line weight, hatch angle, joint spacing, stipple, density, and omission.

Avoid blueprint blue, colored accents, beige paper, smooth gray washes, gradients, shadows, ambient occlusion, reflections, glossy highlights, sketch wobble, heavy continuous outlines, and decorative poche.

Use limited grayscale only when the user requests it and only as a flat graphic convention, never as rendered lighting.

## Use detail enlargements sparingly

- Select a junction that is visible in the main view: stair/slab, wall/window, roof/skylight, facade/slab, or floor/wall.
- Link it with a fine leader from the exact source location.
- Preserve orientation and layer order.
- Keep the circle or frame lighter than the cut construction inside it.
- Omit labels when text accuracy is not required; do not generate fake annotations.

## Validate before delivery

Check that:

- the result remains a perspective at human scale;
- the cut plane is spatially coherent and does not jump arbitrarily;
- cut construction is stronger than visible architecture;
- entourage is subordinate;
- layer thicknesses and junctions are plausible;
- floor, wall, stair, roof, and glazing materials are legible;
- both main drawing and enlargements agree;
- lines are crisp, straight, single, and stable;
- no color, shading, reflection, or unintended architectural drift appears.
