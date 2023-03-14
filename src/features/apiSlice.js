import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const hpApi = createApi({
  reducerPath: "hpApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://hp-api.onrender.com/api/characters/`,
  }),
  endpoints: (builder) => ({
    getAllCharacters: builder.query({
      query: (name) => `house/${name}`,
    }),
  }),
});

export const jsonApi = createApi({
  reducerPath: "jsonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3500/`,
  }),
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => `posts`,
    }),
    addComments: builder.mutation({
      query: (comment) => ({
        url: `posts`,
        method: "POST",
        body: comment,
      }),
    }),
    updateComments: builder.mutation({
      query: (comment) => ({
        url: `posts/${comment.id}`,
        method: "PATCH",
        body: comment,
      }),
    }),
    deleteComments: builder.mutation({
      query: ({id}) => ({
        url: `posts/${id}`,
        method: "DELETE",
        body: id,
      }),
    }),
  }),
});

export const {useGetAllCharactersQuery}=hpApi
export const { useGetCommentsQuery, useAddCommentsMutation, useUpdateCommentsMutation, useDeleteCommentsMutation } = jsonApi;