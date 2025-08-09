/* eslint-disable @typescript-eslint/no-explicit-any */

import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "../Shared/Components/SectionHeader";

interface IntegrationItem {
  name: string;
  logo: React.ReactNode; // ইমোজি বা আইকন হতে পারে
  description: string;
}

interface IntegrationSectionProps {
  t: {
    integrations: {
      title: string;
      subtitle: string;
      items: IntegrationItem[];
    };
  };
}
const IntegrationSection: React.FC<IntegrationSectionProps> = ({ t }) => {

  return (
    <section className="py-20 px-4 bg-white"
    aria-labelledby="integration-section-title"
    >
      <div className="container mx-auto">
        <SectionHeader
          title={t.integrations.title}
          subTitle={t.integrations.subtitle}
          subTitleClassName="text-xl text-gray-600 max-w-2xl mx-auto"
           className="mb-12"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {t.integrations.items.map((integration: any, index: any) => (
            <Card
              key={index}
              className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              role="region"
              aria-labelledby={`integration-title-${index}`}
            >
              <CardContent className="p-6">
                <div className="text-3xl mb-3" aria-hidden="true">{integration.logo}</div>
                <h3 
                id={`integration-title-${index}`}
                 className="font-semibold mb-2">{integration.name}</h3>
                <p className="text-sm text-gray-600">
                  {integration.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
