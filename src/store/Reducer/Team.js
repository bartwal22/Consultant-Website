import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import api from "../../../package.json";

export const TeamApi = createApi({
  reducerPath: "team",
  baseQuery: fetchBaseQuery({
    baseUrl: api.baseUrl,
  }),
  endpoints: (builder) => ({
    getTeam: builder.query({
      query: ({ page, limit }) => ({
        url: `/team/getAllTeam?page=${page}&limit=${limit}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTeamQuery } = TeamApi;
