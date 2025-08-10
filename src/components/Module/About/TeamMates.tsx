"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/components/context/LanguageContext";
import Image from "next/image";
import SectionHeader from "../Shared/Components/SectionHeader";

interface Team {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

interface TeamProps {
  team: Team[];
}

const TeamMates = ({ team }: TeamProps) => {
  const { language } = useLanguage();

  return (
    <motion.section
      aria-labelledby="team-mates-title"
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <SectionHeader
        title={
          language === "en" ? "Meet Our Team" : "আমাদের টিমের সাথে পরিচিত হন"
        }
      />

      <h2 id="team-mates-title" className="sr-only">
        {language === "en" ? "Meet Our Team" : "আমাদের টিমের সাথে পরিচিত হন"}
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member: Team, index: number) => (
          <motion.article
            key={index}
            role="article"
            aria-label={`${member.name}, ${member.role}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="border-0 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300 rounded-xl">
              <CardContent className="p-6 text-center">
                <Image
                  src={member.avatar || "/placeholder.svg"}
                  alt={`Photo of ${member.name}`}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gradient-to-r from-blue-500 to-teal-500"
                  height={400}
                  width={400}
                  priority={index < 3}
                />
                <h3 className="font-semibold text-lg text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default TeamMates;
