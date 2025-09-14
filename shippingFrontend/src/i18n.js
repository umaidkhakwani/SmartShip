import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import enTranslation from "./locales/en.json";
import tmTranslation from "./locales/tm.json";
import kzTranslation from "./locales/kz.json";
import arTranslation from "./locales/ar.json";
import ruTranslation from "./locales/ru.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      tm: { translation: tmTranslation },
      kz: { translation: kzTranslation },
      ar: { translation: arTranslation },
      ru: { translation: ruTranslation },
    },
    lng: localStorage.getItem("selectedLanguage") || "en", // Read language from localStorage or default to "en"
    fallbackLng: "en", // Fallback language if translation is missing
    detection: {
      order: ["localStorage", "navigator", "htmlTag"], // Detect language from localStorage, browser, or HTML tag
      caches: ["localStorage"], // Persist language in localStorage
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
