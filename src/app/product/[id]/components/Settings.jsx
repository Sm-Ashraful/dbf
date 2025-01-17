"use client";
import React, { useEffect, useState } from "react";
import ProductDetailsCarousel from "./Carousol";
import Image from "next/image";
import ProductInfo from "@/app/components/ProductInfo";
import ProductDetailsTab from "./Tabs";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addProduct, clearProducts } from "@/store/slice/productSlice";
import { addItemToCart, setIsOpen } from "@/store/slice/CheckoutSlice";

export default function ProductDetails({ product }) {
  const [itemCount, setItemCount] = useState(1);
  const [sizeSelect, setSizeSelect] = useState("M");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const dispatch = useDispatch();
  const router = useRouter();

  const subImageUrls = product?.subImages?.map((image) => image);
  const allImageUrls = [product.mainImage, ...subImageUrls];

  const handleBuyNow = () => {
    const cartProducts = {
      ...product,
      selectedColor: currentImageIndex,
      selectedSize: sizeSelect,
      quantity: itemCount,
    };
    dispatch(
      addItemToCart({
        product: cartProducts,
        quantity: itemCount,
        selectedColor: currentImageIndex,
        selectedSize: sizeSelect,
      })
    );
    router.push("/checkout");
  };
  const handleCountChange = (count) => {
    setItemCount(count);
  };

  const handleAddToCartItems = () => {
    const cartProducts = {
      ...product,
      selectedColor: currentImageIndex,
      selectedSize: sizeSelect,
      quantity: itemCount,
    };
    dispatch(
      addItemToCart({
        product: cartProducts,
        quantity: itemCount,
        selectedColor: currentImageIndex,
        selectedSize: sizeSelect,
      })
    );
    dispatch(setIsOpen(true));
  };

  return (
    <div className="relative overflow-x-hidden w-full">
      <div className="flex flex-col lg:flex-row  gap-[50px] lg:gap-[30px] pb-5">
        {/* left column start */}
        <div className="w-full md:w-auto flex-[1.2] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
          <ProductDetailsCarousel
            imageUrls={allImageUrls}
            setCurrentImageIndex={setCurrentImageIndex}
            currentImageIndex={currentImageIndex}
          />
        </div>
        {/* left column end */}

        {/* right column start */}
        <div className="flex-1 py-3">
          <ProductInfo
            product={product}
            category={product?.category}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
            itemCount={itemCount}
            onCountChange={handleCountChange}
            setSizeSelect={setSizeSelect}
            sizeSelect={sizeSelect}
            handleBuyNow={handleBuyNow}
            handleAddToCartItems={handleAddToCartItems}
          />

          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="flex flex-col justify-center items-center p-5 border border-colorBorder">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=""
                width="31"
                height="30"
                viewBox="0 0 31 30"
              >
                <path d="M30 27.6692C29.6992 27.3684 29.0977 27.3684 28.797 27.6692C28.0451 28.4211 26.6917 28.4211 25.9398 27.6692C25.6391 27.3684 25.3383 27.218 24.8872 26.9173L28.4962 17.2932C28.9474 16.2406 28.4962 15.0376 27.594 14.4361L22.6316 10.8271V5.56391C22.6316 4.96241 22.3308 4.3609 21.8797 3.90977C21.4286 3.45865 20.8271 3.15789 20.2256 3.15789H19.0226V2.40601C19.0226 1.05263 17.9699 0 16.6165 0H13.9098C12.5564 0 11.5038 1.05263 11.5038 2.40601V3.15789H10.3008C9.69925 3.15789 9.09774 3.45865 8.64662 3.90977C7.89474 4.3609 7.74436 4.96241 7.74436 5.56391V10.8271L2.4812 14.4361C1.57895 15.0376 1.2782 16.2406 1.57895 17.2932L5.18797 27.0677C4.88722 27.218 4.58647 27.5188 4.28571 27.6692C3.53383 28.4211 2.18045 28.4211 1.42857 27.6692C1.12782 27.3684 0.526316 27.3684 0.225564 27.6692C-0.075188 27.9699 -0.075188 28.5714 0.225564 28.8722C1.72932 30.3759 4.13534 30.3759 5.6391 28.8722C6.39098 28.1203 7.74436 28.1203 8.49624 28.8722C10 30.3759 12.406 30.3759 13.9098 28.8722C14.6617 28.1203 16.015 28.1203 16.7669 28.8722C18.2707 30.3759 20.6767 30.3759 22.1805 28.8722C22.9323 28.1203 24.2857 28.1203 25.0376 28.8722C25.7895 29.6241 26.6917 29.9248 27.7444 29.9248C28.797 29.9248 29.6992 29.4737 30.4511 28.8722C30.4511 28.5714 30.4511 28.1203 30 27.6692ZM13.1579 2.40601C13.1579 2.10526 13.4586 1.80451 13.7594 1.80451H16.4662C16.7669 1.80451 17.0677 2.10526 17.0677 2.40601V3.15789H13.0075V2.40601H13.1579ZM9.54887 5.56391C9.54887 5.41353 9.54887 5.26316 9.69925 5.11278C9.84962 4.96241 10 4.96241 10.1504 4.96241H20.2256C20.3759 4.96241 20.5263 4.96241 20.6767 5.11278C20.8271 5.26316 20.8271 5.41353 20.8271 5.56391V9.47368L15.7143 6.01504C15.4135 5.86466 14.9624 5.86466 14.6617 6.01504L9.54887 9.62406V5.56391ZM3.53383 15.9398L15.1128 7.96992L26.6917 16.0902C26.8421 16.2406 26.9925 16.5414 26.8421 16.8421L25.6391 20.1504L15.7143 13.2331C15.4135 13.0827 14.9624 13.0827 14.6617 13.2331L4.58647 20L3.38346 16.5414C3.23308 16.391 3.23308 16.0902 3.53383 15.9398ZM20.5263 27.6692C19.7744 28.4211 18.4211 28.4211 17.6692 27.6692C16.1654 26.1654 13.7594 26.1654 12.2556 27.6692C11.5038 28.4211 10.1504 28.4211 9.3985 27.6692C8.64662 26.9173 7.74436 26.6165 6.69173 26.6165L4.88722 21.8045L15.1128 15.0376L25.0376 21.9549L23.2331 26.7669C22.1804 26.6165 21.2782 26.9173 20.5263 27.6692Z"></path>
              </svg>
              <p className="text-center text-sm pt-2">
                Estimate delivery times: <strong>1-2 days</strong> (Inside
                Bangladesh).
              </p>
            </div>
            <div className="flex flex-col justify-center items-center p-5 border border-colorBorder">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="30"
                viewBox="0 0 31 30"
              >
                <path d="M15.5684 15.1812L9.56316 11.1777C9.41243 11.0772 9.23725 11.0195 9.0563 11.0107C8.87535 11.002 8.69542 11.0425 8.53569 11.128C8.37596 11.2134 8.24242 11.3407 8.14932 11.4961C8.05622 11.6515 8.00705 11.8293 8.00704 12.0104V18.0157C8.00703 18.1805 8.04769 18.3427 8.12543 18.488C8.20318 18.6332 8.31559 18.7571 8.45269 18.8484L14.4535 22.849L14.4827 22.8682C14.6863 22.9953 14.9287 23.045 15.1658 23.0083H15.1671C15.2117 23.0012 15.2559 22.9912 15.2992 22.9783H15.3C15.4027 22.9477 15.4999 22.9007 15.5877 22.8392L21.5737 18.8484C21.7108 18.7571 21.8232 18.6332 21.901 18.488C21.9787 18.3427 22.0194 18.1805 22.0194 18.0157V12.0104C22.0194 11.8457 21.9787 11.6834 21.901 11.5382C21.8232 11.3929 21.7108 11.2691 21.5737 11.1777L15.5684 7.17417C15.4041 7.06444 15.2109 7.00588 15.0132 7.00588C14.8156 7.00588 14.6224 7.06444 14.458 7.17417L11.4561 9.17593C11.319 9.26733 11.2066 9.39116 11.1289 9.53643C11.0511 9.68169 11.0105 9.8439 11.0105 10.0087C11.0105 10.1734 11.0511 10.3356 11.1289 10.4809C11.2066 10.6262 11.319 10.75 11.4561 10.8414L17.4614 14.8449C17.5707 14.9187 17.6935 14.9701 17.8228 14.9962C17.9521 15.0223 18.0852 15.0226 18.2146 14.9971C18.344 14.9716 18.4671 14.9208 18.5768 14.8475C18.6865 14.7743 18.7806 14.6801 18.8538 14.5704C18.927 14.4607 18.9777 14.3375 19.0031 14.2081C19.0286 14.0787 19.0282 13.9456 19.002 13.8163C18.9758 13.687 18.9243 13.5642 18.8505 13.4549C18.7766 13.3457 18.682 13.252 18.5718 13.1794L13.8157 10.0087L15.0132 9.20996L20.0176 12.5459V17.4797L16.0141 20.1491V16.0139C16.0141 15.8492 15.9734 15.687 15.8957 15.5417C15.818 15.3964 15.7055 15.2726 15.5684 15.1812ZM14.0123 20.1491L10.0088 17.4802V13.8806L14.0123 16.5494V20.1491ZM30.0264 15.0131C30.0264 16.9812 29.6388 18.93 28.8856 20.7483C28.1324 22.5666 27.0285 24.2188 25.6368 25.6104C24.2452 27.0021 22.593 28.106 20.7747 28.8592C18.9564 29.6123 17.0076 30 15.0395 30C13.0714 30 11.1225 29.6123 9.30423 28.8592C7.48593 28.106 5.83378 27.0021 4.44212 25.6104C3.05045 24.2188 1.94652 22.5666 1.19336 20.7483C0.440195 18.93 0.0525462 16.9812 0.0525462 15.0131C0.0525462 14.7476 0.157996 14.493 0.345697 14.3053C0.533399 14.1176 0.787977 14.0122 1.05343 14.0122C1.31888 14.0122 1.57345 14.1176 1.76116 14.3053C1.94886 14.493 2.05431 14.7476 2.05431 15.0131C2.05756 18.2016 3.23272 21.2777 5.35625 23.6563C7.47978 26.0348 10.4035 27.5498 13.5713 27.9131C16.7391 28.2764 19.9299 27.4626 22.5368 25.6266C25.1436 23.7905 26.9847 21.0603 27.7097 17.9553C28.4347 14.8503 27.9931 11.5871 26.4689 8.78644C24.9447 5.9858 22.4442 3.84311 19.4431 2.76597C16.442 1.68884 13.1497 1.7524 10.1924 2.94457C7.23513 4.13674 4.81922 6.37434 3.40425 9.23173H5.49709C5.76254 9.23173 6.01711 9.33718 6.20482 9.52488C6.39252 9.71258 6.49797 9.96716 6.49797 10.2326C6.49797 10.4981 6.39252 10.7526 6.20482 10.9403C6.01711 11.128 5.76254 11.2335 5.49709 11.2335H1.00088C0.735431 11.2335 0.480853 11.128 0.293151 10.9403C0.10545 10.7526 0 10.4981 0 10.2326V5.4524C0 5.18695 0.10545 4.93237 0.293151 4.74467C0.480853 4.55697 0.735431 4.45152 1.00088 4.45152C1.26633 4.45152 1.52091 4.55697 1.70861 4.74467C1.89631 4.93237 2.00176 5.18695 2.00176 5.4524V7.61005C3.63165 4.72635 6.17127 2.46411 9.22346 1.1771C12.2757 -0.109912 15.6683 -0.349123 18.8709 0.496875C22.0735 1.34287 24.9054 3.22637 26.9238 5.85284C28.9422 8.4793 30.0333 11.7006 30.0264 15.0131Z"></path>
              </svg>
              <p className="text-center text-sm pt-2">
                Pay after product. Duties & taxes are non-refundable.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center py-5">
            <div className="flex">
              <svg
                className="hdt-inline-block"
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="currentColor"
              >
                <path d="M10.5 0.614258L2.625 3.47813V10.4055C2.62689 11.7575 2.94764 13.0901 3.56122 14.2949C4.17479 15.4997 5.06388 16.5428 6.15628 17.3394L10.5 20.4986L14.8437 17.3394C15.9361 16.5428 16.8252 15.4997 17.4388 14.2949C18.0524 13.0901 18.3731 11.7575 18.375 10.4055V3.47813L10.5 0.614258ZM17.0625 10.4055C17.0607 11.5506 16.789 12.6791 16.2694 13.6994C15.7498 14.7198 14.9969 15.6033 14.072 16.2783L10.5 18.8764L6.92803 16.2783C6.00306 15.6033 5.25023 14.7198 4.73064 13.6994C4.21104 12.6791 3.93931 11.5506 3.9375 10.4055V4.39688L10.5 2.01076L17.0625 4.39688V10.4055Z"></path>
                <path d="M7.68184 8.88757L6.75391 9.81551L9.67881 12.7404L14.2443 8.17489L13.3164 7.24695L9.67881 10.8845L7.68184 8.88757Z"></path>
              </svg>
              <p className="text-sm">Guarantee Safe Checkout</p>
            </div>
            <p className="text-sm text-gray-500 flex gap-2">
              <span className="inline-block text-teal-600 underline transition hover:text-teal-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 38 24"
                  role="img"
                  width="38"
                  height="24"
                  aria-labelledby="pi-visa"
                >
                  <title id="pi-visa">Visa</title>
                  <path
                    opacity=".07"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  />
                  <path
                    fill="#fff"
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                  />
                  <path
                    d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"
                    fill="#142688"
                  />
                </svg>
              </span>

              <span className="inline-block text-teal-600 underline transition hover:text-teal-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 38 24"
                  role="img"
                  width="38"
                  height="24"
                  aria-labelledby="pi-master"
                >
                  <title id="pi-master">Mastercard</title>
                  <path
                    opacity=".07"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  />
                  <path
                    fill="#fff"
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                  />
                  <circle fill="#EB001B" cx="15" cy="12" r="7" />
                  <circle fill="#F79E1B" cx="23" cy="12" r="7" />
                  <path
                    fill="#FF5F00"
                    d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
                  />
                </svg>
              </span>
            </p>
          </div>
        </div>
        {/* right column end */}
      </div>
      <ProductDetailsTab details={product.details} sizes={product.sizes} />
    </div>
  );
}
