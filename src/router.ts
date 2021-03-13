import {createRouter, createWebHistory} from 'vue-router';
import HomeView from './views/HomeView.vue'
import ContentView from './views/TableView.vue'

const routes = [
    {
        path: '/',
        component: HomeView,
    },
    {
        path: '/table/:amedas',
        component: ContentView,
        props: true,
    },
]

const router = createRouter({
    history: createWebHistory(),
    strict: true,
    routes,
})

export default router