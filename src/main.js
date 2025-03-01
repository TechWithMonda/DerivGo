import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueGtag from 'vue-gtag';

const app = createApp(App)

app.use(VueGtag, {
    config: { id: 'G-9S98390Y5M' }, // Replace with your GA Measurement ID
  }, router);
  

app.use(createPinia())
app.use(router)

app.mount('#app')
