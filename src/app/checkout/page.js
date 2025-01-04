"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import CheckoutHeader from "./partials/CheckoutHeader";
import CheckoutPageLeftTop from "./partials/CheckoutPageTop";
import Invoice from "./partials/Invoice";
import { useSelector } from "react-redux";
import { orderSubmit } from "../admin/orders/action";

export default function Checkout() {
  const [shippingAddress, setShippingAddress] = useState({
    customer: "",
    address: "",
    city: "",
    policeStation: "",
    email: "",
    phone: "",
  });
  // const { products } = useSelector((state) => state.products);

  // console.log("Products : ", products);

  const handleOrder = async (customerData) => {
    console.log("Order data click", customerData);

    try {
      const response = await orderSubmit(customerData);

      console.log("Order response", response);
    } catch (error) {
      console.log("This error for submitting order: ", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 w-full relative">
      <CheckoutHeader />

      <div className="px-4 md:px-[7.5%] xl:px-[12.5%] w-full ">
        <div className="grid sm:grid-cols-4 gap-10">
          <div className="sm:col-span-2   order-2 sm:order-1">
            <CheckoutPageLeftTop
              handleOrder={handleOrder}
              shippingAddress={shippingAddress}
              setShippingAddress={setShippingAddress}
            />
          </div>
          <div className="sm:col-span-2 order-1 sm:order-2">
            <Invoice />
          </div>
        </div>
      </div>
    </div>
  );
}
