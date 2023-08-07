import { lang } from "@/types/lang";
import { getTranslate } from "@/utils/getTranslate";
import Image from "next/image";
import logo2 from "@/../public/images/logo.png";

type props = {
  params: { lang: lang };
};

export default async function Home({ params: { lang } }: props) {
  // const dict = await getTranslate(lang);
  return (
    <main>
      home
      <Image src={logo2} alt="" width={100} height={100} />
    </main>
  );
}
