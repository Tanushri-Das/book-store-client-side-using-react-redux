import { useGetProductsQuery } from "../features/api/apiSlice";

const useProducts = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  return { data, error, isLoading };
};

export default useProducts;
