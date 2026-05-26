import React from "react";
import { ProductCard } from "./ProductCard";
import { PRODUCTS } from "../data/products";

export const ProductList = ({ selectedCategory, onOpenDetail }) => {
  const filteredProducts =
    selectedCategory === "Todos"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === selectedCategory);

  return (
    <div className="px-4 lg:px-6 pb-32 lg:pb-6 flex flex-col gap-3 lg:gap-4">
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetail={onOpenDetail}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-sm text-eclipse-muted">
            Nenhum produto encontrado nesta categoria.
          </p>
        </div>
      )}
    </div>
  );
};
