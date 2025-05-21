import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import api from "../../../package.json";

export const BlogApi = createApi({
  reducerPath: "contact",
  baseQuery: fetchBaseQuery({
    baseUrl: api.baseUrl,
  }),

  endpoints: (builder) => ({
    getBlog: builder.query({
      query: ({ page, limit }) => ({
        url: `/blog/getAllBlogs?page=${page}&limit=${limit}`,
        method: "GET",
      }),
    }),

    getSingleBlog: builder.query({
      query: (id) => ({
        url: `/blog/getSingleBlog/${id}`,
        method: "GET",
      }),
    }),

    getRandomBlog: builder.query({
      query: () => ({
        url: "/blog/getRandomBlogs",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetBlogQuery, useGetRandomBlogQuery , useGetSingleBlogQuery } = BlogApi;
