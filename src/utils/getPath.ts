import { lang } from "@/types/lang";
import { headers } from "next/headers";

function getPath() {
    const headersList = headers();
	  const pathname = headersList.get("x-invoke-path") || "";
    const lang: lang = pathname.startsWith("/ar") ? "ar" : "en";
    const dir = lang === "ar" ? "rtl" : "ltr";
  return {pathname, lang, dir};
}

export default getPath;