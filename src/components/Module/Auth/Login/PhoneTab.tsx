/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormFieldInput from "../../Form/FormFieldInput";
import PrimaryButton from "../../Shared/Buttons/PrimaryButton";

// Validation schema
const formSchema = z.object({
  phone: z
    .string()
    .min(11, { message: "Enter a valid phone number" })
    .regex(/^\+8801[0-9]{9}$/, { message: "Invalid BD phone format" }),
  otp: z.string().min(6, { message: "OTP must be 6 digits" }),
});

const PhoneTab = ({ currentContent, fadeInUp }: any) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      otp: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Submitted phone form:", values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Phone Number Field */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.3 }}
        >
          <FormFieldInput
            control={form.control}
            name="phone"
            label={currentContent.phone}
            placeholder="+880 1XXX-XXXXXX"
            type="tel"
            icon={<Phone className="h-4 w-4" />}
            required={true}
          />
        </motion.div>

        {/* OTP Field and Send OTP Button */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.1 }}
        >
          <div className="flex gap-2">
            <div className="flex-1">
              <FormFieldInput
                control={form.control}
                name="otp"
                label={currentContent.otp}
                placeholder="123456"
                type="text"
                maxLength={6}
                required={true}
                // OTP numeric input hint
                // If you want inputMode, update FormFieldInput to accept it
                // inputMode="numeric"
              />
            </div>
            <div className="flex items-end">
              <Button
                type="button"
                variant="outline"
                className="whitespace-nowrap"
                aria-label={currentContent.sendOtp}
              >
                {currentContent.sendOtp}
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        >
          <PrimaryButton className="w-full" type="submit">
            {currentContent.signIn}
          </PrimaryButton>
        </motion.div>
      </form>
    </Form>
  );
};

export default PhoneTab;
