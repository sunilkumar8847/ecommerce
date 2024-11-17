"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const offerImages: string[] = [
  "https://as2.ftcdn.net/v2/jpg/10/12/12/41/1000_F_1012124146_2Brdd6Ear5CK9XIrU81akKAH3oarGxVb.jpg",
  "https://img.freepik.com/free-vector/indian-festival-diwali-sale-offer-banner-with-realistic-diya_1017-40290.jpg",
  "https://img.freepik.com/free-vector/modern-super-sale-promotion-bright-banner_1055-6985.jpg",
  "https://img.freepik.com/free-vector/raksha-bandhan-sale-banner-with-golden-rakhi_1017-32977.jpg",
];

const OfferSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % offerImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gray-200 text-center p-4 rounded-lg my-4 text-black">
      <Image
        src={offerImages[currentImage]}
        alt={`Offer ${currentImage + 1}`}
        width={300}
        height={300}
        className="w-full h-68 object-cover rounded-lg shadow-md"
      />
    </div>
  );
};

export default OfferSlider;
