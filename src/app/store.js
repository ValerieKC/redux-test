import { configureStore } from "@reduxjs/toolkit";

import routeReducer from "../features/routeSlice"
import {hpApi} from "../features/apiSlice"

const store = configureStore({
  reducer: {
    routePathName:routeReducer,
    [hpApi.reducerPath]: hpApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hpApi.middleware),
});

export default store


