"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useStore } from "@/lib/store";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";

interface WhatsAppShareProps {
  invoiceNumber: string;
  customerPhone: string;
  shareLink: string;
}
const WhatsAppIntegration = ({
  invoiceNumber,
  customerPhone,
  shareLink,
}: WhatsAppShareProps) => {
  const { language } = useStore();

  const [message, setMessage] = React.useState(
    language === "en"
      ? `Hello! Your invoice ${invoiceNumber} is ready. You can view it here: ${shareLink}`
      : `হ্যালো! আপনার ইনভয়েস ${invoiceNumber} প্রস্তুত। আপনি এটি এখানে দেখতে পারেন: ${shareLink}`
  );
  const [phone, setPhone] = React.useState(customerPhone);

  const handleShare = () => {
    if (!phone) {
      toast.error(
        language === "en"
          ? "Please enter recipient phone number."
          : "প্রাপ্তকারীর ফোন নম্বর প্রবেশ করুন।"
      );
      return;
    }

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    toast.success(
      language === "en" ? "Message sent successfully!" : "বার্তা পাঠানো হয়েছে!"
    );
  };

  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="whatsapp-phone">
          {language === "en" ? "Recipient Phone Number" : "প্রাপকের ফোন নম্বর"}
        </Label>
        <Input
          id="whatsapp-phone"
          type="tel"
          placeholder={
            language === "en" ? "e.g., +8801712345678" : "যেমন, +৮৮০১৭১২৩৪৫৬৭৮"
          }
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="whatsapp-message">
          {language === "en" ? "Message" : "বার্তা"}
        </Label>
        <Textarea
          id="whatsapp-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
        />
      </div>
      <Button onClick={handleShare}>
        <MessageCircle className="mr-2 h-4 w-4" />
        {language === "en"
          ? "Share via WhatsApp"
          : "হোয়াটসঅ্যাপের মাধ্যমে শেয়ার করুন"}
      </Button>
    </div>
  );
};

export default WhatsAppIntegration;
