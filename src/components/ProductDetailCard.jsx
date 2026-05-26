import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

export const ProductDetailCard = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [observation, setObservation] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    addToCart({
      ...product,
      observation: observation || undefined,
    });
    setObservation("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      <div className="relative w-full max-w-md bg-eclipse-card rounded-3xl shadow-2xl flex flex-col max-h-[90vh] z-10 overflow-hidden">
        {/* Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-eclipse-bg/80 flex items-center justify-center text-eclipse-text hover:bg-eclipse-bg transition-colors cursor-pointer"
        >
          ✕
        </button>

        {/* Imagem do Produto */}
        <div className="w-full h-64 overflow-hidden flex-shrink-0 bg-eclipse-bg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Conteúdo */}
        <div className="flex-1 overflow-y-auto scrollbar-none flex flex-col">
          <div className="p-6 flex flex-col gap-4">
            {/* Nome */}
            <div>
              <h2 className="text-2xl font-bold text-eclipse-text">
                {product.name}
              </h2>
            </div>

            {/* Descrição */}
            <div>
              <p className="text-sm text-eclipse-muted leading-relaxed">
                {product.description || "Sem descrição disponível"}
              </p>
            </div>

            {/* Preço */}
            {product.price > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-eclipse-gold">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
            )}

            {/* Observações */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-eclipse-muted mb-2">
                Observações (opcional)
              </label>
              <textarea
                value={observation}
                onChange={(e) => setObservation(e.target.value)}
                placeholder="Ex: Sem açúcar, sem leite..."
                className="w-full p-3 rounded-xl bg-eclipse-bg border border-white/5 text-eclipse-text placeholder:text-eclipse-muted text-sm resize-none focus:outline-none focus:border-eclipse-purple/50 transition-colors"
                rows="4"
              />
            </div>
          </div>
        </div>

        {/* Botão Adicionar */}
        <div className="p-6 bg-eclipse-bg/80 border-t border-white/5 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 rounded-2xl border border-eclipse-bronze text-eclipse-text font-bold transition-all duration-200 hover:bg-eclipse-bg cursor-pointer"
          >
            Cancelar
          </button>
          <button
            onClick={handleAddToCart}
            className="flex-1 px-4 py-3 rounded-2xl bg-eclipse-purple hover:bg-eclipse-purple/90 text-eclipse-bg font-bold transition-all duration-200 transform active:scale-95 shadow-md shadow-eclipse-purple/10 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Adicionar</span>
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  );
};
