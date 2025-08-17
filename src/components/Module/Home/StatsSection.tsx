import { motion } from "framer-motion";

import SectionHeader from "../Shared/Components/SectionHeader";
import type { LucideIcon } from "lucide-react";

interface StatItem {
  number: string | number;
  label: string;
  icon: LucideIcon;
}

interface StatsProps {
  t: {
    stats: {
      title: string;
      subtitle: string;
      items: StatItem[];
    };
  };
}

const StatsSection: React.FC<StatsProps> = ({ t }) => {
  console.log(t.stats.items[0].number as number);

  return (
    <section
      className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white"
      aria-labelledby="stats-section-title"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        {/* <SectionHeader
          title={t.stats.title}
          subTitle={t.stats.subtitle}
          titleClassName="text-white"
          subTitleClassName="text-xl opacity-90 text-white"
          className="mb-12"
        /> */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 ">
            {t.stats.title}
          </h1>

          <p className="text-xl text-white">{t.stats.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.stats.items.map((stat: StatItem, index: number) => (
            <motion.article
              key={index}
              aria-labelledby={`stat-label-${index}`}
              className="text-center"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              custom={index}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon
                  className="w-8 h-8"
                  aria-hidden="true"
                  focusable="false"
                />
              </div>
              <h3
                id={`stat-label-${index}`}
                className="text-3xl md:text-4xl font-bold mb-2"
              >
                {stat.number}
              </h3>
              <p className="text-lg opacity-90">{stat.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
