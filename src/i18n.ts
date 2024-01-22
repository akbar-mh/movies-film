import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // بارگذاری ترجمه‌ها از یک سرور یا فایل‌های محلی
  .use(LanguageDetector) // تشخیص خودکار زبان
  .use(initReactI18next) // اتصال i18next به React
  .init({
    fallbackLng: "en", // زبان پیش‌فرض
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
