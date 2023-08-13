"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import { lang } from "@/types/lang";
import Link from "next/link";

type props = {
  lang: lang;
  langText: string;
  onHandelClick: () => void;
};

function LangSwitcherClient({ lang, langText, onHandelClick }: props) {
  const router = useRouter();

  const pathname = usePathname(); // /en/contactus
  const purePath = pathname.startsWith("/en")
    ? pathname.split("/en")[1]
    : pathname.startsWith("/ar")
    ? pathname.split("/ar")[1]
    : "/"; // /contactus
  return (
    <>
      <button
        // href={
        //   pathname.startsWith("/en")
        //     ? `/ar/${purePath}`
        //     : pathname.startsWith("/ar")
        //     ? `/en/${purePath}`
        //     : `${purePath}`
        // }
        onClick={() => {
          onHandelClick();
          router.push(
            pathname.startsWith("/en")
              ? `/ar/${purePath}`
              : pathname.startsWith("/ar")
              ? `/en/${purePath}`
              : `${purePath}`
          );
        }}
      >
        {langText}
      </button>
    </>
  );
}

export default LangSwitcherClient;
