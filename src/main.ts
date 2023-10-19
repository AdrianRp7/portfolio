import './styles/main.scss'
import "@mdi/font/css/materialdesignicons.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { vuetifyConfiguration } from './plugins/vuetify.js';
import i18n from './plugins/i18n.js';



// Registra globalmente cada componente


const app = createApp(App)


app.use(createPinia())
app.use(i18n);
app.use(router)

app.use(vuetifyConfiguration);

app.mount('#app')
