import type { Metadata } from "next";
import {
  Inter,
  Montserrat,
  Roboto_Mono,
  Noto_Sans_Bengali,
} from "next/font/google";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "../components/context/LanguageContext";
import Script from "next/script";
import store from "@/store/store";
import { Provider } from "react-redux";
import ProvidersWrapper from "@/Provider/ProvidersWrapper";

// Load English + Bangla fonts
const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"], // choose weights you want
  variable: "--font-montserrat",
});
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--font-roboto-mono",
});

const notoBengali = Noto_Sans_Bengali({
  weight: ["400", "700"],
  subsets: ["bengali"],
  variable: "--font-bengali",
});

// Global metadata (fallback)
export const metadata: Metadata = {
  title: {
    default: "InvoicePro BD - Professional Invoice Generator for Bangladesh",
    template: "%s | InvoicePro BD",
  },
  description:
    "Create professional invoices for your Bangladeshi business with multi-language support, local payment methods (bKash, Nagad, Bank), and tax compliance. Fast, secure, and easy to use.",
  applicationName: "InvoicePro BD",
  metadataBase: new URL("https://invoice-pro-wine.vercel.app"),
  openGraph: {
    title: "InvoicePro BD - Professional Invoice Generator for Bangladesh",
    description:
      "Create, manage, and send invoices with local payment methods in Bangladesh. Supports Bangla & English.",
    url: "https://invoice-pro-wine.vercel.app",
    siteName: "InvoicePro BD",
    images: [
      {
        url: "https://invoice-pro-wine.vercel.app/og-image.jpg",
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
    images: ["https://invoice-pro-wine.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://invoice-pro-wine.vercel.app",
    languages: {
      en: "https://invoice-pro-wine.vercel.app/en",
      bn: "https://invoice-pro-wine.vercel.app/bn",
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
      className={`${notoBengali.variable} ${montserrat.variable} ${robotoMono.variable}`}
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

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="whaDDGr5U6lP8fWaCtWt_72pdvz7aPjOfUkYaOVUj5s"
        />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-D4JB98H4NF`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D4JB98H4NF');
          `}
        </Script>

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
              url: "https://invoice-pro-wine.vercel.app",
              logo: "https://invoice-pro-wine.vercel.app/logo.png",
              sameAs: [
                "https://facebook.com/yourpage",
                "https://twitter.com/yourprofile",
                "https://linkedin.com/company/yourcompany",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+8801619830567",
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
              url: "https://invoice-pro-wine.vercel.app",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://invoice-pro-wine.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>

      <body className={inter.className}>
        <ProvidersWrapper>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=GTM-PR5C8BV2`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <div className="flex flex-col min-h-screen">
            <main className="flex-1">{children}</main>
            <Toaster />
          </div>
        </ProvidersWrapper>
      </body>
    </html>
  );
}
