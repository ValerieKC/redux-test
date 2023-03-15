import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  routePath: "",
};

const routesSlice = createSlice({
  name: "routePathName",
  initialState,
  reducers: {
    setRoutesName: (state, action) => {
      state.routePath = action.payload;
    },
  },
});
export const { setRoutesName } = routesSlice.actions;

export default routesSlice.reducer;
