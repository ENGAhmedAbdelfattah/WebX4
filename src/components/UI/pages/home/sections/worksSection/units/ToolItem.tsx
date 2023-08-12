import { ToolItem } from "@/types/translations";
import Image from "next/image";
import reactImg from "@/../public/icons/skills/frontend/frontend8.svg"
import nextImg from "@/../public/icons/skills/frontend/frontend10.svg"
import reduxImg from "@/../public/icons/skills/frontend/frontend9.svg"
import sassImg from "@/../public/icons/skills/frontend/frontend7.svg"
import javascriptImg from "@/../public/icons/skills/frontend/frontend3.svg"
import angularImg from "@/../public/icons/skills/frontend/frontend12.svg"
import typescriptImg from "@/../public/icons/skills/frontend/frontend4.svg"
import cssImg from "@/../public/icons/skills/frontend/frontend2.svg"
import pugImg from "@/../public/icons/skills/frontend/frontend11.svg"
import htmlImg from "@/../public/icons/skills/frontend/frontend1.svg"
import bootstrapImg from "@/../public/icons/skills/frontend/frontend6.svg"
import githubImg from "@/../public/icons/skills/tools/tools2.svg"
import liveImg from "@/../public/icons/livelinks/live.svg"
import codeImg from "@/../public/icons/livelinks/code.svg"

type props = {
    nEl: ToolItem
}
type ToolImages = {
  [key: string]: any;
}

function ToolItem({nEl} :props) {
  const toolImages: ToolImages = {
    reactImg,
    nextImg,
    reduxImg,
    sassImg,
    javascriptImg,
    angularImg,
    typescriptImg,
    cssImg,
    pugImg,
    htmlImg,
    bootstrapImg,
    githubImg,
    liveImg,
    codeImg
  }
  return (
    <div className="tool-work-item" title={nEl.name}>
        <Image src={toolImages[nEl.imageName]} alt="" width={50} height={50} />
    </div>
  );
}

export default ToolItem;
