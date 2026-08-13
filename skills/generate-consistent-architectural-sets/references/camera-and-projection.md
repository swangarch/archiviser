# Camera and projection control

## Orthographic views

- Plans, elevations, and ordinary sections use orthographic projection with no convergence.
- Define the view direction and cut plane in project coordinates.
- Keep one scale and datum system across related drawings.
- Align grids and level markers conceptually even when annotations are omitted from generated imagery.

## Axonometrics

- Use parallel projection; parallel project axes must remain parallel in the image.
- Declare the rotation or visible project quadrants.
- Keep verticals vertical unless a different standard projection is explicitly required.
- Do not use a wide-angle perspective and call it an axonometric.

## Perspective cameras

For every camera record:

1. position in plan and height above its level;
2. target point or viewing direction;
3. horizon from camera height;
4. lens equivalent or horizontal/vertical field of view;
5. image aspect ratio and final crop;
6. whether verticals are corrected or intentionally converging.

Validate the camera by projecting known anchors: two or more grids, a level line, opening corners, and one foreground/background overlap. The visible order of rooms, columns, openings, and facade bays must agree with the plan. Objects behind opaque surfaces must not appear. Repeated bays must converge toward the same vanishing point.

If the reference image has unknown camera data, estimate the horizon and vanishing points from several independent straight lines. Treat the result as calibrated only after the reconstructed camera reproduces the same crop and occlusion pattern.
