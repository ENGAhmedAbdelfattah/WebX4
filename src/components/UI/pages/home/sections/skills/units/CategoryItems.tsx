"use client";
import { useAppDispatch } from "@/redux/app/hooks";
import { activeCategory } from "@/redux/features/activeSkills/activeSkillsSlice";
import Image from "next/image";
import { useState } from "react";

import categoryImg1 from "@/../public/icons/categories/category1.svg";
import categoryImg2 from "@/../public/icons/categories/category2.svg";
import categoryImg3 from "@/../public/icons/categories/category3.svg";
import categoryImg4 from "@/../public/icons/categories/category4.svg";
import { Skills } from "@/types/translations";

type props = {
  t: Skills;
};

type active = {
  activeName: string;
  active: boolean;
};
function CategoryItems({ t }: props) {
  const CategoryImages: any = {
    categoryImg1,
    categoryImg2,
    categoryImg3,
    categoryImg4,
  };

  const [actives, setActives] = useState([
    {
      activeName: "frontend",
      active: true,
    },
    {
      activeName: "backend",
      active: false,
    },
    {
      activeName: "uiux",
      active: false,
    },
    {
      activeName: "tools",
      active: false,
    },
  ]);
  const handleClick = (header: string, activeName: string): void => {
    dispatch(activeCategory(activeName))
    const editActives: active[] = actives.map((el) => {
      el.active = el.activeName === activeName ? true : false;
      return el
    });
    console.log("editActives",editActives);
    setActives(editActives);
  }
  const dispatch = useAppDispatch();
  return (
    <>
      {t.leftItems.map((el: any, inx: number) => (
        <button
          key={el.id}
          className={`category-skills-item ${
            actives[inx].active ? "active" : ""
          }`}
          onClick={() => handleClick(el.header, el.activeName)}
        >
          <div className="image-hand">
            <Image
              src={CategoryImages[el.categoryImg]}
              alt={el.header}
              width={65}
              className="category-img"

            />
          </div>
          <h3 className="header">{el.header}</h3>
        </button>
      ))}
    </>
  );
}

export default CategoryItems;
// style={{ filter: "hue-rotate(190deg)"}}

{
  /* <CategoryItem
key={el.id}
index = {inx}
header={el.header}
activeName={el.activeName}
image={}
/> */
}
