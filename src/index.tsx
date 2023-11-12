import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {I18nextProvider} from "react-i18next"
import i18next from 'i18next';
import { Provider } from 'react-redux';
import store from "./redux/store"

import global_en from "./translations/en/global"
import global_es from "./translations/es/global"
import global_de from "./translations/de/global"

i18next.init({
  interpolation: {escapeValue: false},
  lng: "en",
  resources:{
    en: {
      global: global_en
    },
    es:{
      global: global_es
    },
    de:{
      global: global_de
    }
  }
  
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <App/>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);

