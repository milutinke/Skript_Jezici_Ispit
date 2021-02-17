import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false


// Plugins
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)

Object.defineProperty(Vue, "BASE_API_URL", {
  value: "http://localhost:80/api",
  writable: false
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')