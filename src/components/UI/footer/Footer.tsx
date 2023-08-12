import getPath from "@/utils/getPath";
import { getTranslate } from "@/utils/getTranslate";

async function Footer() {
  const { lang } = getPath();
  const direc: any = await getTranslate(lang, "footer");
  const t = direc.footer;
  return (
    <footer>
      <div className="footer-top">
        <div className="container"></div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="footer-create-by">{t.createdBy}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
