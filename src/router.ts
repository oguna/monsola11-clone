import {createRouter, createWebHashHistory} from 'vue-router';
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
    history: createWebHashHistory("/monsola11-clone"),
    strict: true,
    routes,
})

export default router