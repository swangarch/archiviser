---
name: refine-concrete-residential-interiors
description: Design, refine, or re-render contemporary exposed-concrete residential interiors of any scale or typology while preserving architectural intent and improving warmth, constructability, spatial logic, furniture function, material contrast, indoor-outdoor relationships, and photorealistic quality. Use for apartments, compact rooms, single-storey homes, courtyard houses, townhouses, villas, multi-level homes, renovations, glass façades, terraces, pools, structural-detail corrections, or concrete that feels unfinished, cold, dirty, artificial, cartoon-like, or spatially incoherent.
---

# Design Concrete Residential Interiors

Develop convincing homes of any size in which exposed concrete reads as finished architecture rather than an unfinished shell. Read the actual typology first, then improve function, construction logic, domestic warmth, material contrast, and image fidelity without forcing the project into a villa, courtyard, or double-height template.

## Core workflow

1. Inspect the source image before proposing edits.
2. Separate fixed architecture from editable design layers.
3. Infer the intended use of every visible zone before styling it.
4. Audit spatial function, structure, materials, lighting, and indoor-outdoor sequence.
5. Write an edit prompt with explicit invariants and precise permitted changes.
6. Generate or edit the image.
7. Validate the result visually; correct one failed requirement at a time.

Read [references/prompt-framework.md](references/prompt-framework.md) when writing a production prompt or reviewing a generated result.

## Lock the architectural intent

Treat camera, walls, columns, slabs, stairs, openings, floor levels, circulation, built-in volumes, courtyard organization, and room adjacencies as fixed unless the user explicitly permits structural change.

Do not preserve an obvious generation error merely because it appears in the latest image. Compare against the earliest authoritative source and the user's stated intent. Distinguish among:

- original architectural geometry;
- later material or furniture proposals;
- accidental model drift;
- requested structural refinements.

When editing, repeat the fixed elements in the prompt. State both what may change and what must not change.

## Choose the residential typology before designing

Do not assume a double-height room, mezzanine, courtyard, pool, or detached house. Classify the visible project from evidence:

- compact apartment or studio;
- conventional single-level living space;
- single-storey courtyard or garden house;
- townhouse or vertically organized home;
- multi-level or double-height residence;
- renovation inside an existing concrete shell.

Scale furniture, lighting, material contrast, storage, circulation, and planting to that typology. Use the source geometry rather than adding dramatic volume. A modest room may need one precise seating group and integrated storage; a large room may support broader circulation and larger fixtures. Treat missing features as absent, not as invitations to invent them.

## Read spatial intention before decorating

Infer function from geometry:

- Treat a deep low niche near a stair or window as a likely sitting place; make it comfortable with timber lining or fitted upholstery rather than leaving bare concrete.
- Make seating face its functional destination. A television-facing sofa must be demonstrably aligned with the screen, not merely nearby.
- Preserve clear circulation around seating groups, sliding doors, stairs, and courtyard thresholds.
- When an upper lounge exists, give it visible depth through floor recession, furniture at several distances, and a genuinely distant rear wall.
- When a mezzanine exists, use normal-height guards at its edge; do not turn a railing into a full-height glass enclosure unless the architecture requires one.
- When a courtyard has opposite rooms, connect them through slabs, walls, datum lines, and façade grids rather than presenting detached scenic pavilions.

Resolve function before changing style.

## Make concrete feel complete

Balance imperfection and refinement. Finished architectural concrete may include:

- aligned formwork joints;
- restrained, regularly spaced tie holes;
- fine pores and subtle aggregate ghosting;
- gentle panel-to-panel tonal variation;
- faint board traces or curing clouds;
- crisp chamfers, shadow gaps, movement joints, glazing junctions, outlets, and ventilation slots.

Avoid both extremes:

- **Too raw:** brown grime, black stains, random patching, smoke, mildew, crumbling edges, uncontrolled water damage, or chaotic mottling.
- **Too perfect:** uniform white-gray surfaces, repeated procedural texture, waxy smoothness, erased construction joints, or sterile plastic appearance.

Adjust concrete cleanliness incrementally. Ask for a percentage change when refining an existing render, such as reducing dirt by 30–40% while retaining pores and tonal variation.

## Use material contrast deliberately

Pair the hard mineral shell with a limited set of warmer or lighter elements:

- rough cast-in-place concrete against smooth precast concrete;
- neutral smoked oak or walnut against cool gray structure;
- clear low-iron glass against heavy slabs;
- polished or brushed steel against matte concrete;
- linen, wool, leather, and fitted cushions against hard seating ledges;
- planting and water against orthogonal construction.

Keep timber neutral. Avoid excessive orange, red, yellow, or saturation. Define wood through grain, joinery, and light rather than dark outlines.

Avoid illogical finish stacking. For example, place one rug directly on a continuous finished floor rather than adding an isolated timber platform beneath the rug unless a raised platform is architecturally intentional.

## Check constructability

Make every visible element structurally and materially credible:

