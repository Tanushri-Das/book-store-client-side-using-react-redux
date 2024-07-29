import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create an API slice with createApi
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    // Define an endpoint to get the list of products
    getProducts: builder.query({
      query: () => "products",
    }),
    // Define an endpoint to add a product to the cart
    addToCart: builder.mutation({
      query: (cartItem) => ({
        url: "carts",
        method: "POST",
        body: cartItem,
      }),
    }),
    // Define an endpoint to get the cart items
    getCart: builder.query({
      query: () => '/carts',
    }),
    // Define an endpoint to delete a cart item
    deleteFromCart: builder.mutation({
      query: (id) => ({
        url: `carts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export the hooks generated by RTK Query
export const { useGetProductsQuery, useAddToCartMutation, useGetCartQuery, useDeleteFromCartMutation } = productsApi;

// Create a custom hook that uses the generated hook
const useProducts = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  return { data, error, isLoading };
};

export default useProducts;
