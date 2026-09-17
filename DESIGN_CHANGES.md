# Portfolio V17 — unified engineering field

This revision turns the portfolio into one continuous engineering environment rather than a stack of sections with unrelated wallpapers.

## What changed in V17

- Replaced alternating opaque section backgrounds with one persistent dark engineering field across Home, About, Education, Skills, Projects, Experience, Contact and case-study pages.
- Added section-aware focus lighting that glides to a new region as the active section changes, without changing the underlying visual language.
- Added scroll-linked grid/technical-field movement so the environment progresses subtly as the viewer moves through the portfolio.
- Added cursor-responsive parallax to circuit traces, instrument rings, waves and datum marks, while nearby canvas particles react locally to pointer movement.
- Standardized cards and panels around one restrained glass/metal material system for stronger visual hierarchy and consistency.
- Reduced section-specific wallpaper/orbits so projects and content remain dominant and readable.
- Added shared engineering cues to section labels and edge datum rails to reinforce measurement, embedded I/O and systems thinking without using gimmicky mechanical clipart.
- Preserved reduced-motion support and softened the field further on mobile.

# Portfolio V8 — About consistency and Education performance

This revision responds to the real viewport and scrolling behavior observed in the supplied screenshot.

## What changed in V8

- Compacted About into a viewport-aware composition so the heading, portrait, copy and working principle fit together more naturally.
- Matched the About typography to the site’s established section-heading and body-copy scale instead of using an oversized paragraph.
- Rewrote the biography with a more personal engineering perspective and more specific evidence-led language.
- Reduced portrait width, vertical spacing and chip spacing without sacrificing readability or visual presence.
- Removed Education’s continuous multi-layer background-position animation and large orbit animation, both of which caused expensive repaints while scrolling.
- Replaced the Education card spotlight/3D pointer tracking with a lightweight static accent and simple hover lift.
- Preserved the technical grid, colored timeline, results and global ambient motion.

# Portfolio V7 — complete academic results

This revision completes the Education timeline with the academic figures Izhaan explicitly approved for display.

## What changed in V7

- Added current CGPA as 3.34/4.00 to the B.Sc. card.
- Added 82% and Grade A to the Intermediate card.
- Intentionally omitted the raw Intermediate marks (982/1200) from the interface so the strongest, clearest result leads.
- Generalized the result component so GPA, percentage, grade and marks use one consistent responsive presentation.

# Portfolio V6 — concise portrait-led About section

This revision makes the About section faster to understand and gives Izhaan a clear, personal visual presence.

## What changed in V6

- Replaced the dense heading, two-card story and four-card focus grid with one concise portrait-led composition.
- Added Izhaan’s supplied outdoor portrait as an optimized responsive image, preserving the original photograph.
- Reduced the copy to a short engineering introduction, one supporting sentence and four scannable focus areas.
- Kept the existing “Design clearly. Model honestly. Build deliberately.” principle as the section’s closing line.
- Added a restrained cyan/violet portrait frame, hover response and mobile stacking that match the established futuristic palette.
- Did not copy biographies, counters or unsupported claims from either reference.
- Kept Intermediate and GPA figures out of V6 until Izhaan supplied the exact values and scale; these are added in V7.

# Portfolio V5 — expanded education timeline

This revision turns Education from a short two-card footer inside About into a complete academic story with its own navigation destination.

## What changed in V5

- Added a three-stage alternating academic timeline for B.Sc., Intermediate and Matriculation.
- Added the user-provided matriculation result: 1062/1100, calculated as 96.55%.
- Kept the matriculation institution intentionally unspecified because its name was not supplied.
- Added key-subject tags and clearer explanatory copy for every academic stage.
- Added a moving blueprint-grid and circuit-line atmosphere inspired by the supplied education reference, using lightweight CSS that fits the existing black/cyan/violet visual system.
- Added pointer-reactive lighting and restrained tilt to education cards, plus a single-column mobile timeline and reduced-motion support.
- Added Education to the primary navigation and updated the remaining section numbering.

# Portfolio V3 — futuristic redesign

