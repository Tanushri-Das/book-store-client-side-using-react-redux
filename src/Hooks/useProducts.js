import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create an API slice with createApi
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    // Define an endpoint to get the list of products
    getProducts: builder.query({
      query: () => 'products',
    }),
  }),
});

// Export the hook generated by RTK Query
export const { useGetProductsQuery } = productsApi;

// Create a custom hook that uses the generated hook
const useProducts = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  return { data, error, isLoading };
};

export default useProducts;
