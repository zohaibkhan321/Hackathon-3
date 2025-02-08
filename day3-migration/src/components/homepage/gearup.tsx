"use client"; 
import { useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Card from "../card";

const womens = [
  {
    image: "/products/clothes/boxer.webp",
    title: "Nike One Leak Protection: Period",
    category: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
    categorySearch: "women",
    colours: 2,
    price: 3395,
    id: 5,
  },
  {
    image: "/products/clothes/kalu.webp",
    title: "Nike Sportswear",
    category: "Women's Ribbed Jersey Short-Sleeve Top",
    categorySearch: "women",
    colours: 2,
    price: 3295,
    id: 7,
  },
  {
    image: "/products/shoes/shoe1.webp",
    title: "Nike Air Max Pulse",
    category: "Women's Shoes",
    categorySearch: "kids",
    colours: 2,
    price: 13995,
    id: 1,
  },
];

const mens = [
  {
    image: "/products/shoes/shoe2.webp",
    title: "Nike Air Max 97 SE",
    category: "Men's Shoes",
    categorySearch: "women",
    colours: 2,
    price: 16995,
    id: 2,
  },
  {
    image: "/products/shoes/jordan.webp",
    title: "Air Jordan XXXVII Low PF",
    category: "Men's Basketball Shoes",
    categorySearch: "men",
    colours: 1,
    price: 16295,
    id: 3,
  },
  {
    image: "/products/clothes/neela.webp",
    title: "Nike Dri-FIT Ready",
    category: "Men's Short-Sleeve Fitness Top",
    categorySearch: "men",
    colours: 3,
    price: 2495,
    id: 4,
  },
];

const Gearup = () => {
  const womensScrollRef = useRef<HTMLDivElement>(null);
  const mensScrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full md:flex items-start md:py-10 gap-8">
      {/* Women's Section */}
      <div className="lg:w-1/2 w-full">
        <div className="flex items-center gap-3 py-2 w-full justify-end px-6">
          <span className="text-sm font-medium">Shop Women&apos;s</span>
          <button
            className="md:w-12 md:h-12 w-8 h-8 rounded-full bg-zinc-100 text-zinc-400 flex justify-center items-center md:text-2xl text-lg p-1"
            onClick={() => scrollLeft(womensScrollRef)}
          >
            <BsChevronLeft />
          </button>
          <button
            className="md:w-12 md:h-12 w-8 h-8 rounded-full bg-zinc-100 text-zinc-400 flex justify-center items-center md:text-2xl text-lg p-1"
            onClick={() => scrollRight(womensScrollRef)}
          >
            <BsChevronRight />
          </button>
        </div>
        <div
          ref={womensScrollRef}
          className="w-full h-full scroll-smooth  overflow-x-scroll flex gap-4 py-2 scrollbar-hide"
        >
          <Card arr={womens} size="lg" />
        </div>
      </div>

      {/* Men's Section */}
      <div className="lg:w-1/2 w-full">
        <div className="flex items-center gap-3 py-2 w-full justify-end px-6">
          <span className="text-sm font-medium">Shop Men&apos;s</span>
          <button
            className="md:w-12 md:h-12 w-8 h-8 rounded-full bg-zinc-100 text-zinc-400 flex justify-center items-center md:text-2xl text-lg p-1"
            onClick={() => scrollLeft(mensScrollRef)}
          >
            <BsChevronLeft />
          </button>
          <button
            className="md:w-12 md:h-12 w-8 h-8 rounded-full bg-zinc-100 text-zinc-400 flex justify-center items-center md:text-2xl text-lg p-1"
            onClick={() => scrollRight(mensScrollRef)}
          >
            <BsChevronRight />
          </button>
        </div>
        <div
          ref={mensScrollRef}
          className="w-full h-full overflow-x-scroll flex gap-4 py-2 scrollbar-hide scroll-smooth"
        >
          <Card arr={mens} size="lg" />
        </div>
      </div>
    </div>
  );
};

export default Gearup;
