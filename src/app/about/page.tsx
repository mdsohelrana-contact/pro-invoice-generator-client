"use client";
import { useLanguage } from "@/components/context/LanguageContext";
import TimeLine from "@/components/Module/About/TimeLine";
import TeamMates from "@/components/Module/About/TeamMates";
import OurValues from "@/components/Module/About/OurValues";
import MissionVision from "@/components/Module/About/MissionVision";
import SectionHeader from "@/components/Module/Shared/Components/SectionHeader";
import AnimatedDoubleCTASection from "@/components/Module/Shared/Components/AnimatedDoubleCTASection";
import { aboutContent } from "@/data/aboutData";

const AboutPage = () => {
  const { language } = useLanguage();

  const t = aboutContent[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <SectionHeader
          titleClassName="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent"
          title={t.hero.title}
          subTitle={t.hero.subtitle}
        />

        {/* Mission & Vision */}
        <MissionVision mission={t.mission} vision={t.vision} />

        {/* Values */}
        <OurValues values={t.values} />

        {/* Team */}
        <TeamMates team={t.team} />

        {/* Timeline */}
        <TimeLine milestones={t.milestones} />

        {/* ! Milestone Stats */}

        {/* CTA Section */}
        <AnimatedDoubleCTASection
          title={t.cta.title}
          subTitle={t.cta.subtitle}
          buttons={[
            {
              href: "/dashboard",
              labelEn: "Get Started Today",
              labelBn: "আজই শুরু করুন",
            },
            {
              href: "/contact",
              labelEn: "Contact Us",
              labelBn: "যোগাযোগ করুন",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default AboutPage;
