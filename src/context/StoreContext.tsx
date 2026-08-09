"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, ProductVariant, FALLBACK_PRODUCT, createShopifyCheckout } from "@/lib/shopify";

export interface CartLine {
  variant: ProductVariant;
  quantity: number;
}

interface StoreContextType {
  product: Product;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  selectedSize: 'Medium' | 'Large';
  setSelectedSize: (size: 'Medium' | 'Large') => void;
  activeVariant: ProductVariant;
  cart: CartLine[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (variant?: ProductVariant, quantity?: number) => void;
  removeFromCart: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  totalQuantity: number;
  subtotal: number;
  freeShippingThreshold: number;
  freeShippingProgress: number;
  isCheckoutLoading: boolean;
  handleCheckout: () => Promise<void>;
  showAddedToast: boolean;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const product = FALLBACK_PRODUCT;
  const [selectedColor, setSelectedColor] = useState<string>("Charcoal");
  const [selectedSize, setSelectedSize] = useState<'Medium' | 'Large'>("Medium");
  const [cart, setCart] = useState<CartLine[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState<boolean>(false);
  const [showAddedToast, setShowAddedToast] = useState<boolean>(false);

  // Find active variant based on selection
  const activeVariant = product.variants.find(
    (v) => v.colorName === selectedColor && v.size === selectedSize
  ) || product.variants[0];

  // Calculate totals
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + parseFloat(item.variant.price.amount) * item.quantity,
    0
  );

  const freeShippingThreshold = 70.0;
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const addToCart = (variantToAdd?: ProductVariant, quantityToAdd = 1) => {
    const targetVariant = variantToAdd || activeVariant;
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.variant.id === targetVariant.id
      );
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantityToAdd;
        return updated;
      }
      return [...prevCart, { variant: targetVariant, quantity: quantityToAdd }];
    });

    // Trigger feedback and open cart
    setShowAddedToast(true);
    setTimeout(() => setShowAddedToast(false), 2500);
    setIsCartOpen(true);
  };

  const removeFromCart = (variantId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.variant.id !== variantId));
  };

  const updateQuantity = (variantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(variantId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.variant.id === variantId ? { ...item, quantity } : item
      )
    );
  };

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    setIsCheckoutLoading(true);
    try {
      const mainItem = cart[0];
      const url = await createShopifyCheckout(mainItem.variant.id, mainItem.quantity);
      window.location.href = url;
    } catch (err) {
      console.error("Checkout redirection failed", err);
    } finally {
      setIsCheckoutLoading(false);
    }
  };

  return (
    <StoreContext.Provider
      value={{
        product,
        selectedColor,
        setSelectedColor,
        selectedSize,
        setSelectedSize,
        activeVariant,
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalQuantity,
        subtotal,
        freeShippingThreshold,
        freeShippingProgress,
        isCheckoutLoading,
        handleCheckout,
        showAddedToast
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
