---
name: archviz-director
description: Direct architectural visualization generation and editing by classifying the image, preservation level, design style, lighting state, and view-consistency requirements. Use for mixed or ambiguous archviz requests, multi-image batches, competition renders, exterior or interior transformations, design refinements, and iterative feedback where the correct specialized workflow must be selected before image generation.
---

# Archviz Director

## Core workflow

1. Inspect every image before editing.
2. Label each input as exact edit target, geometry source, style reference, or companion-view reference.
3. Set the preservation level:
   - Style freedom: preserve only the design idea or massing.
   - Spatial lock: preserve camera, composition, room proportions, and major geometry.
   - Architecture lock: preserve every wall, opening, beam, ceiling level, and fixed element.
   - Surgical edit: change only the named object or material.
4. Route the task with references/workflow-map.md.
5. Build a prompt with an explicit primary request, invariants, editable scope, palette, lighting, material realism, and avoid list.
6. Generate distinct requested assets with separate image calls. Never combine a triptych into one image when separate outputs are requested.
7. Inspect for geometry drift, style mismatch, color cast, fake people, repeated foliage, material noise, and multi-view contradictions.
8. Iterate with one targeted change per pass.

## Default visual baseline

- Favor photographic realism with competition-grade composition.
- Keep exposure bright enough to read architecture.
- Use neutral white balance, normal natural saturation, and controlled contrast.
- Avoid yellow filters, gray desaturation, cartoon rendering, miniature-model appearance, aggressive HDR, excessive bloom, and commercial showroom styling.
- Add scene detail with hierarchy. Do not fill every surface.
- Treat architecture and design constraints as more important than decorative novelty.

## Required discipline

Never infer that an existing wall, entrance, arch, beam, or ceiling step may move. When the user has not granted structural freedom, use the architecture-lock workflow.

Read references/workflow-map.md before choosing a specialized workflow.
