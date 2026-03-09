/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    // --- New site: locale-prefix redirects (bare paths → /en/) ---
    const pages = ['tours', 'about', 'contact', 'shop', 'privacy', 'terms', 'cookies']
    const shopRoutes = ['woven', 'commission', 'alcaca']
    const experienceRoutes = ['corporate-team-building', 'romantic-sunset', 'family-farm-days']

    const localeRedirects = [
      { source: '/', destination: '/en', permanent: true },
      ...pages.map((page) => ({
        source: `/${page}`,
        destination: `/en/${page}`,
        permanent: true,
      })),
      ...shopRoutes.map((route) => ({
        source: `/shop/${route}`,
        destination: `/en/shop/${route}`,
        permanent: true,
      })),
      ...experienceRoutes.map((route) => ({
        source: `/experiences/${route}`,
        destination: `/en/experiences/${route}`,
        permanent: true,
      })),
    ]

    // --- Old Squarespace site: 301 redirects to preserve SEO ---
    // Old site was Dutch-language on Squarespace (www.alpacasibiza.com)
    const alpacaNames = [
      'barbarella', 'avalon', 'bardot', 'chet', 'dusty',
      'fela', 'fonda', 'lewis', 'marron', 'mojo',
      'moloko', 'nelson', 'suki', 'toots',
    ]

    const oldSiteRedirects = [
      // Main pages
      { source: '/home', destination: '/en', permanent: true },
      { source: '/home-1', destination: '/en', permanent: true },
      { source: '/wie-zijn-wij', destination: '/en/about', permanent: true },
      { source: '/wat-doen-wij', destination: '/en/tours', permanent: true },
      { source: '/wat-doen-wij-1', destination: '/en/tours', permanent: true },
      { source: '/alpacas-ibiza', destination: '/en/about', permanent: true },
      { source: '/onze-alpacas', destination: '/en/about', permanent: true },
      { source: '/contact-1', destination: '/en/contact', permanent: true },

      // Services & Experiences
      { source: '/weddings-photoshoots', destination: '/en/experiences/romantic-sunset', permanent: true },
      { source: '/weddings-photoshoots-1', destination: '/en/shop/alcaca', permanent: true },
      { source: '/adopt-a-paca', destination: '/en/tours', permanent: true },
      { source: '/alpaca-yoga', destination: '/en/tours', permanent: true },
      { source: '/alpaca-yoga-1', destination: '/en/tours', permanent: true },
      { source: '/business-incentives-brainstormsessies', destination: '/en/experiences/corporate-team-building', permanent: true },

      // Weaving / Shop
      { source: '/informatie-weaving', destination: '/en/shop/woven', permanent: true },
      { source: '/informatie-weaving-1', destination: '/en/shop/woven', permanent: true },

      // Legal
      { source: '/algemene-voorwaarden', destination: '/en/terms', permanent: true },

      // Individual alpaca pages → About page
      ...alpacaNames.map((name) => ({
        source: `/${name}`,
        destination: '/en/about',
        permanent: true,
      })),
    ]

    return [...localeRedirects, ...oldSiteRedirects]
  },
}

export default nextConfig

