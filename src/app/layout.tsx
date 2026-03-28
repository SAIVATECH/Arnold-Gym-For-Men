import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arnold Gym For Men | Kovilpatti's Best Hardcore Gym",
  description:
    "Build real strength at Arnold Gym For Men, Kovilpatti. Heavy workout equipment, affordable pricing, and a hardcore training environment. Join 100+ members today! அர்னால்ட் ஜிம் போர் மென்",
  keywords: [
    "gym in kovilpatti",
    "arnold gym",
    "best gym kovilpatti",
    "fitness center kovilpatti",
    "workout gym tamil nadu",
    "heavy workout gym",
    "affordable gym kovilpatti",
    "muscle building gym",
    "kovilpatti gym for men",
    "அர்னால்ட் ஜிம்",
  ],
  openGraph: {
    title: "Arnold Gym For Men | Build Real Strength",
    description:
      "Kovilpatti's #1 hardcore gym. Heavy equipment, affordable pricing, real results.",
    type: "website",
    locale: "en_IN",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyMobileBar />
      </body>
    </html>
  );
}
