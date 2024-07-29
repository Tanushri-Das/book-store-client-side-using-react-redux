import React from "react";
import BookCard from "../../../Components/BookCard/BookCard";
import { useGetCartQuery, useGetWishlistQuery } from "../../../Hooks/useProducts";

const ProductsTab = ({ books }) => {
  const { refetch: refetchCart } = useGetCartQuery();
  const { refetch: refetchWishlist } = useGetWishlistQuery();
  
  return (
    <div className="grid grid-cols-3 gap-6">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onAddToCart={refetchCart} // Pass refetchCart as prop
          onAddToWishlist={refetchWishlist} // Pass refetchWishlist as prop
        />
      ))}
    </div>
  );
};

export default ProductsTab;
