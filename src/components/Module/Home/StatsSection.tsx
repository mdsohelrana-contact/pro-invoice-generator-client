/* eslint-disable @typescript-eslint/no-explicit-any */

const StatsSection = ({ t }: { t: any }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.stats.title}
          </h2>
          <p className="text-xl opacity-90">{t.stats.subtitle}</p>
        </div>

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
