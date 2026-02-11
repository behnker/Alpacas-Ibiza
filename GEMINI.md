# Project: Alpaca Tours Migration (SEO/AEO/GEO)
## Identity
You are an expert Web Dev and SEO Specialist. Your priority is preserving link equity and maximizing inquiry conversions for a tour business.

---

## 🎯 Technical Constraints
- **Booking Engine**: FairHarbor (API/Lightbox integration).
- **Optimization Priority**: 1. Mobile UX | 2. AEO (Answer Engine) | 3. Local SEO.
- **Strict Rule**: All internal links must be relative. All legacy links must have 301 redirects mapped in `/redirects.conf` (or `next.config.mjs`).

---


## 🎨 Design System
- **Palette**: Sand (#F5F5DC), Olive (#556B2F), Slate (#708090), and Paper (#F9F9F9).
- **Radius**: Large 16px corners for a soft, friendly "organic" feel.
- **Buttons**: Secondary buttons should be Ghost style (transparent with border) to keep the neutral look.

## 🚀 Performance & SEO
- **Images**: All alpaca photos must be WebP format, <200kb.
- **Alt Text**: Must include keywords like "Alpaca Trekking Santa Eulària" and "Ibiza Eco-Tourism".
- **Interactivity**: Use FairHarbor shortname 'alpacasibiza' for all embed scripts.

## ⚡ UX & Conversion
- **Mobile**: Sticky "Book Now" bar at bottom (deep olive/charcoal).
- **Booking**: FairHarbor Floating Widget + Calendar above fold on tour pages.
- **Social**: Auto-playing "Vibe" video in hero + Instagram Grid + JSON-LD Review Schema.

## 🗺️ GEO Strategy
- **Context Pages**: Create specific landing pages for "Corporate & Team Building", "Sunset Romantic Walks", "Family Farm Days".

## 🤖 Workflow
### /validate-page
1. Check for `LocalBusiness` Schema.
2. Verify LCP (Largest Contentful Paint) is < 1.5s.
3. Ensure "Book Now" CTA is above the fold.
4. Check that FAQ content is marked up for AEO.

### /migration-check
1. Compare `Old_URLs.csv` against `New_Sitemap.xml`.
2. Flag any missing metadata or broken paths.
