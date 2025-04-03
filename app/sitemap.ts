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
    {
      url: `${DOCUMENTATION_URL}/walletGuide`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${DOCUMENTATION_URL}/fundamentals/identifiers`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${DOCUMENTATION_URL}/fundamentals/connections`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${DOCUMENTATION_URL}/fundamentals/credentials`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${DOCUMENTATION_URL}/onboarding`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${DOCUMENTATION_URL}/userFlows/individualid`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${DOCUMENTATION_URL}/userFlows/connections`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${DOCUMENTATION_URL}/userFlows/credentials`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${DOCUMENTATION_URL}/userFlows/groupid`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${DOCUMENTATION_URL}/userFlows/groupcredentials`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${DOCUMENTATION_URL}/userFlows/cardanoconnect`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${DOCUMENTATION_URL}/userFlows/settings`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${DOCUMENTATION_URL}/recovery`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${DOCUMENTATION_URL}/infra`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${DOCUMENTATION_URL}/sandbox`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${DOCUMENTATION_URL}/selfdeployment`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${DOCUMENTATION_URL}/dev`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${DOCUMENTATION_URL}/protocols`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${DOCUMENTATION_URL}/protocols/identifierbasics`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${DOCUMENTATION_URL}/protocols/acdcs`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${DOCUMENTATION_URL}/protocols/delegation`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${DOCUMENTATION_URL}/stack`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${DOCUMENTATION_URL}/foundations`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${DOCUMENTATION_URL}/foundations/oobis`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${DOCUMENTATION_URL}/foundations/async`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${DOCUMENTATION_URL}/foundations/notifications`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${DOCUMENTATION_URL}/apis`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${DOCUMENTATION_URL}/apis/identifiers`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${DOCUMENTATION_URL}/apis/credentials`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${DOCUMENTATION_URL}/apis/groups`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${DOCUMENTATION_URL}/apis/delegation`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${DOCUMENTATION_URL}/support`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    }
  ];
}
