/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

const HeroSection = ({ t }: { t: any }) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
          🎉 New: WhatsApp Integration Available
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
          {t.hero.title}
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-3"
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="text-lg px-8 py-3">
            <Play className="mr-2 w-5 h-5" />
            {t.hero.demo}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
