# Multilingual Support - Setup Guide

## Overview

This website supports 6 languages: **English, German, Italian, Spanish, Dutch, and French**.

The implementation uses:
- **Middleware-based URL routing** for locale detection (`/en/`, `/de/`, `/it/`, `/es/`, `/nl/`, `/fr/`)
- **Translation JSON files** for content management
- **Language Switcher Component** in the header for easy language selection
- **SEO-friendly** approach with proper hreflang tags and URL structure

---

## Language Supported

| Locale | Language | Flag |
|--------|----------|------|
| `en` | English | 🇬🇧 |
| `de` | Deutsch | 🇩🇪 |
| `it` | Italiano | 🇮🇹 |
| `es` | Español | 🇪🇸 |
| `nl` | Nederlands | 🇳🇱 |
| `fr` | Français | 🇫🇷 |

---

## File Structure

```
/app
  /[locale]              # Locale-based routes
    /page.tsx            # Home page
    /tours/page.tsx      # Tours page
    /shop/
      /page.tsx          # Shop hub
      /woven/page.tsx    # Woven collection
      /commission/page.tsx # Custom commissions
      /alcaca/page.tsx    # Alpaca manure
    /about/page.tsx      # About page
    /contact/page.tsx    # Contact page

/translations
  /en.json               # English translations
  /de.json               # German translations
  /it.json               # Italian translations
  /es.json               # Spanish translations
  /nl.json               # Dutch translations
  /fr.json               # French translations

/lib
  /translations.ts       # Translation utilities

/components
  /language-switcher.tsx # Language selector component

/middleware.ts           # Locale detection & routing
/i18n.config.ts         # i18n configuration
```

---

## How It Works

### 1. **Automatic Locale Detection**

The `middleware.ts` handles automatic locale detection in this priority order:

1. **URL Path** - If user visits `/de/shop`, German is selected
2. **Browser Cookie** - If `NEXT_LOCALE` cookie exists
3. **Accept-Language Header** - Browser language preference
4. **Default** - Falls back to English if none above match

### 2. **URL Routing**

All routes are locale-prefixed:
- `/en` - English home
- `/de/shop` - German shop
- `/it/about` - Italian about page
- etc.

Non-localized URLs are automatically redirected to their locale version.

### 3. **Language Switcher**

The `<LanguageSwitcher />` component (in header):
- Shows all 6 languages with flag emojis
- Switches languages while maintaining the current page path
- Persists selection in browser cookie

---

## Adding New Content

### Add a New Translation Key

1. **Open `/translations/en.json`** and add your key:

```json
{
  "section": {
    "key": "English text here"
  }
}
```

2. **Add translations to all language files** (`de.json`, `it.json`, `es.json`, `nl.json`, `fr.json`)

3. **Use in a component**:

```tsx
import { t } from '@/lib/translations'
import type { Locale } from '@/i18n.config'

export default function MyComponent({ params }: { params: { locale: Locale } }) {
  const locale = params.locale
  const translate = t(locale)

  return <h1>{translate('section.key')}</h1>
}
```

### Add a New Page

1. **Create the page** at `/app/[locale]/my-page/page.tsx`

2. **Use translations** in the page component:

```tsx
import type { Locale } from '@/i18n.config'
import { t } from '@/lib/translations'

export default function MyPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale
  const translate = t(locale)

  return (
    <div>
      <h1>{translate('myPage.title')}</h1>
      <p>{translate('myPage.description')}</p>
    </div>
  )
}
```

---

## Translation Structure

### Current Translation Keys

The translations are organized by feature/page:

```
nav.*              - Navigation labels
hero.*             - Hero section text
paths.*            - Choice path cards
footer.*           - Footer information
```

Add new sections as needed:

```json
{
  "tours": {
    "title": "...",
    "description": "..."
  },
  "shop": {
    "woven": { ... },
    "commission": { ... }
  }
}
```

---

## Best Practices

### 1. **Consistent Translation Structure**

Keep similar content organized:
```json
{
  "page": {
    "title": "...",
    "subtitle": "...",
    "cta": "..."
  }
}
```

### 2. **Use Translation Function**

Instead of hardcoding text for each language:

```tsx
// ❌ Don't do this
{locale === 'en' && 'Hello'}
{locale === 'de' && 'Hallo'}

// ✅ Do this
{translate('greeting')}
```

### 3. **SEO Considerations**

- URLs are locale-prefixed (good for SEO)
- Each locale has its own hreflang tag (in layout.tsx metadata)
- Search engines can crawl all language versions

### 4. **Persist User Preference**

Language preference is saved in the `NEXT_LOCALE` cookie. This persists across sessions.

---

## Customization

### Change Default Language

In `i18n.config.ts`:
```ts
export const i18nConfig = {
  defaultLocale: 'en', // Change this
  // ...
}
```

### Add a New Language

1. Create `/translations/xx.json` with all keys
2. Add locale to `i18nConfig.locales` array
3. Add locale name to `localeNames` object
4. Add flag emoji to `localeFlagEmoji` object
5. Update middleware to include new locale

### Customize Language Switcher

Edit `/components/language-switcher.tsx` to change:
- Display style (dropdown, buttons, etc.)
- Position in header
- Behavior on language change

---

## Troubleshooting

### Language not switching

1. Check browser cookies are enabled
2. Clear `NEXT_LOCALE` cookie and try again
3. Verify URL structure matches `/[locale]/path`

### Missing translations

1. Check `/translations/[locale].json` has all keys
2. Use `console.log()` in translation util to debug
3. Ensure JSON is valid syntax

### Pages not showing correct language

1. Verify `params.locale` is passed to page component
2. Check translation key exists in JSON file
3. Ensure `useParams()` hook is used correctly in client components

---

## Performance Notes

- Translations loaded at build time (no runtime overhead)
- Middleware is optimized for locale detection
- Language Switcher uses Next.js `useRouter` for instant switches
- No external i18n library needed (lightweight solution)

---

## Future Enhancements

Possible improvements:
- Add more languages
- Implement pluralization rules
- Add translation management dashboard
- Server-side translation caching
- Dynamic translation loading from CMS
