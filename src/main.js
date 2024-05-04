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

// Lock Orientation
import { useScreenOrientation } from '@vueuse/core'
const {
    isSupported,
    orientation,
    angle,
    lockOrientation,
    unlockOrientation,
  } = useScreenOrientation()
lockOrientation('portrait-primary')


createApp(App).use(router).mount('#app')
