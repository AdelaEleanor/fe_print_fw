import { createApp } from 'vue'
import { createPinia } from 'pinia'
import print from 'vue3-print-nb'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(print)

app.mount('#app')
