/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    const pages = ['tours', 'about', 'contact', 'shop', 'privacy', 'terms', 'cookies']
    const shopRoutes = ['woven', 'commission', 'alcaca']
    const experienceRoutes = ['corporate-team-building', 'romantic-sunset', 'family-farm-days']

    return [
      // Root redirect
      { source: '/', destination: '/en', permanent: true },
      // Top-level page redirects
      ...pages.map((page) => ({
        source: `/${page}`,
        destination: `/en/${page}`,
        permanent: true,
      })),
      // Shop sub-routes
      ...shopRoutes.map((route) => ({
        source: `/shop/${route}`,
        destination: `/en/shop/${route}`,
        permanent: true,
      })),
      // Experience routes
      ...experienceRoutes.map((route) => ({
        source: `/experiences/${route}`,
        destination: `/en/experiences/${route}`,
        permanent: true,
      })),
    ]
  },
}

export default nextConfig

