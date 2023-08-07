import Row from "./units/row";

function Comparison({ t }) {
  // clean up code
  return (
    <section className="comparison">
      <div className="container">
        <div className={`comparison-top`}>
          <h2 className="comparison-header">
            <a href="#comparison-block">{t.header}</a>
          </h2>
          <p className="comparison-paragraph" id="comparison-block">
            {t.paragraph}
          </p>
        </div>
        <div className="comparison-bottom">
          <div className="table-headers">
            <div className="t-head first-header">
              {t.columns.firstHeader}
            </div>
            <div className="t-head sec-header">
              {t.columns.secHeader}
            </div>
          </div>
          <div className="table-rows">
            {t.rows.map((el, inx) => (
              <Row
                key={inx + el.id}
                className={`row${inx + 1}`}
                header={el.header}
                first={el.first}
                sec={el.sec}
                num={el.num}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        {t.notes.map((el, inx) => (
          <span className="note" key={inx}>
            {el}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Comparison;
