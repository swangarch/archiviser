# Prompt framework and review checklist

Use these blocks selectively. Do not paste every block into every prompt.

## Preservation block

```text
Preserve the exact camera, perspective, structural shell, walls, columns, slabs, stairs, openings, floor levels, circulation, built-ins, courtyard organization, and room adjacencies. Change only the explicitly permitted furniture, finishes, lighting, decor, landscaping, and construction details. Do not reproduce accidental drift from a previous generation.
```

## Concrete calibration block

```text
Render completed architectural concrete with aligned formwork joints, restrained tie holes, fine pores, subtle panel-to-panel tonal variation, faint curing clouds, sharp chamfers, controlled shadow gaps, and precise glazing and floor junctions. Keep it tactile and maintained. Avoid brown grime, black stains, chaotic patching, repeated procedural texture, waxy uniformity, and sterile white-gray surfaces.
```

## Functional layout block

```text
Infer intended use from the architecture. Make every seating position functional, maintain clear circulation, align the primary sofa with its destination, turn deep niches into usable fitted seating where appropriate, and keep doors, stairs, and courtyard thresholds unobstructed.
```

## Mezzanine block

```text
Use a normal 1050–1100 mm high guard at the void edge, not a full-height enclosure. Communicate upper-floor depth with at least 4–5 m of visible recession, an open zone behind the railing, furniture at multiple depths, converging floor or rug edges, and a distant flat rear wall with one deliberate doorway or passage.
```

## Structure block

```text
Align structure with the building's orthogonal axes. Make slab edges, shelving supports, railings, mullions, tracks, column sections, head plates, base joints, shadow gaps, and fasteners constructible. For a cruciform column, show four plates meeting at one center in a true plus-sign plan with micro-chamfered edges and a credible flush base connection.
```

## Fragile geometry-edit block

```text
Change only [exact element]. Keep its camera-space depth, plan footprint, front-edge plane, span, thickness, and all unrelated junctions fixed. Permit movement only along the building's [X/Y/Z] axis. Use [named endpoint or datum] as the fixed anchor and move only [failed endpoint or face]. Do not add or substitute a beam, lip, shelf, slab, parapet, infill, projection, cantilever, or new volume. Do not move the element toward the camera. Follow the established vanishing directions rather than drawing a screen-space line.
```

For a construction-sensitive edit, require an annotation showing the desired final edge or plane. A mark that identifies only the error is insufficient when several geometric corrections are plausible.

## Quality-restoration lock

```text
Use the approved image as the exact design and geometry source. This is a quality-restoration re-render, not a redesign. Preserve every coordinate, edge, level, wall, slab, opening, column, railing, object model, position, palette, and lighting decision. Rebuild only material fidelity, anti-aliasing, optical behavior, microdetail, and contact shadows. Do not correct, reinterpret, or improve architecture during this pass.
```

## Courtyard block

```text
Create a usable sequence from operable glazing to dry terrace, privacy planting, compact finite pool, and connected room or garden beyond. Keep water separated from the façade by a walkable terrace. Use planting to filter direct views between glazed rooms while preserving daylight. Align opposite rooms with the main house's slabs, walls, grids, and datum lines.
```

## Photographic-quality block

```text
Render as natural high-end architectural photography with physically plausible global illumination, soft contact shadows, continuous tonal gradients, clean anti-aliasing, fine material detail, and neutral lens response. Remove contour strokes, halos, graphic edge bands, embossed texture, cel shading, watercolor effects, and exaggerated local contrast.
```

## Material palette heuristics

- Keep the concrete shell dominant but not visually monotonous.
- Use neutral smoked oak or walnut; reduce red and orange saturation.
- Use glass where visual lightness matters, not as an unexplained full-height enclosure.
- Use polished steel selectively for structure or highlights; show realistic elongated reflections.
- Use linen, wool, leather, and fitted cushions at human contact points.
- Use one rug on one continuous floor unless a raised platform is intentional.

## Furniture review

- Does the sofa face the television, view, fireplace, or conversation center?
- Can a person reach every seat without crossing through another use zone?
- Are furniture dimensions appropriate to the room volume?
- Do rounded chairs create softness without becoming oversized blobs?
- Are lamps scaled to the architecture and placed without blocking views?
- Is decor sparse enough that the architecture still reads?

## Construction review

- Are slab edges thick enough to look credible?
- Are railing heights and glass panels plausible?
- Do shelving edges have believable support and joinery?
- Are steel plates actually readable as the specified section?
- Do column wings align with the façade and floor axes?
- Are base and head joints appropriate to the section?
- Are door tracks, façade mullions, and floor joints aligned?

## Exterior review

- Is there a dry threshold before water?
- Does the pool have a finite length and visible end?
- Are unwanted steps or shelves absent?
- Are opposite rooms visibly connected to the main building?
- Does planting provide privacy without hiding the architecture?
- Do curtains provide privacy while preserving daylight and operability?

## Image-quality review

- Check straight lines and edge aliasing.
- Check concrete for both excessive dirt and excessive uniformity.
- Check timber for orange/red oversaturation.
- Check glass for thickness, reflections, and refraction.
- Check steel for correct sectional geometry and axis alignment.
- Check for dark outlines, halos, repeated patterns, smearing, and painterly foliage.
- If degradation accumulates, restart from the last clean approved source.
- After two failed structural edits, stop generating and request a marked target line, mask, section, or deterministic model correction.
