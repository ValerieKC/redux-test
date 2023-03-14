import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "../features/characters/characterSlice"
import {hpApi,jsonApi} from "../features/apiSlice"

const store = configureStore({
  reducer: {
    characters:characterReducer,
    [hpApi.reducerPath]: hpApi.reducer,
    [jsonApi.reducerPath]: jsonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hpApi.middleware).concat(jsonApi.middleware),
  
});

export default store


