import React from "react";
import { useCart } from "../context/CartContext";

export const ProductCard = ({ product, onOpenDetail }) => {
  const { addToCart, cart, updateQuantity } = useCart();

  const cartItem = cart.find((item) => item.product.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div
      onClick={() => onOpenDetail(product)}
      className="w-full bg-eclipse-card rounded-2xl p-3 flex flex-row items-start gap-3 border border-white/[0.03] shadow-lg shadow-black/20 hover:border-eclipse-purple/20 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-eclipse-purple/10"
    >
      <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 relative bg-neutral-900">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 min-w-0">
        <div>
          <h3 className="text-sm font-semibold text-eclipse-text line-clamp-2">
            {product.name}
          </h3>
          <p className="text-xs text-eclipse-muted mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-base font-bold text-eclipse-gold">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>

          {quantity > 0 ? (
            <div className="flex items-center bg-eclipse-bg border border-white/5 rounded-full p-1 gap-2.5">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  updateQuantity(product.id, -1);
                }}
                className="w-6 h-6 flex items-center justify-center rounded-full bg-white/5 active:bg-white/10 text-eclipse-purple font-bold text-sm transition-colors cursor-pointer"
              >
                -
              </button>
              <span className="text-xs font-bold text-eclipse-text px-0.5">
                {quantity}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  updateQuantity(product.id, 1);
                }}
                className="w-6 h-6 flex items-center justify-center rounded-full bg-eclipse-purple active:bg-eclipse-purple/80 text-eclipse-bg font-bold text-sm transition-colors cursor-pointer"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
              className="px-3 py-1.5 rounded-full bg-eclipse-purple active:bg-eclipse-purple/80 text-eclipse-bg text-xs font-bold transition-all duration-200 transform active:scale-95 shadow-md shadow-eclipse-purple/10 flex items-center gap-1 cursor-pointer"
            >
              <span>Adicionar</span>
              <span className="font-bold">+</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
