import Image from "next/image";
import person from "@/../public/images/person.png"; 
import type { lang } from "@/types/lang";
import type { landing } from "@/types/translations";
import Link from "next/link";
type props = {
  lang: lang;
  t: landing;
};
async function Landing({ lang, t }: props) {

  return (
    <section className="landing">
      <div className="container">
        <div className="landing-left">
          <span className="hi">{t.hi}</span>
          <h1 className="landing-header">{t.landingHeader}</h1>
          <p className="landing-subheader">{t.landingSubheader}</p>
          <p className="landing-paragraph">{t.landingParagraph}</p>
          <Link href={"#works"}><button className="header-btn">{t.headerBtn}</button></Link>
        </div>
        <div className="landing-right">
          <div className="image-hand">
            <Image src={person} width={300} alt="" className="my-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
