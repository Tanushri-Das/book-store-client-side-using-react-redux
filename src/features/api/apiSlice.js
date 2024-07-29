import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
    addToCart: builder.mutation({
      query: (cartItem) => ({
        url: "carts",
        method: "POST",
        body: cartItem,
      }),
    }),
    getCart: builder.query({
      query: () => "/carts",
    }),
    deleteFromCart: builder.mutation({
      query: (id) => ({
        url: `carts/${id}`,
        method: "DELETE",
      }),
    }),
    addToWishlist: builder.mutation({
      query: (wishlistItem) => ({
        url: "wishlists",
        method: "POST",
        body: wishlistItem,
      }),
    }),
    getWishlist: builder.query({
      query: () => "/wishlists",
    }),
    deleteFromWishlist: builder.mutation({
      query: (id) => ({
        url: `wishlists/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddToCartMutation,
  useGetCartQuery,
  useDeleteFromCartMutation,
  useAddToWishlistMutation,
  useGetWishlistQuery,
  useDeleteFromWishlistMutation,
} = productsApi;
