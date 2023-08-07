import Image from "next/image";
import Link from "next/link";
import { FaFileInvoice } from "react-icons/fa";
import ThemeSwitcher from "@/components/common/ThemeSwitcher";
import LangSwitcher from "@/components/common/LangSwitcher";

import getPath from "@/utils/getPath";
import logo from "@/../public/images/logo.png";
import getLinkWithLang from "@/utils/getLinkWithLang";
import NavLinks from "./items/NavLinks";
import { getTranslate } from "@/utils/getTranslate";
import MenuIcon from "./items/MenuIcon";
export const dynamic = "force-dynamic";

async function Header() {
  const { pathname, lang } = getPath();
  const t: navbar = await getTranslate(lang, "navbar");


  return (
    <header>
      <div className="container">
        <div className="image-hand">
          <Link href={getLinkWithLang(lang, t.navbar.navList[0].path)}>
            <Image src={logo} alt="logo" width={100} height={100} />
          </Link>
        </div>
        <nav>
          {/* <ul className={`link-list ${activeState.active}`}>
            {t.navbar.navList.map((el) => (
              <li key={el.id}> */}
                <NavLinks lang={lang} t={t} />
              {/* </li>
            ))}
            <li><LangSwitcher langText={t.navbar.lang} /></li>
          </ul> */}
        </nav>
        <div className="header-end">
          <div className="theme-hand">
            <ThemeSwitcher name={"theme-icon"} />
          </div>
          <div className="resume">
            <Link href={getLinkWithLang(lang, "/resume")} className="link">
              <FaFileInvoice className="file-icon" />
              <span className="span-resume">Resume</span>
            </Link>
          </div>
        <MenuIcon/>
        </div>
      </div>
    </header>
  );
}

export default Header;

/* <LangSwitcher lang={lang} langText={dict.navBar.lang} /> */
// getLinkWithLang(lang, el.path)
{/* <LangSwitcher langText={lang} /> */}
