// app/product/[id]/page.js (or wherever your file is located)
import React from "react";
import ProductDetails from "./components/Settings";

async function fetchProduct(id) {
  // Construct the absolute URL
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/product?id=${id}`;

  const response = await fetch(apiUrl, {
    method: "GET", // Specify the HTTP method
    cache: "no-store", // Optional: to ensure fresh data on every request
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch product. Status: ${response.status}`);
  }

  const data = await response.json();
  return data.data; // Adjust if your API wraps the product in a `data` field
}

export default async function ProductCatalogue({ params }) {
  const { id } = await params;

  if (!id) {
    return <div>No product ID provided.</div>;
  }

  try {
    const product = await fetchProduct(id);

    if (!product) {
      return <div>Product not found.</div>;
    }

    return (
      <div className="bg-white px-2 md:px-[7.5%] xl:px-[12.5%] w-[100vw] overflow-hidden">
        <ProductDetails product={product} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching product:", error.message);
    return <div>Error fetching product: {error.message}</div>;
  }
}
