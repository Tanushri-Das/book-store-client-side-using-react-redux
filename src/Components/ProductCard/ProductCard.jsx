import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="bg-[#F3F3F3] w-full h-full flex flex-col justify-between"
    >
      <div className="relative w-full h-56">
        <img
          className="w-full h-full object-cover object-center"
          src={product.image}
          alt=""
        />
        <h4 className="absolute top-2 right-2 bg-black text-white text-[20px] font-medium mb-3 px-2 py-1">
          ${product.price}
        </h4>
      </div>
      <div className="p-4 flex flex-col justify-between items-center">
        <h2 className="text-[24px] font-semibold mb-2">{product.book_name}</h2>
        <h4 className="text-black text-lg font-medium mb-3">
          Writer Name : ${product.writer_name}
        </h4>
        <div className="mt-4">
          <button className="bg-[#E8E8E8] text-[#BB8506] uppercase border-b-2 border-[#BB8506] px-5 py-2 text-lg font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
