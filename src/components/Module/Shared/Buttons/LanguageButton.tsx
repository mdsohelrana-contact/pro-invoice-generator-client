import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import clsx from "clsx"; // Optional but makes life easier
import { useStore } from "@/lib/store";

interface LanguageButtonProps {
  className?: string;
}

const LanguageButton = ({ className }: LanguageButtonProps) => {
  const language = useStore((state) => state.language);
  const setLanguage = useStore((state) => state.setLanguage);

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "bn" : "en")}
      className={clsx(
        // default language-based classes
        language === "en"
          ? "hidden text-green-600 font-bold cursor-pointer"
          : "block text-blue-600 font-medium cursor-pointer",
        className // extra className from outside
      )}
    >
      <Globe className="h-4 w-4 mr-1 " />
      {language === "en" ? "বাংলা" : "English"}
    </Button>
  );
};

export default LanguageButton;
