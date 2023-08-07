import Image from "next/image";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

function Landing({ t, landingImgs, locale }) {
  const [landingNewHeader, setLandingNewHeader] = useState("");
  useEffect(() => {
    let arrHeader = t.header.split("");
    let headerAsClone = [];
    let num = 0;
    const numSet = setInterval(() => {
      if (num < arrHeader.length) {
        headerAsClone.push(arrHeader[num]);
        setLandingNewHeader(headerAsClone.join(""));
        num++;
      }
    }, 63);
    return () => {
      clearInterval(numSet);
    };
  }, [t]);
  return (
    <section className="homeLanding">
      <div className="container-wrapped">
        <div className="container">
          <h1 className="landing-header">
            <span>{t.headerSpan + " "}</span>
            {landingNewHeader}
          </h1>
          <div className="landing-btns">
            <button type="button" className="btn-start">
              {t.btnStart}
            </button>
            <a className="btn-docs" href="https://docs.omegastream.net/">
              {t.btnDocs}
              {/* note */}
              {locale === "en" ? (
                <i className="fas fa-angle-left"></i>
              ) : locale === "ar" ? (
                <i className="fas fa-angle-right"></i>
              ) : (
                ""
              )}
            </a>
          </div>
        </div>
        <div className="hand-img one">
          <Image src={landingImgs.landingBgImg} alt="" />
        </div>
        <div className="hand-img two">
          <Image src={landingImgs.landingBgImg} alt="" />
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    landingImgs: state.allImages.pagesImgs.homeImgs.landingImgs,
  };
};

export default connect(mapStateToProps)(Landing);
