import VueRouter from 'vue-router'
import Store from './store'
import JwtToken from './helpers/jwt'

let routes = [
    {
        path: '/',
        name: 'home',
        component: require('./components/pages/Home'),
        meta: {}
    },
    {
        path: '/about',
        component: require('./components/pages/About'),
        meta: {}
    },
    {
        path: '/posts/:id',
        name: 'posts',
        component: require('./components/posts/Post'),
        meta: {}
    },
    {
        path: '/register',
        name: 'register',
        component: require('./components/register/Register'),
        meta: { requireGuest: true }
    },
    {
        path: '/confirm',
        name: 'confirm',
        component: require('./components/confirm/Email'),
        meta: {}
    },
    {
        path: '/login',
        name: 'login',
        component: require('./components/login/Login'),
        meta: { requireGuest: true }
    },
    {
        path: '/profile',
        name: 'profile',
        component: require('./components/user/Profile'),
        meta: { requireAuth: true }
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (Store.state.AuthUser.authenticated || JwtToken.getToken()) {
            return next()
        } else {
            return next({ name: 'login' })
        }
    }

    if (to.meta.requireGuest) {
        if (Store.state.AuthUser.authenticated || JwtToken.getToken()) {
            return next({ name: 'home' })
        } else {
            return next()
        }
    }

    next()
})

export default router
