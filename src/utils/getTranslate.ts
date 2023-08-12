import "server-only";
import { lang } from "@/types/lang";

export const getTranslate = async (locale: lang, field: string) => {
  const data = {
    navbarEn: import(
      "@/../public/translations/layout/navbar/navbarEn.json"
    ).then((module) => module.default),
    navbarAr: import(
      "@/../public/translations/layout/navbar/navbarAr.json"
    ).then((module) => module.default),
    footerEn: import(
      "@/../public/translations/layout/footer/footerEn.json"
    ).then((module) => module.default),
    footerAr: import(
      "@/../public/translations/layout/footer/footerAr.json"
    ).then((module) => module.default),
    homeEn: import("@/../public/translations/pages/home/homeEn.json").then(
      (module) => module.default
    ),
    homeAr: import("@/../public/translations/pages/home/homeAr.json").then(
      (module) => module.default
    ),
  };
  const translations = {
    en: { navbar: await data.navbarEn, home: await data.homeEn, footer: await data.footerEn},
    ar: { navbar: await data.navbarAr, home: await data.homeAr, footer: await data.footerAr},
  };

  const translationObject: any = translations[locale];
  return translationObject[field];
};
