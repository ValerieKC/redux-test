import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  house: "Gryffindor",
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setHouse: (state, action) => {
      state.house = action.payload;
    },
  },
});
export const { setHouse } = characterSlice.actions;

export default characterSlice.reducer;
