import React, { createContext, useContext, useState, useCallback } from 'react';
import { Product } from '../data/products';

export interface InquiryItem {
  product: Product;
  quantity: string;
  notes: string;
}

interface InquiryCartContextType {
  items: InquiryItem[];
  isOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateItem: (productId: string, updates: Partial<InquiryItem>) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  count: number;
}

const InquiryCartContext = createContext<InquiryCartContextType | null>(null);

export const InquiryCartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<InquiryItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.product.id === product.id);
      if (exists) return prev;
      return [...prev, { product, quantity: product.moq, notes: '' }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  }, []);

  const updateItem = useCallback((productId: string, updates: Partial<InquiryItem>) => {
    setItems((prev) =>
      prev.map((i) => (i.product.id === productId ? { ...i, ...updates } : i))
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback(() => setIsOpen((v) => !v), []);

  return (
    <InquiryCartContext.Provider
      value={{ items, isOpen, addItem, removeItem, updateItem, clearCart, openCart, closeCart, toggleCart, count: items.length }}
    >
      {children}
    </InquiryCartContext.Provider>
  );
};

export const useInquiryCart = (): InquiryCartContextType => {
  const ctx = useContext(InquiryCartContext);
  if (!ctx) throw new Error('useInquiryCart must be used within InquiryCartProvider');
  return ctx;
};
