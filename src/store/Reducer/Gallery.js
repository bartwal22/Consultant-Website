import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import api from "../../../package.json";

export const GalleryApi = createApi({
  reducerPath: "gallery",
  baseQuery: fetchBaseQuery({
    baseUrl: api.baseUrl,
  }),

  endpoints: (builder) => ({
    getGallery: builder.query({
      query: () => ({
        url: "/gallery/getGallery",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetGalleryQuery } = GalleryApi;
