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
11. Motion and microinteraction pass:
   - Added a sub-one-second, six-step hero entrance using opacity and a 16 px vertical offset without affecting layout.
   - Added one-time viewport reveals with `IntersectionObserver`, including dynamically rendered project and authenticated-content cards.
   - Gave editorial headings a restrained 120 ms print-like `clip-path` reveal while keeping functional copy on the standard fade treatment.
   - Added rose navigation underlines, a more translucent compact header state, restrained card/image/chip hover feedback and accessible active states.
   - Added a 280 ms two-phase transition for the ReadPp architecture panel plus a smoothly translating desktop layer indicator.
   - Added a brief whole-content opacity transition for ES/EN changes instead of animating individual words.
   - Added complete `prefers-reduced-motion` overrides that remove stagger, transforms, scale, clip reveals and animated panel changes.
   - No animation library or continuous scroll listener was introduced.
   - Directed lint and the production build completed successfully.
   - Chrome checks at 1440 px and an emulated 390 × 844 px viewport confirmed meaningful rendering and no horizontal overflow.
   - Reduced-motion emulation returned `opacity: 1`, `transform: none` and non-smooth scrolling for the hero.
   - Architecture selection and the ES/EN switch remained functional after animation was added.
   - No Vite overlay or runtime exception was detected; the preview still produces only the pre-existing missing `/favicon.ico` request.
12. Favicon pass:
   - Replaced the obsolete scroll emoji icons with an editorial “P” monogram using the established near-green, pale-pink and dusty-rose palette.
   - Added SVG, multi-resolution ICO, 32 px PNG and 180 px Apple touch icon formats.
   - Added explicit `<head>` references while preserving the exact `Patricia Álvarez ✦` browser title.
   - Verified every favicon endpoint returns HTTP 200 with the expected image content type; the previous `/favicon.ico` 404 is resolved.
13. Footer reveal correction:
   - Removed Contact and footer blocks from the observer-driven reveal list after confirming they could remain at `opacity: 0` near the end of the document.
   - The footer is now always rendered and visible; its editorial heading treatment remains intact.
14. Interactive editorial layer:
   - Added a seven-book, single-shelf composition using semantic HTML and CSS, with pointer reordering, touch-safe `pan-y`, keyboard move/confirm/cancel controls, focus states and `aria-live` position feedback.
   - Stored only shelf order, completed moves and one-time editorial confirmation in `sessionStorage`, with guarded reads and writes for blocked-storage environments.
   - Added four factual ReadPp margin notes and restrained bookmark markers on selected editorial headings.
   - Added a reusable 420 ms page-reveal utility to the existing ReadPp image detail instead of creating a new route or modal.
   - Added the symbolic “Add to my library” interaction, the undisclosed READ keyboard easter egg and a first-session library introduction.
   - Kept all additions dependency-free, canvas-free and subordinate to the portfolio’s projects and professional content.
   - Automated checks confirmed seven books, four notes, keyboard and pointer reordering, the three-move curiosity note, the READ easter egg and the session-only library state.
   - Responsive checks passed at 1440, 1024, 768 and 390 × 844 px with zero horizontal overflow.
   - Reduced-motion emulation removed the introduction and page mask.
   - Directed lint and production build passed with no runtime errors or Vite overlay.
15. Final visual and product audit:
   - Captured and inspected Hero, ReadPp, Bookshelf and Contact at 1440 px and 390 × 844 px.
   - Confirmed the professional hierarchy remains dominant: ReadPp retains the strongest project treatment, the shelf reads as a contained personal detail and “Add to my library” remains visually subordinate to contact.
   - Confirmed stable-state motion density is zero decorative animations in view and action animations remain user-triggered.
   - Added section scroll offsets so fixed navigation no longer covers destination headings.
   - Reduced ReadPp editorial notes to 12.8 px so they remain readable without competing with product content.
   - Fitted all seven book spines within the 390 px shelf while preserving `touch-action: pan-y` and zero page-level horizontal overflow.
   - Final browser run returned no runtime errors.
16. Final copy and clipping correction:
   - Removed the dynamic learning phrase above the bookshelf.
   - Split the active book label, separator and note into explicit elements so word spacing remains intact.
   - Marked editorial titles outside observer-controlled containers as immediately visible, preventing the Contact title mask from remaining partially closed.
   - Browser verification confirmed `clip-path: inset(0)`, full opacity, correct book-note spacing and no remaining dynamic phrase.
17. Premium bookshelf refinement:
   - Reworked the seven spines with varied heights, widths, restrained tilts, paper-like texture, decorative rules and subtle gold details.
   - Changed ReadPp from a solid pink block to a dark plum spine with pink typography so it remains distinctive without reading as a button.
   - Grouped the books without artificial gaps and strengthened the shelf with depth, texture and a soft lower shadow.
   - Integrated the active note as a compact library card beside the books on desktop and directly below the shelf on mobile.
   - Preserved pointer drag, keyboard reordering, session state and `touch-action: pan-y`.
   - Verified seven visible books, active note, zero horizontal overflow and responsive layout at 1440 px and 390 × 844 px.
18. Symbolic portfolio book:
   - Connected the existing “Add this portfolio to my library” action to the interactive shelf.
   - Saving adds an eighth spine named “Patricia P” and opens its library card with the local-only confirmation.
   - The book and reordered position remain available for the current browser session; no network request or external persistence is introduced.
19. Personal shelf content and reversible save:
   - Reframed the shelf around Patricia's interests, work and personality.
   - Replaced Fantasy with Romantasy, added Cats, and removed the Flutter and Design spines.
   - The portfolio control now toggles the Patricia book on and off while preserving session-only storage and sending no data.
20. Fallen portfolio book:
   - Detached the symbolic P spine from the inline label and placed it at the lower-right edge of the footer.
   - Added a restrained sideways rotation, cover depth and shadow so it reads as a book that has fallen and remained in the corner.
   - Kept it inside the original accessible toggle and preserved the reduced-motion behaviour.
21. Library confirmation simplification:
   - Removed the symbolic-save and no-data explanatory copy from both languages.
   - The Patricia spine now uses the concise note “In my library” / “En mi biblioteca”.
22. Fallen-book visual alignment:
   - Positioned the symbolic P against the actual lower-right viewport edge rather than the centred page-shell edge.
   - Changed its silhouette to a fallen horizontal volume and matched the shelf language with a textured plum cover, inset spine, gold rules and diamond detail.
23. Fallen-book scale:
   - Increased the desktop book to 108 × 62 px so it reads as a physical volume rather than a small interface icon.
   - Retained a responsive 78 × 46 px version on narrow mobile screens.
24. Persistent book position:
   - Anchored the fallen P book to the viewport so it remains in the lower-right corner independently of scroll position.
   - Preserved its responsive size, accessible toggle behaviour and reduced-motion treatment.
25. Final shelf substitution:
   - Kept Fantasy in the collection and replaced the removed Flutter and Design volumes with distinct Romantasy and Cats books.
   - Expanded the reorder prompt to invite visitors to organise the shelf around their preferences or their perception of Patricia.
   - Restored the explicit symbolic-save confirmation from the latest approved copy.

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
