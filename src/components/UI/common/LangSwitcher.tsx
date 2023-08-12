import Link from "next/link";
import { headers } from "next/headers";

type props = {
  langText: string;
};

function LangSwitcher({ langText }: props) {
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || ""; //  /en/contactus
  const purePath = pathname.startsWith("/en")
    ? pathname.split("/en")[1]
    : pathname.startsWith("/ar")
    ? pathname.split("/ar")[1]
    : "/"; //  /contactus
  return (
    <>
      {purePath ? (
        <Link
          href={
            pathname.startsWith("/en")
              ? `/ar/${purePath}`
              : pathname.startsWith("/ar")
              ? `/en/${purePath}`
              : `${purePath}`
          }
        >
          {langText}
        </Link>
      ) : (
        <a
          href={
            pathname.startsWith("/en")
              ? `/ar/${purePath}`
              : pathname.startsWith("/ar")
              ? `/en/${purePath}`
              : `${purePath}`
          }
        >
          {langText}
        </a>
      )}
    </>
  );
}

export default LangSwitcher;

// const domain = headersList.get("x-forwarded-host") || "";
// const protocol = headersList.get("x-forwarded-proto") || "";
