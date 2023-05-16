import { createRouter, createWebHashHistory } from 'vue-router'

// Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/homePage.vue')
    },
    {
        path: '/helloworld',
        name: 'Hello World',
        component: () => import('../components/HelloWorld.vue')
    },
    {
        path: '/loginpage',
        name: 'loginPage',
        component: () => import('../components/loginPage.vue')
    },
    {
        path: '/signuppage',
        name: 'signupPage',
        component: () => import('../components/signupPage.vue')
    },
    {
        path: '/detail',
        name: 'detailConcert',
        component: () => import('../components/detailConcert.vue')
    },
    {
        path: '/selectzone',
        name: 'zoneArea',
        component: () => import('../components/selectZoneArea.vue')
    },
    {
        path: '/payment',
        name: 'buyTicket',
        component: () => import('../components/paymentTicket.vue')
    },
    {
        path: '/getticket',
        name: 'getTicket',
        component: () => import('../components/getTicket.vue')
    },
    {
        path: '/myticket',
        name: 'AllTicket',
        component: () => import('../components/myTickets.vue')
    },
    {
        path: '/allConcert',
        name: 'AllConcerts',
        component: () => import('../components/allConcert.vue')
    },

]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router