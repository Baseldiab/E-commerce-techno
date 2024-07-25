import { create } from "zustand";
import { GlobalState } from "../components/types/global.state";

export const useGlobalStore = create<GlobalState>((set) => ({
    loading: false,
    loadingActions: false,
    setLoading: (loading: boolean) => set({ loading }),
    setLoadingActions: (loadingActions: boolean) => set({ loadingActions }),
  }));