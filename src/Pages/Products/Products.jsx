import React from 'react';
import { useGetProductsQuery } from '../../Hooks/useProducts'; // Import directly
import ProductCard from '../../Components/ProductCard/ProductCard';

const Products = () => {
  const { data: products, error, isLoading } = useGetProductsQuery(); // Use the hook directly
  console.log("products data",products)

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='m-20 '>
      <h2 className='text-2xl font-semibold mb-6 text-center'>Books</h2>
      <div className='grid grid-cols-3 gap-6'>
        {products.map((product) => (
          <ProductCard product={product}/>
        ))}
      </div>
    </div>
  );
};

export default Products;
