// import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";

// import { useSearchParams } from "next/navigation";
import ProductDetails from "./components/Settings";

//static quatity details

const products = {
  name: "Classy hoodie set",
  mainImage: "/img/f3.jpg",
  sugImages: ["/img/f1.jpg", "/img/f2.jpg"],
  category: "Hoodie",
  description: "Home delivery available all over Bangladesh (Cash on delivery)",
  sizes: [
    {
      name: ["M", "L", "XL", "XXL"],
      details: [
        "M : chest 38 inch length 26 inch",
        "L : chest 40 inch length 27 inch",
        "XL : chest 42 inch length 28 inch",
        "XXL : chest 44 inch length 29 inch ",
      ],
      pant: ["Free size ", "Useable 30 to 40 (waist)", "Length 39 inch"],
    },
  ],
  details: ["Fabric fleece", "Fabric fleece", "300 GSM"],
  price: 1490,
};

export default async function ProductCatalogue({ searchParams }) {
  return (
    <div className="bg-white px-2 md:px-[7.5%] xl:px-[12.5%] w-[100vw] overflow-hidden">
      <ProductDetails products={products} />
    </div>
  );
}
