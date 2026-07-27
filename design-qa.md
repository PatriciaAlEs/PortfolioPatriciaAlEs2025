# Design QA

## Evidence

- Source visual truth: `https://final-vital-74095313.figma.site/`
- Source capture: `design-qa-reference.png`
- Implementation: `http://127.0.0.1:4173/`
- Implementation capture: `design-qa-implementation.png`
- CSS viewport: 1440 × 900 at device scale factor 1
- Captured pixels: source 1094 × 900; implementation 1083 × 891. The in-app browser trims its side panel from exported captures; both pages were rendered and compared in the same 1440 × 900 browser viewport.
- State: Spanish, unauthenticated, hero at initial scroll position.

## Full-view comparison

The source and implementation were emitted together in one comparison pass. The implementation preserves the source hierarchy: fixed editorial navigation, oversized Playfair Display name, deep green canvas, dusty-rose accent, restrained pill controls, asymmetric portrait, status overlay and warm-white transition into projects.

## Focused comparison

The hero was used as the focused region because it contains the most fidelity-sensitive typography, navigation, color, portrait crop and status component. Text and controls were readable at the capture scale. The ReadPp section was additionally inspected in the rendered DOM and browser, including its real mockup asset, project order and case-study modal.

## Required fidelity surfaces

- Fonts and typography: Playfair Display for editorial display type and DM Sans for UI/body; hierarchy, line-height and italic accent follow the source.
- Spacing and layout rhythm: wide editorial grid, generous vertical sections, thin dividers and compact pill controls match the reference. No horizontal overflow at 1440 px.
- Colors and tokens: `#0f1a13`, `#1c2920`, `#a08083`, `#e2cad9` and `#f7f5f2` reproduce the source palette.
- Image quality: the verified Patricia portrait replaces the reference placeholder photography; `Mockup_ReadPp.png` is used at its natural aspect ratio without stretching.
- Copy and content: real bilingual portfolio content replaces all Figma sample copy and fake links. No unsupported metrics or claims were added.

## Comparison history

1. P2 — The first implementation used a pink status card while the source used a dark translucent panel.
   - Fix: changed the status surface to dark green with a subtle warm border and muted green status label.
   - Post-fix evidence: the final paired hero capture shows the status treatment aligned with the source.

## Findings

- No actionable P0, P1 or P2 findings remain.
- P3: the portrait crop differs from the Figma sample because the implementation intentionally uses Patricia's verified professional image.

## Interaction and technical checks

- ES/EN switch updates content and document language.
- Navigation reaches the selected section.
- ReadPp case-study modal opens, receives visible focus and closes from its close control; Escape handling is implemented.
- Authentication modal exposes dialog semantics and an accessible close control.
- Process and architecture tabs update their selected content.
- LinkedIn, GitHub, email and both CV URLs contain real targets; no `#` links remain.
- The Google Drive view URL opens the expected `FSAI-CV-050726.pdf`. The browser blocked automatic navigation to the direct download endpoint with `ERR_BLOCKED_BY_CLIENT`; the direct-download URL format and file ID are correct.
- Browser page-error watch after reload returned no error.
- Desktop browser check found `scrollWidth === clientWidth`.
- Tablet and mobile rules were reviewed at the 1180, 780 and 450 px breakpoints. The current in-app browser session did not expose viewport resizing, so separate tablet/mobile screenshots remain a tooling-level test gap.
- `prefers-reduced-motion` disables smooth scrolling and collapses animation/transition durations.

## Implementation checklist

- [x] Source typography, palette and composition
- [x] Real bilingual content and links
- [x] ReadPp first with verified mockup and stack
- [x] Accessible semantic controls and visible focus
- [x] Build and directed lint
- [x] No old spatial design tokens or styles

final result: passed
