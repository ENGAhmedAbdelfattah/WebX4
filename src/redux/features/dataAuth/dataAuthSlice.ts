import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

/*___________________________initialState________________________________*/
interface AuthData {
  loading: boolean;
  dataAuth: any[]; // You should replace 'any[]' with the actual type of dataAuth
  token: string | null;
  error: string | undefined;
}

const initialState = {
  loading: false,
  dataAuth: [],
  token: "",
  error: "",
} as AuthData;
/*________________________________________________________________________*/

/*_______________________________AsyncThunk_______________________________*/

// signUpUser
interface FormData {
  // Define the properties of your form data here
}

export const signUpUser = createAsyncThunk(
  "signUpUser",
  async (formData: FormData) => {
    try {
      const response = await axios.post(
        "https://reqres.in/api/login",
        formData
      );
      return response.data;
    } catch (err) {
      console.error(err);
      throw err; // Rethrow the error to be handled by the rejected action
    }
  }
);

// signInUser
export const signInUser = createAsyncThunk(
  "signInUser",
  async (formData: FormData) => {
    try {
      const response = await axios.post(
        "https://reqres.in/api/login",
        formData
      );
      return response.data;
    } catch (err) {
      console.error(err);
      throw err; // Rethrow the error to be handled by the rejected action
    }
  }
);
/*________________________________________________________________________*/

/*___________________________Slice________________________________________*/
const dataAuthSlice = createSlice({
  name: "dataAuth",
  initialState,
  reducers: {
    addToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logOut: (state) => {
      state.token = null;
      localStorage.clear();
      state.dataAuth = [];
    },
  },
  extraReducers: {
    /*=============================================
    =                 signInUser                 =
    =============================================*/
    [signInUser.pending.type]: (state) => {
      state.loading = true;
    },
    [signInUser.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.dataAuth = action.payload;
      state.token = action.payload.token;
      state.error = "";
      state.token ? localStorage.setItem("token", state.token) : "";
    },
    [signInUser.rejected.type]: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.dataAuth = [];
      state.error = action.payload.error.message;
    },
    /*===========  End of signInUser  =============*/

    /*=============================================
    =                signUpUser                  =
    =============================================*/
    // [signUpUser.pending as unknown as string]
    [signUpUser.pending.type]: (state) => {
      state.loading = true;
    },
    [signUpUser.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.dataAuth = action.payload;
      state.error = "";
    },
    [signUpUser.rejected.type]: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.dataAuth = [];
      state.error = action.payload.error.message;
    },
    /*=========  End of signUpUser  ===============*/
  },
});
/*_________________________________________________________________________*/

export const { addToken, logOut } = dataAuthSlice.actions;
export default dataAuthSlice.reducer;
