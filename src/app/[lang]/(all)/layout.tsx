export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}

import React from "react";
type props = {
  children: React.ReactNode;
};

function layout({ children }: props) {
  return <>{children}</>;
}

export default layout;
