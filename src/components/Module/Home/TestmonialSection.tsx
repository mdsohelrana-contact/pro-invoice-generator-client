"use client";

import React from "react";
import Slider from "react-slick";

import { CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import SectionHeader from "../Shared/Components/SectionHeader";
import PrimaryStyledCard from "../Shared/Components/PrimaryStyledCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    // Accessibility & ARIA
    accessibility: true,
    adaptiveHeight: true,
  };

  return (
    <section
      className="py-20 px-6 bg-gradient-to-r from-blue-100 via-green-50 to-teal-100"
      aria-label="Customer testimonials"
    >
      <div className="container mx-auto">
        <SectionHeader
          title={t.testimonials.title}
          subTitle={t.testimonials.subtitle}
          className="mb-12"
        />

        <Slider {...settings} aria-live="polite">
          {t.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              role="group"
              aria-roledescription="slide"
              aria-label={`Testimonial ${index + 1} of ${
                t.testimonials.items.length
              }`}
              className="px-3"
            >
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
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
