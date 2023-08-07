import Image from "next/image";

function Step({ className, imageInside, imgAfter, header, paragraph }) {
  return (
    <div className={`Step-item ${className}`}>
      <div className="hand-img">
        <div className="image-in">
          <Image src={imageInside} alt="" />
        </div>
      </div>
      <div className="text-box">
        <h4>{header}</h4>
        <p>{paragraph}</p>
        <div className="img-after-hand">
          <Image src={imgAfter} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Step;
