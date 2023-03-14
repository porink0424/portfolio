import { LANGUAGE } from "@/constants/language";

export type Language = typeof LANGUAGE[keyof typeof LANGUAGE];
