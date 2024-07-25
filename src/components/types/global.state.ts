export interface GlobalState {
    loading: boolean;
    loadingActions: boolean;
    setLoading: (loading: boolean) => void;
    setLoadingActions: (loading: boolean) => void;
  }