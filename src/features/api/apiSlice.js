// src/features/api/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getCart: builder.query({
      query: () => '/carts',
    }),
    addToCart: builder.mutation({
      query: (cartItem) => ({
        url: '/carts',
        method: 'POST',
        body: cartItem,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetCartQuery, useAddToCartMutation } = apiSlice;
