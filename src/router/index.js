import { createRouter, createWebHashHistory } from 'vue-router'
import middleware from '@/middleware';

// Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/homePage.vue'),
        meta: {
            requiresAuth: true,
          },
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
        path: '/detail/:concertId',
        name: 'detailConcert',
        component: () => import('../components/detailConcert.vue'),
        meta: {
            requiresAuth: true,
          },
    },
    {
        path: '/selectzone/:concertId',
        name: 'zoneArea',
        component: () => import('../components/selectZoneArea.vue'),
        meta: {
            requiresAuth: true,
          },
    },
    {
        path: '/payment',
        name: 'buyTicket',
        component: () => import('../components/paymentTicket.vue'),
        meta: {
            requiresAuth: true,
          },
    },
    {
        path: '/getticket/:ticketId',
        name: 'getTicket',
        component: () => import('../components/getTicket.vue'),
        meta: {
            requiresAuth: true,
          },
    },
    {
        path: '/myticket',
        name: 'AllTicket',
        component: () => import('../components/myTickets.vue'),
        meta: {
            requiresAuth: true,
          },
    },
    {
        path: '/allConcert',
        name: 'AllConcerts',
        component: () => import('../components/allConcert.vue'),
        meta: {
            requiresAuth: true,
          },
    },

]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach(middleware);
export default router