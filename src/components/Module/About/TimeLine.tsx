"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/context/LanguageContext";
import SectionHeader from "../Shared/Components/SectionHeader";

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface TimeLineProps {
  milestones: Milestone[];
}

const TimeLine = ({ milestones }: TimeLineProps) => {
  const { language } = useLanguage();
  const sectionTitleId = "timeline-title";

  return (
    <motion.section
      aria-labelledby={sectionTitleId}
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <SectionHeader
        title={language === "en" ? "Our Journey" : "আমাদের যাত্রা"}
      />

      <div
        className="relative"
        role="list"
        aria-label={
          language === "en" ? "Timeline of milestones" : "মাইলস্টোন টাইমলাইন"
        }
      >
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"></div>
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <InViewMotionArticle
              key={`${milestone.year}-${milestone.title}`}
              milestone={milestone}
              isLeft={index % 2 === 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

interface InViewMotionArticleProps {
  milestone: Milestone;
  isLeft: boolean;
  index: number;
}

const InViewMotionArticle = ({
  milestone,
  isLeft,
  index,
}: InViewMotionArticleProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // viewport এ আসার আগেই ট্রিগার

  return (
    <motion.article
      ref={ref}
      role="listitem"
      className={`flex items-center ${
        isLeft ? "flex-row" : "flex-row-reverse"
      }`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
    >
      <div className={`w-1/2 ${isLeft ? "pr-8 text-right" : "pl-8 text-left"}`}>
        <Card
          className="border-0 bg-white/60 backdrop-blur-sm"
          aria-label={`${milestone.year} - ${milestone.title}`}
        >
          <CardContent className="p-6">
            <Badge className="mb-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white">
              <time dateTime={milestone.year}>{milestone.year}</time>
            </Badge>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {milestone.title}
            </h3>
            <p className="text-gray-600 text-sm">{milestone.description}</p>
          </CardContent>
        </Card>
      </div>
      <div className="relative z-10" aria-hidden="true">
        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 border-white shadow-lg"></div>
      </div>
      <div className="w-1/2"></div>
    </motion.article>
  );
};

export default TimeLine;
