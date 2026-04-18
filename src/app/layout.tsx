import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import SmoothScroll from "@/components/SmoothScroll"; ❌ disabled

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Swaroop Choudary | Legal Professional",
  description:
    "Final-year B.B.A. LL.B. (Hons.) student with experience in litigation, corporate law, IPR, and technology law.",
  keywords: [
    "Swaroop Choudary",
    "Law Student",
    "Corporate Law",
    "Litigation",
    "IPR",
    "Technology Law",
    "India Lawyer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-[#050505] text-white`}>
        <main className="relative w-full overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}