import { create } from "zustand";

interface VoiceState {
  text: string;
  error: string;
  setError: (error: string) => void;
  setText: (text: string) => void;
}

const useVoiceStore = create<VoiceState>((set) => ({
  error: "",
  setError: (error: string) => set((state) => ({ ...state, error })),
  setText: (text: string) => set((state) => ({ ...state, text })),
  text: "",
}));

export default useVoiceStore;
