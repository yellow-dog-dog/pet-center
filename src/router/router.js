import {createRouter, createWebHashHistory} from "vue-router";

const routers = [
    {
        path: '/',
        component: () => import('../views/HomeView.vue')
    }, {
        path: '/login',
        component: () => import('../views/LoginView.vue')
    }, {
        path: '/register',
        component: () => import('../views/RegisterView.vue')
    }, {
        path: '/account',
        component: () => import('../views/AccountView.vue')
    }, {
        path: '/release',
        component: () => import('../views/ReleaseView.vue')
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
})
export default router;