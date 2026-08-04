---
name: edit-archviz-objects
description: Perform precise object-level edits in architectural visualizations while preserving the approved room and image. Use for replacing sofas, chairs, coffee tables, TV walls, sconces, chandeliers, decor, colors, materials, plants, or single architectural finishes; also use for feedback such as too yellow, too gray, too bulky, too round, or remove one object.
---

# Archviz Object Editor

## Surgical workflow

1. Load the exact selected edit target.
2. Translate the feedback into a named edit list and a preserve list.
3. Change one object family per pass when possible.
4. Describe replacement geometry, material, color, scale, position, and negative constraints.
5. Repeat the invariants after the edit instructions.
6. Inspect for collateral drift before presenting the result.

## Common fixes

- Sofa: specify silhouette, seat count, back profile, arms, upholstery, base, and what it must not resemble.
- Lighting: specify projection, visible hardware, light distribution, color temperature, and whether it should disappear into the wall.
- TV wall: distinguish flat material field, flush insert, recess, and raised frame. Never add a frame when the user rejects one.
- Color: neutral white balance does not mean low saturation. Preserve natural greens, timber, leather, and textiles.
- Decor: add hierarchy and negative space instead of filling the wall.

Read references/prompt-template.md and use its invariant-first structure.
