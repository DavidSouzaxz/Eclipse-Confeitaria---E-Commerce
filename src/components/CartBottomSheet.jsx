import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";

export const CartBottomSheet = ({
  isOpen,
  onClose,
  onGoToCheckout,
  isSidebarView = false,
}) => {
  const { cart, updateQuantity, cartTotal } = useCart();

  useEffect(() => {
    if (isOpen && !isSidebarView) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isSidebarView]);

  if (!isOpen && !isSidebarView) return null;

  // Layout Desktop Sidebar
  if (isSidebarView) {
    return (
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-none">
          {cart.length === 0 ? (
            <div className="text-center py-12 text-eclipse-muted text-sm">
              Seu carrinho está vazio.
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="flex flex-col gap-2 bg-eclipse-bg/50 p-3 rounded-xl border border-white/[0.02]"
              >
                <div className="flex gap-3">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-eclipse-text line-clamp-2">
                      {item.product.name}
                    </h4>
                    {item.product.selectedVariant && (
                      <p className="text-xs text-eclipse-muted mt-1">
                        {item.product.selectedVariant}
                      </p>
                    )}
                    <p className="text-xs text-eclipse-gold font-medium mt-1">
                      {(item.product.price * item.quantity).toLocaleString(
                        "pt-BR",
                        {
                          style: "currency",
                          currency: "BRL",
                        },
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-center bg-eclipse-bg border border-white/5 rounded-lg p-1 gap-2 justify-center">
                  <button
                    onClick={() => updateQuantity(item.product.id, -1)}
                    className="w-6 h-6 flex items-center justify-center rounded text-eclipse-text text-sm cursor-pointer hover:bg-white/5"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold text-eclipse-text w-4 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.product.id, 1)}
                    className="w-6 h-6 flex items-center justify-center rounded bg-eclipse-purple text-eclipse-bg text-sm font-bold cursor-pointer hover:bg-eclipse-purple/90"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-4 bg-eclipse-bg/80 border-t border-white/5 flex flex-col gap-3 sticky bottom-0">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-eclipse-muted uppercase tracking-wider">
                Total
              </span>
              <span className="text-lg font-black text-eclipse-gold">
                {cartTotal.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>

            <button
              onClick={onGoToCheckout}
              className="w-full bg-eclipse-purple hover:bg-eclipse-purple/90 text-eclipse-bg font-bold h-11 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-eclipse-purple/15 transition-all duration-200 transform active:scale-[0.99] cursor-pointer text-sm uppercase tracking-wider"
            >
              Finalizar
            </button>
          </div>
        )}
      </div>
    );
  }

  // Layout Mobile Bottom Sheet
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      <div className="relative w-full max-w-md bg-eclipse-card rounded-t-3xl border-t border-white/5 shadow-2xl flex flex-col max-h-[85vh] z-10">
        <div className="w-full flex justify-center py-3" onClick={onClose}>
          <div className="w-12 h-1.5 rounded-full bg-white/10 cursor-pointer" />
        </div>

        <div className="px-4 pb-4 border-b border-white/5 flex items-center justify-between">
          <h2 className="text-lg font-bold text-eclipse-text">Seu Carrinho</h2>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-eclipse-muted hover:text-eclipse-purple cursor-pointer px-2 py-1 rounded-lg bg-white/5"
          >
            Fechar
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-none">
          {cart.length === 0 ? (
            <div className="text-center py-12 text-eclipse-muted text-sm">
              Seu carrinho está vazio.
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center justify-between gap-3 bg-eclipse-bg/50 p-3 rounded-xl border border-white/[0.02]"
              >
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-eclipse-text truncate">
                    {item.product.name}
                  </h4>
                  <p className="text-xs text-eclipse-gold font-medium mt-0.5">
                    {(item.product.price * item.quantity).toLocaleString(
                      "pt-BR",
                      {
                        style: "currency",
                        currency: "BRL",
                      },
                    )}
                  </p>
                </div>

                <div className="flex items-center bg-eclipse-bg border border-white/5 rounded-full p-1 gap-2">
                  <button
                    onClick={() => updateQuantity(item.product.id, -1)}
                    className="w-7 h-7 flex items-center justify-center rounded-full bg-white/5 text-eclipse-text text-sm cursor-pointer"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold text-eclipse-text w-4 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.product.id, 1)}
                    className="w-7 h-7 flex items-center justify-center rounded-full bg-eclipse-purple text-eclipse-bg text-sm font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-4 bg-eclipse-bg/80 border-t border-white/5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-eclipse-muted">
                Subtotal
              </span>
              <span className="text-xl font-black text-eclipse-gold">
                {cartTotal.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>

            <button
              onClick={onGoToCheckout}
              className="w-full bg-eclipse-purple hover:bg-eclipse-purple/90 text-eclipse-bg font-bold h-12 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-eclipse-purple/15 transition-all duration-200 transform active:scale-[0.99] cursor-pointer text-sm uppercase tracking-wider"
            >
              Avançar para Entrega
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
