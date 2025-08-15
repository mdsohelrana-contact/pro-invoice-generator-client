"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "../Shared/Components/SectionHeader";
import InfoCard from "../Shared/Components/InfoCard";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/store/slices/settingsSlice";

interface ValueProps {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  color: string;
}

const OurValues = ({ values }: { values: ValueProps[] }) => {
const language = useSelector(selectLanguage);

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
              // className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm rounded-xl"
              role="region"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
   
           

              <InfoCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                color={value.color}
              />
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
};

export default OurValues;
