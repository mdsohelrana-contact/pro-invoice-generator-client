/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";
import { FormMessage } from "@/components/ui/form";

interface FormFieldTextareaProps {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
  required?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const FormFieldTextarea = ({
  control,
  name,
  label,
  placeholder,
  rows = 4,
  maxLength,
  required = false,
  icon,
  className = "",
}: FormFieldTextareaProps) => {
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
                className="absolute left-3 top-3 text-gray-400 pointer-events-none"
                aria-hidden="true"
              >
                {icon}
              </span>
            )}
            <textarea
              id={name}
              {...field}
              rows={rows}
              maxLength={maxLength}
              placeholder={placeholder}
              className={`w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none
                ${
                  icon ? "pl-10" : "pl-3"
                } py-2 pr-3 text-sm leading-5 ${className}
                ${fieldState.error ? "border-red-500" : "border-gray-300"}`}
              aria-invalid={fieldState.error ? "true" : "false"}
              aria-describedby={fieldState.error ? errorId : undefined}
              aria-required={required ? "true" : undefined}
              required={required}
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

export default FormFieldTextarea;
