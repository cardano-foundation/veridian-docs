import type { MetadataRoute } from "next";
import { DOCUMENTATION_URL } from "../utils/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DOCUMENTATION_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
