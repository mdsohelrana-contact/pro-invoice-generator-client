/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";
import { FormMessage } from "@/components/ui/form";

interface FormFieldInputProps {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "tel" | "number";
  icon?: React.ReactNode;
  maxLength?: number;
  required?: boolean;
}

const FormFieldInput = ({
  control,
  name,
  label,
  placeholder,
  type = "text",
  icon,
  maxLength,
  required = false,
}: FormFieldInputProps) => {
  const errorId = `${name}-error`;

  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-sm font-medium">
        {label}
      </Label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <div className="relative">
            {icon && (
              <span
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                aria-hidden="true"
              >
                {icon}
              </span>
            )}
            <Input
              id={name}
              {...field}
              type={type}
              maxLength={maxLength}
              placeholder={placeholder}
              className={`${icon ? "pl-10" : ""}`}
              aria-invalid={fieldState.error ? "true" : "false"}
              aria-describedby={fieldState.error ? errorId : undefined}
              aria-required={required ? "true" : undefined}
              required={required}
              autoComplete={
                name === "email"
                  ? "email"
                  : name === "password"
                  ? "current-password"
                  : undefined
              }
            />
            {fieldState.error && (
              <FormMessage id={errorId} role="alert">
                {fieldState.error.message}
              </FormMessage>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default FormFieldInput;