This revision keeps the evidence-led engineering structure and moves the visual system toward a darker, more dimensional control-room aesthetic.

## What changed in V3

- Rebuilt the palette around true obsidian black, carbon surfaces, ice cyan, electric blue and controlled violet/magenta accents.
- Added a lightweight animated node network behind the site, a slow aurora field, scanline texture and cursor-reactive light.
- Added an animated gradient to the hero statement plus a compact Design → Simulate → Control → Integrate telemetry strip.
- Added cursor-aware color lighting and subtle perspective movement to project, skill, lab and contact cards.
- Gave project cards rotating accent colors so hover states are easier to distinguish while the overall system remains consistent.
- Added a Project Lab with Sand Simulation, CAD Mechanism Studies and Mission Control Tracker, all clearly labeled by evidence status.
- Added two evidence-led featured case studies: a verified public Sign Language Detector repository and a report-supported MATLAB/Simulink Compressive Sensing project.
- Added Computer Vision and Signal Processing filters plus matching skill pathways.
- Reordered featured work so robotics and mechanical systems lead, followed by embedded, computer-vision, signal-processing and software work.
- Added reduced-motion behavior so the experience remains comfortable and usable when motion is disabled at operating-system level.

## What was borrowed as a design principle

- Strong section numbering and obvious visual hierarchy.
- Project-first presentation with large media regions and compact technical tags.
- Timeline-based experience/education storytelling.
- Dense skill cards that remain easy to scan.
- Dark technical styling with restrained cyan/violet accents.

## What was intentionally made different

- Original IM wordmark and engineering-system-map hero rather than another person’s logo/hero composition.
- No portrait placeholder or fabricated personal imagery.
- No unsupported assessment scores, grades, CGPA counters or numeric brag counters. The later V5 exception is the matriculation result explicitly supplied by Izhaan.
- Skills are organized by engineering discipline and project evidence rather than percentage bars.
- The first project becomes a full-width flagship card; supporting projects use a responsive grid.
- Public-facing copy removes internal design notes and keeps the portfolio recruiter-readable.
- Contact uses direct email/LinkedIn actions rather than a fake form without a backend.
- Dedicated technical case-study pages remain the core differentiator.

## Best next visual upgrade

Replace the neutral SVG project placeholders in `public/media/` with authentic project renders/screenshots. Use 1600×1000 (8:5) source images where possible. The layout is already prepared to make those real project visuals the dominant element.

# Portfolio V18 — engineering identity, hero proof, and systems stack

This revision focuses specifically on three high-impact goals: making the interface feel like an engineered system rather than a generic web template, making the first screen communicate the engineering identity immediately, and restructuring Skills into a real mechatronics stack.

## What changed in V18

- Strengthened the hero with an explicit “Mechatronics & Control Engineer” positioning line and the three dominant domains: Mechanical Design, Embedded Systems, and Robotics & Simulation.
- Added three compact proof modules for selected project volume, TM4C123 bare-metal firmware, and the CAD-to-MCU cross-domain toolchain.
- Reframed the hero telemetry as a closed-loop systems path: Sense → Compute → Control → Actuate → Validate.
- Kept the existing mechanics typing animation and final-glyph safety fix intact.
- Reworked the engineering map so it represents a general closed-loop mechatronic system rather than one specific project: Mechanism, Sensing, Firmware, and Control around a system core.
- Added restrained section-level telemetry labels (SYS / IDENTITY, FOUNDATION, STACK, CASE-STUDIES, OUTPUT, INTERFACE) so all foreground sections share the same technical language.
- Reorganized Skills into six system layers: Mechanical Design, Control & Simulation, Embedded / Firmware, Robotics Integration, Computer Vision, and Engineering Software.
- Added a dedicated system-architecture panel with a moving signal path and linked stack layers.
- Added synchronized hover/focus behavior between each skill module and its matching architecture layer.
- Preserved the global V17 engineering field, glass/metal surface system, reduced-motion behavior, and responsive layout strategy.
- Extended the systems-language telemetry marker to project case-study and range-work pages for a more unified portfolio identity.
