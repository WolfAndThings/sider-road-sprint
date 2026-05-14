# siderroad.com · 5 Site Edit Specs
## Sprint Week 1 Deliverable · Developer Handoff

**Built:** 2026-05-11
**Status:** Site access not yet provided to us. These specs are written to be handed directly to Jocelyn's existing developer for implementation, OR for us to execute once login credentials are shared.
**Sender:** Sider Road
**Recipient:** Jocelyn's existing dev team (or us, post-access)
**Estimated dev time:** 3-5 hours total across all 5 edits

Each edit below contains:
- Goal (why)
- Page(s) affected
- Exact copy
- Placement instructions
- Acceptance criteria

---

## EDIT 1 · Fix 404 on `/family-leadership-and-legacy/`

**Goal:** One of 4 mastermind tracks is broken. Live link in main nav is throwing 404. Fix or remove.

**Page affected:** `siderroad.com/family-leadership-and-legacy/`

**Action:**
- Restore the page from backup OR rebuild using same template as the other three mastermind track pages (Authority Women / Men in Family Business / Scale CEO)
- Page must contain: track title, who it's for (3-4 lines), what's covered (bullet list), schedule, price ($875-975 bi-weekly), CTA to Calendly
- All sibling track pages use the same structure. Mirror it.

**Acceptance:** Page returns HTTP 200, renders correctly, CTA button works, mobile responsive.

---

## EDIT 2 · Fix 404 on `/the-book`

**Goal:** Book page broken. Visitors clicking from nav or homepage hit a dead end.

**Page affected:** `siderroad.com/the-book` or `/book` (whichever path is canonical)

**Action:**
Build a single-page layout with:
- Section 1: *The Big Sister's Guide to the World of Work* (Simon & Schuster, 2004), co-authored with Marcelle Langan DiFalco. Cover image, Amazon buy link, Goodreads link, brief 80-word description.
- Section 2: *Reputation by Design* (FORTHCOMING). Placeholder cover or "Coming 2026" graphic. 80-word description. Email capture: "Be first to hear when it drops" → newsletter signup.
- Both sections in single column on mobile, two-column desktop.

**Copy for Big Sister's Guide:**
> A field manual for women starting out in the workforce · the unwritten rules of office politics, mentorship, and earning credibility before tenure does it for you. Co-authored with Marcelle Langan DiFalco. Published by Simon & Schuster.

**Copy for Reputation by Design:**
> The follow-up. How women in leadership consciously build the reputation that opens doors before they walk through them. Coming 2026.

**Acceptance:** HTTP 200, both books visible, email capture wired to existing newsletter list, mobile responsive.

---

## EDIT 3 · Add `/downloads` to main nav

**Goal:** The 9-document Family Business Playbook series lives at `siderroad.com/downloads/` but is not linked from the main nav. Visitors cannot find it. Highest-value lead magnet asset on the entire site is hidden.

**Page affected:** Main site nav (every page, sitewide)

**Action:**
- Add "Downloads" as the 5th or 6th item in main top-level nav
- Place after "Masterminds" and before "Contact"
- On mobile, include in hamburger menu in same position
- Link target: `/downloads/` (page already exists)

**Optional polish:** Add small badge or visual indicator "9 free guides" next to "Downloads" label in nav. If theme supports it. If not, skip.

**Acceptance:** "Downloads" appears in main nav on every page, click navigates to existing /downloads/ page, mobile menu includes it.

---

## EDIT 4 · Add Charisma masterclass pricing anchor

**Goal:** Charisma masterclass = $547 per session × 6 sessions = $3,282 total. Real public price, currently nowhere on site. Adding it anchors prospects to the price ceiling AND makes the masterclass library visible.

**Page affected:** Masterclasses page (or "Programs" / "Offerings" · whichever path lists masterclass library)

**Action:**
- Add a price block to the Charisma masterclass listing
- Format: "$547/session • 6-session series • $3,282 total"
- Place under the Charisma description, above the CTA button
- Style consistently with the rest of the page

**If the Charisma listing has its own dedicated page:** Add the price block to that page too. Same formatting.

**Acceptance:** Charisma masterclass shows price publicly. No other prices need to be added in this edit (will handle the rest in Phase 2).

---

## EDIT 5 · Add "Cohort C · SOLD OUT" banner to Men in Family Business mastermind

**Goal:** Cohort C of the Men in Family Business mastermind is sold out (Fridays 11am EST 2026). This is social proof. Surface it prominently · sold-out cohorts drive next-cohort urgency.

**Page affected:** Men in Family Business mastermind track page (and homepage hero if space allows)

**Action:**
- Add a visible banner/badge to the Men in Family Business mastermind track page
- Banner copy: "Cohort C · SOLD OUT. Cohort D enrolling now."
- Style as a colored bar above or below the cohort list. High visibility, not buried.
- If homepage has a "Latest" or "What's New" strip, add it there too with link to the page.

**Optional polish:** "Cohort C" label with strikethrough on the cohort list itself + "Cohort D · Open" highlighted underneath.

**Acceptance:** Sold-out signal is unmissable. New visitors land and immediately see one cohort is full. Cohort D enrollment CTA visible.

---

## EDIT 6 · Add Jade / Sider Road family-business paragraph to homepage (BONUS)

**Goal:** Sider Road is itself a family business · Jocelyn runs it with her daughter Jade Herz. This is one of the most authentic credibility lines available and is not yet on the homepage.

**Page affected:** Homepage

**Action:**
- Add the following paragraph to the homepage. Best placement = under the hero, before the masterminds section. Or as a stand-alone "About Sider Road" block above the footer.

**Exact copy:**
> Sider Road is itself a family business. Jocelyn runs the practice alongside her daughter Jade Herz · making her one of the few advisors who lives the model she teaches every day.

- If a photo of Jocelyn + Jade exists, add it alongside this paragraph. If not, leave a placeholder for a photo we will provide in Week 2.

**Acceptance:** Paragraph live on homepage, mobile responsive, ready for photo drop-in.

---

## Delivery Format to the Dev Team

Send this entire document as a single Google Doc or email. Include:

1. This file (specs)
2. Final approved copy strings (already inline above)
3. Existing site login credentials (if the dev does not already have them · they should)
4. Acceptance criteria (call out the 6 acceptance lines explicitly)
5. Deadline: target site live within 5 business days of handoff

After dev completes:
- Walk every page in incognito
- Test every CTA
- Check mobile breakpoints
- Confirm /downloads/ page actually loads from new nav link
- Screenshot before/after for client report

---

## Open Items for Jocelyn Before Dev Push

- **Site access**: confirm whether her dev will implement these OR she'd like to grant us WordPress / hosting login so we push directly
- Confirm canonical book page path (`/the-book` vs `/book`)
- Confirm latest cohort dates for Cohort D (Men in Family Business)
- Provide Jade + Jocelyn photo for homepage block (or approve Week 2 photo drop)
- Approve all 5 copy strings above before dev starts
