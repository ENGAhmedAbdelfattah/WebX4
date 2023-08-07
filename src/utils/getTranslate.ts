import "server-only";
import { lang } from "@/types/lang";

export const getTranslate = async (locale: lang, field: string) => {
  const data = {
    navbarEn: import("@/../public/translations/layout/navbar/navbarEn.json").then((module) => module.default),
    navbarAr: import("@/../public/translations/layout/navbar/navbarAr.json").then((module) => module.default)
  }
  const translations = {
    en: {navbar: await data.navbarEn},
    ar: {navbar: await data.navbarAr},
  };

  const translationObject: any = translations[locale];
  return translationObject[field];
};
