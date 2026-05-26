import React from "react";
import { CATEGORIES } from "../data/products";

export const CategoryMenu = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="w-full bg-eclipse-bg py-4 px-3 z-30 border-b border-white/5">
      <div className="px-4 lg:px-6 flex gap-2 lg:gap-3 overflow-x-auto lg:overflow-x-visible lg:flex-wrap scrollbar-none snap-x snap-mandatory lg:snap-none">
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`px-5 py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 whitespace-nowrap snap-start cursor-pointer border ${
                isActive
                  ? "bg-eclipse-purple text-eclipse-bg font-semibold border-eclipse-purple shadow-md shadow-eclipse-purple/20 lg:scale-100"
                  : "bg-eclipse-card text-eclipse-muted border-white/5 hover:text-eclipse-text"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};
