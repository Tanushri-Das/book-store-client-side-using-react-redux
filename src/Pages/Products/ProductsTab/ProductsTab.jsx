import React from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const ProductsTab = ({ books }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {books.map((book) => (
        <ProductCard book={book} />
      ))}
    </div>
  );
};

export default ProductsTab;
