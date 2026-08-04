---
name: lock-architecture-shell
description: Redesign or re-render architectural images while strictly preserving fixed construction geometry. Use when walls, entrances, arches, doors, windows, beams, columns, ceiling levels, room dimensions, camera, kitchen footprint, or circulation are fixed; especially after a prior generation drifted or the user says not to change the architecture.
---

# Architecture Shell Lock

## Binding rules

Treat the exact source image as construction authority.

Lock:
- camera, lens, crop, horizon, and perspective;
- every wall plane, thickness, length, and junction;
- all openings, jambs, arches, reveals, doors, and windows;
- beams, soffits, columns, ceiling planes, and height changes;
- fixed kitchen and bathroom footprints;
- floor boundaries and circulation.

Only edit the user-authorized layer: furniture, loose lighting, joinery fronts, surface finish, decor, planting, or rendering quality.

Treat built-in joinery geometry, appliance positions, plumbing locations, worktop lines, and module widths as fixed unless the user explicitly authorizes reconfiguration. A cabinet finish may change without changing its construction footprint.

## Prompt method

1. State that architecture is non-negotiable.
2. Enumerate the visible fixed elements from the source.
3. Separate editable scope from locked scope.
4. Repeat prohibited structural changes in the avoid list.
5. For companion views, use the original view as geometry source and the approved render only as style reference.
6. Compare the output against the source using shared edges or a low-opacity overlay when local image tools permit.
7. Reject outputs with shifted openings, altered beams, changed ceiling levels, relocated kitchens, or invented walls.

Read references/prompt-template.md for the full architecture-lock block.
