import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import PrimaryButton from "../Shared/Buttons/PrimaryButton";

interface HeroSectionProps {
  t: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
      demo: string;
    };
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ t }) => {
  return (
    <section className="py-20 px-4" aria-label="Hero section">
      <div className="container mx-auto text-center">
        <Badge
          className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200"
          role="alert"
          aria-live="polite"
        >
          🎉 New: WhatsApp Integration Available
        </Badge>
        <h1
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent"
          tabIndex={-1}
        >
          {t.hero.title}
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard">
            {/* Primary Button */}
            <PrimaryButton size="lg" icon={<ArrowRight />}>
              {t.hero.cta}
            </PrimaryButton>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-3"
            aria-label="Watch Demo Video"
            onClick={() => {
              // TODO: Add demo video modal or redirect logic here
              alert("Demo video feature coming soon!");
            }}
          >
            <Play className="mr-2 w-5 h-5" aria-hidden="true" />
            {t.hero.demo}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
