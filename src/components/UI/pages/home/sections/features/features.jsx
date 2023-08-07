import Card from "./units/card";
import { connect } from "react-redux";
import Image from "next/image";

function Features({ t, featuresImgs }) {
  return (
    <section className="features">
      <div className="container">
        <div className={`features-top`}>
          <h2 className="features-header">
            <a href="#features-block">{t.header}</a>
          </h2>
          <p className="features-paragraph">{t.paragraph}</p>
        </div>
        <div className="features-block" id="features-block">
          <div className="features-block-top">
            <div className="features-left">
              <Card
                className={"card1"}
                image={featuresImgs.feature1}
                header={t.cards.left[0].header}
                paragraph={t.cards.left[0].paragraph}
              />
              <Card
                className={"card2"}
                image={featuresImgs.feature2}
                header={t.cards.left[1].header}
                paragraph={t.cards.left[1].paragraph}
              />
            </div>
            <div className="hand-center-img ">
              <Image
                src={featuresImgs.featuresCenterImg}
                alt="Women president our features"
              />
              <Image
                src={featuresImgs.featureAnim1}
                alt=""
                className="feature-anim feature-anim1"
              />
              <Image
                src={featuresImgs.featureAnim2}
                alt=""
                className="feature-anim feature-anim2"
              />
              <Image
                src={featuresImgs.featureAnim3}
                alt=""
                className="feature-anim feature-anim3"
              />
            </div>
            <div className="features-right">
              <Card
                className={"card3"}
                image={featuresImgs.feature3}
                header={t.cards.right[0].header}
                paragraph={t.cards.right[0].paragraph}
              />
              <Card
                className={"card4"}
                image={featuresImgs.feature4}
                header={t.cards.right[1].header}
                paragraph={t.cards.right[1].paragraph}
              />
            </div>
          </div>
          <div className="features-block-bottom">
            {t.cards.bottom.map((el, inx) => (
              <Card
                key={inx + el.id}
                className={`card card${5 + inx}`}
                image={featuresImgs[`feature${5 + inx}`]}
                header={el.header}
                paragraph={el.paragraph}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    featuresImgs: state.allImages.pagesImgs.homeImgs.featuresImgs,
  };
};

export default connect(mapStateToProps)(Features);
