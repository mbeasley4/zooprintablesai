import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const SITE_URL = "https://www.zooprintablesai.com";
const SITE_NAME = "Zoo Printables AI";
const SITE_DESCRIPTION =
  "AI-powered zoo & wildlife printables for kids ages 3–12. Download free animal fact sheets, coloring pages, and activity packs — new animal theme every month.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Wildlife Printables for Kids Powered by AI`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "zoo printables",
    "animal worksheets for kids",
    "wildlife coloring pages",
    "educational printables",
    "animal fact sheets",
    "zoo activities for kids",
    "AI printables",
    "animal education printables",
    "kids zoo worksheets",
    "animal coloring pages",
    "zoo homeschool printables",
    "wildlife education kids",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Wildlife Printables for Kids Powered by AI`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zoo Printables AI — Animal worksheets and activities for kids",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Wildlife Printables for Kids`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@zooprintablesai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "education",
  verification: {
    google: "ee8b0d9224d9e0bd",
    other: {
      "facebook-domain-verification": "l7mm6ecbkcmu1g6wc2rmvr5qubxkjn",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
