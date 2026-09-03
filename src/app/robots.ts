import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/privacy", "/terms"],
      },
    ],
    sitemap: "https://www.shifsd-liberia.org/sitemap.xml",
    host: "https://www.shifsd-liberia.org",
  };
}
