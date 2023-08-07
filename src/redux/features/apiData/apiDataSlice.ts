// Data don't need authentication or authorization

import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  loading: boolean;
  apiData: any[];
  error: string | undefined;
};

const initialState = {
  loading: false,
  apiData: [],
  error: "",
} as initialState;

// Generates pending, fulfilled and rejected action types
export const fetchApiData = createAsyncThunk("apiData/fetchApiData", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
});

const apiDataSlice = createSlice({
  name: "apiData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApiData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchApiData.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.apiData = action.payload;
      state.error = "";
    });
    builder.addCase(fetchApiData.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.apiData = [];
      state.error = action.payload.error.message;
    });
  },
});

export default apiDataSlice.reducer;
