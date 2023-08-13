import { lang } from "@/types/lang";
import { headers } from "next/headers";

async function getPath() {
  const headersList =  await headers();
  const pathname = await headersList.get("x-invoke-path") || "";
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
