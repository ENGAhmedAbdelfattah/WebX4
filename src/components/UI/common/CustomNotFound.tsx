import getPath from "@/utils/getPath";
import Link from "next/link";

export default function CustomNotFound() {
  // const {pathname, lang, dir} = getPath();
  return (
    <div className="not-found" style={{ height: "calc(100dvh - 78px)" }}>
      {/* <h2> {lang === "en"? "Not Found" : "الصفحة غير موجوده"}</h2> */}
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
