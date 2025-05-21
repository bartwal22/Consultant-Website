import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import api from "../../../package.json";

export const ServiceApi = createApi({
  reducerPath: "service",
  baseQuery: fetchBaseQuery({
    baseUrl: api.baseUrl,
  }),
  endpoints: (builder) => ({
    getService: builder.query({
      query: () => ({
        url: "/services/getService",
        method: "GET",
      }),
    }),

    subscription: builder.mutation({
      query: (email) => ({
        url: "/subscription/addSubscription",
        method: "POST",
        body: {email:email},
      }),
    }),

    // dashboard api
    incrementViewers: builder.mutation({
      query: () => ({
        url: "/dashboard/incrementVisitorCount",
        method: "POST"
      })
    })
  }),
});

export const { useGetServiceQuery, useSubscriptionMutation, useIncrementViewersMutation } = ServiceApi;
