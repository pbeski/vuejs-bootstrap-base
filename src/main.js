import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import router from './router'

import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(VueRouter)
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
