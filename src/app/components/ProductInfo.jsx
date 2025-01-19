"use state";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import Box from "@mui/material/Box";
import Counter from "./Counter";
import { useProductContext } from "@/context/ProductContext";
import { useRouter } from "next/navigation";
import { MdOutlinePhoneForwarded } from "react-icons/md";

const ProductInfo = ({
  product,
  category,
  currentImageIndex,
  onCountChange,
  setCurrentImageIndex,
  itemCount,
  sizeSelect,
  setSizeSelect,
  handleBuyNow,
  handleAddToCartItems,
}) => {
  return (
    <>
      <div className="text-[34px] font-semibold mb-2 leading-tight capitalize">
        <p>{product.name}</p>
      </div>

      <div className="flex items-center">
        <p className="mr-2 text-xl text-red-500 font-semibold">
          MRP : {product.price} TK
        </p>
      </div>

      <div className="text-sm mb-5">
        <p>{product.description}</p>
        <p className="text-teal-600">
          Inside dhaka delivery charge 60Tk, outside dhaka 100Tk
        </p>
      </div>
      <div className="text-xl mb-5 flex items-center gap-1.5">
        <span className=" font-semibold ">Contact :</span>
        <span>
          <MdOutlinePhoneForwarded />
        </span>
        <span className="text-primary">01608157519</span>(WhatsApp)
      </div>
      <div className="mb-10">
        <div className="flex mb-2">
          <div className="text-md font-semibold">Select Size</div>
        </div>
        <div className="flex gap-2 items-center">
          {product.sizes.length > 1 ? (
            product.sizes.map((size, idx) => (
              <button
                key={idx}
                onClick={() => setSizeSelect(size)}
                className={`flex items-center w-[80px] justify-around mt-3 py-2 rounded-full transition-all ${
                  sizeSelect === size
                    ? "bg-primary text-white"
                    : "bg-black/10 text-black"
                }`}
              >
                <p>{size}</p>
              </button>
            ))
          ) : (
            <button
              onClick={() => setSizeSelect(product.sizes[0])}
              className={`flex items-center w-fit px-3 justify-around mt-3 py-2  transition-all  text-black`}
            >
              <p>{product.sizes[0]}</p>
            </button>
          )}
        </div>
        <div className="mt-4">
          <ul className="list-disc ml-4">
            {product.sizeDetails
              ? product?.sizeDetails.map((detail, idx) => {
                  return (
                    <li
                      key={idx}
                      className={` py-2 rounded-full transition-all  capitalize
               `}
                    >
                      {detail}
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </div>
      {product.colors ? (
        <div className="mb-10">
          <div className="flex mb-2">
            <div className="text-md font-semibold">Select Color</div>
          </div>
          <div className="flex gap-5">
            {product.colors.map((color, idx) => {
              const isSelected = idx === currentImageIndex; // Check if this color is selected

              return (
                <div
                  key={idx}
                  className={`h-8 w-8 rounded-full overflow-hidden cursor-pointer transition-all ${
                    isSelected
                      ? "border-[2px] border-green-600 shadow-lg"
                      : "border border-transparent"
                  }`}
                  onClick={() => setCurrentImageIndex(idx)} // Update carousel and highlight
                >
                  <img
                    src={color}
                    alt={`Color ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      <div className="mb-10">
        <div className="flex mb-2">
          <div className="text-md font-semibold">Product Details</div>
        </div>
        <div className="flex gap-2  flex-col">
          <Box className="flex gap-2 items-center">
            <p className="text-sm font-semibold text-gray-600">Fabric:</p>
            <p className="text-sm text-gray-700">{product.details[0]}</p>
            <p className="text-sm">({product?.details[1]})</p>
          </Box>

          {/* Shipping */}
          <Box className="flex gap-2 items-center">
            <p className="text-sm text-yellow font-semibold">
              Delivery within 2 days.
            </p>
          </Box>
        </div>
      </div>
      <div className="mb-10">
        <div className="flex mb-2">
          <div className="text-md font-semibold">Select Quantity</div>
        </div>

        <div className="flex items-center gap-5">
          <Counter onCountChange={onCountChange} />
          <div className="flex-1 flex gap-4">
            <button
              onClick={handleAddToCartItems}
              className="flex-1 py-4 rounded-full bg-yellow text-white text-lg font-medium transition-transform active:scale-95  hover:opacity-75"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleBuyNow}
          className="flex-1 py-4 rounded-full bg-primary text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
        >
          Buy Now
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
