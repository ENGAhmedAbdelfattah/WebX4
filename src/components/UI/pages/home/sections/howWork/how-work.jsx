import Image from "next/image";
import { connect } from "react-redux";
import Step from "./units/step";

function HowWork({ t, howWorkImgs }) {
  return (
    <section className="how-work">
      <div className="container">
        <div className={`how-work-top`} id="how-work-block">
          <h2 className="how-work-header">
            <a href="#how-work-block">{t.header}</a>
          </h2>
          <p className="how-work-paragraph">{t.paragraph}</p>
        </div>
        <div className="steps-wrapped">
          <div className="steps-container">
            {t.steps.map((el, inx) => (
              <Step
                key={inx + el.id}
                className={`step${inx + 1}`}
                imageInside={howWorkImgs[`step${inx + 1}`]}
                imgAfter={howWorkImgs.imgAfters[`imgAfter${inx + 1}`]}
                header={el.header}
                paragraph={el.paragraph}
              />
            ))}
          </div>
          <div className="hand-img-line">
            <Image src={howWorkImgs.stepBg} alt="" />
          </div>
        </div>
        <span className="note">{t.note}</span>
      </div>
      <div className="circleBg"></div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    howWorkImgs: state.allImages.pagesImgs.homeImgs.howWorkImgs,
  };
};

export default connect(mapStateToProps)(HowWork);
