import Image from "next/image";
import Link from "next/link";
import { FaFileInvoice } from "react-icons/fa";
import ThemeSwitcher from "@/components/UI/common/ThemeSwitcher";
import getPath from "@/utils/getPath";
import logo from "@/../public/images/logo.png";
import getLinkWithLang from "@/utils/getLinkWithLang";
import NavLinks from "./items/NavLinks";
import { getTranslate } from "@/utils/getTranslate";
import MenuIcon from "./items/MenuIcon";
import { navbar } from "@/types/translations";
import { lang } from "@/types/lang";

type props = {
  lang: lang;
}

async function Header({lang}: props) {
  // const { lang } = getPath();
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
          <NavLinks lang={lang} t={t} />
        </nav>
        <div className="header-end">
          <div className="theme-hand">
            <ThemeSwitcher name={"theme-icon"} />
          </div>
          {/* <div className="resume">
            <Link href={getLinkWithLang(lang, "/resume")} className="link">
              <FaFileInvoice className="file-icon" />
              <span className="span-resume">Resume</span>
            </Link>
          </div> */}
        <MenuIcon/>
        </div>
      </div>
    </header>
  );
}

export default Header;
