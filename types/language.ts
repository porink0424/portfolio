import { LANGUAGE } from "@/constants/language";

export type Language = typeof LANGUAGE[keyof typeof LANGUAGE];
export type LanguageKey = keyof typeof LANGUAGE;
