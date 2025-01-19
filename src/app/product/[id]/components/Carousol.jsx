"use client";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const ProductDetailsCarousel = ({
  imageUrls,
  setCurrentImageIndex,
  currentImageIndex,
}) => {
  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
    console.log(`Viewed image index: ${index}, URL: ${imageUrls[index]}`);
    // You can perform additional actions here, like sending data to an analytics service
  };

  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        selectedItem={currentImageIndex}
        className="productCarousel"
        onChange={handleImageChange}
      >
        {imageUrls?.map((img, idx) => (
          <img key={idx} src={img} alt={`Product Image ${idx + 1}`} />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
