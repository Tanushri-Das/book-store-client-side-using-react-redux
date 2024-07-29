import React from "react";
import Swal from "sweetalert2";
import {
  useAddToCartMutation,
  useAddToWishlistMutation,
} from "../../features/api/apiSlice";

const BookCard = ({ book, onAddToCart, onAddToWishlist }) => {
  const [addToCart] = useAddToCartMutation();
  const [addToWishlist] = useAddToWishlistMutation();

  const handleAddToCart = async () => {
    try {
      await addToCart({
        bookId: book.id,
        bookImage: book.image,
        quantity: 1,
        bookName: book.book_name,
        price: book.price,
      }).unwrap();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Book added to your cart",
        showConfirmButton: false,
        timer: 1500,
      });
      onAddToCart(); // Call the callback to refetch cart
    } catch (error) {
      console.error("Failed to add product to cart: ", error);
      alert("Failed to add product to cart.");
    }
  };
  const handleAddToWishlist = async () => {
    try {
      await addToWishlist({
        bookId: book.id,
        bookImage: book.image,
        quantity: 1,
        bookName: book.book_name,
        price: book.price,
      }).unwrap();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Book added to your wishlist",
        showConfirmButton: false,
        timer: 1500,
      });
      onAddToWishlist(); // Call the callback to refetch Wishlist
    } catch (error) {
      console.error("Failed to add product to wishlist: ", error);
      alert("Failed to add product to wishlist.");
    }
  };

  return (
    <div
      key={book.id}
      className="bg-[#F3F3F3] w-full h-full flex flex-col justify-between"
    >
      <div className="relative w-full h-56">
        <img
          className="w-full h-full object-cover object-center"
          src={book.image}
          alt=""
        />
        <h4 className="absolute top-2 right-2 bg-black text-white text-[20px] font-medium mb-3 px-2 py-1">
          ${book.price}
        </h4>
      </div>
      <div className="p-4 flex flex-col justify-between items-center">
        <h2 className="text-[24px] font-semibold mb-2">{book.book_name}</h2>
        <h4 className="text-black text-lg font-medium mb-3">
          Writer Name : ${book.writer_name}
        </h4>
        <div className="mt-4 ">
          <button
            onClick={handleAddToCart}
            className="bg-[#E8E8E8] text-[#BB8506] border-b-2 border-[#BB8506] px-5 py-2 text-lg font-medium"
          >
            Add to Cart
          </button>
          <button
            onClick={handleAddToWishlist}
            className="bg-[#E8E8E8] ms-3 text-[#BB8506] border-b-2 border-[#BB8506] px-5 py-2 text-lg font-medium"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
