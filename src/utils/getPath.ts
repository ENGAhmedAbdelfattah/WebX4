import { lang } from "@/types/lang";
import { headers } from "next/headers";

function getPath() {
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";
  const purePath = pathname.startsWith("/en")
    ? pathname.split("/en")[1]
    : pathname.startsWith("/ar")
    ? pathname.split("/ar")[1]
    : "/";
  const lang: lang = pathname.startsWith("/ar") ? "ar" : "en";
  const dir = lang === "ar" ? "rtl" : "ltr";
  return { pathname, purePath, lang, dir };
}

export default getPath;
