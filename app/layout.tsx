import type { Metadata } from "next";
import { Poppins, JetBrains_Mono, Inter } from "next/font/google";
import Layout from "@/components/layout/layout";
import { JsonLd } from "@/lib/seo/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";
import { SITE_NAME, SITE_URL } from "@/lib/seo/config";
import "./globals.css";

const fontPoppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight : ["300", "400", "500", "600", "700"]
});

const fontJetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight : ["300", "400", "500", "600", "700"]
});

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight : ["300", "400", "500", "600", "700"]
});




export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Sapphire IQ | AI, Data Science & Software Development Internships",
  description:
    "Sapphire IQ offers internships in AI, Data Science, Business Analytics, Full Stack Development & UI/UX — live projects, expert mentors, placement assistance.",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    images: [
      {
        url: "/metadata/opengraph-image.webp",
        width: 1568,
        height: 1003,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple : '/apple-touch-icon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontPoppins.variable} ${fontJetbrains.variable} ${fontInter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-inter text-black!">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
