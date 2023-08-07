import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
  active: string;
};

const initialState = {
  active: "",
} as CounterState;

export const activeNav = createSlice({
  name: "activeNav",
  initialState,
  reducers: {
    toggleActive: (state) => {
      state.active = state.active === "active" ? "" : "active";
    },
  },
});

export const { toggleActive } = activeNav.actions;
export default activeNav.reducer;
