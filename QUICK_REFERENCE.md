# Alpacas Ibiza - Quick Reference Guide

## 🎯 Site Map & Navigation

```
HOMEPAGE (Hero + 4 Paths)
    ↓
    ├─→ TOURS PAGE ────→ FareHarbor Booking
    │   (What to expect, FAQ, pricing)
    │
    ├─→ SHOP HUB ────────┬─→ Woven Collection
    │   (3 categories)   ├─→ Custom Commission
    │                    └─→ Alcaca (Manure)
    │
    ├─→ ABOUT PAGE
    │   (Mission, team, story)
    │
    └─→ CONTACT PAGE
        (Forms, email, WhatsApp)

FOOTER LINKS
├─→ Privacy Policy
├─→ Terms of Service
└─→ Cookie Policy
```

---

## 🎨 Design System Quick Reference

### Colors (Edit in `/app/globals.css`)
- **Primary (Brand)**: `110 35% 45%` - Sage Green
- **Accent (CTA)**: `25 70% 55%` - Terra Orange  
- **Secondary**: `45 35% 88%` - Soft Cream
- **Background**: `45 25% 97%` - Warm White
- **Foreground**: `20 20% 15%` - Deep Brown

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Body**: Geist (clean sans-serif)
- **Max 2 fonts** for cohesion

### Spacing
- Use Tailwind scale: `p-4`, `gap-6`, `my-8`
- Mobile-first breakpoints: `md:`, `lg:`
- No arbitrary values (unless necessary)

### Components Size
- Buttons: `lg` (large CTA), `sm` (secondary)
- Cards: `p-6` to `p-8` padding
- Sections: `py-16 md:py-24` (vertical)

---

## 🔄 Content Update Locations

### Home Page (`/app/page.tsx`)
```javascript
// Update these sections:
pathOptions = []  // 4 path cards
features = []     // "Why us" features
highlightFeatures = []  // Special experiences
```

### Tours Page (`/app/tours/page.tsx`)
```javascript
tourTypes = []    // Tour type cards
timelineItems = []  // What to expect steps
faqItems = []     // FAQ questions & answers
```

### Shop Pages
**Woven**: `/app/shop/woven/page.tsx` → Update `products` array
**Alcaca**: `/app/shop/alcaca/page.tsx` → Update `packages` array
**Commission**: `/app/shop/commission/page.tsx` → Update `processSteps` array

### About Page (`/app/about/page.tsx`)
```javascript
team = []     // Team member cards
values = []   // Core values
```

---

## 📊 Conversion Funnel Flow

```
USER ENTERS
    ↓
HOME PAGE (Hero + Choose Your Path)
    ↓
    ├─ Path 1: BOOK TOUR
    │   Book Tour (CTA) → Tours Page → FareHarbor Booking
    │   └─ Conversion: Tour Booking
    │
    ├─ Path 2: SHOP WOVEN
    │   Browse Products → Product Details → Add to Cart
    │   └─ Conversion: Product Sale
    │
    ├─ Path 3: COMMISSION
    │   Learn Process → Fill Form → Submit Inquiry
    │   └─ Conversion: Lead / Commission Order
    │
    └─ Path 4: BUY ALCACA
        Choose Package → Fill Order Form → Checkout
        └─ Conversion: Product Sale
```

---

## ✨ Key CTA Locations

| CTA | Location | Action |
|-----|----------|--------|
| "Book Tour" | Header (sticky) | Links to `/tours` |
| "Book Tour" | Home hero | Scrolls to CTA section |
| "Choose Path" | Home section | 4 clickable cards |
| "Shop Now" | Home hero | Links to `/shop` |
| "Book Now" | Tours page | Scrolls to booking embed |
| "Order Now" | Alcaca packages | Links to order form |
| "Start Project" | Commission page | Scrolls to form |
| "Subscribe" | Newsletter form | Email signup |

---

## 🎯 Each Page's Purpose

### Home
- **Goal**: Drive users to 4 conversion paths
- **CTAs**: "Book Tour" (primary), "Shop Now" (secondary)
- **Trust**: Features, testimonials, newsletter

### Tours
- **Goal**: Educate about experience + enable booking
- **CTAs**: "Book Your Visit" (embedded FareHarbor)
- **Trust**: Timeline, FAQ, reviews, testimonials

### Shop Hub
- **Goal**: Present 3 product categories
- **CTAs**: Category cards route to sub-pages
- **Info**: Shipping, eco-friendly, quality promises

### Woven
- **Goal**: Sell handcrafted products
- **CTAs**: "Browse Collection", product cards
- **Info**: Care instructions, process, materials

### Commission
- **Goal**: Capture high-intent leads
- **CTAs**: Form submission
- **Info**: 6-step process, examples, budget tiers

