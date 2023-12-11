/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import axios from 'axios'
import 'font-awesome/css/font-awesome.css'
// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// axios.defaults.baseURL =  'http://localhost:8080/'
axios.defaults.baseURL =  process.env.BACKEND_URL
const app = createApp(App)

registerPlugins(app)

app.mount('#app')
