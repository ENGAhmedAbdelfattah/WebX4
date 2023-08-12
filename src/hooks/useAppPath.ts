import { lang } from "@/types/lang";
import { usePathname } from "next/navigation";

function useAppPath() {
    const pathname = usePathname();
    const purePath = pathname.startsWith("/en")
    ? pathname.split("/en")[1]
    : pathname.startsWith("/ar")
    ? pathname.split("/ar")[1]
    : "/";
    const lang: lang = pathname.startsWith("/ar") ? "ar" : "en";
    const dir = lang === "ar" ? "rtl" : "ltr";
  return {pathname, purePath, lang, dir};
}

export default useAppPath;