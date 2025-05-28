import { MetadataRoute } from 'next';
import { blogs } from '../data/blogs'; // Import blog data

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = 'https://example.com'; // Replace with your actual domain
  const lastModifiedDate = new Date('2024-07-16'); // A fixed recent date or use new Date()

  const staticPages = [
    { url: '/', lastModified: lastModifiedDate },
    { url: '/cookies', lastModified: lastModifiedDate },
    { url: '/privacy', lastModified: lastModifiedDate },
    { url: '/terms', lastModified: lastModifiedDate },
    { url: '/blogs', lastModified: lastModifiedDate },
    { url: '/contact', lastModified: lastModifiedDate },
  ];

  const blogPages = blogs.map((blog) => ({
    url: `/blogs/${blog.id}`,
    lastModified: blog.date ? new Date(blog.date) : lastModifiedDate, // Use blog date if available
  }));

  const allPages = [...staticPages, ...blogPages].map((page) => ({
    url: `${domain}${page.url}`,
    lastModified: page.lastModified,
  }));

  return allPages;
}
