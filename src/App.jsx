import React, { useState } from "react";
import { CartProvider } from "./context/CartContext";
import { Header } from "./components/Header";
import { CategoryMenu } from "./components/CategoryMenu";
import { ProductList } from "./components/ProductList";
import { FloatCart } from "./components/FloatCart";
import { CartBottomSheet } from "./components/CartBottomSheet";
import { CheckoutBottomSheet } from "./components/CheckoutBottomSheet";
import { ProductVariantsScreen } from "./components/ProductVariantsScreen";

function MainApp() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleGoToCheckout = () => {
    setIsCartOpen(false); // Fecha o carrinho
    setIsCheckoutOpen(true); // Abre os dados de entrega
  };

  const handleOpenDetail = (product) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

  return (
    <div className="min-h-screen bg-eclipse-bg text-eclipse-text antialiased selection:bg-eclipse-purple/30">
      {/* Container Desktop */}
      <div className="max-w-7xl mx-auto min-h-screen flex flex-col lg:flex-row relative bg-eclipse-bg lg:border-x lg:border-white/[0.02]">
        {/* Main Content - Desktop Layout */}
        <div className="flex-1 flex flex-col lg:w-3/4 border-r border-white/5">
          <Header />

          <CategoryMenu
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <main className="flex-1 pt-4">
            <ProductList
              selectedCategory={selectedCategory}
              onOpenDetail={handleOpenDetail}
            />
          </main>
        </div>

        {/* Sidebar Cart - Desktop Only */}
        <div className="hidden lg:flex lg:w-1/4 flex-col border-l border-white/5">
          <div className="p-4 border-b border-white/5">
            <h2 className="text-lg font-bold text-eclipse-text">
              Meu Carrinho
            </h2>
          </div>
          <CartBottomSheet
            isOpen={true}
            onClose={() => {}}
            onGoToCheckout={handleGoToCheckout}
            isSidebarView={true}
          />
        </div>

        {/* Floating Cart Button - Mobile Only */}
        <div className="lg:hidden">
          <FloatCart onOpenCart={() => setIsCartOpen(true)} />
        </div>
      </div>

      {/* Mobile Cart Bottom Sheet */}
      <CartBottomSheet
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onGoToCheckout={handleGoToCheckout}
        isSidebarView={false}
      />

      {/* Checkout Bottom Sheet */}
      <CheckoutBottomSheet
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* Product Variants Screen */}
      <ProductVariantsScreen
        product={selectedProduct}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainApp />
    </CartProvider>
  );
}
