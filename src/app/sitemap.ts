import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.catala.dev",
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: "https://www.catala.dev/career",
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: "https://www.catala.dev/projects",
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: "https://www.catala.dev/about",
            lastModified: new Date(),
            priority: 0.7,
        },

    ];
}