// "use client"
import Image from "next/image";
import logo from "@/../public/images/logo.png";

function TmPreload() {
  // document.body.style.overflow = "hidden";
  type styles = React.CSSProperties;
  const styles: styles = { overflow: "hidden" };
  return (
    <div className="tm-preload" style={styles}>
      <Image src={logo} alt="logo" loading="eager" />
    </div>
  );
}

export default TmPreload;

// /* Hide scrollbar for Chrome, Safari and Opera */
// .example::-webkit-scrollbar {
//   display: none;
// }

// /* Hide scrollbar for IE, Edge and Firefox */
// .example {
//   -ms-overflow-style: none;  /* IE and Edge */
//   scrollbar-width: none;  /* Firefox */
// }