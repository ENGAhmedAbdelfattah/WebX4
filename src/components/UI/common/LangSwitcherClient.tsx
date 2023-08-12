"use client";
import { usePathname } from "next/navigation";
import { lang } from "@/types/lang";

type props = {
  lang: lang;
  langText: string;
  onHandelClick: () => void
};

function LangSwitcherClient({ lang, langText, onHandelClick }: props) {
  const pathname = usePathname(); // /en/contactus
  const purePath = pathname.startsWith("/en")
    ? pathname.split("/en")[1]
    : pathname.startsWith("/ar")
    ? pathname.split("/ar")[1]
    : "/"; // /contactus
  return (
    <>
        <a
          href={
            pathname.startsWith("/en")
              ? `/ar/${purePath}`
              : pathname.startsWith("/ar")
              ? `/en/${purePath}`
              : `${purePath}`
          }
          onClick = {onHandelClick} 
        >
          {langText}
        </a>
    </>
  );
}

export default LangSwitcherClient;
