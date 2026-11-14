---
name: Academic Collegiate Modern
colors:
  surface: '#f8f9ff'
  surface-dim: '#ccdbf3'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d5e3fc'
  on-surface: '#0d1c2e'
  on-surface-variant: '#44474e'
  inverse-surface: '#233144'
  inverse-on-surface: '#eaf1ff'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#485f83'
  primary: '#00142f'
  on-primary: '#ffffff'
  primary-container: '#0f294a'
  on-primary-container: '#7a91b7'
  inverse-primary: '#b0c8f1'
  secondary: '#006398'
  on-secondary: '#ffffff'
  secondary-container: '#5bb8fe'
  on-secondary-container: '#00476e'
  tertiary: '#001622'
  on-tertiary: '#ffffff'
  tertiary-container: '#002c3e'
  on-tertiary-container: '#009acf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#b0c8f1'
  on-primary-fixed: '#001b3b'
  on-primary-fixed-variant: '#30476a'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#93ccff'
  on-secondary-fixed: '#001d31'
  on-secondary-fixed-variant: '#004b73'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#f8f9ff'
  on-background: '#0d1c2e'
  surface-variant: '#d5e3fc'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 23px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 19px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system reflects a polished, student-led collegiate initiative tailored for business school undergraduates, alumni mentors, and recruiting partners. It balances university prestige with youthful drive: serious enough for institutional recruiters, yet approachable and encouraging for first- and second-year students navigating career exploration.

The visual style blends **Corporate / Modern** structure with airy, editorial warmth. Rather than feeling like a sterile enterprise HR tool or a generic SaaS dashboard, the aesthetic evokes high-end academic publications, student lounge noticeboards re-engineered for the digital age, and modern career center resources. 

Key attributes:
- **Ambitious & Credible:** Anchored in deep collegiate navy, signaling trust, preparation, and professional readiness.
- **Approachable & Optimistic:** Bright sky-blue highlights, generous line spacing, and crisp white cards prevent visual fatigue and ease career anxiety.
- **Structured Clarity:** High typographic legibility, clean 1px structural dividers, and deliberate information grouping enable rapid scanning of job listings, resume teardowns, interview guides, and networking events.

## Colors

The palette is rooted in an authoritative academic navy and balanced by vibrant sky tones that inject energy and focus. The default presentation is exclusively a bright, daylight-optimized light mode.

- **Primary (`#0F294A`):** Deep collegiate navy. Used for core brand identity, primary interactive CTAs, active navigation states, high-priority badges, and prominent section titles.
- **Secondary (`#0284C7`):** Focused azure blue. Used for secondary actions, interactive links, focused state indicators, and mid-tier emphasis.
- **Tertiary (`#38BDF8`):** Bright sky accent. Used selectively for progress indicators, subtle icon washes, notification pings, and highlight tags. Paired with soft tint backgrounds (`#E0F2FE`) to denote active or selected states.
- **Neutral (`#475569`):** Balanced slate. Drives the hierarchy for body copy, supporting subtitles, and meta-labels. Works alongside `#1E293B` for crisp high-contrast body text and `#E2E8F0` for structural hairpins and card perimeters.
- **Canvas Base:** Pure white (`#FFFFFF`) forms the primary card and container base, sitting atop a subtle cool slate canvas background (`#F8FAFC`) to distinguish foreground surfaces naturally.

## Typography

The pairing combines the warm, geometric charisma of **Plus Jakarta Sans** for headlines and interactive affordances with the clinical, neutral readability of **Inter** for dense tabular data, job descriptions, and editorial guides.

- Headings favor tighter negative letter-spacing (`-0.01em` to `-0.02em`) to project confidence and editorial cohesion.
- Body copy is set at generous line-heights to support effortless consumption of dense resume tips, interview transcripts, and recruitment timelines.
- Small labels and category tags utilize slightly expanded letter-spacing to optimize legibility at 11px and 12px sizes.

## Layout & Spacing

The layout is built upon an adaptable 12-column responsive fluid grid with maximum container bounds capped at 1280px to preserve comfortable scan-lines for text-dense content.

- **Desktop (>= 1024px):** 12 columns with `1.5rem` (24px) gutters and a baseline outer margin of `2rem` (32px). Multi-column cards (e.g., job boards alongside cohort filters) organize content logically.
- **Tablet (768px - 1023px):** 8 columns, gutters hold at `1.25rem` (20px), outer margin shrinks to `1.5rem` (24px). Sidebar filters collapse into off-canvas or horizontal drawer components.
- **Mobile (< 768px):** 4 columns with `1rem` (16px) gutters and `1rem` (16px) canvas edge padding. Cards and action bars span full width.

