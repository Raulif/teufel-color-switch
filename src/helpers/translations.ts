import { DEFAULT_LOCALE } from "../constants";
import { de, en } from "../translations";
import { getLocale } from "./locale";

export const translations: { [key: string]: any } = {
  'de-de': de,
  'en-en': en,
}

export const getTranslation = (label: string): string => {
  const locale = getLocale();
  return translations[locale][label] ?? translations[DEFAULT_LOCALE][label];
}
