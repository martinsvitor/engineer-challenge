import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder: any) => ({
    getPolicies: builder.query({
      query: (search: string) => `policies?search=${search}`,
    }),
    getDelayedPolicies: builder.mutation({
      query: (search: string) => ({
        url:`policies?search=${search}`,
        method: 'GET',
      })
    })
  }),
});

export const {
  useGetPoliciesQuery,
  useGetDelayedPoliciesMutation
} = searchApi;
