"use client";

import { useLanguage } from "@/components/context/LanguageContext";
import TimeLine from "@/components/Module/About/TimeLine";
import TeamMates from "@/components/Module/About/TeamMates";
import OurValues from "@/components/Module/About/OurValues";
import MissionVision from "@/components/Module/About/MissionVision";
import SectionHeader from "@/components/Module/Shared/Components/SectionHeader";
import AnimatedDoubleCTASection from "@/components/Module/Shared/Components/AnimatedDoubleCTASection";
import { aboutContent } from "@/data/aboutData";
import { useStore } from "@/lib/store";

const AboutPage = () => {
   const { language } = useStore();
  const t = aboutContent[language];

  return (
    <main
      lang={language}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50"
      aria-label={
        language === "en" ? "About us page" : "আমাদের সম্পর্কে পৃষ্ঠা"
      }
    >
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section aria-labelledby="about-hero-title" className="mb-12">
          <SectionHeader
            titleClassName="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 bg-clip-text text-transparent"
            title={t.hero.title}
            subTitle={t.hero.subtitle}
          />
        </section>

        {/* Mission & Vision */}
        <section aria-labelledby="mission-vision-title" className="mb-12">
          <MissionVision mission={t.mission} vision={t.vision} />
        </section>

        {/* Values */}
        <section aria-labelledby="our-values-title" className="mb-12">
          <OurValues values={t.values} />
        </section>

        {/* Team */}
        <section aria-labelledby="team-members-title" className="mb-12">
          <TeamMates team={t.team} />
        </section>

        {/* Timeline */}
        <section aria-labelledby="timeline-title" className="mb-12">
          <TimeLine milestones={t.milestones} />
        </section>

        {/* CTA Section */}
        <section aria-labelledby="call-to-action-title" className="mb-12">
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
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
