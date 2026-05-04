import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
    // suppressHydrationWarning is strictly required by next-themes
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-500`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative w-full overflow-hidden">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}