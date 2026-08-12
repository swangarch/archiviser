---
name: draw-construction-axonometric
description: Translate architectural photographs, renders, models, plans, or sketches into precise construction axonometrics using parallel projection, controlled exploded layers, material linework, and linked detail enlargements. Use for black-and-white architectural axonometric drawings, exploded axons, assembly diagrams, envelope or roof separation, material layering, construction logic, and feedback about projection, offsets, line weights, node callouts, or excessive diagram clutter.
---

# Draw Construction Axonometrics

Explain how a project is assembled without losing its recognizable massing, circulation, enclosure, and landscape relationships.

## Core workflow

1. Inspect all geometry evidence and identify the authoritative massing, levels, openings, roofs, courtyards, and circulation.
2. Choose a stable parallel-projection orientation that reveals the most construction while keeping the building recognizable.
3. Reconstruct the complete un-exploded axonometric first.
4. Choose an assembly story: roof, envelope, slabs, structure, interior fit-out, landscape, or a limited combination.
5. Move only the layers required for that story along one consistent axis.
6. Add projection guides and no more than one or two node enlargements.
7. Validate adjacency, offsets, material scale, and visual hierarchy.

Read [references/prompt-template.md](references/prompt-template.md) when composing the production brief.

## Use parallel projection deliberately

- Keep verticals vertical and parallel building axes parallel.
- Do not mix perspective convergence with axonometric projection.
- Select an orientation that exposes important courts, roofs, openings, stairs, or structural bays.
- Show the complete project within generous margins; avoid cropping critical detached layers.
- Preserve relative heights, footprints, openings, circulation, and context from the source.

## Explode only what explains assembly

- Start from a complete building; never use explosion to hide unresolved geometry.
- Use modest, legible offsets along one vertical or project axis.
- Separate coherent systems rather than random pieces.
- Keep each displaced component registered to its original location with sparse fine guides.
- Maintain wall thickness, slab depth, opening position, and support logic after displacement.
- Prefer two or three separated layers over a cloud of fragments.

For a roof study, lift roof or slab zones. For an envelope study, pull one facade system outward. For structural study, distinguish primary frame, secondary structure, enclosure, and fit-out. Do not expose every internal room unless it serves the request.

## Build the graphic hierarchy

Use a white background and black linework by default:

1. strongest restrained edges at cut or principal construction boundaries;
2. medium-fine visible architectural edges;
3. fine material joints, stone coursing, glazing frames, roof seams, paving, and planting;
4. lighter people, furniture, trees, and context.

Avoid gray rendered shadows, gradients, reflections, heavy continuous outlines, blueprint styling, hand-sketch wobble, and dense landscape that obscures the building.

## Add useful node enlargements

- Select a junction present in the main axon: facade/slab, roof/parapet, stone/glazing, timber/steel, or ground/envelope.
- Preserve the same material order and orientation.
- Use a fine leader; keep the callout subordinate to the full building.
- Do not fabricate dimensions, specifications, or labels when none are provided.

## Validate before delivery

Check that:

- the projection is consistently axonometric;
- the massing matches the source;
- exploded layers can mentally return to their exact original positions;
- offsets and projection guides share one logic;
- supports and junctions remain credible;
- material textures follow component orientation and scale;
- context and entourage remain secondary;
- the drawing is crisp, uncluttered, and black and white unless the user asks otherwise.
