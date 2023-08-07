import PricingLists from "./blocks/pricing-lists";

function PricingSection({ t }) {
  return (
    <section className="pricing">
      <div className="container">
        <div className={`pricing-top`}>
          <h2 className="pricing-header">
            <a href="#pricing-block">{t.header}</a>
          </h2>
          <p className="pricing-paragraph" id="pricing-block">
            {t.paragraph}
          </p>
        </div>
        <div className="pricing-block">
          <PricingLists t={t} />
        </div>
      </div>
    </section>
  );
}


export default PricingSection;
