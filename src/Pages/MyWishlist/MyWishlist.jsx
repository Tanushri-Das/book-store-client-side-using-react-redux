import React from "react";
import "../MyCart/MyCart.css";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useAddToCartMutation, useDeleteFromWishlistMutation, useGetCartQuery, useGetWishlistQuery } from "../../features/api/apiSlice";

const MyWishlist = () => {
  const { data: wishlists, refetch } = useGetWishlistQuery();
  const { data: cartItems, refetch: refetchCart } = useGetCartQuery();
  const [deleteFromWishlist] = useDeleteFromWishlistMutation();
  const [addToCart] = useAddToCartMutation();

  if (!wishlists || !cartItems) {
    return <div>Loading...</div>; // Add a loading indicator or handle loading state
  }

  const isInCart = (bookId) => {
    return cartItems.some(item => item.bookId === bookId);
  };

  const handleDelete = async (id) => {
    try {
      await deleteFromWishlist(id).unwrap();
      Swal.fire({
        title: "Deleted!",
        text: "Book removed from wishlist",
        icon: "success",
        timer: 1500,
      });
      refetch(); // Refetch the wishlist data after deletion
    } catch (error) {
      console.error("Failed to delete item from wishlist: ", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to delete item from wishlist",
        icon: "error",
      });
    }
  };

  const handleAddToCart = async (item) => {
    if (isInCart(item._id)) {
      Swal.fire({
        title: "Already in Cart!",
        text: "This item is already in your cart",
        icon: "info",
        timer: 1500,
      });
      return;
    }

    try {
      await addToCart({
        bookId: item._id,
        bookImage: item.image,
        quantity: 1,
        bookName: item.bookName,
        price: item.price,
      }).unwrap();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Book added to your cart",
        showConfirmButton: false,
        timer: 1500,
      });
      refetchCart(); // Refetch the cart data to update the cart count
    } catch (error) {
      console.error("Failed to add book to cart: ", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to add book to cart",
        icon: "error",
      });
    }
  };

  return (
    <div className="m-20">
      <h2 className="text-2xl font-semibold text-center mb-6">My Wishlist</h2>
      <div className="overflow-x-auto table-container">
        <div className="w-full mx-auto">
          <table className="table text-center">
            <thead>
              <tr>
                <th className="text-sm md:text-[16px]">No.</th>
                <th className="text-sm md:text-[16px]">Item Image</th>
                <th className="text-sm md:text-[16px]">Item Name</th>
                <th className="text-sm md:text-[16px]">Price</th>
                <th className="text-sm md:text-[16px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {wishlists.map((item, index) => (
                <tr key={item._id}>
                  <td className="text-sm md:text-[16px]">{index + 1}</td>
                  <td className="flex justify-center">
                    <img
                      className="cart-img"
                      src={item.image}
                      alt={item.bookName}
                    />
                  </td>
                  <td className="text-sm md:text-[16px]">{item.bookName}</td>
                  <td className="price text-sm md:text-[16px]">
                    ${item.price}
                  </td>
                  <td className="">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-600 px-4 py-3 text-white rounded-md text-sm md:text-lg"
                    >
                      <FaTrashAlt />
                    </button>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="bg-[#BB8506] px-4 py-3 text-white rounded-md text-sm md:text-[20px] ms-2"
                    >
                      <FaShoppingCart />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyWishlist;
