import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Muarambaduk Camping Ground',
  description:
    'Muara Mbaduk adalah wisata alam yang menyajikan pantai, perbukitan hingga tempat berkemah yang sangat menajubkan',
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
