import { useEffect } from "react";
import { useState } from "react";

function PriceUnit({ className, ask, answer, index }) {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    index === 0 ? setIsActive(true) : setIsActive(false);
  }, [index]);

  const handClick = (evt) => {
    // evt.currentTarget.classList.toggle("active");
    let isActiveClone = isActive;
    isActiveClone = isActiveClone === false ? true : false;
    setIsActive(isActiveClone);
  };
  return (
    <div className={`price-unit ${className}`}>
      <div className={`unit-top`} onClick={(e) => handClick(e)}>
        <div className="unit-top-left">
          <h4 className="ask">{ask}</h4>
        </div>
        <i className={`fas fa-angle-down ${isActive ? "active" : ""}`}></i>
      </div>
      <p className={`answer ${isActive ? "active" : ""}`}>{answer}</p>
    </div>
  );
}

export default PriceUnit;
