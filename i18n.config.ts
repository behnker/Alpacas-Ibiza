export const i18nConfig = {
  locales: ['en', 'de', 'it', 'es', 'nl', 'fr'],
  defaultLocale: 'en',
  localeNames: {
    en: 'English',
    de: 'Deutsch',
    it: 'Italiano',
    es: 'Español',
    nl: 'Nederlands',
    fr: 'Français',
  },
  localeFlagEmoji: {
    en: '🇬🇧',
    de: '🇩🇪',
    it: '🇮🇹',
    es: '🇪🇸',
    nl: '🇳🇱',
    fr: '🇫🇷',
  },
}

export type Locale = (typeof i18nConfig.locales)[number]
