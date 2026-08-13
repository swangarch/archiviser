# Cross-view validation matrix

Use at least two independent checks for every critical element.

| Element | Plan ↔ elevation | Plan ↔ section | Orthographic ↔ axonometric | Plan/model ↔ perspective |
| --- | --- | --- | --- | --- |
| Footprint | facade extents and offsets | cut intersections | base edges collapse correctly | visible boundary and occlusion order |
| Levels | sill/head and slab lines | floor, landing, roof datums | vertical heights | horizon-relative heights |
| Openings | position and width | cut/reveal position | count and host face | order, scale, handedness |
| Structure | grid and footprint | bearing and depth | load-path continuity | visible member spacing |
| Stairs | run, direction, landings | riser count and headroom | full connection | correct rise and occlusion |
| Voids | boundary | full vertical extent | volume removed | sightline through void |
| Roof | plan outline | pitch/profile | top geometry | silhouette and drainage direction |
| Objects | anchor and orientation | height where relevant | same location | no screen-space mirroring |

## Tolerance logic

- Exact geometry sources: accept no topological mismatch and no unexplained element shift.
- Dimensioned sources: retain stated dimensions; do not average conflicting values.
- Image-only reconstruction: compare stable proportions and projection anchors, then label dimensional accuracy as unverified.
- Stylization may simplify texture and entourage, never geometry, element count, or projection.

## Delivery record

List checked views, passed anchors, corrected conflicts, remaining assumptions, and any view that must be regenerated after a design change.
