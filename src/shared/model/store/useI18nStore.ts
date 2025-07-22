import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import i18n from '../../config/i18n/i18n';

type I18nStore = {
  language: string;
  setLanguage: (lang: string) => void;
};

const browserLang = navigator.language.startsWith('ru') ? 'ru' : 'en';

export const useI18nStore = create<I18nStore>()(
  persist(
    (set) => ({
      language: browserLang,
      setLanguage: (lang) => {
        i18n.changeLanguage(lang);
        set({ language: lang });
      },
    }),
    {
      name: 'i18n-storage',
    }
  )
);
