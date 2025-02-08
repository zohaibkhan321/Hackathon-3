"use client"
import Bestofairmax from "@/components/homepage/bestofairmax";
import Actionbuttons from "@/components/product/productdetails/actionbuttons";
import StorageProvider from "@/context/storage";
import { productData } from "@/utils/product";
import Image from "next/image";
import React, { useState } from "react";

const ProductDetail = ({ params }: { params: { prodid: number } }) => {
  const id = params.prodid;
  const prod = productData.find((data) => data.id.toString() === id.toString());
  const [selectedImage, setSelectedImage] = useState(prod?.image || "");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showFullDetails, setShowFullDetails] = useState(false);

  if (!prod) return <div>Product not found</div>;

  return (
    <div className="md:px-12 px-3 py-6">
      {/* Product Container */}
      <div className="w-full md:flex text-[#111] gap-6">
        {/* Images Section */}
        <div className="flex-1 flex">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4 mr-4">
            {[prod.image, prod.image, prod.image]?.map((img, index) => (
              <div
                key={index}
                className={`w-20 h-20 cursor-pointer border rounded-md ${
                  selectedImage === img ? "border-zinc-800" : "border-zinc-200"
                }`}
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  width={1300}
                  height={700}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-1">
            <Image
              src={selectedImage}
              alt="Main Product"
              width={1300}
              height={700}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="md:w-[500px] w-full">
          <h1 className="text-2xl font-medium">{prod.title}</h1>
          <div className="font-medium">{prod.category}</div>
          <div className="font-medium text-sm mt-3 inline-block">
            MRP: ${prod.price}
          </div>
          <div className="text-xs text-[#757575]">inc. of taxes</div>
          <div className="text-xs text-[#757575]">(Also includes all applicable duties)</div>

          {/* Size Selector */}
          <div className="py-12">
            <div className="flex justify-between items-center text-sm">
              <span className="font-medium">Select Size</span>
              <span className="text-[#757575] cursor-pointer">Size guide</span>
            </div>
            <div className="py-2 grid grid-cols-3 gap-1">
              {["UK 6 (EU 40)", "UK 6.5", "UK 7", "UK 7.5", "UK 9", "UK 10", "UK 11.5"].map(
                (size, index) => (
                  <div
                    key={index}
                    className={`col-span-1 border flex justify-center items-center gap-2 rounded-md py-2 cursor-pointer ${
                      selectedSize === size
                        ? "border-zinc-800 bg-zinc-100"
                        : "border-zinc-200 hover:border-zinc-500"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    <span>{size}</span>
                  </div>
                )
              )}
            </div>
            <StorageProvider>
              <Actionbuttons id={prod.id}  />
            </StorageProvider>
          </div>

          {/* Short and Full Details */}
          <div>
            <p className={`pt-6 text-sm text-[#111] leading-7 ${showFullDetails ? "" : "line-clamp-3"}`}>
              Layer on style with the Air Max 97. The cracked leather and soft suede update the iconic
              design while the original look (inspired by Japanese bullet trains and water droplets)
              still takes centre stage. Easy-to-style colours let you hit the streets quickly.
            </p>
            {showFullDetails && (
              <div className="p-8 text-[#111] ">
                <p>Colour Shown: Flat Pewter/Light Bone/Black/White</p>
                <p>Style: DV7421-001</p>
              </div>
            )}
            <button
              className="underline underline-offset-4 font-medium mt-4"
              onClick={() => setShowFullDetails((prev) => !prev)}
            >
              {showFullDetails ? "Hide Product details" : "View Product details"}
            </button>
          </div>
        </div>
      </div>

      {/* Recommended Products Section */}
      <Bestofairmax introTitle="You might also like" cardSize="lg" />
    </div>
  );
};

export default ProductDetail;
