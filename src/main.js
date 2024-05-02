import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
// PWA
import './registerServiceWorker'
// Router
import router from './router'

createApp(App).use(router).mount('#app')
