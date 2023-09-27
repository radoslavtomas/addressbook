import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translation_SK from './src/translations/sk/translation.json'
import translation_EN from './src/translations/en/translation.json'

const resources = {
  en: { translation: translation_EN },
  sk: { translation: translation_SK }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en'
  })

export default i18n