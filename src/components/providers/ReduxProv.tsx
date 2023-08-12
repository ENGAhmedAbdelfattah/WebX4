"use client";
import { Provider } from "react-redux"
import store from "@/redux/app/store";

type props = {
  children: React.ReactNode;
};

function ReduxProv({ children }: props) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default ReduxProv;
