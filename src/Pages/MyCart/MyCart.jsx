import React, { useEffect, useState } from "react";
import "./MyCart.css";
import { FaTrashAlt } from "react-icons/fa";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import Swal from "sweetalert2";
import {
  useDeleteFromCartMutation,
  useGetCartQuery,
} from "../../features/api/apiSlice";

const MyCart = () => {
  const { data: carts, refetch } = useGetCartQuery();
  const [quantities, setQuantities] = useState({});
  const [deleteFromCart] = useDeleteFromCartMutation();

  useEffect(() => {
    if (carts) {
      const initialQuantities = {};
      carts.forEach((item) => {
        initialQuantities[item._id] = 1; // Initial quantity set to 1
      });
      setQuantities(initialQuantities);
    }
  }, [carts]);

  if (!carts) {
    return <div>Loading...</div>; // Add a loading indicator or handle loading state
  }

  const handleIncrement = (id) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      newQuantities[id] += 1;
      return newQuantities;
    });
  };

  const handleDecrement = (id) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      newQuantities[id] = Math.max(newQuantities[id] - 1, 1); // Minimum quantity is 1
      return newQuantities;
    });
  };

  const totalPrice = carts.reduce(
    (acc, item) => acc + item.price * quantities[item._id],
    0
  );
  const handleDelete = async (id) => {
    await deleteFromCart(id);
    Swal.fire({
      title: "Deleted!",
      text: "Delete book from cart.",
      icon: "success",
      timer: 1500,
    });
    refetch(); // Refetch the cart data after deletion
  };
  return (
    <div className="m-20">
      <h2 className="text-2xl font-semibold text-center">My Cart</h2>
      <div className="flex justify-between items-center mt-5 mb-3">
        <h2 className="text-2xl font-semibold">
          Total Orders : {carts?.length || 0}
        </h2>
        <h2 className="text-2xl font-semibold">
          Total Price : ${totalPrice.toFixed(2)}
        </h2>
      </div>

      <div className="grid grid-cols-3 mb-6"></div>
      <div className="overflow-x-auto table-container">
        <div className="w-full mx-auto">
          <table className="table text-center">
            <thead>
              <tr>
                <th className="text-sm md:text-[16px]">No.</th>
                <th className="text-sm md:text-[16px]">Item Image</th>
                <th className="text-sm md:text-[16px]">Item Name</th>
                <th className="text-sm md:text-[16px]">Quantity</th>
                <th className="text-sm md:text-[16px]">Price</th>
                <th className="text-sm md:text-[16px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {carts?.map((item, index) => (
                <tr key={item._id}>
                  <td className="text-sm md:text-[16px]">{index + 1}</td>
                  <td className="flex justify-center">
                    <img className="cart-img" src={item.image} alt="" />
                  </td>
                  <td className="text-sm md:text-[16px]">{item.bookName}</td>
                  <td className="quantity text-sm md:text-[16px]">
                    <div className="flex justify-center">
                      <FaCircleMinus
                        onClick={() => handleDecrement(item._id)}
                        className="quantity-icon hover:cursor-pointer"
                      />
                      <span className="mx-5">{quantities[item._id]}</span>
                      <FaCirclePlus
                        onClick={() => handleIncrement(item._id)}
                        className="quantity-icon hover:cursor-pointer"
                      />
                    </div>
                  </td>
                  <td className="price text-sm md:text-[16px]">
                    ${(item.price * quantities[item._id]).toFixed(2)}
                  </td>
                  <td className="action text-sm md:text-[16px]">
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(item._id)}
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

export default MyCart;
