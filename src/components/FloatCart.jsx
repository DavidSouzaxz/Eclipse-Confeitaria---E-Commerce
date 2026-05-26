import React from "react";
import { useCart } from "../context/CartContext";

export const FloatCart = ({ onOpenCart }) => {
  const { cartCount, cartTotal } = useCart();

  if (cartCount === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-40 bg-gradient-to-t from-eclipse-bg via-eclipse-bg/95 to-transparent">
      <button
        onClick={onOpenCart}
        className="max-w-md mx-auto w-full bg-eclipse-purple hover:bg-eclipse-purple/90 text-eclipse-bg font-bold h-14 px-4 rounded-2xl flex items-center justify-between shadow-xl shadow-eclipse-purple/20 transition-all duration-300 transform active:scale-[0.98] animate-slide-up cursor-pointer"
      >
        <div className="flex items-center gap-2.5">
          <span className="bg-eclipse-bg text-eclipse-purple text-xs font-black w-6 h-6 rounded-lg flex items-center justify-center shadow-inner">
            {cartCount}
          </span>
          <span className="text-sm font-bold uppercase tracking-wider text-eclipse-bg">
            Ver Carrinho
          </span>
        </div>

        <span className="text-base font-black bg-eclipse-bg/10 px-3 py-1 rounded-xl">
          {cartTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </button>
    </div>
  );
};
