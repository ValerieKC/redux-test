import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const hpApi = createApi({
  reducerPath: "hpApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://hp-api.onrender.com/api/characters`,
  }),
  endpoints: (builder) => ({
    getAllCharacters:builder.query({
      query:()=>""
    }),
    getHouseCharacters: builder.query({
      query: (houseName) => `/house/${houseName}`,
    }),
  }),
});



export const {useGetAllCharactersQuery,useGetHouseCharactersQuery}=hpApi
