"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { GiConsoleController } from "react-icons/gi";
import product from "@/app/admin/products/modals/product";
import { removeProduct } from "@/store/slice/productSlice";
import {
  removeFromCart,
  totalCartItemPriceSelector,
} from "@/store/slice/CheckoutSlice";

const Invoice = ({ shippingValue, products, location, setLocation }) => {
  const dispatch = useDispatch();

  const subtotal = useSelector(totalCartItemPriceSelector);

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  console.log("products: ", products);

  const handleRemoveProduct = (product) => {
    dispatch(removeProduct({ id: product._id }));
  };

  return (
    <div className="w-full bg-baseBackground p-4 mt-3 flex flex-col gap-3">
      <div className="border-b border-colorBorder pb-3">
        <h5>Invoice</h5>
        <p className="text-[10px]">Provided By Dream Blue Fashion</p>
      </div>

      <div className="border-b border-black pb-2.5">
        {products?.map((product, idx) => {
          console.log("Map product: ", product);
          return (
            <div
              key={idx}
              className="relative flex items-center justify-between"
            >
              <div className="relative h-full w-[70px]   border bg-white border-colorBorder rounded-md  mr-5 my-2">
                <div className="w-full overflow-hidden rounded-md ">
                  <Image
                    src={product?.product.mainImage}
                    alt={product?.name}
                    height={70}
                    width={70}
                    className="overflow-hidden"
                  />
                </div>
                <p className="absolute -top-3 -right-2 bg-primary text-white flex justify-center items-center w-6 rounded-full">
                  {product.quantity}
                </p>
              </div>
              <div className="flex-1 ">
                <div className="flex justify-between items-center">
                  <div className="text-sm flex-1 text-black">
                    <p>{product?.product.name}</p>
                  </div>
                  <p className="text-sm">{product?.product.price}Tk</p>
                </div>
                <div>
                  {product.product.colors ? (
                    <p className="text-sm font-semibold flex items-center gap-1.5">
                      Color :{" "}
                      <img
                        src={
                          product.product.colors[product.product.selectedColor]
                        }
                        alt={"color"}
                        className="w-7 h-4 "
                      />
                    </p>
                  ) : null}
                  {product.product.sizes.length > 1 ? (
                    <p className="text-sm font-semibold">
                      Size : {product.product.selectedSize}
                    </p>
                  ) : null}
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(product.product))}
                  type="button"
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-b border-black pb-2.5 mt-10">
        <div className="flex justify-between items-center text-sm">
          <p>Subtotal </p>
          <p className="tracking-widest">{subtotal}</p>
        </div>
        <div className="flex justify-between items-center text-sm ">
          {shippingValue === 0 ? (
            <p className="w-full text-red-500 text-end">
              Shipping will calculate after select City!
            </p>
          ) : (
            <>
              <p>Shipping </p>
              <p className="tracking-widest">{shippingValue}</p>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center font-bold">
        <p>Total </p>
        <p>{subtotal + shippingValue} TK</p>
      </div>

      <div>
        <p className="text-xl text-red-400">
          Please Select the location for shipping
        </p>
      </div>
      <div className="w-full  flex justify-between py-4">
        <div className="flex gap-5">
          <div className="flex flex-col items-center">
            <p>
              <input
                type="radio"
                value="inside"
                name="location"
                checked={location === "inside"}
                onChange={handleChange}
                className="mr-2 text-black"
              />
            </p>
            <label className="font-semibold">Inside Dhaka</label>
          </div>
          <div className="flex flex-col items-center">
            <p>
              <input
                type="radio"
                value="outside"
                name="location"
                checked={location === "outside"}
                onChange={handleChange}
                className="mr-2"
              />
            </p>
            <label className="font-semibold">Outside Dhaka</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
