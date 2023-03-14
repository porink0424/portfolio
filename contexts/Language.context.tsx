import { LANGUAGE } from "@/constants/language";
import { Language } from "@/types/language";
import { createContext, useContext, useMemo, useState } from "react";

type Context = {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
};

export const LanguageContext = createContext<Context | undefined>(undefined);

export function useLanguageContext(): Context {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("LanguageContext is not defined.");
  }
  return context;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(LANGUAGE.JP);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language, setLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
