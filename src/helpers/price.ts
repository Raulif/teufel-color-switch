import { getLocale } from "./locale";
import { DEFAULT_CURRENCY } from "../constants";

const getCurrencyFromLocale = (locale: string): string => {
  switch (locale) {
    case 'de-de':
    case 'en-en':
    case 'nl-nl':
      return 'EUR';
    case 'de-ch':
    case 'fr-ch':
      return 'CHF';
    default:
      return 'EUR';
  }
}

const getIntlLocaleFromLocale = (locale: string): string => {
  switch (locale) {
    case 'en-en':
      // The locale 'en-en' is not a valid Intl locale
      return 'de-de';
    default:
      return locale;
  }
}

export const getFormattedPrice = (priceInCents?: string) => {
  const locale = getLocale();
  const intlLocale = getIntlLocaleFromLocale(locale);
  const priceFormat = new Intl.NumberFormat(intlLocale, {
    style: 'currency',
    currency: getCurrencyFromLocale(locale) ?? DEFAULT_CURRENCY
  });
  const priceAsInteger = parseInt(priceInCents ?? '');
  const notANumber = isNaN(priceAsInteger);
  return priceFormat.format(notANumber ? 0 : (priceAsInteger / 100));
}