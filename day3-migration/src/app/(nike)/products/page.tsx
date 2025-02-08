"use client"
import React, { useState } from "react";
import Card from "@/components/card";
import { productData } from "@/utils/product";
import { VscSettings } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const navData: string[] = [
  "Shoes",
  "Sports Bras",
  "Tops & T-Shirts",
  "Hoodies & Sweatshirts",
  "Jackets",
  "Trousers & Tights",
  "Shorts",
  "Tracksuits",
  "Jumpsuits & Rompers",
  "Skirts & Dresses",
  "Socks",
  "Accessories & Equipment",
];

type FilterState = {
  gender: string[];
  kids: string[];
  price: string[];
};

const Products: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    gender: [],
    kids: [],
    price: [],
  });
  const [isFilterVisible, setFilterVisibility] = useState<Record<string, boolean>>({
    gender: false,
    kids: false,
    price: false,
  });

  const toggleFilterVisibility = (filter: string) => {
    setFilterVisibility((prev) => ({ ...prev, [filter]: !prev[filter] }));
  };

  const handleFilterChange = (filterGroup: keyof FilterState, value: string) => {
    setFilters((prev) => {
      const group = prev[filterGroup];
      return {
        ...prev,
        [filterGroup]: group.includes(value)
          ? group.filter((item) => item !== value)
          : [...group, value],
      };
    });
  };

  return (
    <div className="md:px-12 px-3 py-3">
      {/* Header Section */}
      <div className="w-full flex justify-between items-center py-6">
        <h1 className="md:text-2xl text-lg font-medium">New (500)</h1>
        <div className="flex items-center gap-2">
          <span className="md:text-base text-sm">Hide Filters</span>
          <VscSettings className="text-lg mr-3" />
          <span className="md:text-base text-sm">Sort By</span>
          <IoIosArrowDown className="text-lg" />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex items-start">
        {/* Filters Section */}
        <div className="w-60 md:flex hidden flex-col gap-4 text-[#111]">
          {/* Navigation Links */}
          <div className="flex flex-col gap-2 border-b pb-5">
            {navData.map((data, index) => (
              <div key={index} className="flex items-center justify-between">
                <Link href="" className="font-medium hover:text-blue-500">
                  {data}
                </Link>
              </div>
            ))}
          </div>

          {/* Gender Filter */}
          <div className="border-b pb-5 pr-3">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFilterVisibility("gender")}
            >
              <span className="text-lg font-medium">Gender</span>
              <IoIosArrowDown
                className={`text-lg transition-transform duration-300 ${
                  isFilterVisible.gender ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {isFilterVisible.gender && (
              <div className="space-y-2 mt-2">
                {["Men", "Women", "Unisex"].map((data, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4"
                      onChange={() => handleFilterChange("gender", data)}
                      checked={filters.gender.includes(data)}
                    />
                    <p>{data}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Kids Filter */}
          <div className="border-b  pb-5 pr-3">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFilterVisibility("kids")}
            >
              <span className="text-lg font-medium">Kids</span>
              <IoIosArrowDown
                className={`text-lg transition-transform duration-300 ${
                  isFilterVisible.kids ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {isFilterVisible.kids && (
              <div className="space-y-2 mt-2">
                {["Boys", "Girls"].map((data, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4"
                      onChange={() => handleFilterChange("kids", data)}
                      checked={filters.kids.includes(data)}
                    />
                    <p>{data}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Shop by Price Filter */}
          <div className="border-b  pb-5 pr-3">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFilterVisibility("price")}
            >
              <span className="text-lg font-medium">Shop By Price</span>
              <IoIosArrowDown
                className={`text-lg transition-transform duration-300 ${
                  isFilterVisible.price ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {isFilterVisible.price && (
              <div className="space-y-2 mt-2">
                {["Under 2500$", "Under 600$"].map((data, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4"
                      onChange={() => handleFilterChange("price", data)}
                      checked={filters.price.includes(data)}
                    />
                    <p>{data}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Products Section */}
        <div className="flex-1 flex flex-wrap gap-4 justify-center">
          <Card arr={productData} size="lg" />
        </div>
      </div>
    </div>
  );
};

export default Products;
