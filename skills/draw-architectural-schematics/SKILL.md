---
name: draw-architectural-schematics
description: Convert architectural photographs, renders, screenshots, sketches, or CG views into precise black-and-white schematic technical line drawings while preserving camera and geometry. Use for CAD-like perspective drawings, non-blueprint architectural linework, competition diagrams, material-aware schematics, or feedback about line weights, paving, wall textures, entourage hierarchy, reflections, shading, perspective accuracy, and drawing clarity.
---

# Draw Architectural Schematics

Translate an architectural image into a clean technical drawing that explains construction, material, depth, and use through linework rather than rendered light.

## Core workflow

1. Inspect the exact source image.
2. Lock crop, camera, horizon, vanishing points, architecture, openings, fixed elements, furniture positions, and major context.
3. Inventory visible materials before drawing them.
4. Establish line hierarchy before adding texture.
5. Convert materials into sparse drawing conventions.
6. Generate one output per requested image.
7. Compare perspective, geometry, materials, and line weights against the source.
8. Correct one failed layer at a time without restyling successful layers.

Read [references/prompt-template.md](references/prompt-template.md) when composing a production prompt or reviewing an output.

## Keep the drawing black and white

Use a white background and black linework. Create hierarchy through stroke weight, density, spacing, overlap, and omission.

Do not use:

- blueprints, cyan lines, or dark backgrounds;
- gray or colored fills;
- shadow poche, gradients, ambient occlusion, or smooth tonal transitions;
- reflections, glare, bloom, or photographic highlights;
- watercolor, paper texture, pencil wobble, or expressive sketch effects.

Antialiasing may soften pixel edges, but it must not become a tonal rendering method.

## Build a disciplined line hierarchy

Use relative weights, not one bold outline around every object.

1. **Architectural turns:** Use the strongest restrained line only at genuine changes of plane, construction junctions, opening reveals, slab fronts, stair nosings, and foreground occlusions.
2. **Ordinary architectural edges:** Use medium-fine lines for walls, slabs, columns, frames, ceilings, railings, and fixed joinery.
3. **Material notation:** Use fine lines for joints, bonds, grain, tie holes, panels, and paving.
4. **Entourage silhouettes:** Use lines lighter than ordinary architectural edges for furniture, people, planting, and loose objects.
5. **Entourage interiors:** Use the finest lines for seams, folds, faces, leaves, legs, and small construction.

Never trace the entire building, room, column, stair, window, or item with a continuous heavy contour. Shorten or stop a heavier line when the plane turn ends.

## Explain architectural materials

Identify the main material of every substantial visible surface. Use a few representative symbols rather than covering the image uniformly.

- Concrete: aligned formwork joints, selected tie holes, and minimal fine mineral points.
- Masonry: regular brick bond or simplified coursed-stone joints at correct scale.
- Timber: controlled grain aligned with boards, panels, treads, or joinery.
- Metal: paired clean contours and construction joints; no reflective shading.
- Glass: frame geometry plus one or two minimal diagonal convention marks; no reflected scene.
- Textile: restrained seams or sparse stipple; no rendered folds or gradients.
- Water: boundary plus a few level horizontal convention lines; no reflections.

Keep wall-surface texture lighter than architectural corners and junctions.

## Always resolve exposed floor material

Do not leave a visible floor as an unexplained blank field. Infer a plausible construction from the design when the user does not specify one.

- Use a perspective-correct paving or board layout.
- Coordinate joints with structural bays, room axes, thresholds, and facade grids.
- Choose a scale appropriate to the project: large-format porcelain, terrazzo, stone, brick, timber boards, or another credible finish.
- Let joints disappear beneath rugs, furniture, columns, people, and fixed elements.
- Keep floor joints clearer than wall-surface texture but lighter than architectural plane-turn lines.
- Use sparse material marks; do not create a visually dominant checkerboard.

## Keep ceilings quiet

Leave ceilings and soffits white by default. If a special material must be stated, add only a few fine joints, boards, coffers, or tie holes. Never shade a ceiling to create depth.

## Preserve accurate perspective

Treat the source image as geometric authority.

- Preserve crop, lens impression, horizon, and vanishing directions.
- Align floor grids, wall joints, shelving, rails, and ceiling systems with the same perspective.
- Keep verticals and repeated modules stable.
- Stop if an iteration bends straight edges, shifts openings, changes object positions, or invents construction.

For strict source preservation, compose with `lock-architecture-shell`. For several cameras of one project, compose with `match-archviz-multiview`.

## Iterate without collateral drift

Translate feedback into a named layer:

- **Floor too light:** strengthen only floor joints and sparse floor symbols.
- **Wall too strong:** reduce only wall-surface seams and texture, not architectural corners.
- **Building outline too heavy:** reduce ordinary edges and keep modest weight only at real turns.
- **Architecture too weak:** restore construction edges without darkening material texture.
- **Furniture too dominant:** lighten entourage silhouettes and simplify their internal lines.
- **Image degraded:** return to the last clean image and rebuild the requested layer.

When two approved versions contain different successful layers, label one as the exact edit target and the other only as the line-weight or material reference. Never average both images globally.

## Validate before delivery

Check that:

- architecture, camera, furniture, people, and context match the source;
- vanishing points and repeated grids remain coherent;
- structural turns are clearer than surface textures;
- every major architectural material is legible;
- exposed floor material is present and perspective-correct;
- furniture and people remain lighter than architecture;
- ceilings remain unfilled;
- glass and water contain no reflections;
- the image is pure black-and-white in appearance;
- lines are straight, crisp, continuous, and free of doubling or fuzz.
