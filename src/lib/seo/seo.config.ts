// lib/seo/seo.config.ts
export const seoContent = {
  en: {
    title: "InvoicePro BD - Professional Invoice Generator",
    description: "Create and manage invoices easily with InvoicePro BD.",
    keywords: "invoice, Bangladesh, bKash, Nagad, multi-language",
  },
  bn: {
    title: "InvoicePro BD - পেশাদার ইনভয়েস জেনারেটর",
    description: "সহজেই ইনভয়েস তৈরি ও পরিচালনা করুন InvoicePro BD দিয়ে।",
    keywords: "ইনভয়েস, বাংলাদেশ, বিকাশ, নগদ, মাল্টি-ল্যাঙ্গুয়েজ",
  },
};

type Lang = "en" | "bn";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const lang = params.lang || "en";
  const seo = seoContent[lang] || seoContent.en;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: `https://invoice-pro-wine.vercel.app/${lang}`,
      languages: {
        en: "https://invoice-pro-wine.vercel.app/en",
        bn: "https://invoice-pro-wine.vercel.app/bn",
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      locale: lang === "bn" ? "bn_BD" : "en_US",
      url: `https://invoice-pro-wine.vercel.app/${lang}`,
      siteName: "InvoicePro BD",
    },
  };
}
