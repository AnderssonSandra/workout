import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

//routes
const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/add-activity',
        name: 'Registrera aktivitet',
        component: () => import(/* webpackChunkName: "about" */ '../views/AddActivity.vue'),
    },
    {
        path: '/my-activities',
        name: 'Mina Aktiviteter',
        component: () => import(/* webpackChunkName: "about" */ '../views/MyActivities.vue'),
    },
    {
        path: '/edit-activity/:id',
        name: 'EditActivity',
        component: () => import(/* webpackChunkName: "about" */ '../views/EditActivity.vue'),
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
