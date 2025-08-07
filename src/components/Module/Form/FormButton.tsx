// components/ui/FormButton.tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FormButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
};

const FormButton = ({
  children,
  type = "submit",
  onClick,
  className,
}: FormButtonProps) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      className={cn(
        "w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white py-3",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default FormButton;
