import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Update this to the live domain before deploying
const siteUrl = "https://connortraining.com";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: "Connor Training",
      description:
        "Private personal training and online coaching for clients in Aurora, Newmarket, and York Region. Strength-focused programs, real accountability, and results built to last.",
      url: siteUrl,
      email: "hello@connortraining.com",
      image: `${siteUrl}/Connorheroimage.jpg`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Aurora",
        addressRegion: "Ontario",
        addressCountry: "CA",
      },
      areaServed: [
        { "@type": "City", name: "Aurora" },
        { "@type": "City", name: "Newmarket" },
        { "@type": "AdministrativeArea", name: "York Region" },
        { "@type": "City", name: "Richmond Hill" },
        { "@type": "City", name: "King City" },
      ],
      serviceType: [
        "Personal Training",
        "Online Coaching",
        "Strength and Conditioning",
        "Transformation Coaching",
      ],
      priceRange: "$$",
      sameAs: ["https://www.instagram.com/connortraining"],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Connor",
      jobTitle: "Private Personal Trainer",
      description:
        "Private personal trainer based in Aurora, Ontario, serving clients across York Region and online.",
      url: siteUrl,
      image: `${siteUrl}/Connorheroimage.jpg`,
      worksFor: { "@id": `${siteUrl}/#business` },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Connor Training",
      description:
        "Private personal training and online coaching in Aurora, Newmarket, and York Region.",
      inLanguage: "en-CA",
    },
  ],
};

export const metadata: Metadata = {
  title: "Connor | Private Personal Trainer · Aurora, Newmarket & York Region",
  description:
    "Private personal training and online coaching in Aurora, Newmarket, and York Region. Strength-focused programs, real accountability, and results built to last. Apply today.",
  keywords: [
    "personal trainer Aurora",
    "personal trainer Newmarket",
    "personal trainer York Region",
    "private personal training Ontario",
    "online personal trainer Canada",
    "strength training Aurora",
    "1:1 coaching Newmarket",
    "fitness coaching York Region",
    "in-person personal trainer GTA",
  ],
  openGraph: {
    title: "Connor | Personal Trainer · Aurora & Newmarket, Ontario",
    description:
      "Private personal training and online coaching for clients across Aurora, Newmarket, and York Region. Structured programs, real accountability, and results built to last.",
    url: siteUrl,
    siteName: "Connor Training",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: `${siteUrl}/Connorheroimage.jpg`,
        width: 1200,
        height: 630,
        alt: "Connor, private personal trainer in Aurora and Newmarket, Ontario",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connor | Private Personal Trainer · York Region",
    description:
      "Private personal training and online coaching in Aurora, Newmarket, and York Region.",
    images: [`${siteUrl}/Connorheroimage.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
