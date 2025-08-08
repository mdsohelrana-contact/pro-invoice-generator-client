/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Mail, Lock } from "lucide-react";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import FormFieldInput from "../../Form/FormFieldInput";
import FormButton from "../../Form/FormButton";
import PrimaryButton from "../../Shared/Buttons/PrimaryButton";

// Validation schema
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

const EmailTab = ({ currentContent, fadeInUp }: any) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Submitted", values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 px-4 sm:px-6 py-6 bg-white rounded-md shadow-sm"
      >
        {/* Email Field */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.3 }}
        >
          <FormFieldInput
            control={form.control}
            name="email"
            label={currentContent.email}
            placeholder="your@email.com"
            icon={<Mail className="h-4 w-4" />}
          />
        </motion.div>

        {/* Password Field */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.1 }}
        >
          <FormFieldInput
            control={form.control}
            name="password"
            label={currentContent.password}
            placeholder="••••••••"
            type="password"
            icon={<Lock className="h-4 w-4" />}
          />
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

export default EmailTab;
