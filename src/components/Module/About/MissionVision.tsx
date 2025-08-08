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
const MissionVision = ({ mission, vision }: Props) => {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-8 mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Mission */}
      <Card className="border-0 bg-white/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <Target className="w-6 h-6 mr-3 text-blue-600" />
            {mission.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 leading-relaxed">{mission.description}</p>
        </CardContent>
      </Card>

      {/* Vision */}
      <Card className="border-0 bg-white/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <Award className="w-6 h-6 mr-3 text-green-600" />
            {vision.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 leading-relaxed">{vision.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default MissionVision;
