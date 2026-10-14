# Portfolio V2 — Apple-inspired editorial direction

Status: APPROVAL / IMPLEMENTATION BRIEF — not a deployable redesign.
Date: 2026-10-14
Baseline: `redesign/portfolio-2026` at `857ef36972a40f9402886a8febbf08050b77da4d`
Implementation branch: `redesign/apple-editorial-v2`
Target: jobs, postgraduate applications, and selected collaborations.
Do not merge into `main`, change the current Netlify production branch, or publish confidential assets without explicit approval.

## 1. Design intent

Create an original, polished, Apple-inspired *engineering portfolio*, not an Apple clone or a shopping page.
Use Apple's intentionality: cinematic images, large edited headlines, near-invisible UI, generous space, focused movement, and credible detail revealed on demand.
Avoid gratuitous glassmorphism, glowing grids, spinning objects, cursor tricks, fake device mockups, unverified results, and visual effects that interrupt reading.

**Three base colors**
- Background: `#FFFFFF`
- Secondary surface: `#F5F5F7`
- Main text / dark sections: `#1D1D1F`
- Separate functional action accent: `#0066CC` (links/focus/important actions ONLY; not a fourth general-purpose background color).
Use photography for any other color; no invented colored gradient system.

**Typography**
System font stack (`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`) for broad compatibility. Optional Inter fallback if optical matching is needed, but don't distribute Apple's proprietary font.
Desktop display: fluid `clamp(3.6rem, 7vw, 7.75rem)`, line-height ~1.02, letter spacing ~-0.045em, weight 600.
Headlines: `clamp(2.75rem, 5vw, 5.5rem)`, weight 600.
Body: 17–19px / line height 1.5–1.65, max measure ~65ch.
Kickers and captions should be readable, not tiny monospaced dust.

**Navigation**
Keep existing anchors: Work, Experience, Projects, Journey, About, Contact.
A restrained, sticky translucent bar or slim fixed nav with visible focus indicators; one clearly labeled 'Request résumé' action.
Avoid copying Apple's nav exactly. Mobile must have functional accessible navigation; do not silently hide links.

## 2. Page storyboard

1. HERO / IDENTITY
   - Preserve full name, real black-and-white portrait, UTP degree/expected graduation, Malaysia–Ankara–Bangkok context.
   - Reframe the portrait as a polished editorial still on white or pearl, not overlaid with heavy effects.
   - Primary idea: 'Engineering systems for the real world.' Supporting line: 'Software, data and applied AI — built for work that cannot afford guesswork.'
   - Portrait subtle depth only (at most ~2–3° tilt or gently translated layers); static for touch/reduced-motion.
   - Primary CTA 'Explore work'; secondary 'Request résumé'.

2. GASOS / FLAGSHIP
   - Rebuild the September simple six-row diagram into evidence-based product storytelling:
     A) the real workflow problem
     B) an honest operating-loop diagram
     C) what the *current* platform actually supports
     D) why integrity, auditability and tenant boundaries matter
     E) current pilot / validation constraints, what remains unproven.
   - All screenshots are anonymized, generated from synthetic data with explicit demo labels and approved before publication.
   - Never imply that deferred payroll, regulatory automation or commercial rollout is shipping.
   - Use genuine product UI once safe assets are made; fallback is carefully crafted vector/HTML diagrams.
   - Project is independently built; DO NOT attribute it to UTP.

3. AI/NLP / PROFESSIONAL EXPERIENCE
   - Preserve Omniscien employer name only.
   - Discuss contributions in general professional language: heterogeneous document ingestion, text/table extraction and quality, asynchronous systems, engineering trade-offs; do not reveal private architecture, client details, internal screenshots or metrics.
   - One abstract original 'unstructured → structured' animated graphic, with reduced-motion still.

4. SELECTED WORK
   - Keep Predictive Maintenance, Smart Energy Forecaster, and Nirtya Jothi (including live link).
   - Each as a high-quality editorial tile with accurate repo link; replace mock numeric claims with factual project-specific visual evidence.
   - Avoid heavy live iframe autoplay on homepage when a high-resolution screenshot + external link would be lighter/faster.

