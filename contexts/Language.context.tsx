import { LanguageKey } from "@/types/language";
import { createContext, useContext, useMemo, useState } from "react";

type Context = {
  languageKey: LanguageKey;
  setLanguageKey: React.Dispatch<React.SetStateAction<LanguageKey>>;
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
  const [languageKey, setLanguageKey] = useState<LanguageKey>("JP");

  const value = useMemo(
    () => ({
      languageKey,
      setLanguageKey,
    }),
    [languageKey, setLanguageKey]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
