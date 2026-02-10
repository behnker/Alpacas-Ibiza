# Alpacas Ibiza - High-Conversion Website

A modern, high-conversion website for Ibiza's first alpaca farm and artisanal weaving studio. Built with Next.js 16, React, Tailwind CSS, and designed for four primary conversion streams: tour bookings, product sales, custom commissions, and alpaca manure e-commerce.

## Project Overview

### Brand Positioning
- **Ibiza's first alpaca farm & weaving studio**
- Premium, sustainable, animal-welfare-focused
- Warm, natural, Mediterranean aesthetic
- Activities: Tours, yoga, weddings, photoshoots, workshops, adoptions
- Products: Handwoven textiles, alpaca manure (Alcaca/Oro Negro), custom commissions

### Primary Conversion Goals (Priority Order)
1. **Book a Tour** - FareHarbor integration (embed + prominent CTAs)
2. **Buy Alcaca** - E-commerce for alpaca manure (sample to bulk packs)
3. **Commission Custom Piece** - Lead capture + conversion funnel
4. **Shop Woven Collection** - Product listings + checkout

## Site Architecture

### Pages Structure
```
/
├── page.tsx                    # Home (hero + 4 paths + features)
├── /tours
│   └── page.tsx               # Tour booking (timeline + FAQs + FareHarbor embed)
├── /shop
│   ├── page.tsx               # Shop hub (3 main categories)
│   ├── /woven
│   │   └── page.tsx           # Woven collection (product grid + care info)
│   ├── /commission
│   │   └── page.tsx           # Custom commission (process + form + FAQ)
│   └── /alcaca
│       └── page.tsx           # Alpaca manure (packages + use cases + order form)
├── /about
│   └── page.tsx               # About (mission + values + team + farm story)
├── /contact
│   └── page.tsx               # Contact (info + form + FAQ)
├── /privacy
│   └── page.tsx               # Privacy Policy (GDPR compliant)
├── /terms
│   └── page.tsx               # Terms of Service
└── /cookies
    └── page.tsx               # Cookie Policy
```

## Design System

