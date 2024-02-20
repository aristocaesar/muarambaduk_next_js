import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Muarambaduk Camping Ground Banyuwangi",
  description:
    "Wisata Muara Mbaduk Camping Ground Banyuwangi adalah surga alam yang memukau dengan keindahan pantai, perbukitan, dan fasilitas perkemahan, menciptakan pengalaman luar biasa bagi pecinta alam yang ingin menikmati keindahan alam.",
  keywords: [
    "muara",
    "mbaduk",
    "muarambaduk",
    "camping",
    "camping ground",
    "wisata alam",
    "banyuwangi",
  ],
  authors: {
    name: "PT. Sarongan Tourism IDN",
    url: `${process.env.BASE_URL}`,
  },
  metadataBase: new URL(`${process.env.BASE_URL}/muarambaduk.png`),
  openGraph: {
    siteName: "Muarambaduk Camping Ground Banyuwangi",
    type: "website",
    url: `${process.env.BASE_URL}`,
    countryName: "id",
    locale: "id_ID",
    alternateLocale: "en_US",
    title: "Muarambaduk Camping Ground Banyuwangi",
    description:
      "Wisata Muara Mbaduk Camping Ground Banyuwangi adalah surga alam yang memukau dengan keindahan pantai, perbukitan, dan fasilitas perkemahan, menciptakan pengalaman luar biasa bagi pecinta alam yang ingin menikmati keindahan alam.",
    images: {
      url: `${process.env.BASE_URL}/muarambaduk.png`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
