import PricingItem from "./units/pricing-item";

function PricingLists({ t }) {
  return (
    <div className="pricing-block-box">
      <div className="pricing-block-bottom">
        {t.items.map((el, inx) => (
          <PricingItem
            key={inx + el.id}
            className={el.id}
            header={el.header}
            advantage={el.advantage}
            isActive={el.isActive}
            priceDefault={el.priceDefault}
            time={t.time}
            btnChoose={t.btnChoose}
            btnContact={t.btnContact}
            priceAfterDiscount={el.priceAfterDiscount}
            coins={t.coins}
          />
        ))}
      </div>
    </div>
  );
}


export default PricingLists;
