import { create } from "zustand";
import type { Product } from "../types/productTypes";

interface ProductStore {
    products: Array<Product>
    setProducts: (products: Array<Product>) => void
}

export const useProductStore = create<ProductStore>((set) => ({
    products: [],
    setProducts: (products) => set({products})
}))