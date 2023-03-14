import { configureStore } from "@reduxjs/toolkit";
import characterReducer from "../features/characters/characterSlice"
import {postsApi,jsonApi} from "../features/apiSlice"

const store = configureStore({
  reducer: {
    characters: characterReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

export default store


