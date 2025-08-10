/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";
import { FormMessage } from "@/components/ui/form";

interface Option {
  value: string | number;
  label: string;
  disabled?: boolean;
}

interface FormFieldSelectProps {
  control: any;
  name: string;
  label: string;
  options: Option[];
  placeholder?: string;
  required?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const FormFieldSelect = ({
  control,
  name,
  label,
  options,
  placeholder,
  required = false,
  icon,
  className = "",
}: FormFieldSelectProps) => {
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
            <select
              id={name}
              {...field}
              aria-invalid={fieldState.error ? "true" : "false"}
              aria-describedby={fieldState.error ? errorId : undefined}
              aria-required={required ? "true" : undefined}
              required={required}
              className={`w-full rounded-md border border-gray-300 bg-white py-2 pr-8 text-sm leading-5
                focus:ring-2 focus:ring-blue-500 focus:outline-none
                ${icon ? "pl-10" : "pl-3"} ${className}
                ${fieldState.error ? "border-red-500" : "border-gray-300"}`}
            >
              {placeholder && (
                <option value="" disabled hidden>
                  {placeholder}
                </option>
              )}
              {options.map(({ value, label, disabled }) => (
                <option key={value} value={value} disabled={disabled}>
                  {label}
                </option>
              ))}
            </select>
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

export default FormFieldSelect;
