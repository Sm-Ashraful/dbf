"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";

const Invoice = () => {
  const [itemsData, setItemsData] = useState(null);
  const products = useSelector((state) => state);

  function sum(a, b) {
    return a + b;
  }

  console.log("Items dats: ", products);

  return (
    <div className="w-full bg-baseBackground p-4 mt-3 flex flex-col gap-3">
      <div className="border-b border-colorBorder pb-3">
        <h5>Invoice</h5>
        <p className="text-[10px]">Provided By Dream Blue Fashion</p>
      </div>
      <div className="border-b border-black pb-2.5"></div>

      <div className="border-b border-black pb-2.5 mt-10">
        <div className="flex justify-between items-center text-sm">
          <p>Subtotal </p>
          <p className="tracking-widest">300</p>
        </div>
        <div className="flex justify-between items-center text-sm ">
          <p>Shipping </p>
          <p className="tracking-widest">200</p>
        </div>
      </div>
      <div className="flex justify-between items-center font-bold">
        <p>Total </p>
        <p>300</p>
      </div>
    </div>
  );
};

export default Invoice;
