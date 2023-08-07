import { configureStore } from "@reduxjs/toolkit";
import apiDataReducer from "../features/apiData/apiDataSlice";
import dataAuthReducer from "../features/dataAuth/dataAuthSlice";
import activeNavReducer from "../features/activeNav/activeNavSlice";

const store = configureStore({
  reducer: {
    activeNav: activeNavReducer,
    apiData: apiDataReducer,
    dataAuth: dataAuthReducer,
  },
  // devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

