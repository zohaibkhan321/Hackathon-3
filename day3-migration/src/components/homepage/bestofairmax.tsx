"use client";
import { useRef } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { productData } from "@/utils/product";
import Card from "@/components/card";

const Bestofairmax = ({
  introTitle,
  cardSize,
}: {
  introTitle?: string;
  cardSize: "sm" | "lg";
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300; // Adjust scroll distance as needed
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full py-8">
      <div className="w-full flex justify-between items-center">
        {introTitle && (
          <p className="md:text-2xl text-lg font-medium">{introTitle}</p>
        )}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">Shop</span>
          <div
            className="w-12 h-12 rounded-full bg-zinc-100 text-zinc-400 flex justify-center items-center text-2xl p-1 cursor-pointer"
            onClick={() => handleScroll("left")}
          >
            <BsChevronLeft />
          </div>
          <div
            className="w-12 h-12 rounded-full bg-zinc-100 text-zinc-400 flex justify-center items-center text-2xl p-1 cursor-pointer"
            onClick={() => handleScroll("right")}
          >
            <BsChevronRight />
          </div>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-scroll flex gap-4 py-2 scrollbar-hide"
      >
        <Card arr={productData} size={cardSize} />
      </div>
    </div>
  );
};

export default Bestofairmax;
