"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { GiConsoleController } from "react-icons/gi";
import product from "@/app/admin/products/modals/product";

const Invoice = ({ shippingValue, products }) => {
  const subtotal = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <div className="w-full bg-baseBackground p-4 mt-3 flex flex-col gap-3">
      <div className="border-b border-colorBorder pb-3">
        <h5>Invoice</h5>
        <p className="text-[10px]">Provided By Dream Blue Fashion</p>
      </div>

      <div className="border-b border-black pb-2.5">
        {products?.map((product, idx) => {
          return (
            <div
              key={idx}
              className="relative flex items-center justify-between"
            >
              <div className="relative h-full w-[70px]   border bg-white border-colorBorder rounded-md  mr-5 my-2">
                <div className="w-full overflow-hidden rounded-md ">
                  <Image
                    src={product?.mainImage}
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
              <p className="text-sm flex-1">{product?.name}</p>
              <p className="text-sm">{product?.price}Tk</p>
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
    </div>
  );
};

export default Invoice;
