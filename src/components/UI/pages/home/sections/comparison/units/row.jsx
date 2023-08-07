
function Row({ className, header, first, sec, num }) {
  return (
    <div className={`row ${className}`}>
      <div className="row-header">{header}</div>
      <div className="row-cell row-first">
        <p className="cell-paragraph">{first}</p>
      </div>
      <div className="row-cell row-sec">
        <p className="cell-paragraph">
          {sec}
          {num && <span className="num-span">{num}</span>}
        </p>
      </div>
    </div>
  );
}

export default Row;
