import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

export const CheckoutBottomSheet = ({ isOpen, onClose }) => {
  const { cart, cartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  // Número do WhatsApp da Eclipse Confeitaria via variável de ambiente
  const STORE_PHONE = import.meta.env.VITE_STORE_PHONE;

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOrder = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.address) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // 1. Formata a lista de produtos
    let itemsText = "";
    cart.forEach((item) => {
      const itemTotal = item.product.price * item.quantity;
      itemsText += `• ${item.quantity}x ${item.product.name} (${itemTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })})\n`;
    });

    // 2. Monta o bloco de texto final
    const totalFormatted = cartTotal.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    const message =
      `🔮 *Novo Pedido - Eclipse Confeitaria* 🔮\n\n` +
      `👤 *Cliente:* ${formData.name}\n` +
      `📱 *WhatsApp:* ${formData.phone}\n` +
      `📍 *Endereço:* ${formData.address}\n\n` +
      `🛒 *Itens do Pedido:*\n${itemsText}\n` +
      `💰 *Total Geral:* ${totalFormatted}\n\n` +
      `⚙️ Enviado via Cardápio Digital`;

    // 3. Converte para string de URL e redireciona
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${STORE_PHONE}?text=${encodedMessage}`,
      "_blank",
    );

    // Limpa o carrinho e fecha
    clearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-md bg-eclipse-card rounded-t-3xl border-t border-amber-950/2 shadow-2xl flex flex-col max-h-[90vh] z-10 animate-in slide-in-from-bottom duration-300">
        <div className="w-full flex justify-center py-3" onClick={onClose}>
          <div className="w-12 h-1.5 rounded-full bg-white/10 cursor-pointer" />
        </div>

        <div className="px-4 pb-4 border-b border-amber-950/10 flex items-center justify-between">
          <h2 className="text-lg font-bold text-eclipse-text">
            Dados de Entrega
          </h2>
          <button
            onClick={onClose}
            className="text-xs font-semibold text-eclipse-muted hover:text-eclipse-purple px-2 py-1 rounded-lg bg-white/5 cursor-pointer"
          >
            Voltar
          </button>
        </div>

        <form
          onSubmit={handleSendOrder}
          className="p-4 flex flex-col gap-4 overflow-y-auto"
        >
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-eclipse-muted mb-1.5">
              Seu Nome
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Ex: Antonio Silvano"
              className="w-full h-12 px-4 rounded-xl bg-eclipse-bg border border-amber-950/7 text-sm text-eclipse-text placeholder-text-eclipse-text/20 focus:outline-none focus:border-eclipse-purple transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-eclipse-muted mb-1.5">
              Número de WhatsApp
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ex: (85) 99999-0000"
              className="w-full h-12 px-4 rounded-xl bg-eclipse-bg border border-amber-950/7 text-sm text-eclipse-text placeholder-text-eclipse-text/20 focus:outline-none focus:border-eclipse-purple transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-eclipse-muted mb-1.5">
              Endereço Completo
            </label>
            <textarea
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              rows="3"
              placeholder="Rua, Número, Bairro e Ponto de referência"
              className="w-full p-4 rounded-xl bg-eclipse-bg border border-amber-950/7 text-sm text-eclipse-text placeholder-text-eclipse-text/20 focus:outline-none focus:border-eclipse-purple transition-colors resize-none"
            />
          </div>

          <div className="mt-4 pt-4 border-t border-amber-950/7">
            <button
              type="submit"
              className="w-full bg-eclipse-gold hover:bg-eclipse-gold/90 text-eclipse-bg font-black h-12 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-eclipse-gold/15 transition-all duration-200 transform active:scale-[0.99] cursor-pointer text-sm uppercase tracking-wider"
            >
              🚀 Enviar Pedido via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
