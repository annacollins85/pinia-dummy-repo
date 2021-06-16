import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const store = createPinia()

createApp(App).use(store).mount('#app')
