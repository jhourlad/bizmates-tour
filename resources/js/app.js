import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Routes
import { routes } from './routes'

require('./bootstrap')

window.Vue = require('vue').default

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueAxios, axios)

// Register Routes
export const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes
})

Vue.component('app-header', require('./components/HeaderComponent.vue').default)

new Vue({
  router
}).$mount('#app')
