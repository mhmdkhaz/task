import { create } from "zustand";
import { IMeResponse } from "../types/me";

interface MeStore {
  me: IMeResponse | null;
  organizationId: number | null;
  currencyId: number | null;
  setMe: (data: IMeResponse) => void;
  clearMe: () => void;
}

export const useMeStore = create<MeStore>((set) => ({
  me: null,
  organizationId: null,
  currencyId: null,
  setMe: (data) =>
    set({
      me: data,
      organizationId: data?.organization?.id,
      currencyId: data?.organization?.currency_id,
    }),
  clearMe: () =>
    set({
      me: null,
      organizationId: null,
      currencyId: null,
    }),
}));
