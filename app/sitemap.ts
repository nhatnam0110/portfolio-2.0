import { PROJECTS } from '@/lib/data';
import type { MetadataRoute } from 'next';

const BASE_URL = 'https://nhatnam.dev';

export default function sitemap(): MetadataRoute.Sitemap {
    const projectPages = PROJECTS.map((project) => ({
        url: `${BASE_URL}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1,
        },
        ...projectPages,
    ];
}