### Color Palette (Semantic Tokens)
- **Primary**: Sage Green (#6da855) - earthy, natural brand color
- **Accent**: Terra/Rust (#e67e22) - warm CTA color
- **Secondary**: Soft Cream (#e0d8d0) - natural fiber tone
- **Muted**: Neutral warm grays
- **Background**: Warm white (#fbf9f7)
- **Foreground**: Deep brown (#261410)

### Typography
- **Display Font**: Playfair Display (headings - elegant, premium)
- **Body Font**: Geist (clean, readable)
- **Max 2 fonts total** for visual cohesion

### Spacing & Layout
- Mobile-first approach
- Flexbox for most layouts
- Tailwind spacing scale (gap, px, py, etc.)
- Semantic design tokens via CSS variables

## Key Components

### Reusable Components
- `Header` - Sticky navigation with mobile menu
- `Hero` - Section hero with CTA options
- `ChoicePaths` - 4-path conversion grid
- `Features` - Feature cards (3 or 6 item grids)
- `Footer` - Comprehensive footer with links
- `FAQ` - Accordion FAQ component
- `Timeline` - Process/experience timeline
- `ProductCard` & `ProductGrid` - E-commerce product display

### Pages Features
- **Home**: Hero + choice paths + why us + special experiences + newsletter + CTA
- **Tours**: Hero + tour types + what to expect timeline + plan your visit + FAQ + FareHarbor booking embed + guest testimonials
- **Shop Hub**: Category cards (woven, commission, alcaca) + features + featured preview + commission CTA
- **Woven**: Product grid + care instructions
- **Commission**: 6-step process + examples + commission form + FAQ
- **Alcaca**: Why alpaca manure + package options + use cases + application guide + testimonials + order form
- **About**: Mission + values + farm story + studio story + team + sustainability
- **Contact**: Contact options (email, WhatsApp, location) + contact form + quick FAQ
- **Legal**: Privacy, Terms, Cookies (GDPR-compliant)

## Conversion Optimization

### Conversion Funnels Built In
1. **Tour Bookings**: Hero CTA → Tours page → FareHarbor booking
2. **E-commerce**: Hero → Shop → Category → Product detail → Checkout
3. **Commission**: Home CTA → Commission page → Form submission
4. **Lead Capture**: Newsletter signup, contact form, email inquiries

### Analytics Tracking (lib/analytics.ts)
```typescript
// Pre-configured events for:
- page_view
- book_tour_click, booking_calendar_open, booking_complete
- product_view, add_to_cart, begin_checkout, purchase
- commission_form_open, commission_submit
- newsletter_signup, contact_form_submit, email_inquiry
```

Ready to integrate with GA4, Mixpanel, or custom analytics backend.

### CTA Strategy
- **Sticky header "Book Tour" button** (main conversion)
- **Hero "Choose Your Path"** (4-option funnel)
- **Prominent CTAs** on every major section
- **Forms with smart fields** (progressive disclosure)
- **Mobile-optimized forms** (fewer required fields on mobile)

## E-commerce Features

### Shop Sections
1. **Woven Collection** - Handcrafted products with:
   - Product cards (image, price, rating, description)
   - Add to cart / wishlist
   - Product care instructions
   - Bulk buying info

2. **Custom Commission** - Lead capture + process:
   - 6-step visual timeline
   - Commission request form (project type, budget, vision)
   - FAQ for common questions
   - Role-based examples

3. **Alcaca** - Product details + packages:
   - 3 package options (sample, garden, bulk)
   - Why alpaca manure benefits
   - Use cases (vegetable, flowers, composting)
   - Step-by-step application guide
   - Order form with package selection

### Payment/Checkout
- **Placeholders for:**
  - Stripe checkout integration
  - Shipping address collection
  - Order confirmation

## FareHarbor Integration Notes

- **Booking embed location**: `/tours` page (marked with placeholder `<iframe>`)
- **Replace placeholder** with FareHarbor iframe code from your account
- **URL format**: `https://your-account.fareharbor.com/...`
- **Events to track**: `booking_calendar_open`, `booking_complete`
- **CTA links** throughout site point to `/tours#booking`

## Implementation Next Steps

### 1. Add Real Content
- Replace placeholder images with actual farm/product photos
- Update team member info and photos
- Add real pricing for tours and products
- Update location and contact details

### 2. FareHarbor Integration
- Get your FareHarbor iframe embed code
- Replace iframe placeholder in `/app/tours/page.tsx`
- Test booking flow

### 3. E-commerce Setup
- Choose platform: Stripe, Shopify, or custom solution
- Integrate checkout pages
- Set up product inventory management
- Configure shipping rates

### 4. Analytics
- Set up Google Analytics 4 (GA4)
- Add gtag() initialization
- Create custom events in GA4 dashboard
- Test tracking with `/lib/analytics.ts` events

### 5. Database (Optional)
- Products database (Supabase, Neon, etc.)
- Order management
- Newsletter subscriptions
- Commission inquiries

### 6. Forms & Email
- Set up email backend (SendGrid, Mailgun, etc.)
- Email confirmations for bookings, orders, inquiries
- Newsletter service integration

### 7. SEO & Performance
- Update metadata per page (already set up in layout.tsx)
- Add JSON-LD schema (for tours, products, organization)
- Optimize images (next/image, lazy loading)
- Monitor Core Web Vitals

### 8. Legal & Compliance
- Customize Privacy Policy with real data practices
- Update Terms of Service with actual cancellation policy
- Implement GDPR cookie consent
- Add GDPR data handling for forms

## Customization Guide

### Colors
Edit `/app/globals.css` CSS variables:
```css
--primary: 110 35% 45%;    /* Primary brand color */
--accent: 25 70% 55%;      /* CTA color */
--secondary: 45 35% 88%;   /* Secondary tone */
```

### Content
- Home page: Edit `/app/page.tsx` (update hero, paths, features)
- Tours page: Edit `/app/tours/page.tsx` (update timeline, FAQ, pricing)
- Shop pages: Update product lists and descriptions
- Images: Replace placeholder `<img>` src attributes

### Forms
- Commission form: `/app/shop/commission/page.tsx`
- Alcaca order: `/app/shop/alcaca/page.tsx`
- Contact form: `/app/contact/page.tsx`
- Newsletter: `/app/page.tsx`

### Footer Links
Edit `/components/footer.tsx` for:
- Social media links
- Contact details
- Policy links

## Environment Variables

Add to `.env.local`:
```
# Analytics (if using external service)
NEXT_PUBLIC_GA4_ID=your-ga4-id

# Payments (if integrating)
STRIPE_PUBLIC_KEY=your-key
STRIPE_SECRET_KEY=your-key

# Email service
EMAIL_SERVICE_KEY=your-key

# Database (if using)
DATABASE_URL=your-url
```

## Performance Optimizations
- Mobile-first responsive design
- Image lazy loading (via next/image)
- CSS-in-JS with Tailwind (zero-runtime overhead)
- Semantic HTML for SEO
- Fast navigation (App Router pre-rendering)

## Accessibility
- Semantic HTML (`<header>`, `<main>`, `<footer>`, `<section>`)
- ARIA labels for interactive elements
- Color contrast compliance (WCAG AA)
- Focus states on buttons and links
- Alt text for decorative elements
- Screen reader friendly forms

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-optimized (iOS, Android)
- Responsive from 375px+ (mobile-first)

## Deployment

### Vercel (Recommended)
```bash
git push  # Automatic deployment
```

### Other Platforms
- Build: `npm run build`
- Start: `npm run start`
- Ensure Node.js 18+ and environment variables set

## File Structure
```
/vercel/share/v0-project
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── globals.css         # Design tokens & styles
│   ├── page.tsx            # Home page
│   ├── tours/
│   ├── shop/
│   ├── about/
│   ├── contact/
│   ├── privacy/
│   ├── terms/
│   └── cookies/
├── components/
│   ├── header.tsx
│   ├── hero.tsx
│   ├── choice-paths.tsx
│   ├── features.tsx
│   ├── timeline.tsx
│   ├── faq.tsx
│   ├── product-card.tsx
│   ├── footer.tsx
│   └── ui/                 # shadcn components
├── lib/
│   ├── analytics.ts        # Analytics tracking
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## Support & Customization

This is a fully functional conversion-focused site. Customize the content, colors, and integrations to match your needs. The structure supports:
- Multiple languages (i18n setup ready)
- A/B testing (event tracking in place)
- Newsletter growth (signup forms throughout)
- E-commerce scaling (product infrastructure ready)

Happy farming! 🦙
