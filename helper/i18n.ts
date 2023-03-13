import i18next from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import enTranslations from 'locales/en';
import idTranslations from 'locales/id';
import zhTranslations from 'locales/zh';
import hiTranslations from 'locales/hi';

const resources = {
  en: { messages: enTranslations },
  id: { messages: idTranslations },
  zh: { messages: zhTranslations },
  hi: { messages: hiTranslations },
};

const i18n: any = i18next.use(initReactI18next);
i18n.init({
  react: {
    useSuspense: true,
  },
  resources,
  lng: 'en',
  fallbackLng: 'en',
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
  },
  ns: ['messages'],
  defaultNS: 'messages',
  fallbackNS: [],
});

export default i18n;
