/* eslint-disable @typescript-eslint/no-explicit-any */

import SectionHeader from "../Shared/Components/SectionHeader";

const StatsSection = ({ t }: { t: any }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <SectionHeader
          title={t.stats.title}
          subTitle={t.stats.subtitle}
          subTitleClassName="text-xl opacity-90 text-white"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.stats.items.map((stat: any, index: any) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
