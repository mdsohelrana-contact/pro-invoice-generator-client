/* eslint-disable @typescript-eslint/no-explicit-any */

import { Card, CardContent } from "@/components/ui/card";
const IntegrationSection = ({ t }: { t: any }) => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.integrations.title}
          </h2>
          <p className="text-xl text-gray-600">{t.integrations.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {t.integrations.items.map((integration: any, index: any) => (
            <Card
              key={index}
              className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <CardContent className="p-6">
                <div className="text-3xl mb-3">{integration.logo}</div>
                <h3 className="font-semibold mb-2">{integration.name}</h3>
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
