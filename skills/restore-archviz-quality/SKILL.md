---
name: restore-archviz-quality
description: Re-render an approved architectural visualization at high fidelity without changing its design. Use when repeated edits caused noisy walls, warped furniture, tangled plants, repeated textures, melted joinery, broken lines, low resolution, painterly foliage, plastic materials, or general image-quality collapse while composition and design should remain unchanged.
---

# Archviz Quality Restorer

## Restoration workflow

1. Use the latest approved image as exact composition and design reference.
2. State that the task is a full re-render, not a redesign.
3. Lock camera, architecture, furniture models, positions, palette, lighting concept, and decor.
4. Rebuild materials and geometry from first principles.
5. Inspect high-risk regions: foliage, textile patterns, timber grain, herringbone joints, cabinet lines, TV bezel, chair legs, small decor, glass edges, and contact shadows.
6. Reject any output that improves sharpness by changing the design.

## Quality targets

- Straight architecture and clean mitres.
- Coherent wood grain at correct scale.
- Regular parquet geometry in perspective.
- Fine woven textiles without moire.
- Botanically credible plants without fused leaves.
- Physically plausible global illumination and contact shadows.
- Natural sharpness without HDR, bloom, crunchy edges, or synthetic noise.

Read references/prompt-template.md for the full quality-restoration prompt.
