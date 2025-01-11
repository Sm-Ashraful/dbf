"use state";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import Counter from "./Counter";
import { useProductContext } from "@/context/ProductContext";
import { useRouter } from "next/navigation";

const ProductInfo = ({
  product,
  category,
  onCountChange,
  itemCount,
  sizeSelect,
  setSizeSelect,
  handleAddToCartItems,
}) => {
  return (
    <>
      <div className="text-[34px] font-semibold mb-2 leading-tight capitalize">
        <p>{product.name}</p>
      </div>

      <div className="flex items-center">
        <p className="mr-2 text-lg font-semibold">
          MRP : {product.price}&#2547;
        </p>
      </div>

      <div className="text-md font-medium text-black/[0.5]">incl. of taxes</div>
      <div className="text-md font-medium text-black/[0.5] mb-5">
        {`(Also includes all applicable duties)`}
      </div>
      <div className="text-sm mb-5">
        {product.description}
        ...
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

      <div className="mb-10">
        <div className="flex mb-2">
          <div className="text-md font-semibold">Select Quantity</div>
        </div>

        <Counter onCountChange={onCountChange} />
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleAddToCartItems}
          className="flex-1 py-4 rounded-full bg-primary text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
        >
          Buy Now
        </button>
      </div>
    </>
  );
};

export default ProductInfo;
