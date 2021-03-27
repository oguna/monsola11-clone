import {createRouter, createWebHashHistory} from 'vue-router';
import HomeView from './views/HomeView.vue'
import TableView from './views/TableView.vue'
import MapView from './views/MapView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        props: true
    },
    {
        path: '/chart',
        name: 'chart',
        component: HomeView,
        props: true
    },
    {
        path: '/map',
        name: 'map',
        component: MapView,
    },
    {
        path: '/table/:amedas',
        name: 'table',
        component: TableView,
        props: true,
    },
]

const router = createRouter({
    history: createWebHashHistory("/monsola11-clone"),
    strict: true,
    routes,
})

export default router