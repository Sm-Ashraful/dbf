"use client";
import Image from "next/image";
import React from "react";

import { useDispatch } from "react-redux";
import {
  cartItemDecrement,
  cartItemIncrement,
  removeFromCart,
} from "@/store/slice/CheckoutSlice";

export default function CartDataTable({ cartItems }) {
  const dispatch = useDispatch();

  console.log("Cart items form det: ", cartItems);
  return (
    <div className="w-full space-y-5">
      {cartItems.map((cartItem, idx) => {
        const subImageUrls = cartItem.product?.subImages?.map((image) => image);
        const allImageUrls = [cartItem.product.mainImage, ...subImageUrls];

        return (
          <div key={idx} className="flex gap-4">
            {cartItem.product.colors ? (
              <Image
                src={allImageUrls[cartItem.product.selectedColor]}
                alt={cartItem.product.name}
                width={80}
                height={80}
                className="rounded-md border"
              />
            ) : (
              <Image
                src={cartItem.product.mainImage}
                alt={cartItem.product.name}
                width={80}
                height={80}
                className="rounded-md border"
              />
            )}

            <div className="space-y-1">
              <p className="text-sm font-semibold">{cartItem.product.name}</p>
              <p className="text-sm font-semibold">
                {cartItem.product.price} Taka
              </p>
              {cartItem.product.colors ? (
                <p className="text-sm font-semibold flex items-center gap-1.5">
                  Color :{" "}
                  <img
                    src={
                      cartItem.product.colors[cartItem.product.selectedColor]
                    }
                    alt={"color"}
                    className="w-7 h-4 "
                  />
                </p>
              ) : null}
              {cartItem.product.sizes.length > 1 ? (
                <p className="text-sm font-semibold">
                  Size : {cartItem.product.selectedSize}
                </p>
              ) : null}

              <div className="flex">
                <div className="input-group flex py-2 w-[120px] rounded-full justify-around items-center bg-baseBackground">
                  <button
                    type="button"
                    className="text-semibold"
                    onClick={() =>
                      dispatch(cartItemDecrement(cartItem.product))
                    }
                  >
                    -
                  </button>
                  <div className="form-control text-center">
                    {cartItem.quantity}
                  </div>
                  <button
                    type="button"
                    className="text-semibold"
                    onClick={() =>
                      dispatch(cartItemIncrement(cartItem.product))
                    }
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(cartItem.product))}
                  type="button"
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
