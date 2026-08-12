# Schematic drawing prompt

Use case: style-transfer or precise-object-edit.

Input image: exact edit target and binding camera, geometry, object-placement, and context source.

Primary request: Convert the image into a precise black-and-white architectural schematic drawing. Communicate construction, material, and depth through linework only.

Geometry lock:

- preserve crop, camera, horizon, vanishing points, and perspective;
- preserve every wall, slab, beam, column, opening, stair, railing, frame, fixed element, furniture item, person, and major landscape element;
- do not redesign, move, add, remove, simplify, or invent construction.

Line hierarchy:

- strongest restrained lines only at genuine plane turns, construction junctions, opening reveals, slab fronts, stair nosings, and foreground occlusions;
- medium-fine lines for ordinary architectural edges;
- fine lines for material joints and surface notation;
- lighter outlines for furniture, people, planting, and loose objects;
- finest lines for entourage interiors.

Materials: inventory visible materials and assign sparse standard line conventions. Keep wall texture lighter than construction edges. Resolve every exposed floor with a perspective-correct paving or board layout coordinated with the architecture. Keep floor joints clearer than wall texture but lighter than structural turns.

Ceilings: leave white. Use only essential ultra-fine material joints.

Glass and water: use minimal convention lines; show no reflected scene, glare, or highlights.

Color: white background and black linework only. No blueprint, gray fill, colored line, shadow, gradient, wash, or transparency-based tone.

Quality: straight geometry, clean mitres, accurate grids, crisp antialiasing, stable fine detail, no doubled, broken, fuzzy, or tangled lines.

Avoid: continuous heavy silhouettes, equal line weight, dense texture, checkerboard floors, shading hatch, hand-sketch effects, paper grain, photorealism, 3D-render lighting, text, dimensions, labels, logo, signature, and watermark.

## Review checklist

- Compare shared edges and openings with the source.
- Check repeated modules against the vanishing points.
- Confirm structural turns remain stronger than wall textures.
- Confirm floor joints remain visible and subordinate.
- Confirm entourage does not overpower architecture.
- Confirm ceilings are unfilled.
- Confirm no color, reflection, gradient, or shadow fill appears.
