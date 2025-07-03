import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LocaliztionState {
  language: "ar" | "en";
  direction: "rtl" | "ltr";
  setLanguage: (lang: "ar" | "en") => void;
  setDirection: (dir: "rtl" | "ltr") => void;
}

export const useLocaliztionStore = create<LocaliztionState>()(
  persist(
    (set) => ({
      language: "en",
      direction: "ltr",

      setLanguage: async (lang) => {
        set(() => ({
          language: lang,
          direction: lang === "ar" ? "rtl" : "ltr",
        }));
      },

      setDirection: (dir) =>
        set(() => ({
          direction: dir,
        })),
    }),
    { name: "language-settings" }
  )
);