- Give exposed slab edges believable thickness and clean fascias.
- Use realistic railing height, glass thickness, base channels, handrails, and sparse required joints.
- Give full-height shelving a substantial side support, edge frame, or wall connection; avoid wafer-thin concrete leaves supporting large grids.
- Align structural members with the building's principal orthogonal axes.
- For a cruciform steel column, show four plates meeting at one center in a true plus-sign plan, with distinct plate faces, micro-chamfered edges, and credible head/base joints.
- Avoid decorative bases that contradict the section. Prefer concealed flush joints when appropriate.
- Align sliding-door tracks, mullions, slab joints, furniture axes, and lighting layouts with the architectural grid.

Do not use structure merely as a visual motif; explain how it meets adjacent floors, slabs, walls, and glazing.

## Design domestic warmth without clutter

Use furniture with a clear functional arrangement and proportions appropriate to the actual room volume. Avoid underscaled pieces in large spaces and oversized statement furniture in compact rooms. Use a few refined pieces with appropriate clearance.

Combine rectilinear architecture with controlled softness:

- one tailored primary sofa;
- one or two rounded, enveloping lounge chairs;
- a precise low table;
- a large rug;
- fitted niche cushions;
- a few books, ceramics, textiles, and healthy plants.

Keep negative space. Avoid generic blob furniture, showroom symmetry, excessive accessories, or furniture that blocks circulation and sightlines.

## Build a believable indoor-outdoor sequence when present

When the project opens to a terrace, courtyard, balcony, or garden, organize thresholds in a usable order:

1. operable glazing;
2. a dry terrace deep enough to step out, circulate, and sit;
3. planting or privacy buffer;
4. a compact pool or reflecting basin;
5. connected rooms or garden beyond.

Do not place water directly against every glazed façade unless explicitly intended. Keep small residential pools finite, with a visible end and simple basin geometry. Avoid unexplained submerged stairs or resort styling.

Use layered planting to filter views between glazed rooms. Preserve daylight and partial visibility while interrupting direct sightlines. Show connected secondary rooms through coherent roof, wall, and façade alignments; use curtains and planting for privacy.

## Refine lighting and transparent objects

Scale fixtures to the actual room volume and ceiling height. Use one coherent geometric family rather than unrelated shapes.

For glass pendants:

- require mathematically consistent geometry;
- show credible wall thickness at silhouette edges;
- use Fresnel highlights, double reflections, refraction, and optical displacement;
- prevent plastic transparency, excessive bloom, or distorted envelopes;
- keep suspension, ceiling fittings, and light source construction minimal and believable.

Use recessed downlights sparingly and align them with circulation or architectural axes. When large glazed façades exist, use sheer curtains on recessed ceiling tracks to preserve operability, privacy, and views.

## Preserve photographic realism

Reject cartoon, cel-shaded, watercolor, embossed, or outlined rendering. Ask for:

- physically plausible global illumination;
- soft contact shadows and continuous tonal gradients;
- clean anti-aliasing;
- natural lens response;
- high-frequency detail in timber, textiles, glass, steel, concrete, and foliage;
- crisp construction lines without black contour strokes or edge halos.

When quality collapses after repeated edits, return to the last clean approved image and apply only the necessary change. Do not continue editing a degraded derivative indefinitely.

## Control fragile geometry edits

Treat image generation as a visual re-renderer, not as a precise 3D modeler. For slab edges, wall setbacks, railing junctions, cruciform sections, aligned joints, or other construction-sensitive geometry:

1. Name the exact element and identify its two or more fixed junctions.
2. Separate world-axis movement from screen-space appearance. State which axis may change and explicitly lock the other axes, depth, footprint, and edge plane.
3. Use an annotated reference that shows the desired final top and bottom edges, not only a cross marking the error. If the target line remains ambiguous, ask for it before generating.
4. Freeze one reliable endpoint or datum and modify only the failed endpoint when possible.
5. Forbid common model substitutions explicitly: no added beam, lip, shelf, slab, parapet, infill, projection, or forward extension.
6. Validate the result against the requested geometry before describing it as corrected.

Do not keep guessing after two failed structural edits. Stop, explain that raster generation cannot guarantee architectural coordinates, and request a marked target line, mask, section, CAD view, or deterministic 2D/3D correction. Never compound geometric drift by editing a failed derivative.

## Separate design, geometry, and quality passes

Use distinct passes for distinct goals:

- **Design pass:** furniture, lighting, materials, domestic warmth, and landscaping.
- **Geometry pass:** one construction correction with all unrelated pixels locked.
- **Quality pass:** full high-fidelity re-render with every design and geometric coordinate immutable.

Do not combine a fragile structural correction with broad aesthetic changes. Once the user approves a version, preserve it as the clean checkpoint. For a final quality pass, state repeatedly that it is a restoration rather than a redesign and prohibit all geometry changes, including improvements that seem architecturally preferable.

## Iterate with controlled scope

After each generation, verify:

- architecture and camera remained fixed;
- furniture orientation is functional;
- stairs, doors, and circulation remain usable;
- upper spaces have believable depth;
- columns and joints align with the building axes;
- concrete sits between sterile and dirty;
- exterior rooms remain architecturally connected;
- glass, steel, and water behave optically correctly;
- no cartoon outlines or texture repetition appeared.

If one requirement fails, issue a single-change correction prompt and repeat all invariants. Avoid rewriting unrelated successful areas.
