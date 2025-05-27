import './assets/main.css'
import './assets/tailwind.css'

import Aura from '@primeuix/themes/aura'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Ripple from 'primevue/ripple'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()).use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.use(router)
app.directive('ripple', Ripple)

app.mount('#app')
