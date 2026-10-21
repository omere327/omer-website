import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Hanken_Grotesk } from "next/font/google";
import { SITE_URL, X_HANDLE } from "@/lib/content";
import "./globals.css";

// Only what the page sets: upright Cormorant and Hanken in the Latin subset, one file each, so the first paint
// waits on as few bytes as possible.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Not preloaded: the headline (Cormorant) is the first thing to paint, so it gets the early bandwidth; the text
// face swaps in from a metric-matched fallback without moving the layout.
const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  preload: false,
  weight: ["400", "500", "600", "700"],
});

const title = "Omer Ejaz, Co-founder and CEO of SensViz | AI, brand and product";
const description =
  "Mohammed Omer Ejaz is co-founder and CEO of SensViz, a custom AI development and software company in London and Lahore. Brand, product and AI strategy that ships.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: "Omer Ejaz",
  authors: [{ name: "Mohammed Omer Ejaz", url: SITE_URL }],
  creator: "Mohammed Omer Ejaz",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: "Omer Ejaz",
    title,
    description,
    locale: "en_GB",
    firstName: "Omer",
    lastName: "Ejaz",
  },
  twitter: { card: "summary_large_image", title, description, creator: X_HANDLE, site: X_HANDLE },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