5. JOURNEY
   - Keep UTP, Bilkent, Bangkok, existing verified photos/logos, factual learning/experience descriptions.
   - Large photo-led editorial grid, exact crops reviewed. Photos should not crop out the subject.
   - No false assertion that GASOS was coursework.

6. ABOUT / EVIDENCE / CONTACT
   - Keep academic award, exchange, internships, leadership facts, and professional contact paths.
   - Curate the content for employers and graduate admissions; do not oversell professional seniority.
   - Contact: email, LinkedIn, GitHub only. Freelance secondary.
   - Optional discrete availability line, not an agency-style sales section.

## 3. Motion principles

- Maximum one major motion moment per section. Motion reveals meaning, never adds its own information.
- GASOS order-to-close transitions: scroll-tied progressive reveal; all content remains accessible in the DOM even without JS.
- Short 4–6 second media loops only if needed, with a poster fallback and pause control.
- Respect `prefers-reduced-motion` and low-power mobile conditions.
- Prefer CSS transforms/opacity, SVG and Motion (already installed); no Three.js or GSAP as default.
- Avoid scroll-jacking and autoplay audio.

## 4. Asset production (do not fabricate proof)

- HERO: reuse verified transparent portrait, inspect alpha/background and optimize as AVIF/WebP with PNG fallback if needed; no new face generation or identity alteration without request.
- GASOS: request permission for 2–4 synthetic, redacted product UI screenshots; avoid business records, names, monetary figures, tenant IDs and private operational details.
- DOCUMENT INTELLIGENCE: original abstraction/diagram only, never employer product screenshots without explicit permission.
- NIRTYA JOTHI: approved current live site still, linked directly to https://nirtya-jothi.vercel.app.
- JOURNEY: reuse current UTP/Bilkent/Bangkok original images; art-direct responsive cropping.
- Build 1x/2x breakpoint-specific assets and test visible quality and file sizes before deployment.

## 5. Option B: real approval-gated résumé

**Threat model / baseline risk**
At the time of planning, the public repo's deployed redesign branch includes `public/resume.pdf`, and both `app/page.tsx` and `app/work/gasos/page.tsx` link directly to `/resume.pdf`.
This must be removed and its URLs stopped before describing the document as private. Public Git history, previous deployments, caches and already-downloaded copies can remain accessible even after removal. Treat previously published data as exposed; do not promise retroactive erasure.

**Proposed architecture** (needs owner's external setup; not implemented yet)
- Front-end accessible request form collecting name, work email, organization, purpose + short privacy notice; honeypot and rate limiting.
- Server-side route receives request, validates input, stores request and notifies owner.
- Private Supabase Storage bucket for the PDF; never include the PDF in `public/`, GitHub, static build output or public storage.
- Supabase database for pending/approved/rejected requests. Admin approval protected with a real signed-in owner identity and allowlist, plus safe request-state checks. Never use a public unauthenticated `?approve=true` endpoint.
- On approval, server generates short-lived (e.g. 10 minutes) Supabase signed URL and emails it only to the intended requester. One-time access requires an additional redemption-token gate; a plain signed URL is time-limited but reusable until expiry.
- Backend secrets live only in Netlify runtime environment variables. Do not expose Supabase service keys or email-provider keys to browsers.
- Mail via transactional sender after sender/domain verified (e.g. Resend). Store only minimum request PII, limit retention, prevent duplicate/spam requests, avoid logging personal data, and provide clear failure states.
- Implement and test first in preview with a dummy PDF. Do not remove the old public PDF until a working request path is ready OR explicitly accept temporary request-by-email downtime.
- Update every résumé link after migration and test homepage, case study, mobile, email and download.
- For direct job applications, user may still attach the CV to an application or email.

## 6. Change safety and acceptance

- The live Netlify project currently builds `redesign/portfolio-2026`; leave this configured until approval.
- All v2 changes on separate `redesign/apple-editorial-v2` branch. No forced pushes or history rewrite.
- Verify links, portrait, responsive layout (375/768/1440px), keyboard focus, reduced motion, no horizontal overflow, contrast and image loading.
- Validate Next.js build/typecheck and real backend security tests before deploying anything with résumé access.
- Review with user section by section: homepage → GASOS → experience/projects → journey → résumé request flow.
- No invented portfolio metrics or private customer data. No Apple logos/photography/assets copied.
