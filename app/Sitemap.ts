import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.morganatwork.com',
      lastModified: new Date(),
    },
  ]
}
