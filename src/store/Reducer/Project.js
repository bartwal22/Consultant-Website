import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import api from "../../../package.json";

export const ProjectApi = createApi({
  reducerPath: "project",
  baseQuery: fetchBaseQuery({
    baseUrl: api.baseUrl,
  }),

  endpoints: (builder) => ({
    getProject: builder.query({
      query: ({page, limit}) => ({
        url: `/projects/allProject?page=${page}&limit=${limit}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProjectQuery } = ProjectApi;
