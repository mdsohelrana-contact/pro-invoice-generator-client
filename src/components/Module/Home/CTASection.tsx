/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const CTASection = ({ t }: { t: any }) => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta.title}</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {t.cta.subtitle}
        </p>
        <Link href="/dashboard">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-3"
          >
            {t.cta.button}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
