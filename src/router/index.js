import Vue from 'vue';
import VueRouter from 'vue-router';
import IndexPage from '@/pages/IndexPage.vue'
import BlogPage from '@/pages/BlogPage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'

import NotFoundPage from '@/pages/NotFoundPage.vue'


Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: IndexPage,
        },
        {
            path: '/main',
            component: IndexPage,
        },
        {
            path: '/blog',
            component: BlogPage,
        },
        {
            path: '/blog/:page',
            component: BlogPage,
        },
        {
            path: '/project',
            component: ProjectsPage,
        },
        {
            path: '/project/:page',
            component: ProjectsPage,
        },
        {
            path: '*',
            component: NotFoundPage,
        },




    ]
})