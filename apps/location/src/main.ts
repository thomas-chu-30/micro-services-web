import './assets/main.css'

import Aura from '@primeuix/themes/aura'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .mount('#app')
