// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './translations/en/en.json'; // Importa tus traducciones en inglés
import translationES from './translations/es/es.json'; // Importa tus traducciones en español

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Idioma predeterminado
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
