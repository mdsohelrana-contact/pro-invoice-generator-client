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

export const metadata: Metadata = {
  title: "InvoicePro BD - Professional Invoice Generator for Bangladesh",
  description:
    "Create professional invoices for your Bangladeshi business with multi-language support, local payment methods, and tax compliance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${notoBengali.variable}`}>
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
