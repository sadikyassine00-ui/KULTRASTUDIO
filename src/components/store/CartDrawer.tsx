"use client";

import React from "react";
import Image from "next/image";
import { X, Trash2, Plus, Minus, Lock, Truck, ArrowRight, Sparkles } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { motion, AnimatePresence } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    freeShippingThreshold,
    freeShippingProgress,
    isCheckoutLoading,
    handleCheckout
  } = useStore();

  const onCheckoutClick = () => {
    trackEvent("begin_checkout", {
      value: subtotal,
      currency: "USD",
      num_items: cart.reduce((sum, item) => sum + item.quantity, 0)
    });
    handleCheckout();
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            {/* Sliding Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="w-screen max-w-md bg-stone-50 text-stone-900 shadow-2xl flex flex-col justify-between border-l border-stone-200"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-stone-200 flex items-center justify-between bg-white">
                <div className="flex items-center gap-2">
                  <span className="font-serif font-bold text-xl text-stone-900">Your Cart</span>
                  <span className="bg-stone-100 text-stone-700 text-xs px-2.5 py-0.5 rounded-full font-semibold">
                    {cart.reduce((sum, i) => sum + i.quantity, 0)} items
                  </span>
                </div>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-stone-400 hover:text-stone-900 rounded-full hover:bg-stone-100 transition-colors"
                  aria-label="Close Cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free Shipping Progress Indicator */}
              <div className="bg-stone-900 text-stone-100 px-6 py-3.5 border-b border-stone-800">
                <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-amber-400" />
                    <span>
                      {freeShippingProgress >= 100 ? (
                        <strong className="text-amber-400">Unlocked Free Express Shipping!</strong>
                      ) : (
                        <>Add ${(freeShippingThreshold - subtotal).toFixed(2)} for Free Shipping</>
                      )}
                    </span>
                  </div>
                  <span className="font-semibold text-[11px] text-amber-400">{Math.round(freeShippingProgress)}%</span>
                </div>

                <div className="w-full bg-stone-800 h-1.5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${freeShippingProgress}%` }}
                    transition={{ duration: 0.5 }}
                    className="bg-amber-400 h-full rounded-full"
                  />
                </div>
              </div>

              {/* Cart Line Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8 text-stone-400">
                    <div className="w-16 h-16 rounded-full bg-stone-200/60 flex items-center justify-center mb-4 text-stone-400">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <p className="font-serif font-bold text-lg text-stone-700">Your cart is empty</p>
                    <p className="text-xs text-stone-500 mt-1 max-w-xs">
                      Select a finish and size above to add a Merino wool desk mat to your cart.
                    </p>
                  </div>
                ) : (
                  cart.map((line) => (
                    <div
                      key={line.variant.id}
                      className="glass-card p-4 rounded-2xl border border-stone-200/80 flex gap-4 relative"
                    >
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-stone-200 shrink-0 border border-stone-200">
                        <Image
                          src={line.variant.image}
                          alt={line.variant.title}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between">
                            <h4 className="font-serif font-bold text-sm text-stone-900 leading-tight">
                              Merino Wool & Cork Mat
                            </h4>
                            <button
                              onClick={() => removeFromCart(line.variant.id)}
                              className="text-stone-400 hover:text-rose-600 transition-colors p-1"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-xs text-stone-500 mt-0.5">
                            {line.variant.colorName} • {line.variant.size}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity control */}
                          <div className="flex items-center border border-stone-300 rounded-lg bg-white overflow-hidden shadow-2xs">
                            <button
                              onClick={() => updateQuantity(line.variant.id, line.quantity - 1)}
                              className="p-1.5 hover:bg-stone-100 text-stone-600 transition-colors"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-3 text-xs font-semibold text-stone-900">
                              {line.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(line.variant.id, line.quantity + 1)}
                              className="p-1.5 hover:bg-stone-100 text-stone-600 transition-colors"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Line price */}
                          <span className="font-serif font-bold text-base text-stone-900">
                            ${(parseFloat(line.variant.price.amount) * line.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Drawer Footer with Subtotal & Checkout */}
              {cart.length > 0 && (
                <div className="p-6 bg-white border-t border-stone-200 space-y-4">
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-stone-600">
                      <span>Subtotal</span>
                      <span className="font-semibold text-stone-900">${subtotal.toFixed(2)} USD</span>
                    </div>
                    <div className="flex justify-between text-stone-600">
                      <span>Shipping</span>
                      <span className="font-medium text-emerald-700">
                        {subtotal >= freeShippingThreshold ? "FREE Express" : "$5.00"}
                      </span>
                    </div>
                    <div className="flex justify-between text-stone-900 font-bold text-sm pt-2 border-t border-stone-100">
                      <span>Total</span>
                      <span className="font-serif text-lg">${subtotal.toFixed(2)} USD</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isCheckoutLoading}
                    onClick={onCheckoutClick}
                    className="w-full bg-stone-900 hover:bg-stone-800 text-stone-50 font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-xs"
                  >
                    <Lock className="w-4 h-4 text-amber-400" />
                    <span>{isCheckoutLoading ? "Creating Order..." : "Checkout on Shopify"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <p className="text-[10px] text-center text-stone-400 font-medium">
                    🔒 Encrypted 256-Bit SSL Checkout
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
