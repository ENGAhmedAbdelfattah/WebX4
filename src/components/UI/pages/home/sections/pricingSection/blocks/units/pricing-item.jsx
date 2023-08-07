
function PricingItem({
  className,
  header,
  advantage,
  isActive,
  time,
  btnChoose,
  btnContact,
  priceDefault,
  priceAfterDiscount,
  coins,
}) {
  // const calcDiscount = parseInt(
  //   ((priceDefault - priceAfterDiscount) / priceDefault) * 100
  // );
  return (
    <div className={`box`}>
      <div
        className={`pricing-item ${className} ${
          isActive === "true" && "active"
        }`}
      >
        <div className="body-box">
          <div className="pricing-item-top">
            <h4 className="pricing-item-header">{header}</h4>
          </div>
          <div className="pricing-item-advantage">
            {advantage.map((el, inx) => (
              <div key={inx + el.id}>
                {el.statues === "true" ? (
                  <i className="fa-solid fa-check"></i>
                ) : el.statues === "truePro" ? (
                  <i className="fa-solid fa-circle-check"></i>
                ) : el.statues === "false" ? (
                  <i className="fa-solid fa-xmark"></i>
                ) : (
                  ""
                )}
                <div className="text-advantage">
                  <h5
                    className={`advantage-header advantage-header-${inx + 1}`}
                  >
                    {el.header}
                  </h5>
                  <span className="advantage-span">{el.text}</span>
                </div>
              </div>
            ))}
          </div>
          {priceDefault && (
            <div className="pricing-item-price">
              <span className="dolar">{coins}</span>
              <span className="price-span">
                {<del>{priceDefault}</del>}
                {<ins>{priceAfterDiscount}</ins>}
              </span>
              <span className="time">{time}</span>
            </div>
          )}
        </div>
        <button className="pricing-item-btn">
          {header === "Enterprise" ? btnContact : btnChoose}
        </button>
      </div>
    </div>
  );
}

export default PricingItem;

// {
//   isActive === "true" && (
//     <span className="discount">
//       {calcDiscount && (
//         <span data-content={discount + " "}>
//           {discount}
//           {calcDiscount}
//         </span>
//       )}
//     </span>
//   );
// }
