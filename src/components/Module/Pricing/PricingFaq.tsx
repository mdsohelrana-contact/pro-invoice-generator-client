/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const PricingFaq = ({ t }: { t: any }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-center">{t?.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {t?.items?.map((item: any, index: number) => (
            <div key={index} className="border-b pb-4 last:border-b-0">
              <h3 className="font-medium mb-2">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingFaq;
