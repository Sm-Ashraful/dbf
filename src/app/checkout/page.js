"use client";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import CheckoutHeader from "./partials/CheckoutHeader";
import CheckoutPageLeftTop from "./partials/CheckoutPageTop";
import Invoice from "./partials/Invoice";
import { useDispatch, useSelector } from "react-redux";
import { orderSubmit } from "../admin/orders/action";
import product from "../admin/products/modals/product";
import toast from "react-hot-toast";
import { clearProducts } from "@/store/slice/productSlice";
import {
  clearCart,
  totalCartItemPriceSelector,
  totalCartItemSelector,
} from "@/store/slice/CheckoutSlice";

export default function Checkout() {
  const [shippingAddress, setShippingAddress] = useState({
    customer: "",
    address: "",
    city: "",
    policeStation: "",
    email: "",
    phone: "",
  });
  const [shippingValue, setShippingValue] = useState(0);
  const totalQuatity = useSelector(totalCartItemSelector);
  const subtotal = useSelector(totalCartItemPriceSelector);
  const products = useSelector((state) => state.checkouts.items);
  const [location, setLocation] = useState("inside");
  const dispatch = useDispatch();
  const router = useRouter();

  console.log("Location: ", subtotal, totalQuatity);

  useEffect(() => {
    if (location === "inside") {
      setShippingValue(60);
    } else {
      setShippingValue(100);
    }
  }, [location]);

  const handleOrder = async (customerData) => {
    console.log("Order data click", customerData);

    let finalData = {
      ...customerData,
      orderAmount: subtotal,
      shippingAmount: shippingValue,
      quantity: totalQuatity,
      items: products,
    };

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      const data = await response.json();
      console.log("Order response", data);

      dispatch(clearProducts());
      toast.success(data.message);
      setShippingAddress({
        customer: "",
        address: "",
        city: "",
        policeStation: "",
        email: "",
        phone: "",
      });
      setShippingValue(0);
      dispatch(clearCart());
      router.push("/thanks");
    } catch (error) {
      console.error("Error submitting order:", error);
      toast.error("Something went wrong. Please try again!");
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
            <Invoice
              shippingValue={shippingValue}
              products={products}
              location={location}
              setLocation={setLocation}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