Vertical rhythm relies strictly on the `space-*` scale. Component interiors enforce `space-md` for compact cards and `space-lg` to `space-xl` for featured student spotlights and resource containers.

## Elevation & Depth

To avoid the overly synthetic drop shadows of heavy consumer apps or the flat austerity of technical documentation, the design system employs **subtle tonal layering** alongside **feathered, low-opacity ambient shadows**.

- **Level 0 (Base Canvas):** `#F8FAFC` background providing warm separation.
- **Level 1 (Card & Section Surfaces):** Pure `#FFFFFF` surfaces bounded by a crisp 1px border of `#E2E8F0`. No shadow required in passive states.
- **Level 2 (Hover & Interactive Containers):** Offset by `0 4px 12px -2px rgba(15, 41, 74, 0.05), 0 2px 6px -1px rgba(15, 41, 74, 0.03)`, coupled with border brightening to `#CBD5E1`.
- **Level 3 (Modals, Overlays, Dropdowns):** Defined by `0 12px 28px -4px rgba(15, 41, 74, 0.08), 0 4px 10px -2px rgba(15, 41, 74, 0.04)` with a crisp `#E2E8F0` hairline boundary.

Shadows are tinted with the deep navy base (`rgba(15, 41, 74, ...)`) rather than dead neutral black, preserving an authentic collegiate palette across all elevations.

## Shapes

The design system adopts a moderate, friendly curvature (`level 2`) to sustain an inviting student-centric feel without losing corporate credibility.

- **Standard Elements (0.5rem / 8px):** Input fields, interactive chips, status tags, and secondary action buttons.
- **Containers & Surface Cards (`rounded-lg` / 1rem / 16px):** Job listing modules, mentorship review cards, resource dossiers, and alert banners.
- **Feature Highlights (`rounded-xl` / 1.5rem / 24px):** Hero callouts, resume review submission drops, and modal dialog containers.
- **Pills (`9999px`):** Reserved exclusively for small meta-tags (e.g., "Internship", "Full-Time", "Finance", "Alumni Verified").

## Components

### Buttons
- **Primary:** Solid `#0F294A` background, white label text, `0.5rem` radius. On hover, background shifts to `#1E3A8A` with a micro-lift.
- **Secondary:** Surface `#FFFFFF` background with a 1px border in `#CBD5E1` and text in `#0F294A`. Hover shifts to `#F1F5F9`.
- **Accent / Tertiary:** Transparent background, `#0284C7` text, no border. On hover, adds an subtle `#E0F2FE` background tint.

### Badges & Chips
- **Taxonomy Chips (Industries, Tracks):** `#F1F5F9` background, `#475569` text, `9999px` pill radius. Selected state transitions to `#E0F2FE` background, `#0284C7` border, and `#0F294A` bold text.
- **Urgency / Deadline Tags:** Soft `#FEF2F2` background with `#DC2626` text for imminent deadlines; soft `#F0FDF4` with `#16A34A` text for rolling admissions.

### Cards
- **Opportunity Cards:** White surface, 1px `#E2E8F0` border, `1rem` radius. Header displays company insignia, role title, and timeline meta; content body displays role brief and tags; footer features direct application links and bookmark affordance.
- **Resource Download Tiles:** Include a top accent border highlight (2px `#38BDF8`) to denote toolkits, templates, and resume samples.

### Inputs & Selectors
- **Fields:** Crisp `#FFFFFF` surface, 1px `#E2E8F0` border, text in `#1E293B`, placeholder in `#94A3B8`. 
- **Focus State:** 2px ring in `#0284C7` with an outer soft glow of `rgba(2, 132, 199, 0.15)`.
- **Checkboxes & Radios:** Rounded square (4px) or circular selector in `#CBD5E1`. Checked state fills `#0F294A` with a crisp white checkmark/dot.

### Domain-Specific Components
- **Application Deadline Tracker:** A chronological step list displaying recruitment cycles (Coffee Chat -> Resume Screen -> Superday), featuring navy checked nodes and sky blue active nodes.
- **Alumni Mentorship Card:** Profile thumbnail with an active graduation cohort badge (e.g., `'22 BBA Alum`), quick booking CTA, and industry tags (Consulting, IB, Brand Management).