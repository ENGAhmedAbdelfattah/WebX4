import { lang } from "@/types/lang";

// function getLinkWithLang(lang: lang, link: string = "") {
//   return link === `/${lang}` || link === `/`?  `/${lang}` : `/${lang}${link}`;
// }

function getLinkWithLang(lang: lang, link: string = "") {
  return link === `/${lang}` || link === `/`?  `/${lang}` : `/${lang}${link}`;
}

export default getLinkWithLang;