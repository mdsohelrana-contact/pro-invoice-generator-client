"use client";

import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { selectLanguage, setLanguage } from "@/store/slices/settingsSlice";

interface LanguageButtonProps {
  className?: string;
}

const LanguageButton = ({ className }: LanguageButtonProps) => {
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();

  const toggleLanguage = () => {
    dispatch(setLanguage(language === "en" ? "bn" : "en"));
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className={clsx(
        language === "en"
          ? "hidden text-green-600 font-bold cursor-pointer"
          : "block text-blue-600 font-medium cursor-pointer",
        className
      )}
    >
      <Globe className="h-4 w-4 mr-1" />
      {language === "en" ? "বাংলা" : "English"}
    </Button>
  );
};

export default LanguageButton;
