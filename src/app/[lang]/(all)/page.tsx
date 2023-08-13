import { lang } from "@/types/lang";
import { getTranslate } from "@/utils/getTranslate";
import Landing from "@/components/UI/pages/home/sections/landing/Landing";
import Skills from "@/components/UI/pages/home/sections/skills/Skills";
import WorksSection from "@/components/UI/pages/home/sections/worksSection/WorksSection";

type props = {
  params: { lang: lang };
};

export default async function Home({ params: { lang } }: props) {
  const direc = await getTranslate(lang, "home");
  const dir = lang === "ar" ? "rtl" : "ltr";
  return (
    <main lang={lang} dir={dir}>
      <Landing lang={lang} t={direc.home.landing}/>
      <Skills lang={lang} t={direc.home.skills}/>
      <WorksSection lang={lang} t={direc.home.worksSection}/>
    </main>
  );
}
