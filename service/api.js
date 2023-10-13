import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1",
    credentials: "include",
  }),
  tagTypes: ["Auth"],
  // Adding 'Auth' for authentication tags
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
      // Invalidates authentication tags on success
    }),
    registerUser: builder.mutation({
      query: (credentials) => ({
        url: "/register",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"], // Invalidates authentication tags on success
    }),
    getUser: builder.query({
      query: () => "/user",
      providesTags: ["Auth"], // Provides authentication tags for caching
    }),
    logoutUser: builder.mutation({
      query: (credentials) => ({
        url: "/logout",
      }),
      invalidatesTags: ["Auth", "getUser"], // Invalidate both Auth and getUser queries
    }),
  }),
});

export const {
 
  useLoginUserMutation, // Add login mutation hook
  useRegisterUserMutation, // Add register mutation hook
  useGetUserQuery,
  useLogoutUserMutation// Add get user query hook
} = apiSlice;
