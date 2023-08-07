import type { NextRequest } from "next/server";
import { match as matchLocal } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

export const locales = ["en", "ar"];
const defaultLocal = "en";
function getLocale(req: NextRequest) {
  // const negotiatorHeader: Record<string, string> = {};
  // req.headers.forEach((value, key)=> negotiatorHeader[key] = value);
  let headers = new Headers(req.headers);
  let headerLang = {
    "accept-language": headers.get("accept-language") as string,
  };
  let language = new Negotiator({ headers: headerLang }).languages(locales);
  return matchLocal(language, locales, defaultLocal);
}

export default getLocale;
