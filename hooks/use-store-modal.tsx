// IMPORTS -
import { useStoreProps } from "@/app/partials/types";
import { create } from "zustand";

export const useStoreModal = create<useStoreProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
