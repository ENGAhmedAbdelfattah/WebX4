import { configureStore } from "@reduxjs/toolkit";
import activeNavReducer from "../features/activeNav/activeNavSlice";
import activeSkillsReducer from "../features/activeSkills/activeSkillsSlice";
import apiDataReducer from "../features/apiData/apiDataSlice";
import dataAuthReducer from "../features/dataAuth/dataAuthSlice";

const store = configureStore({
  reducer: {
    activeNav: activeNavReducer,
    activeSkills: activeSkillsReducer,
    apiData: apiDataReducer,
    dataAuth: dataAuthReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
