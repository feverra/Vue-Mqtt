import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Home2 from '../views/Home2'
import About from '../views/About'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/2',
        name: 'Home2',
        component: Home2
    }, , {
        path: '/3',
        name: 'Home3',
        component: () =>
            import ( /* webpackChunkName: "home3" */ '../views/Home3')
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/about2',
        name: 'About2',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router