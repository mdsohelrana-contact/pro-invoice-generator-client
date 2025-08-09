/* eslint-disable @typescript-eslint/no-explicit-any */

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import SectionHeader from "../Shared/Components/SectionHeader";

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
      className="py-20 px-4 bg-gradient-to-r from-blue-50 to-green-50"
      aria-label="Customer testimonials"
    >
      <div className="container mx-auto">
        <SectionHeader
          title={t.testimonials.title}
          subTitle={t.testimonials.subtitle}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial: any, index: any) => (
            <Card
              key={index}
              className="border-0 shadow-lg"
              role="article"
              aria-labelledby={`testimonial-title-${index}`}
            >
              <CardContent className="p-6">
                <div
                  className="flex mb-4"
                  aria-label={`Rating: ${testimonial.rating} out of 5 stars`}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      aria-hidden="true"
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote
                  className="text-gray-600 mb-4 italic"
                  cite={`#testimonial-${index}`}
                >
                  “{testimonial.text}”
                </blockquote>
                <div>
                  <h3
                    id={`testimonial-title-${index}`}
                    className="font-semibold text-lg"
                  >
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
