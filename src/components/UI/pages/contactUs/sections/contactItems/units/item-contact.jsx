import Image from "next/image";

function ItemContact({ image, header, address, className }) {
  return (
    <div className={`item-contact ${className}`}>
      <div className="item-image">
        <Image src={image} alt="" />
      </div>
      <div className="item-content">
        <h4 className="item-header">{header}</h4>
        <p className="item-contact-address" dir="ltr">
          {address}
        </p>
      </div>
    </div>
  );
}

export default ItemContact;
