import { create } from "zustand";

interface ColorState {
  color: string;
  setColor: (color: string) => void;
}

const useColorStore = create<ColorState>((set) => ({
  color: "",
  setColor: (color: string) => set(() => ({ color })),
}));

export default useColorStore;
