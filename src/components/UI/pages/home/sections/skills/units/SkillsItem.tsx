import Image from "next/image";

type props = {
  image: any;
  paragraph: string;
};

function SkillsItems({ image, paragraph }: props) {
  return (
    <div className="skill-item">
      <div className="image-hand">
        <Image src={image} width={80} alt="" className="skills-img" />
      </div>
      <p className="image-paragraph">{paragraph}</p>
    </div>
  );
}

export default SkillsItems;
