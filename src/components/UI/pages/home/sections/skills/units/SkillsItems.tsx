"use client";
import { SkillItem, Skills } from "@/types/translations";
import frontendImg1 from "@/../public/icons/skills/frontend/frontend1.svg";
import frontendImg2 from "@/../public/icons/skills/frontend/frontend2.svg";
import frontendImg3 from "@/../public/icons/skills/frontend/frontend3.svg";
import frontendImg4 from "@/../public/icons/skills/frontend/frontend4.svg";
import frontendImg5 from "@/../public/icons/skills/frontend/frontend5.svg";
import frontendImg6 from "@/../public/icons/skills/frontend/frontend6.svg";
import frontendImg7 from "@/../public/icons/skills/frontend/frontend7.svg";
import frontendImg8 from "@/../public/icons/skills/frontend/frontend8.svg";
import frontendImg9 from "@/../public/icons/skills/frontend/frontend9.svg";
import frontendImg10 from "@/../public/icons/skills/frontend/frontend10.svg";
import frontendImg11 from "@/../public/icons/skills/frontend/frontend11.svg";
import backendImg1 from "@/../public/icons/skills/backend/backend1.svg";
import backendImg2 from "@/../public/icons/skills/backend/backend2.svg";
import backendImg3 from "@/../public/icons/skills/backend/backend3.svg";
import backendImg4 from "@/../public/icons/skills/backend/backend4.svg";
import uiuxImg1 from "@/../public/icons/skills/uiux/uiux1.svg";
import uiuxImg2 from "@/../public/icons/skills/uiux/uiux2.svg";
import toolsImg1 from "@/../public/icons/skills/tools/tools1.svg";
import toolsImg2 from "@/../public/icons/skills/tools/tools2.svg";
import toolsImg3 from "@/../public/icons/skills/tools/tools3.svg";
import toolsImg4 from "@/../public/icons/skills/tools/tools4.svg";
import toolsImg5 from "@/../public/icons/skills/tools/tools5.svg";
import toolsImg6 from "@/../public/icons/skills/tools/tools6.svg";
import toolsImg7 from "@/../public/icons/skills/tools/tools7.svg";
import toolsImg8 from "@/../public/icons/skills/tools/tools8.svg";
import SkillsItem from "./SkillsItem";
import { useAppSelector } from "@/redux/app/hooks";
import { ActiveSkills } from "@/redux/features/activeSkills/activeSkillsSlice";

type props = {
  t: Skills;
};

function SkillsItems({ t }: props) {
  const SkillsImages: any = {
    frontend: {
      frontendImg1,
      frontendImg2,
      frontendImg3,
      frontendImg4,
      frontendImg5,
      frontendImg6,
      frontendImg7,
      frontendImg8,
      frontendImg9,
      frontendImg10,
      frontendImg11
    },
    backend: {
      backendImg1,
      backendImg2,
      backendImg3,
      backendImg4,
    },
    uiux: {
      uiuxImg1,
      uiuxImg2,
    },
    tools: {
      toolsImg1,
      toolsImg2,
      toolsImg3,
      toolsImg4,
      toolsImg5,
      toolsImg6,
      toolsImg7,
      toolsImg8,
    },
  };
  const state: ActiveSkills = useAppSelector((store) => store.activeSkills);
  const activeSkills  = state;
  const skillsItemsTitle = activeSkills.active === "frontend" ? "Front End" : activeSkills.active === "backend" ? "Back End" :activeSkills.active === "uiux" ? "UI-UX" :activeSkills.active === "tools" ? "Tools" : "";
  const selectedSkillItems: SkillItem[] = t.rightItems[activeSkills.active as keyof typeof t.rightItems];
  return (
    <>
      <h3 className="skills-items-title">{skillsItemsTitle}</h3>
      <div className="skills-items-box">
        {selectedSkillItems.map((el: any) => (
          <SkillsItem
            key={el.id}
            image={
              SkillsImages[`${activeSkills.active}`][
                el[`${activeSkills.active}Img`]
              ]
            }
            paragraph={el.paragraph}
          />
        ))}
      </div>
    </>
  );
}

export default SkillsItems;
