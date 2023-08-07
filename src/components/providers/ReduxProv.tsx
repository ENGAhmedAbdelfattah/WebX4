"use client";
import { Provider } from "react-redux"
import reduxStore from "@/redux/app/store";

type props = {
  children: React.ReactNode;
};

function ReduxProv({ children }: props) {
  return (
    <Provider store={reduxStore}>
      {children}
    </Provider>
  );
}

export default ReduxProv;
