"use client";
import React from "react";
import Box from "@mui/material/Box";
import {
  isOpen,
  setIsOpen,
  totalCartItemPriceSelector,
  totalCartItemSelector,
} from "@/store/slice/CheckoutSlice";
import Drawer from "@mui/material/Drawer";

import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/navigation";
import { Typography } from "@mui/material";
import { useState } from "react";
import CartDataTable from "./cartDataTablr";

export default function CardDrawer({ type }) {
  const cartTotal = useSelector(totalCartItemSelector);
  const cartItems = useSelector((state) => state.checkouts.items);
  const totalCartPrice = useSelector(totalCartItemPriceSelector);
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();

  const router = useRouter();

  const open = useSelector(isOpen);

  const openLoginModel = () => {
    const modal = document.getElementById("my_modal_2");
    if (modal) {
      modal.showModal();
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    dispatch(setIsOpen(open));
  };

  const handleRedirectPage = async (name) => {
    router.push("/checkout");
    dispatch(setIsOpen(false));
  };

  const cartHeader = () => {
    return (
      <div className="py-5 w-full">
        <p className="font-semibold !text-black pb-5">Shopping Cart</p>
        <div
          className="absolute right-10 top-10 font-semibold text-xl cursor-pointer"
          onClick={() => dispatch(setIsOpen(false))}
        >
          <div style={{ width: "20px", height: "20px", position: "relative" }}>
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                width: "100%",
                height: "2px",
                backgroundColor: "#FC4100",
                transform: "rotate(45deg)",
              }}
            ></span>
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                width: "100%",
                height: "2px",
                backgroundColor: "#FC4100",
                transform: "rotate(-45deg)",
              }}
            ></span>
          </div>
        </div>
        <hr className="border-colorBorder" />
      </div>
    );
  };

  const cartEmptyBody = () => {
    return (
      <Box className="w-full h-full flex flex-col items-center justify-center gap-4">
        <Typography component="h5" variant="h5">
          Your cart is empty
        </Typography>
        <button className="!w-fit rounded-md text-sm">Return To Shop</button>
      </Box>
    );
  };

  const cartHaveItem = () => {
    return (
      <Box className="relative w-full flex flex-col pt-4 gap-4 h-full sm:h-3/4 sm:pb-[145px]">
        <div className="overflow-y-auto">
          <CartDataTable cartItems={cartItems} />
        </div>
        <div className="absolute bottom-0   pt-8 pb-4 w-full bg-white">
          <div className="flex justify-between text-xl ">
            <p>Subtotal: </p>
            <p>{totalCartPrice} Taka</p>
          </div>
          <p className="text-sm">Shipping calculated at checkout</p>
          <div className="flex pt-3 gap-4">
            <button
              onClick={() => handleRedirectPage("cart")}
              className="w-full py-2 rounded-full bg-black text-white text-sm font-medium transition-transform active:scale-95 hover:opacity-75"
            >
              View Cart
            </button>

            <button
              onClick={() => handleRedirectPage("checkout")}
              className="w-full py-2 rounded-full border border-black text-sm font-medium transition-transform active:scale-95 hover:opacity-75 "
            >
              Checkout
              {/* <IoMdHeartEmpty size={20} /> */}
            </button>
          </div>
        </div>
      </Box>
    );
  };

  return (
    <div>
      <React.Fragment>
        <button onClick={toggleDrawer(true)}>
          <div className="relative text-black flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="29"
              viewBox="0 0 26 29"
              fill="currentColor"
              className="w-[20px] h-[21px] sm:w-auto sm:h-auto"
            >
              <path d="M24.5556 29H1.44444C1.06135 29 0.693954 28.8472 0.423068 28.5753C0.152182 28.3034 0 27.9346 0 27.55V1.45C0 1.06544 0.152182 0.696623 0.423068 0.424695C0.693954 0.152767 1.06135 0 1.44444 0H24.5556C24.9386 0 25.306 0.152767 25.5769 0.424695C25.8478 0.696623 26 1.06544 26 1.45V27.55C26 27.9346 25.8478 28.3034 25.5769 28.5753C25.306 28.8472 24.9386 29 24.5556 29ZM23.1111 26.1V2.9H2.88889V26.1H23.1111ZM8.66667 5.8V8.7C8.66667 9.85369 9.12321 10.9601 9.93587 11.7759C10.7485 12.5917 11.8507 13.05 13 13.05C14.1493 13.05 15.2515 12.5917 16.0641 11.7759C16.8768 10.9601 17.3333 9.85369 17.3333 8.7V5.8H20.2222V8.7C20.2222 10.6228 19.4613 12.4669 18.1069 13.8265C16.7525 15.1862 14.9155 15.95 13 15.95C11.0845 15.95 9.24755 15.1862 7.89312 13.8265C6.53869 12.4669 5.77778 10.6228 5.77778 8.7V5.8H8.66667Z"></path>
            </svg>
            {type === "menu" ? <p className="text-black">Cart</p> : null}
            <div className="absolute -top-3 -end-2 w-5 h-5 rounded-full grid place-items-center text-white text-xs bg-customTheme bg-primary">
              <span>{cartTotal}</span>
            </div>
          </div>
        </button>
        <Drawer
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
          className="!h-[100vh] "
        >
          <Box className="relative leading-5 px-6 py-5 w-[75vw] sm:w-[40vw] h-full  bg-white flex flex-col overflow-hidden cursor-auto">
            {cartHeader()}

            {cartItems?.length < 1 ? cartEmptyBody() : cartHaveItem()}
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
