import { MetadataRoute } from "next";
import { Package } from "./types/packages";
import MUARAMBADUK_API from "./config/Muarambaduk_API";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL: string = process.env.BASE_URL?.toString() ?? "";
  const packages: Package[] = await MUARAMBADUK_API.Get("packages");
  const packagesURL: { url: string; lastModified: Date }[] = packages.map(
    (pkg) => {
      return {
        url: `${baseURL}/paket-camping/${pkg.slug}`,
        lastModified: new Date(),
      };
    }
  );

  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/paket-camping`,
      lastModified: new Date(),
    },
    ...packagesURL,
    {
      url: `${baseURL}/tiket`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/berita`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/kontak`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/tentang`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/faq`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/syarat-ketentuan`,
      lastModified: new Date(),
    },

    {
      url: `${baseURL}/kebijakan-privasi`,
      lastModified: new Date(),
    },
  ];
}
