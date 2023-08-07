"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import getLinkWithLang from "@/utils/getLinkWithLang";
import { lang } from "@/types/lang";
import LangSwitcherClient from "@/components/common/LangSwitcherClient";
import LangSwitcher from "@/components/common/LangSwitcher";
import { useAppSelector, useAppDispatch } from "@/redux/app/hooks";
import { toggleActive } from "@/redux/features/activeNav/activeNavSlice";

type props = {
  lang: lang;
  t: any;
};

function NavLinks({ lang, t }: props) {
  const pathname = usePathname();
  const activeState = useAppSelector((store) => store.activeNav);
  const dispatch = useAppDispatch();

  return (
    <ul className={`link-list ${activeState.active}`}>
      {t.navbar.navList.map((el: any) => (
        <li key={el.id} onClick={() => dispatch(toggleActive())}>
          {/* <NavLinks el={el} lang={lang} /> */}
          <Link
            href={getLinkWithLang(lang, el.path)}
            className={`link ${
              getLinkWithLang(lang, el.path) === pathname ? "active" : ""
            }`}
          >
            {el.name}
          </Link>
        </li>
      ))}
      <li>
        <LangSwitcherClient
          lang={lang}
          langText={t.navbar.lang}
          onHandelClick={() => dispatch(toggleActive())}
        />
      </li>
    </ul>
  );
}

export default NavLinks;
