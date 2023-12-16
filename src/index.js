import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import EnglishTranslation from "./locale/en.json";
import ArabicTranslattion from "./locale/ar.json"

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: EnglishTranslation
      },
      ar:{
        translation: ArabicTranslattion
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false 
    }
  });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

