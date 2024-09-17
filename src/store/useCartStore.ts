import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useCartStore = create()(
  persist(
    (set) => ({
      count: 0,
      increment: () => {
        set((state: any) => ({ count: state.count + 1 }));
      },
    }),
    {
      // Name for localStorage key
      name: "cart-name",
      // Set localStorage as storage
      storage: createJSONStorage(() => localStorage),
    }
  )
);

//! Time is -> 12:17:00
