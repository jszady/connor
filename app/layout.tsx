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

const siteUrl = "https://iconbodyandmind.ca";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: "Icon Body and Mind",
      description:
        "Private personal training and online coaching in Newmarket, Aurora, King City, and York Region. In-person sessions at Woodshed Wellness. Services include strength training, fat loss coaching, muscle building, nutrition plans, and mobility training.",
      url: siteUrl,
      telephone: "+12892314638",
      email: "connor.steenson@hotmail.com",
      image: `${siteUrl}/Connorheroimage.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "1135 Stellar Dr",
        addressLocality: "Newmarket",
        addressRegion: "Ontario",
        postalCode: "L3Y 7B8",
        addressCountry: "CA",
      },
      areaServed: [
        { "@type": "City", name: "Newmarket" },
        { "@type": "City", name: "Aurora" },
        { "@type": "City", name: "King City" },
        { "@type": "AdministrativeArea", name: "York Region" },
        { "@type": "City", name: "Toronto" },
      ],
      serviceType: [
        "1:1 Personal Training",
        "Online Coaching",
        "Transformation Coaching",
        "Strength Training",
        "Fat Loss Coaching",
        "Muscle Building",
        "Nutrition Plans",
        "Mobility and Injury Prevention",
      ],
      priceRange: "$$",
      sameAs: ["https://www.instagram.com/connorsteenson/"],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Connor Steenson",
      jobTitle: "Personal Trainer",
      description:
        "Personal trainer at Icon Body and Mind, based in Newmarket, Ontario. Serving clients in-person across Aurora, King City, and York Region, and online across Canada.",
      url: siteUrl,
      image: `${siteUrl}/Connorheroimage.jpg`,
      worksFor: { "@id": `${siteUrl}/#business` },
      sameAs: ["https://www.instagram.com/connorsteenson/"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Icon Body and Mind",
      description:
        "Private personal training and online coaching in Aurora, Newmarket, King City, and York Region.",
      inLanguage: "en-CA",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you offer personal training in Aurora and Newmarket?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Connor works with clients in person at Woodshed Wellness in Newmarket, and online for clients across Aurora, King City, York Region, and the greater Toronto area. Both options include fully customized programs and regular check-ins.",
          },
        },
        {
          "@type": "Question",
          name: "Where does in-person training take place?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All in-person sessions are held at Woodshed Wellness, a private training facility at 1135 Stellar Dr, Newmarket, ON L3Y 7B8. The space is private and professional, designed for focused, one-on-one training.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer online coaching?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Online coaching includes a custom training program, nutrition guidance, regular check-ins, and direct access to Connor throughout the week. It is available to clients anywhere in Canada.",
          },
        },
        {
          "@type": "Question",
          name: "What types of clients do you work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Icon Body and Mind works with a wide range of clients, including beginners, busy professionals, athletes, men, and women. Whether the goal is fat loss, muscle building, strength, mobility, or general health, every program is built around your specific needs and lifestyle.",
          },
        },
        {
          "@type": "Question",
          name: "Can personal training help with fat loss and muscle building?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Structured personal training, combined with a proper nutrition plan, is one of the most effective approaches to sustainable fat loss and muscle building. Connor's programs are designed around your goals, training history, and lifestyle, not generic templates.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide nutrition plans?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Nutrition guidance is included in all coaching programs at Icon Body and Mind. Plans are practical, sustainable, and built around your schedule and food preferences, without rigid restrictions or crash dieting.",
          },
        },
        {
          "@type": "Question",
          name: "Do you help with mobility and injury prevention?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Mobility work and injury prevention are integrated into programs where appropriate. Long-term physical resilience and sustainable training are priorities alongside strength and body composition goals.",
          },
        },
        {
          "@type": "Question",
          name: "How do I book a consultation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Fill out the contact form on this page, or reach out directly by phone or Instagram. Connor reviews every request personally and only takes on clients he is confident he can genuinely help.",
          },
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Icon Body and Mind | Personal Trainer in Aurora & Newmarket",
  description:
    "Private personal training in Newmarket, Aurora, King City, and York Region. In-person coaching at Woodshed Wellness, online coaching, strength training, fat loss, muscle building, and nutrition plans. Book a consultation today.",
  keywords: [
    "personal trainer Aurora",
    "personal trainer Newmarket",
    "personal trainer King City",
    "personal trainer York Region",
    "private personal training Newmarket",
    "online personal trainer Ontario",
    "strength training Aurora",
    "fat loss coaching Newmarket",
    "muscle building York Region",
    "nutrition plans personal trainer",
    "Icon Body and Mind",
  ],
  openGraph: {
    title: "Icon Body and Mind | Personal Trainer in Aurora & Newmarket",
    description:
      "Private personal training in Newmarket, Aurora, King City, and York Region. In-person coaching, online programs, strength training, fat loss, muscle building, and nutrition plans.",
    url: siteUrl,
    siteName: "Icon Body and Mind",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/Connorheroimage.jpg",
        width: 1200,
        height: 630,
        alt: "Connor Steenson, personal trainer at Icon Body and Mind in Newmarket, Ontario",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Icon Body and Mind | Personal Trainer in Aurora & Newmarket",
    description:
      "Private personal training in Aurora, Newmarket, King City, and York Region. Book a consultation today.",
    images: ["/Connorheroimage.jpg"],
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
