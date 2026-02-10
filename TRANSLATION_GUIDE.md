# Adding & Updating Translations - Quick Guide

## Quick Start - Add a New Translated Phrase

### Step 1: Add to English Translation
Edit `/translations/en.json`:

```json
{
  "mySection": {
    "myKey": "Your English text here"
  }
}
```

### Step 2: Add to All Other Languages
Edit `/translations/de.json`, `/translations/it.json`, `/translations/es.json`, `/translations/nl.json`, `/translations/fr.json`:

```json
{
  "mySection": {
    "myKey": "German/Italian/Spanish/Dutch/French translation here"
  }
}
```

### Step 3: Use in Component
```tsx
import { t } from '@/lib/translations'
import type { Locale } from '@/i18n.config'

export default function Component({ params }: { params: { locale: Locale } }) {
  const translate = t(params.locale)
  
  return <h1>{translate('mySection.myKey')}</h1>
}
```

---

## Examples

### Example 1: Add a New Tour Feature

**Step 1: Add to translations/en.json**
```json
{
  "tours": {
    "features": {
      "comfortable": "Comfortable seating throughout your visit"
    }
  }
}
```

**Step 2: Add to all other language files with translations**

**Step 3: Use in component**
```tsx
export default function ToursPage({ params }: { params: { locale: Locale } }) {
  const translate = t(params.locale)
  
  return (
    <div>
      <p>{translate('tours.features.comfortable')}</p>
    </div>
  )
}
```

### Example 2: Update Existing Navigation Text

**Before (hardcoded):**
```json
{
  "nav": {
    "tours": "Tours & Visits"
  }
}
```

**Update all language files:**
- `de.json`: `"tours": "Touren & Besuche"`
- `it.json`: `"tours": "Visite & Tour"`
- etc.

---

## Translation Key Naming Conventions

### Use Descriptive, Hierarchical Keys
```json
{
  "section": {           // page or feature name
    "subsection": {      // component or area
      "element": ""      // specific element (title, description, button text)
    }
  }
}
```

### Good Examples
```json
{
  "hero": { "title": "...", "subtitle": "..." },
  "shop": { "woven": { "title": "..." } },
  "nav": { "tours": "...", "shop": "..." },
  "buttons": { "submit": "...", "cancel": "..." }
}
```

### Avoid
```json
{
  "text1": "...",
  "text2": "...",  // Not descriptive!
  "button": "..."  // Too generic
}
```

---

## Current Translation Structure

### Available Sections
- `nav.*` - Navigation menu items
- `hero.*` - Hero section (title, subtitle, CTAs)
- `paths.*` - Choice path cards (tour, shop, commission, alcaca)
- `footer.*` - Footer information

### How to Extend

**Add a new page section:**
```json
{
  "contact": {
    "title": "Get in Touch",
    "description": "Have questions? We'd love to hear from you!",
    "form": {
      "name": "Your Name",
      "email": "Email Address",
      "submit": "Send Message"
    }
  }
}
```

---

## Common Translation Patterns

### Buttons & CTAs
```json
{
  "buttons": {
    "bookTour": "Book Tour",
    "shopNow": "Shop Now",
    "learnMore": "Learn More",
    "submit": "Submit",
    "cancel": "Cancel"
  }
}
```

### Form Labels & Placeholders
```json
{
  "forms": {
    "name": "Your Name",
    "email": "Email Address",
    "message": "Message",
    "required": "This field is required"
  }
}
```

### Messaging
```json
{
  "messages": {
    "success": "Your message was sent!",
    "error": "Something went wrong. Please try again.",
    "loading": "Loading..."
  }
}
```

---

## Batch Update Example

### Updating Multiple Translations at Once

**Scenario:** Add 5 new FAQ items to all languages

**1. Add to English:**
```json
{
  "faq": {
    "q1": "What time should I arrive?",
    "a1": "Please arrive 10 minutes early...",
    "q2": "Are children welcome?",
    "a2": "Yes! We recommend ages 5+...",
    // ... more items
  }
}
```

**2. Translate and add to de.json, it.json, es.json, nl.json, fr.json**

**3. Use in component:**
```tsx
export default function FAQ({ params }: { params: { locale: Locale } }) {
  const t = t(params.locale)
  
  return (
    <div className="space-y-6">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i}>
          <h3>{t(`faq.q${i}`)}</h3>
          <p>{t(`faq.a${i}`)}</p>
        </div>
      ))}
    </div>
  )
}
```

---

## Translation Tips

### ✅ Do's
- Keep translations concise
- Match tone across all languages
- Test each translation in context
- Use consistent terminology
- Keep punctuation consistent

### ❌ Don'ts
- Don't use machine translation without review
- Don't mix English with other languages
- Don't forget to add keys to ALL 6 language files
- Don't use special characters without testing
- Don't hardcode text (use translations!)

---

## Testing Translations

### After Adding New Translations

1. **Clear cache**
   ```bash
   npm run build  # Rebuild to load new translations
   ```

2. **Test each language**
   - Switch to each language using header dropdown
   - Verify text displays correctly
   - Check for formatting issues

3. **Check for missing keys**
   - Look for undefined or missing values
   - Check browser console for warnings

---

## File Locations Quick Reference

```
📁 translations/
  ├─ en.json    (English)
  ├─ de.json    (German)
  ├─ it.json    (Italian)
  ├─ es.json    (Spanish)
  ├─ nl.json    (Dutch)
  └─ fr.json    (French)

📁 lib/
  └─ translations.ts  (Helper functions)

📁 components/
  └─ language-switcher.tsx  (Language selector)

📄 middleware.ts    (Language detection)
📄 i18n.config.ts   (Configuration)
```

---

## Adding a Completely New Language

If you want to add a 7th language (e.g., Portuguese):

1. **Create new translation file:**
   ```
   /translations/pt.json  (Portuguese)
   ```

2. **Add to i18n.config.ts:**
   ```ts
   locales: ['en', 'de', 'it', 'es', 'nl', 'fr', 'pt'],
   localeNames: {
     // ... existing
     pt: 'Português',
   },
   localeFlagEmoji: {
     // ... existing
     pt: '🇵🇹',
   }
   ```

3. **Update middleware.ts:**
   - Already handles dynamic locales, no changes needed!

4. **Translate all keys** from en.json to pt.json

Done! New language will automatically appear in the switcher.

---

## Need Help?

### Debug Missing Translations
```tsx
import { getTranslation } from '@/lib/translations'

// Check if translation exists
const result = getTranslation('de', 'nav.tours', 'MISSING!')
console.log(result)  // Should show translation or 'MISSING!'
```

### Check Available Keys
Look at `/translations/en.json` for all available translation keys.

### Verify JSON Syntax
Use a JSON validator (jsonlint.com) to check syntax if you get errors.
