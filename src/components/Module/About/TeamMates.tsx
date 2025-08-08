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

  // const team = [
  //   {
  //     name: "রাহুল আহমেদ",
  //     role: language === "en" ? "Founder & CEO" : "প্রতিষ্ঠাতা ও সিইও",
  //     bio:
  //       language === "en"
  //         ? "Former software engineer with 10+ years experience in fintech and business solutions."
  //         : "ফিনটেক এবং ব্যবসায়িক সমাধানে ১০+ বছরের অভিজ্ঞতা সহ প্রাক্তন সফটওয়্যার ইঞ্জিনিয়ার।",
  //     avatar: "/placeholder.svg?height=100&width=100&text=RA",
  //   },
  //   {
  //     name: "ফাতিমা খান",
  //     role: language === "en" ? "Head of Product" : "প্রোডাক্ট প্রধান",
  //     bio:
  //       language === "en"
  //         ? "Product strategist focused on creating user-centric solutions for small businesses."
  //         : "ছোট ব্যবসার জন্য ব্যবহারকারী-কেন্দ্রিক সমাধান তৈরিতে ফোকাসড প্রোডাক্ট কৌশলবিদ।",
  //     avatar: "/placeholder.svg?height=100&width=100&text=FK",
  //   },
  //   {
  //     name: "সাইফুল ইসলাম",
  //     role: language === "en" ? "Lead Developer" : "লিড ডেভেলপার",
  //     bio:
  //       language === "en"
  //         ? "Full-stack developer passionate about building scalable and secure applications."
  //         : "স্কেলেবল এবং নিরাপদ অ্যাপ্লিকেশন তৈরিতে আগ্রহী ফুল-স্ট্যাক ডেভেলপার।",
  //     avatar: "/placeholder.svg?height=100&width=100&text=SI",
  //   },
  // ];

  return (
    <motion.div
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

      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member: Team, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <Image
                  src={member.avatar || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gradient-to-r from-blue-500 to-teal-500"
                  height={400}
                  width={400}
                />
                <h3 className="font-semibold text-lg text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TeamMates;
