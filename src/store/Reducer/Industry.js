import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import api from "../../../package.json";

export const IndustryApi = createApi({
  reducerPath: "industry",
  baseQuery: fetchBaseQuery({
    baseUrl: api.baseUrl,
  }),

  endpoints: (builder) => ({
    getIndustry: builder.query({
      query: () => ({
        url: "/industry/getIndustry",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetIndustryQuery } = IndustryApi;
