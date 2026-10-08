import type { Metadata } from "next";
import { Familjen_Grotesk, Newsreader } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SiteMotion } from "@/components/SiteMotion";
import { company, media } from "@/lib/content";
import "./globals.css";

const sans = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Bavasons Homes",
    template: "%s · Bavasons Homes",
  },
  description: company.description,
  icons: { icon: media.favicon, apple: media.apple },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <Nav />
        <SiteMotion />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
