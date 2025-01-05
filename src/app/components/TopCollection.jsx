import ProductCard from "@/__shared/ProductCard";
import Link from "next/link";
import React from "react";
import { getProducts } from "../admin/products/action";

const TopCollection = async () => {
  const sizes = ["M", "L", "XL", "XXL"];

  const products = await getProducts();

  console.log("Products: ", products);

  return (
    <div className="px-4 mb-5">
      <div className="flex flex-col items-center justify-center pb-[30px]">
        <h4 className="bold-f text-2xl a">Our Top Collections</h4>
        <p className="text-sm">Browse the collection of top products</p>
      </div>
      <div className="grid  md:grid-cols-2 xl:grid-cols-4">
        {products &&
          products?.map((product) => (
            <ProductCard
              key={product._id}
              productId={product._id}
              name={product.name}
              price={product.price}
              img={product.mainImage}
              sizes={sizes}
            />
          ))}
      </div>
      <Link
        href={"/"}
        className="flex items-center bold-f border-b border-yellow w-fit mt-4 mx-auto"
      >
        <span>See All Collection</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.2441 3.57733C10.5695 3.25189 11.0972 3.25189 11.4226 3.57733L17.2559 9.41067C17.5813 9.73609 17.5813 10.2638 17.2559 10.5892L11.4226 16.4225C11.0972 16.7479 10.5695 16.7479 10.2441 16.4225C9.91867 16.0971 9.91867 15.5694 10.2441 15.244L14.6548 10.8333H3.33333C2.8731 10.8333 2.5 10.4602 2.5 9.99992C2.5 9.53967 2.8731 9.16659 3.33333 9.16659H14.6548L10.2441 4.75584C9.91867 4.4304 9.91867 3.90277 10.2441 3.57733Z"
            fill="#070C10"
          />
        </svg>
      </Link>
    </div>
  );
};

export default TopCollection;
