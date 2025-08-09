import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Module/Shared/Header/Header";
import Footer from "@/components/Module/Shared/Footer/Footer";
import { LanguageProvider } from "../components/context/LanguageContext";

// Load English + Bangla fonts
const inter = Inter({ subsets: ["latin"] });
const notoBengali = Noto_Sans_Bengali({
  weight: ["400", "700"],
  subsets: ["bengali"],
  variable: "--font-bengali",
});

// Global metadata (fallback)
export const metadata: Metadata = {
  title: "InvoicePro BD - Professional Invoice Generator for Bangladesh",
  description:
    "Create professional invoices for your Bangladeshi business with multi-language support, local payment methods (bKash, Nagad, Bank), and tax compliance. Fast, secure, and easy to use.",
  applicationName: "InvoicePro BD",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "InvoicePro BD - Professional Invoice Generator for Bangladesh",
    description:
      "Create, manage, and send invoices with local payment methods in Bangladesh. Supports Bangla & English.",
    url: "https://yourdomain.com",
    siteName: "InvoicePro BD",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "InvoicePro BD - Generate Invoices in Bangla & English",
      },
    ],
    locale: "en_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InvoicePro BD - Professional Invoice Generator for Bangladesh",
    description:
      "Create, manage, and send invoices with local payment methods in Bangladesh. Supports Bangla & English.",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://yourdomain.com",
    languages: {
      en: "https://yourdomain.com/en",
      bn: "https://yourdomain.com/bn",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${notoBengali.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Favicon & Web App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <meta
          name="theme-color"
          content="#333333"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#ebebeb"
          media="(prefers-color-scheme: dark)"
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="invoice generator, Bangladesh invoicing, multi-language invoices, Bkash payment, Nagad payment, tax compliance, BD business tools"
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "InvoicePro BD",
              url: "https://yourdomain.com",
              logo: "https://yourdomain.com/logo.png",
              sameAs: [
                "https://facebook.com/yourpage",
                "https://twitter.com/yourprofile",
                "https://linkedin.com/company/yourcompany",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+8801XXXXXXXXX",
                  contactType: "customer service",
                  areaServed: "BD",
                  availableLanguage: ["en", "bn"],
                },
              ],
            }),
          }}
        />

        {/* Website Schema with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://yourdomain.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://yourdomain.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>

      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
