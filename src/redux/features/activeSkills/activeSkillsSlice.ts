import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ActiveSkills = {
  active: string;
};

const initialState = {
  active: "frontend",
} as ActiveSkills;

export const activeSkills = createSlice({
  name: "activeSkills",
  initialState,
  reducers: {
    activeCategory: (state, action: PayloadAction<string>) => {
      state.active = action.payload;
    },
  },
});

export const { activeCategory } = activeSkills.actions;
export default activeSkills.reducer;
