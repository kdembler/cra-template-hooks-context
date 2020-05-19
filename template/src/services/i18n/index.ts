import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from 'services/i18n/en'

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  // debug: true,
  resources: {
    en: {
      translation: enTranslation,
    },
  },

  interpolation: {
    escapeValue: false,
  },
})

export type TranslationKeys = keyof typeof enTranslation

export * from './hook'
export default i18n
