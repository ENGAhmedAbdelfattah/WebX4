import PriceUnit from "./units/price-unit";

// <PriceUnit/>
function PricingAsks({ t }) {
  return (
    <section className="pricing-asks">
      <div className="container">
        <div className={`pricing-asks-top`}>
          <h2>
            <a href="#pricing-asks-block">{t.header}</a>
          </h2>
          <p id="pricing-asks-block">{t.paragraph}</p>
        </div>
        <div className="pricing-asks-bottom">
          {t.items.map((el, inx) => (
            <PriceUnit
              key={inx + el.id}
              className={`${"unit" + (inx + 1)}`}
              ask={el.ask}
              answer={el.answer}
              index={inx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingAsks;
