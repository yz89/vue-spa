/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')

import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'
import App from './components/App'
import zh_CN from './locale/zh_CN'
import VeeValidate, { Validator } from 'vee-validate'
import JwtToken from './helpers/jwt'

axios.interceptors.request.use(
    function(config) {
        if (JwtToken.getToken()) {
            config.headers['Authorization'] = 'Bearer ' + JwtToken.getToken()
        }
        return config
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error)
    }
)

// Localize takes the locale object as the second argument (optional) and merges it.
Validator.localize('zh_CN', zh_CN)

// Install the Plugin.
Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.use(VeeValidate)

Vue.component('app', App)

const app = new Vue({
    el: '#app',
    router,
    store
})
