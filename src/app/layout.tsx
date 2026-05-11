import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Swaroop Choudary | Legal Professional",
  description: "B.B.A. LL.B. (Hons.) graduate specializing in Criminal Litigation and Family Law.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} antialiased bg-[#09090b] text-white selection:bg-[#D2042D]/30`}>
        <main className="relative w-full overflow-hidden">
          {children}
        </main>
        {/* Vercel Analytics tracking injected seamlessly */}
        <Analytics />
      </body>
    </html>
  );
}