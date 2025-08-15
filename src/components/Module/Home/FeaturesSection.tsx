/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import SectionHeader from "../Shared/Components/SectionHeader";
import PrimaryStyledCard from "../Shared/Components/PrimaryStyledCard";

interface Feature {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  t: {
    features: {
      title: string;
      subtitle: string;
      items: Feature[];
    };
  };
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ t }) => {
  return (
    <section
      className="py-20 px-4 bg-white"
      aria-label="Features of InvoicePro BD"
    >
      <div className="container mx-auto">
        <SectionHeader
          title={t.features.title}
          subTitle={t.features.subtitle}
          subTitleClassName="text-xl text-gray-600 max-w-2xl mx-auto"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.items.map((feature: any, index: any) => (
            <PrimaryStyledCard
              key={index}
              role="region"
              aria-labelledby={`feature-title-${index}`}
            >
              <CardHeader>
                <div
                  className="w-12 h-12 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg flex items-center justify-center mb-4"
                  aria-hidden="true"
                >
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3
                  id={`feature-title-${index}`}
                  className="text-xl font-semibold"
                >
                  {feature.title}
                </h3>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </PrimaryStyledCard>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
