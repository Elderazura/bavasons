import type { Metadata } from "next";
import { Montserrat, Castoro, Roboto } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { SiteMotion } from "@/components/SiteMotion";
import { company, media } from "@/lib/content";
import "./globals.css";

const sans = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const display = Castoro({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const text = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-text",
  display: "swap",
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
    <html lang="en" className={`${sans.variable} ${display.variable} ${text.variable}`}>
      <body>
        <Nav />
        <SiteMotion />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
