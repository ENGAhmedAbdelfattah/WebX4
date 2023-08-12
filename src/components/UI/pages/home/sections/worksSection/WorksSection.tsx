import HeaderSection from "@/components/UI/common/HeaderSection";
import { lang } from "@/types/lang";
import Device from "./units/Device";
import { WorksSection } from "@/types/translations";
import ToolItem from "./units/ToolItem";

type props = {
  lang: lang;
  t: WorksSection;
};

function WorksSection({ lang, t }: props) {
  return (
    <section className="works-section" id="works">
      <div className="container">
        <HeaderSection t={t} />
        <div className="works-items">
          {t.worksItems.map((el) => (
            <div className="works-item" key={el.worksItemTitle}>
              <div className="works-item-right">
                <div className="item-text">
                  <h3 className="works-item-title">{el.worksItemTitle}</h3>
                  <p className="works-item-paragraph">
                    {el.worksItemParagraph}
                  </p>
                  <p className="works-item-built">{t.worksItemBuilt}</p>
                </div>
                <div className="tools-box">
                  <div className="tools-left">
                    {el.toolsLeft.map((nEl) => (
                      <ToolItem key={nEl.id} nEl={nEl} />
                    ))}
                  </div>
                  <div className="tools-right">
                    {t.toolsRight.map((nEl) => (
                      <a
                      target="_black"
                        key={nEl.id}
                        href={
                          nEl.name === "GitHub" ? el.githubSrc : el.websiteSrc
                        }
                      >
                        <ToolItem nEl={nEl} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="works-item-left">
                <Device liveSrc={el.websiteSrc} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorksSection;
