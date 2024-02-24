// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue'
import SetupPrimevue from './primevue'

import App from './App.vue'
import store from './store'
import router from './router'

// Font Awesome
import '@fortawesome/fontawesome-free/js/all'
// Pixeden Stroke
import 'pixeden-stroke-7-icon/pe-icon-7-stroke/dist/pe-icon-7-stroke.css'
// Linearicons
import '@icon/linearicons/linearicons.css'
// Iconicons
import 'ionicons/css/ionicons.min.css'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
// Custom CSS
import './main.css'

const app = createApp(App)
SetupPrimevue(app)

app.use(store)
app.use(router)
app.mount('#app')

