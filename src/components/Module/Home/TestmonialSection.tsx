/* eslint-disable @typescript-eslint/no-explicit-any */

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialSection = ({ t }: { t: any }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-gray-600">{t.testimonials.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial: any, index: any) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
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
