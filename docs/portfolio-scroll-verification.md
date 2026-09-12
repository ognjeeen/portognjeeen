# Scroll verification

The original desktop page pinned correctly at 2552 by 1235: scrolling from 496 to 1548 kept the project frame at y=320.625 while the reveal changed from 0% to 68.9156%. The background moved separately and exposed a hard horizontal edge because the gradient layer ended before the image.

At 1440 by 720, the same page changed to flow mode and removed its pin spacer. The desktop media query required a height of at least 740 pixels, independently of the existing check that the project frame fits the viewport. Removing that height threshold preserves the actual fit check and the reduced-motion/mobile alternatives.

Browser regression check after the correction, at 1440 by 720:

- Select MovieTwist. Scroll position 658, frame y=63.015625, reveal 0%.
- Press PageDown. Scroll position 1260, frame y=63.015625, reveal 66.0334%.
- Press PageUp. Scroll position 658, frame y=63.015625, reveal 0%.
- Reset the viewport to 2552 by 1234. Sequence mode remains active with one pin spacer.

The replacement background is a fixed pseudo-element, capped at the asset's native size and masked on its edges. It no longer follows document scrolling or ends at a hard gradient boundary.

Validation: `npm run check` passed. The existing Node tests cover scene progression; the viewport and pin behavior above was checked in the connected browser because the repository has no browser test runner.

## Project handoff correction

The previous sequence gave both projects the same opening distance, 0.704 viewport heights. MovieTwist closed over only 0.352 viewport heights and remained on its returned poster for 0.088 viewport heights. The symbol and caption transition then ran on a separate 1.15-second clock, so scrolling could start the next reveal before that transition finished.

Each opening takes 0.75 viewport heights. Both screenshots now hold for 0.25 viewport heights. MovieTwist closes over 0.6 and holds the returned poster for 0.3 before the 0.6 handoff. Codex releases the pin after its screenshot hold, without reserving an unused closing phase. The full pinned sequence takes 4.7 viewport heights. Poster holds and transition distances remain unchanged by this timing adjustment.

The handoff fades the outgoing panel, changes the active project at the fade midpoint, and fades in the incoming panel. Symbol geometry and color follow the same scroll position. The separate time-based selection animation and CSS fill transition were removed. Project navigation uses targets defined alongside the scene timing.

Regression tests first failed on the missing handoff and navigation targets, then passed after implementation. They verify the handoff, equal opening distances, navigation destinations, and reversible scene progression. `npm run check` passed. The browser was unavailable during this revision, so these new transitions have not yet been visually verified in the browser; the earlier measurements above describe the prior pinning correction.
