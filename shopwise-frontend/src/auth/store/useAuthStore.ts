import { create } from "zustand";

interface AuthStore {
    isOpen: boolean,
    setIsOpen: (isOpen:boolean) => void
}


export const useAuthStore = create<AuthStore>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({isOpen})
}))