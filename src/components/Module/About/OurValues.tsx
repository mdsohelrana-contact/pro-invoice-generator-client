"use client";

import { motion } from "framer-motion";
import { CardContent } from "@/components/ui/card";
import { useLanguage } from "@/components/context/LanguageContext";
import SectionHeader from "../Shared/Components/SectionHeader";

interface ValueProps {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  color: string;
}

const OurValues = ({ values }: { values: ValueProps[] }) => {
  const { language } = useLanguage();

  return (
    <motion.section
      aria-labelledby="our-values-title"
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <SectionHeader
        title={language === "en" ? "Our Values" : "আমাদের মূল্যবোধ"}
      />

      <h2 id="our-values-title" className="sr-only">
        {language === "en" ? "Our Values" : "আমাদের মূল্যবোধ"}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values?.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.article
              key={index}
              aria-label={value.title}
              className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm rounded-xl"
              role="region"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardContent className="p-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  {Icon && (
                    <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                  )}
                </div>
                <h3
                  id="value-title"
                  className="font-semibold text-lg text-gray-800 mb-3"
                >
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
};

export default OurValues;
