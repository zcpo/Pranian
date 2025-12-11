import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pranian.com'; // Replace with your actual domain

  // List of static pages
  const staticPages = [
    '/',
    '/actions',
    '/admin',
    '/camera',
    '/class-vibes',
    '/events',
    '/feed',
    '/journal',
    '/library',
    '/library/meditation',
    '/library/podcast',
    '/library/video',
    '/library/video-meditation',
    '/library/yoga',
    '/login',
    '/pricing',
    '/profile',
    '/store',
    '/upload',
  ];

  const sitemapEntries = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1 : 0.8,
  }));

  return sitemapEntries;
}
