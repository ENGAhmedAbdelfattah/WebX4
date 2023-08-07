import logo2 from "@/../public/images/logo.png";
import Image from "next/image";

function Footer() {
  return (
    <footer>Footer
      <Image src={logo2} alt="" width={100} height={100} />
    </footer>
  )
}

export default Footer
