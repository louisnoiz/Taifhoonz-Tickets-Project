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
    }

]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router