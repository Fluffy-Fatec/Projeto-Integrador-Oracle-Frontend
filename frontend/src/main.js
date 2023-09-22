import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import 'font-awesome/css/font-awesome.css'

// Plugins
axios.defaults.baseURL =  'http://localhost:8081/'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
