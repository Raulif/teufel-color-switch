import Cookies from 'js-cookie';
import { DEFAULT_LOCALE } from "../constants";


export const getLocale = () => {
  const cookieLocale = Cookies.get('switch-locale');
  if (cookieLocale) return cookieLocale;
  Cookies.set('switch-locale', DEFAULT_LOCALE);
  return DEFAULT_LOCALE;
}

export const setLocale = (locale: string) => {
  Cookies.set('switch-locale', locale);
}
