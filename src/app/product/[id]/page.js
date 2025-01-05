"use client";
import React, { useEffect, useState } from "react";
import ProductDetails from "./components/Settings";
import { useParams } from "next/navigation";
import { getSingleProduct } from "@/app/admin/products/action";

export default function ProductCatalogue() {
  const params = useParams();
  const id = params.id;
  const [product, setProduct] = useState(null);

  console.log("product id: ", id);

  useEffect(() => {
    async function fetchProduct() {
      if (id) {
        const response = await getSingleProduct(id);

        console.log("Prodcut repsone: ", response);
        setProduct(response);
      }
    }
    fetchProduct();
  }, [id]);

  if (!product) return;

  console.log("Product page: ", product);

  return (
    <div className="bg-white px-2 md:px-[7.5%] xl:px-[12.5%] w-[100vw] overflow-hidden">
      <ProductDetails product={product && product} />
    </div>
  );
}
