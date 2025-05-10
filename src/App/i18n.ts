import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import translationEN from "../../i18n/en"
import translationES from "../../i18n/es"
import translationIT from "../../i18n/it"
import translationRU from "../../i18n/ru"
import translationDE from "../../i18n/de"
import translationSRLatn from "../../i18n/sr-Latn"
import translationSRCyrl from "../../i18n/sr-Cyrl"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: import.meta.env.DEV,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: translationEN
      },
      "sr-Latn": {
        translation: translationSRLatn
      },
      "sr-Cyrl": {
        translation: translationSRCyrl
      },
      es: {
        translation: translationES
      },
      it: {
        translation: translationIT
      },
      ru: {
        translation: translationRU
      },
      de: {
        translation: translationDE
      }
    }
  })

export default i18n
