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
2. Second content and polish pass:
   - Replaced the hero value proposition, capability labels, status message and personal statement in both languages.
   - Added a one-pixel dusty-rose portrait frame with an 18 px outer radius while preserving the original crop and aspect ratio.
   - Increased the status panel maximum width to 370 px so the longer message retains the established type size.
   - Re-captured the implementation and compared it with the source hero in the same paired visual input; no new P0/P1/P2 drift was introduced.
3. Hero status alignment pass:
   - Replaced the personal statement in Spanish and English, including its repeated quote in the About section.
   - Moved the status panel out of the portrait overlap and placed it 20 px below the image.
   - Matched the image width exactly (432 px at the tested desktop viewport), with a 14 px card radius and no horizontal overflow.
4. Reference/original scale comparison:
   - Moved the desktop hero start from 148 px to 90 px to match the reference image.
   - Reduced the header height from 84 px to 64 px and aligned its content to the same 1200 px page grid.
   - Capped the display heading at 112 px and the lead copy at 18 px so they do not grow beyond the reference proportions on wide screens.
   - Reduced the status card to 110 px high at the tested viewport while preserving the new longer status message.
   - Final browser measurements: image top 90 px, image/card gap 20 px and horizontal overflow 0 px.
5. Detailed reference fidelity pass:
   - Added the short editorial rule before the hero eyebrow.
   - Changed desktop navigation labels from uppercase utility text to the title-case, lighter treatment used by the reference.
   - Reduced capability-chip and CTA height; restored the directional and download icons using the project's existing Font Awesome source.
   - Matched the reference header controls with a restrained square language state and filled rose CV action.
   - Narrowed the lead-copy measure to 570 px for the same wrapping rhythm as the reference while retaining the approved new wording.
6. Full-section Figma alignment pass:
   - Rebuilt Projects as a dark two-column ReadPp case study using the real `Mockup_ReadPp.png` asset.
   - Converted Capabilities into four bordered horizontal cards matching the reference hierarchy.
   - Converted Experience into a dark vertical timeline with contained role cards.
   - Compacted the Process selector and detail panel to the reference proportions.
   - Moved About to the dark canvas and presented its facets as bordered cards.
   - Simplified Contact to the reference's single-column editorial hierarchy.
   - Compared every section against the Figma reference at the same desktop viewport; no actionable P0, P1 or P2 differences remain.
7. Project-content and hierarchy pass:
   - Replaced HooBoo with ProfileStack using its public repository documentation as the verified source.
   - Expanded ReadPp with its verified product scope, offline/local persistence, Supabase synchronisation, AI architecture, observability and PWA/APK availability.
   - Changed all project actions to direct GitHub repository links.
   - Enlarged the ReadPp mockup, reduced its surrounding empty space and added restrained rose accents.
   - Extended section headings beyond their content column and separated capability technologies into individual pills.
   - Verified Spanish and English states, desktop and 390 px mobile layouts, repository targets, console output and horizontal overflow.
8. ReadPp rapid-scan redesign:
   - Replaced repeated prose with concise “What it does” and “What I built” lists.
   - Kept the two-column desktop composition and placed the real mockup above a compact current-status card.
   - Shortened the development badge to “Evolving product” and retained stack, PWA, APK and repository affordances.
   - Preserved the architecture explorer and enlarged-image dialog.
   - Verified the 6 product points, 8 build points and 4 status points in the rendered DOM.
   - Verified desktop balance, mobile information-first stacking, English copy, modal keyboard close and zero horizontal overflow.
9. Editorial typography system:
   - Identified the personal hero phrase as Playfair Display italic and formalised it as the semantic `--editorial-font` token plus reusable `.editorial-copy` class.
   - Applied it only to the personal hero note, About narrative/quote/facet notes and authenticated personal stories.
   - Preserved DM Sans for technical descriptions, lists, navigation, controls, labels, statuses and professional content.
   - Verified Playfair Display loaded successfully, Spanish accented characters rendered, computed size remained 16 px with generous line-height, and desktop/mobile layouts had no horizontal overflow.
10. Section-width and project-detail pass:
   - Standardised major headings and section content on the shared 1200 px page shell, removing narrow heading constraints that visually pushed content to the left.
   - Moved the ReadPp PWA and Android APK availability into the same content column as the GitHub repository action.
   - Added separate, bilingual Stack and Skills groups to PDF Translator, TimeToTask and ProfileStack.
   - Preserved the authenticated “Más sobre mí” area as three independent cards and kept its existing login gate.
   - No personal-story photographs are present in the current repository assets, so no unrelated or fabricated images were introduced.
   - Directed lint and the production build completed successfully.

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
