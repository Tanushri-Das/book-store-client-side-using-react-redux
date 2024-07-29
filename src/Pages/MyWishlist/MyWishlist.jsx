import React from "react";
import {
  useDeleteFromWishlistMutation,
  useGetWishlistQuery,
} from "../../Hooks/useProducts";
import "../MyCart/MyCart.css";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyWishlist = () => {
  const { data: wishlists, refetch } = useGetWishlistQuery();
  const [deleteFromCart] = useDeleteFromWishlistMutation();

  if (!wishlists) {
    return <div>Loading...</div>; // Add a loading indicator or handle loading state
  }

  const handleDelete = async (id) => {
    await deleteFromCart(id);
    Swal.fire({
      title: "Deleted!",
      text: "Delete product from wishlists",
      icon: "success",
      timer: 1500,
    });
    refetch(); // Refetch the cart data after deletion
  };
  return (
    <div className="m-20">
      <h2 className="text-2xl font-semibold text-center">My Wishlist</h2>
      <div className="grid grid-cols-3 mb-6"></div>
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
              {wishlists?.map((item, index) => (
                <tr key={item._id}>
                  <td className="text-sm md:text-[16px]">{index + 1}</td>
                  <td className="flex justify-center">
                    <img className="cart-img" src={item.image} alt="" />
                  </td>
                  <td className="text-sm md:text-[16px]">{item.bookName}</td>

                  <td className="price text-sm md:text-[16px]">
                    ${item.price}
                  </td>
                  <td className="action text-sm md:text-[16px]">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="delete-btn"
                    >
                      <FaTrashAlt />
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
