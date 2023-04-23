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
    }
    

]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router