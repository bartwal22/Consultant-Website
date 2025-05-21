import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import api from "../../../package.json";

export const ContactApi = createApi({
  reducerPath: "contact",
  baseQuery: fetchBaseQuery({
    baseUrl: api.baseUrl,
  }),

  endpoints: (builder) => ({
    contact: builder.mutation({
      query: (formData) => ({
        url: "/comment/addComment",
        method: "POST",
        body: formData
      }),
    }),
  }),
});

export const { useContactMutation } = ContactApi;
