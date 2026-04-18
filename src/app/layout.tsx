import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* SEO + Professional Positioning */
export const metadata: Metadata = {
  title: "Swaroop Choudary | Legal Professional",
  description:
    "Final-year B.B.A. LL.B. (Hons.) student with extensive experience in litigation, corporate law, intellectual property, and technology law. Open to roles in corporate and regulatory practice.",
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

/* Root Layout */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-[#050505] text-white`}
      >
        {/* Smooth Scrolling Wrapper */}
        <SmoothScroll>
          <main className="relative w-full overflow-x-hidden">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}