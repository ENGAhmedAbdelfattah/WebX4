import { connect } from "react-redux";

import ItemContact from "./units/item-contact";

function ContactItems({ contactUsImgs, t }) {
  return (
    <section className="contact-items">
      <div className="container">
        {t.map((el, inx) => (
          <ItemContact
            key={inx + el.id}
            image={contactUsImgs[`contactImg${inx + 1}`]}
            header={el.itemHeader}
            address={el.contactAddress}
            className={`item-contact${inx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
const mapStateToProps = (state) => {
  return {
    contactUsImgs: state.allImages.pagesImgs.contactUsImgs,
  };
};

export default connect(mapStateToProps)(ContactItems);
