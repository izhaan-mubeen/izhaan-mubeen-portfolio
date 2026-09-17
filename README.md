# Izhaan Mubeen — Engineering Portfolio

A local-first Astro portfolio implementing the supplied 08 September 2026 design specification. The site is deliberately evidence-led: it avoids fabricated metrics, fake GitHub links, guessed employers and unsupported physical-performance claims.

## What is implemented

- Fixed responsive header, skip link and keyboard-friendly mobile menu
- Obsidian-black futuristic visual system with cyan / electric-blue / violet energy accents
- Animated node-network background, slow aurora field, technical grid and cursor-reactive light
- Color-shifting, perspective-aware hover interactions across project and skill cards
- Hero, About, a three-stage animated Education timeline, Skills, Selected Work, Experience, Credentials and Contact sections
- Concise portrait-led About section using Izhaan’s supplied photograph
- Academic results displayed with approval: current CGPA 3.34/4.00, Intermediate 82% (Grade A), and Matriculation 1062/1100 (96.55%)
- Ten featured engineering case studies with responsive filter controls
- Three additional Project Lab entries with transparent evidence-status labels
- Ten static case-study routes under `/projects/[slug]/`
- Verified public GitHub destination for the Sign Language Detector
- Authentic MATLAB App Designer evidence extracted from the supplied Signal Processing report
- Optional `/work/` range page
- Accessible copy-email behavior and LinkedIn destination
- Neutral technical SVG placeholders clearly labeled for replacement
- Reduced-motion handling and no scroll hijacking
- Real 404 route
- Local-only release gate for the two mandatory repositories

## Local setup in VS Code

1. Open this folder in VS Code.
2. Run `npm install` once to install the pinned dependencies.
3. Run `npm run dev`.
4. Open the localhost address Astro prints in the terminal.
5. Use `npm run build` for a local static build and `npm run preview` to inspect it.

The project is not configured to deploy anywhere.

## Important: hosted release is intentionally blocked

Run:

```bash
npm run release:check
```

It will fail until BOTH of these are replaced with exact verified public repositories:

- AI Study Assistant
- Sand Simulation

This is intentional and matches the supplied launch condition.

## Assets you need to replace before release

All files in `public/media/` are neutral technical placeholders, not fabricated results. Replace them with authentic evidence where available:

- VISTA: torso/head/shoulder render, exploded view and drawings
- Differential drive: simulation frame, coordinate-frame diagram and plots with units
- Wire cutter: hardware photo, verified state diagram, peripheral details and demonstration evidence
- Conveyor: real CAD overview, linkage close-up and motion-study clip; optional faithful GLB
- AI Study Assistant: sanitized authentic UI capture
- Embedded/Python pipeline: tested pipeline diagram and timestamped plot
- Weather dashboard: real city/units/retrieval-time capture
- News summarizer: sanitized successful workflow run and sample output
- Sand Simulation and CAD range pieces: authentic screenshots/renders

Target project stills: 1600×1000 (8:5), with optimized WebP/AVIF derivatives when preparing a final release.

## CV

The uploaded material in this conversation contained the portfolio design brief but not an actual CV PDF file. To enable the CV controls, place the verified PDF at:

`public/cv/Izhaan-Mubeen-CV.pdf`

The current public-facing layout intentionally hides CV controls until the verified PDF is added. Once the file is present, add a normal link to `/cv/Izhaan-Mubeen-CV.pdf` in the header or hero.

## Claims still requiring verification

- Wire-cutter hardware and firmware evidence
- Embedded Systems Lab internship dates, organization and demonstrable output
- SolidWorks internship employer name
- Certification exact titles, dates and credential URLs
- GitHub profile and project repository URLs
- Project team/organization credits and third-party asset licenses

## Content editing

Project content is centralized in:

`src/data/projects.ts`

Each record keeps stage, ownership, factual outcome, evidence note and repository state separate. That prevents a visually finished card from silently implying stronger evidence than is available.

## Recommended pre-release checks

- 320, 390, 768, 1024 and 1440 px widths
- Keyboard-only navigation and Escape-to-close mobile menu
- 200% zoom and no horizontal reading scroll
- Reduced motion
- Color contrast and visible focus indicators
- All images/alt text/captions/provenance
- Internal routes, CV, email, LinkedIn and every displayed external URL
- Chrome, Firefox, Safari and a mobile browser
- `npm run check`, `npm run build`, then a controlled manual release review

## Notes

No public deployment workflow is included. No API keys, fabricated repositories or invented quantitative outcomes are included.
