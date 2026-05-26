import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

export const ProductVariantsScreen = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [observation, setObservation] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Se tem variações, seleciona a primeira por padrão
      if (product?.variants && product.variants.length > 0) {
        setSelectedVariant(product.variants[0]);
      }
    } else {
      document.body.style.overflow = "unset";
      setObservation("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  const hasVariants = product.variants && product.variants.length > 0;
  const finalPrice = selectedVariant
    ? product.price + (selectedVariant.priceModifier || 0)
    : product.price;

  const handleAddToCart = () => {
    const cartProduct = {
      ...product,
      selectedVariant: selectedVariant?.name || "",
      observation: observation || "",
    };
    addToCart(cartProduct);
    setObservation("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-eclipse-bg">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/5 sticky top-0 z-10 bg-eclipse-bg/95 backdrop-blur-md">
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full flex items-center justify-center text-eclipse-text hover:bg-eclipse-card transition-colors cursor-pointer"
        >
          ←
        </button>
        <h1 className="text-lg font-bold text-eclipse-text flex-1 text-center">
          {product.name}
        </h1>
        <div className="w-10" />
      </div>

      {/* Conteúdo Scrollável */}
      <div className="flex-1 overflow-y-auto scrollbar-none">
        {/* Imagem do Produto */}
        <div className="w-full h-80 overflow-hidden bg-eclipse-card">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Descrição */}
        <div className="p-4 border-b border-white/5">
          <p className="text-sm text-eclipse-muted leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Variações */}
        {hasVariants && (
          <div className="p-4 border-b border-white/5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-eclipse-muted mb-3">
              Escolha o sabor
            </h3>
            <div className="flex flex-col gap-2">
              {product.variants.map((variant) => {
                const isSelected = selectedVariant?.id === variant.id;
                const variantPrice =
                  product.price + (variant.priceModifier || 0);
                const priceDisplay =
                  variant.priceModifier !== 0
                    ? ` +R$ ${Math.abs(variant.priceModifier).toFixed(2)}`
                    : "";

                return (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? "bg-eclipse-purple/10 border-eclipse-purple text-eclipse-text"
                        : "bg-eclipse-card border-white/5 text-eclipse-text hover:border-eclipse-purple/30"
                    }`}
                  >
                    <div className="text-left">
                      <p className="font-semibold text-sm">{variant.name}</p>
                      {priceDisplay && (
                        <p className="text-xs text-eclipse-gold mt-1">
                          {priceDisplay}
                        </p>
                      )}
                    </div>
                    {isSelected && (
                      <div className="w-6 h-6 rounded-full bg-eclipse-purple flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Observações */}
        <div className="p-4">
          <label className="block text-xs font-semibold uppercase tracking-wider text-eclipse-muted mb-2">
            Observações (opcional)
          </label>
          <textarea
            value={observation}
            onChange={(e) => setObservation(e.target.value)}
            placeholder="Ex: Sem açúcar, sem leite, menos cobertura..."
            className="w-full p-3 rounded-xl bg-eclipse-card border border-white/5 text-eclipse-text placeholder:text-eclipse-muted text-sm resize-none focus:outline-none focus:border-eclipse-purple/50 transition-colors"
            rows="4"
          />
        </div>
      </div>

      {/* Footer com Botões */}
      <div className="p-4 bg-eclipse-card border-t border-white/5 sticky bottom-0">
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 rounded-2xl border border-eclipse-bronze text-eclipse-text font-bold transition-all duration-200 hover:bg-eclipse-bg cursor-pointer"
          >
            Voltar
          </button>
          <button
            onClick={handleAddToCart}
            className="flex-1 px-4 py-3 rounded-2xl bg-eclipse-purple hover:bg-eclipse-purple/90 text-eclipse-bg font-bold transition-all duration-200 transform active:scale-95 shadow-md shadow-eclipse-purple/10 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Adicionar</span>
            <span className="text-lg">
              {finalPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
