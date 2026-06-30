import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL 
    || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

  const projects = [
    'Ramapuram',
    'shivahomes',
    'Suresh-Nagar',
    'levibe',
  ];

  const projectUrls: MetadataRoute.Sitemap = projects.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date('2026-06-30'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-06-30'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projectUrls,
  ];
}
