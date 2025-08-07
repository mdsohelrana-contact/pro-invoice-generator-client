import { useLanguage } from "@/components/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import clsx from "clsx"; // Optional but makes life easier

interface LanguageButtonProps {
  className?: string;
}

const LanguageButton = ({ className }: LanguageButtonProps) => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "bn" : "en")}
      className={clsx(
        // default language-based classes
        language === "en"
          ? "hidden text-green-600 font-bold"
          : "block text-blue-600 font-medium",
        className // extra className from outside
      )}
    >
      <Globe className="h-4 w-4 mr-1" />
      {language === "en" ? "বাংলা" : "English"}
    </Button>
  );
};

export default LanguageButton;