### Alcaca
- **Goal**: Sell alpaca manure packages
- **CTAs**: Package selection → Order form
- **Info**: Benefits, use cases, application guide

### About
- **Goal**: Build trust + tell brand story
- **CTAs**: Secondary CTAs at bottom
- **Info**: Mission, values, team, farm story

### Contact
- **Goal**: Enable communication
- **CTAs**: Forms + direct contact links
- **Info**: Multiple contact methods, FAQ

---

## 📱 Responsive Breakpoints

```
Mobile: 0-640px
  - Single column layouts
  - Full-width cards
  - Stacked forms

Tablet: 640px-1024px  (md:)
  - 2 columns for grids
  - Wider content areas
  - Horizontal form layouts

Desktop: 1024px+  (lg:)
  - 3-4 column grids
  - Wide content max-width (6xl)
  - Side-by-side layouts
```

All images: Mobile 100%, tablet 50%, desktop 33%

---

## 🔐 Form Locations

| Form | Page | Purpose |
|------|------|---------|
| Newsletter Signup | Home | Email list growth |
| Commission Inquiry | `/shop/commission` | Lead capture |
| Alcaca Order | `/shop/alcaca` | E-commerce |
| Contact Form | `/contact` | General inquiries |

**All forms ready to integrate with SendGrid/Mailgun**

---

## 📈 Analytics Event Tracking

```javascript
// Import in any page/component
import { trackEvent, trackConversion } from '@/lib/analytics'

// Examples:
trackEvent('book_tour_click')
trackConversion.purchase('order-123', 150.50, 3)
trackConversion.commissionSubmit('scarf', '€300-600')

// All events log to console + GA4 (when configured)
```

**View all events in `/lib/analytics.ts`**

---

## 🛠️ Common Customizations

### Change Hero Image
```tsx
// In /app/page.tsx or any page using Hero component
<Hero
  backgroundImage="url(/images/your-image.jpg)"
  title="Your Title"
  subtitle="Your subtitle"
/>
```

### Update Navigation Links
```tsx
// Edit in /components/header.tsx
const navItems = [
  { label: 'Tours & Visits', href: '/tours' },
  // Add/remove items here
]
```

### Change Button Colors
```tsx
// Add classes to Button component
<Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
  Book Now
</Button>
```

### Modify Product Grid
```tsx
// In any shop page, update products array:
const products = [
  {
    id: '1',
    name: 'Product Name',
    price: 99.99,
    image: 'url-to-image',
    category: 'woven',
    description: 'Product description',
  }
]
```

---

## 🎯 Performance Tips

1. **Images**: Use Next.js `next/image` (already set up)
2. **Fonts**: Google Fonts loaded in layout (already set up)
3. **CSS**: Tailwind purges unused styles
4. **Caching**: Vercel caches static content
5. **Compression**: Next.js auto-minifies

**Target Core Web Vitals:**
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

---

## 🚀 Deployment Checklist

Before deploying to production:
- [ ] All images replaced with real photos
- [ ] All text updated with real copy
- [ ] Forms tested end-to-end
- [ ] FareHarbor iframe added
- [ ] GA4 tracking implemented
- [ ] Mobile tested on real devices
- [ ] Links all working
- [ ] 404/500 error pages visible
- [ ] SSL certificate enabled
- [ ] Performance tested (Lighthouse)

---

## 🆘 Troubleshooting

### Images Not Loading
- Check file path in `src` attribute
- Ensure image is in `/public` folder
- Use relative paths or `next/image`

### Forms Not Submitting
- Check email service API key in .env
- Verify form `name` attributes match
- Test in browser console for errors

### Analytics Not Tracking
- Ensure GA4 ID in environment variables
- Check gtag() is loading
- Verify events firing (check console logs)

### Styling Issues
- Check Tailwind classes are correct
- Verify design tokens in `globals.css`
- Test in different browsers
- Clear cache (Ctrl+Shift+R)

---

## 📚 File Reference

**Most important files:**
- `app/page.tsx` - Home page content
- `app/layout.tsx` - Metadata & fonts
- `app/globals.css` - Design tokens
- `components/header.tsx` - Navigation
- `lib/analytics.ts` - Event tracking

**All other files** are well-documented with comments.

---

## 💡 Pro Tips

1. **Test locally first** - `npm run dev`
2. **Use browser DevTools** - Check responsive design
3. **Monitor Network tab** - See image/font loading
4. **Enable Dark Mode** - Test design tokens work
5. **Test forms with valid/invalid data** - Validation works
6. **Clear cookies** - Test analytics fresh
7. **Use Lighthouse** - Check performance score

---

## 🎉 You're Ready!

Everything is built, documented, and ready to customize. Follow the integration checklist, add your real content, and deploy. Your high-conversion site is ready to drive real results!

Questions? Check `README.md` or `INTEGRATION_CHECKLIST.md`

🦙 Happy farming!
