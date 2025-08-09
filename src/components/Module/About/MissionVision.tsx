"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Target } from "lucide-react";

interface Props {
  mission: {
    title: string;
    description: string;
  };
  vision: {
    title: string;
    description: string;
  };
}

const MotionArticle = motion.article;

const MissionVision = ({ mission, vision }: Props) => {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-8 mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Mission */}
      <MotionArticle
        className="border-0 bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        aria-labelledby="mission-title"
      >
        <header className="ml-6 mb-1">
          <h3
            id="mission-title"
            className="flex items-center text-2xl font-semibold"
          >
            <Target className="w-6 h-6 mr-3 text-blue-600" aria-hidden="true" />
            {mission.title}
          </h3>
        </header>
        <CardContent>
          <p className="text-gray-600 leading-relaxed">{mission.description}</p>
        </CardContent>
      </MotionArticle>

      {/* Vision */}
      <MotionArticle
        className="border-0 bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        aria-labelledby="vision-title"
      >
        <header className=" ml-6 mb-1">
          <h3
            id="vision-title"
            className="flex items-center text-2xl font-semibold"
          >
            <Award className="w-6 h-6 mr-3 text-green-600" aria-hidden="true" />
            {vision.title}
          </h3>
        </header>
        <CardContent>
          <p className="text-gray-600 leading-relaxed">{vision.description}</p>
        </CardContent>
      </MotionArticle>
    </motion.div>
  );
};

export default MissionVision;
