import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

function Card({ className, image, header, paragraph }) {
  const { locale } = useRouter();
  const defaultSectionTopOffset = 920;
  // const defaultSectionTopOffset =
  //   locale === "en" ? 920 : locale === "ar" ? 920 : 1020;
  const [sectionTopOffset, setSectionTopOffset] = useState(
    defaultSectionTopOffset
  );
  const [offset, setOffset] = useState(0);
  const [widthPage, setWidthPage] = useState(0);

  const SectionTop = useRef();
  useEffect(() => {
    const onScroll = () => {
      setOffset(window.pageYOffset);
      setWidthPage(window.innerWidth);
      setTimeout(() => {}, 0);
      setTimeout(() => {
        if (locale === "en") {
          if (offset > sectionTopOffset) {
            SectionTop.current?.classList.add("show-cards");
          }
        } else if (locale === "ar") {
          if (offset > sectionTopOffset) {
            SectionTop.current?.classList.add("show-cards-ar");
          }
        }
      }, 1);
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset, sectionTopOffset, locale]);

  useEffect(() => {
    if (widthPage < 768) {
      setSectionTopOffset(defaultSectionTopOffset + 310);
    }
    if (widthPage > 768 && widthPage < 992) {
      setSectionTopOffset(defaultSectionTopOffset - 40);
    }
    if (widthPage > 992) {
      setSectionTopOffset(defaultSectionTopOffset - 100);
    }
  }, [widthPage]);

  return (
    <div ref={SectionTop} className={`card ${className}`}>
      <div className="hand-img">
        <div className="image-in">
          <Image src={image} alt="" />
        </div>
      </div>
      <h4>{header}</h4>
      {locale === "en" && paragraph.includes("CDNs") ? (
        <p>
          {paragraph.split("CDNs")[0]}
          <a href="https://en.wikipedia.org/wiki/Content_delivery_network">
            CDNs
          </a>
          {paragraph.split("CDNs")[1]}
        </p>
      ) : locale === "ar" && paragraph.includes("CDNs") ? (
        <p>
          {paragraph.split("CDNs")[0]}
          <a href="https://en.wikipedia.org/wiki/Content_delivery_network">
            CDNs
          </a>
          {paragraph.split("CDNs")[1]}
        </p>
      ) : (
        <p>{paragraph}</p>
      )}
    </div>
  );
}

export default Card;
