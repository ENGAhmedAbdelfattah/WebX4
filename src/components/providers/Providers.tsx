"use client";
import ReduxProv from "./ReduxProv";
import ThemeProv from "./ThemeProv";

type props = {
  children: React.ReactNode;
};

function Providers({ children }: props) {
  return (
    <ReduxProv>
      <ThemeProv>{children}</ThemeProv>
    </ReduxProv>
  );
}

export default Providers;
