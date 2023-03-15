import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "../features/characters/characterSlice"
import routeReducer from "../features/routeSlice"
import {hpApi,jsonApi} from "../features/apiSlice"

const store = configureStore({
  reducer: {
    characters: characterReducer,
    routePathName:routeReducer,
    [hpApi.reducerPath]: hpApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hpApi.middleware),
});

export default store


