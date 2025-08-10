
type Language = "en" | "bn";

interface SEOConfig {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultImage: string;
  keywords: string;
}

const defaultSEO: Record<Language, SEOConfig> = {
  en: {
    siteName: "InvoicePro BD",
    siteUrl: "https://invoice-pro-wine.vercel.app",
    defaultTitle: "InvoicePro BD - Professional Invoice Generator",
    defaultDescription: "Create and manage invoices easily with InvoicePro BD.",
    defaultImage: "/og-image.jpg",
    keywords: "invoice, Bangladesh, bKash, Nagad, multi-language",
  },
  bn: {
    siteName: "InvoicePro BD",
    siteUrl: "https://invoice-pro-wine.vercel.app",
    defaultTitle: "InvoicePro BD - পেশাদার ইনভয়েস জেনারেটর",
    defaultDescription:
      "সহজেই ইনভয়েস তৈরি ও পরিচালনা করুন InvoicePro BD দিয়ে।",
    defaultImage: "/og-image.jpg",
    keywords: "ইনভয়েস, বাংলাদেশ, বিকাশ, নগদ, মাল্টি-ল্যাঙ্গুয়েজ",
  },
};

export function generatePageMetadata({
  language = "en",
  title,
  description,
  keywords,
  image,
  urlPath = "",
}: {
  language?: Language;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  urlPath?: string;
}) {
  const config = defaultSEO[language];

  // পেজের পুরো টাইটেল
  const pageTitle = title
    ? `${title} | ${config.siteName}`
    : config.defaultTitle;

  // বর্ণনা ও ছবি
  const pageDescription = description || config.defaultDescription;
  const pageImage = `${config.siteUrl}${image || config.defaultImage}`;

  // URL
  const pageUrl = `${config.siteUrl}${urlPath}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: keywords || config.keywords,
    alternates: {
      canonical: pageUrl,
      languages: {
        en: `${config.siteUrl}/en${urlPath}`,
        bn: `${config.siteUrl}/bn${urlPath}`,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: config.siteName,
      images: [{ url: pageImage, width: 1200, height: 630, alt: pageTitle }],
      locale: language === "bn" ? "bn_BD" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
    },
    other: {
      "og:type": "website",
    },
  };
}
