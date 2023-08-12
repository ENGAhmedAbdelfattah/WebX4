import { lang } from "@/types/lang";
import CategoryItems from "./units/CategoryItems";
import SkillsItems from "./units/SkillsItems";
import { Skills } from "@/types/translations";
import HeaderSection from "@/components/UI/common/HeaderSection";
type props = {
  lang: lang;
  t: Skills;
};

function Skills({ lang, t }: props) {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <HeaderSection t={t} />
        <div className="skills-bottom">
          <div className="skills-left">
            <CategoryItems t={t} />
          </div>
          <div className="skills-right">
            <div className="skills-items">
              <SkillsItems t={t} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

// type image = {
//   src: string,
//   height: number,
//   width: number,
//   blurWidth: number,
//   blurHeight: number
// }

// type CategoryImages = {
//   categoryImg1: image,
//   categoryImg2: image,
//   categoryImg3: image,
//   categoryImg4: image,
// }


/* 
<div className="skills-top">
  <h2 className="skillsHeader">{t.skillsHeader}</h2>
    <hr /> 
</div>
*/
