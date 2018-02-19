/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')

window.Vue = require('vue')

import VueRouter from 'vue-router'
import router from './routes'
import App from './components/App'
import VeeValidate from 'vee-validate'

Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.component('app', App)

const app = new Vue({
    el: '#app',
    router
})
