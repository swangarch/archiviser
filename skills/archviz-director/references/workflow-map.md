# Workflow map

| Request | Use |
| --- | --- |
| Exterior massing, competition atmosphere, day or night | render-competition-exterior |
| Library, museum, pavilion, stair hall, civic interior | render-public-interior |
| Apartment or house redesign and photoreal render | render-residential-interior |
| Concrete home design or refinement at any residential scale | refine-concrete-residential-interiors |
| Subtle terrazzo-led interior, café, bar, stair, or lounge | design-terrazzo-chic |
| Contemporary timber structure, joinery, or wood-floor system | design-modern-timber-tectonics |
| Nordic mineral interior, coastal civic room, granite, slate, pale brick, or low northern light | design-nordic-mineral-modernism |
| Contemporary red-brick arch, masonry vault rhythm, brick-and-timber civic hall, or asymmetric decorative arch correction | design-modern-brick-timber-arches |
| Contemporary French or Parisian residential style | design-modern-french |
| Art Nouveau and Art Deco fusion | design-art-nouveau-deco |
| One sofa, lamp, wall, color, or material change | edit-archviz-objects |
| Walls, openings, beams, ceiling levels, or camera fixed | lock-architecture-shell |
| Reverse view, paired view, triptych, or day/night set | match-archviz-multiview |
| Coordinated plan, elevation, section, axonometric, section-perspective, and calibrated render set | generate-consistent-architectural-sets |
| Approved design but degraded image quality | restore-archviz-quality |
| Black-and-white technical perspective, line drawing, or material-aware schematic | draw-architectural-schematics |
| Standalone or coordinated black-and-white site plan, floor plan, roof plan, elevation, or section | draw-unified-orthographic-sets |
| Schematic section, elevation, or cutaway requiring extremely pale floor, wall, ceiling, roof, and glazing material lines | draw-material-line-schematics |
| Editorial site plan, floor plan, elevation, section, or cutaway collage using clipped material fragments, cut-out people and planting, paper edges, or halftone | draw-editorial-section-collages |
| Human-eye cutaway with visible material and construction build-ups | draw-section-perspectives |
| Parallel-projection construction axonometric or exploded assembly | draw-construction-axonometric |
| Arrange existing drawings, diagrams, renders, and concept text into one or more large-format boards | layout-architectural-boards |

## Priority rules

1. Apply lock-architecture-shell before any style skill when fixed geometry is stated or implied.
2. Apply generate-consistent-architectural-sets before producing mixed orthographic, axonometric, and perspective deliverables.
3. Apply match-archviz-multiview before rendering companion views.
4. Apply edit-archviz-objects for iterative feedback after a design is approved.
5. Apply restore-archviz-quality only after design approval.
6. Use one image-generation call per distinct deliverable.
7. Apply layout-architectural-boards only after source assets exist as standalone files; never regenerate them inside the board.

## Universal prompt skeleton

Use case: precise-object-edit, sketch-to-render, style-transfer, or lighting-weather.

Primary request: state the single outcome.

Input roles: label exact target, geometry source, approved design source, and style reference.

Locked elements: list camera, architecture, and approved objects.

Editable scope: list only the allowed design layer.

Visual direction: describe style, palette, lighting, materials, and activity.

Avoid: include structural drift, color casts, model-like rendering, excessive HDR, fake people, repeated foliage, noisy materials, text, logos, and watermark.
