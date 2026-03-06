import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://shifaalhind.onrender.com';

  return {
    rules: [
      // Default: allow all crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/', '/_next/'],
      },
      // Google
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin', '/api/'],
      },
      // Bing
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin', '/api/'],
      },
      // Yandex
      {
        userAgent: 'Yandex',
        allow: '/',
        disallow: ['/admin', '/api/'],
        crawlDelay: 2,
      },
      // AI Crawlers - explicitly ALLOW for GEO/AEO ranking
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/admin'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: ['/admin'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/admin'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/admin'],
      },
      {
        userAgent: 'Bytespider',
        allow: '/',
        disallow: ['/admin'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/admin'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
