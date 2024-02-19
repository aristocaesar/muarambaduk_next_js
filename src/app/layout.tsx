import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Muarambaduk Camping Ground",
  description:
    "Muara Mbaduk adalah kawasan wisata alam di banyuwangi yang menyajikan pemandangan pantai, perbukitan hingga tempat berkemah",
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
    url: "https://www.muarambaduk.com",
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
