import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Uzbek Association in Korea · Koreyadagi O‘zbekistonliklar Uyushmasi',
  description: 'Official portal of the Uzbek Association in Korea (Koreyadagi O‘zbekistonliklar Uyushmasi) providing community support, legal aid, documentation, and business cooperation across Korea.',
  openGraph: {
    title: 'Uzbek Association in Korea · Koreyadagi O‘zbekistonliklar Uyushmasi',
    description: 'Official portal of the Uzbek Association in Korea providing legal aid, documents, and business cooperation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uzbek Association in Korea',
    description: 'Official portal of the Uzbek Association in Korea providing legal aid, documents, and business cooperation.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className={plusJakarta.variable} suppressHydrationWarning>
      <body className="min-h-screen antialiased bg-[#F5F8FC] dark:bg-[#071324] text-[#172B45] dark:text-[#f0f4f8]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
