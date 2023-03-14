import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const hpApi = createApi({
//   reducerPath: "hpApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: `https://hp-api.onrender.com/api/characters/`,
//   }),
//   endpoints: (builder) => ({
//     getAllCharacters: builder.query({
//       query: () => `house/Gryffindor`,
//     }),
//   }),
// });

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "posts", // https://jsonplaceholder.typicode.com/posts
    }),
  }),
});


export const {useGetAllPostsQuery}=postsApi
