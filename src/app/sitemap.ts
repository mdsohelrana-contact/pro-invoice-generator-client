import { MetadataRoute } from 'next';

// এখানে তোমার পাবলিক URL গুলো যোগ করো
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourdomain.com';

  const staticPages = [
    '',
    '/about',
    '/contact',
    '/pricing',
    '/features',
  ];

  // ডাইনামিক পেজ (যেমন ইনভয়েস আইডি) থাকলে API থেকে ফেচ করে যোগ করা যাবে
  // উদাহরণ:
  // const invoices = await fetchInvoicesFromDB();

  return staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));
}
