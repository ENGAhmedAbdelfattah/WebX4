// import "@/styles/theme.scss";
import "@/styles/app.scss";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Tajawal } from "next/font/google";

import Providers from "@/components/providers/Providers";
import { getTranslate } from "@/utils/getTranslate";
import Image from "next/image";
import testPageImg from "@/../public/test-image/light/1-home-about-light.png";
import Footer from "@/components/UI/layout/footer/Footer";
import Header from './../components/UI/layout/header/Header';
import getPath from "@/utils/getPath";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const tajawal = Tajawal({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Ahmed Abdelfattah | Web Developer",
  description:
    "Experienced and Creative Web Developer | Front-end & Back-end Expertise | Passionate about Crafting Engaging User Experiences | Skilled in HTML, CSS, JavaScript, React, Node.js, and More.",
};



type props = {
  children: React.ReactNode;
};

export default async function RootLayout({
  children,
}: props) {
  const {pathname, lang, dir} = getPath();
  const fontClass = lang === "ar" ? tajawal.className : roboto.className;
  return (
    <html lang={lang} dir={dir}>
      <body className={fontClass}>
        <Image
          src={testPageImg}
          alt=""
          className="for-test-image"
          loading="eager"
        />
        <Providers>
          <Header />
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}

