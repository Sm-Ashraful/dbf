"use client";
import React, { useEffect, useState } from "react";
import ProductDetails from "./components/Settings";
import { useParams } from "next/navigation";

export default function ProductCatalogue() {
  const params = useParams();
  const id = params.id;
  const [product, setProduct] = useState(null);
  useEffect(() => {
    async function fetchProduct() {
      if (id) {
        try {
          const response = await fetch(`/api/product?id=${id}`, {
            method: "GET", // Specify the HTTP method
          });
          if (!response.ok) {
            throw new Error(
              `Failed to fetch product. Status: ${response.status}`
            );
          }
          const data = await response.json();
          console.log("Response: ", data);
          setProduct(data.data); // Adjust if your API wraps the product in a `data` field
        } catch (error) {
          console.error("Error fetching product:", error.message);
        }
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) return;

  return (
    <div className="bg-white px-2 md:px-[7.5%] xl:px-[12.5%] w-[100vw] overflow-hidden">
      <ProductDetails product={product && product} />
    </div>
  );
}
