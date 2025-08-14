"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import SectionHeader from "../Shared/Components/SectionHeader";
import PrimaryStyledCard from "../Shared/Components/PrimaryStyledCard";

interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
}

interface TestimonialSectionProps {
  t: {
    testimonials: {
      title: string;
      subtitle: string;
      items: TestimonialItem[];
    };
  };
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ t }) => {
  return (
    <section
      className="py-20 px-6 bg-gradient-to-r from-blue-50 via-green-50 to-teal-50"
      aria-label="Customer testimonials"
    >
      <div className="container mx-auto">
        <SectionHeader
          title={t.testimonials.title}
          subTitle={t.testimonials.subtitle}
          className="mb-12"
        />

        <Swiper
          modules={[Pagination, Autoplay, A11y]}
          spaceBetween={24}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          a11y={{
            prevSlideMessage: "Previous testimonial",
            nextSlideMessage: "Next testimonial",
          }}
          className="testimonial-swiper"
        >
          {t.testimonials.items.map((testimonial, index) => (
            <SwiperSlide key={index} className="px-2">
              <PrimaryStyledCard
                role="article"
                aria-labelledby={`testimonial-title-${index}`}
                className="hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6 flex flex-col h-full bg-white rounded-lg shadow-lg">
                  <div
                    className="flex mb-4"
                    aria-label={`Rating: ${testimonial.rating} out of 5 stars`}
                  >
                    {[...Array(5)].map((_, i) => {
                      const isActive = i < testimonial.rating;
                      return (
                        <Star
                          key={i}
                          aria-hidden="true"
                          className={`w-6 h-6 ${
                            isActive ? "text-yellow-400" : "text-gray-300"
                          } transition-colors duration-200`}
                          fill={isActive ? "currentColor" : "none"}
                        />
                      );
                    })}
                  </div>

                  <blockquote
                    className="text-gray-700 italic flex-grow mb-6 leading-relaxed"
                    cite={`#testimonial-${index}`}
                  >
                    “{testimonial.text}”
                  </blockquote>

                  <div>
                    <h3
                      id={`testimonial-title-${index}`}
                      className="font-semibold text-lg text-gray-900"
                    >
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}{" "}
                      <span className="text-gray-400 mx-1">&middot;</span>{" "}
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </PrimaryStyledCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
