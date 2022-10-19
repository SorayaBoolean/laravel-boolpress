import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

import ContactPage from './pages/ContactPage.vue';
import AboutUspage from './pages/AboutUspage.vue';
import HomePage from './pages/HomePage.vue';

const router = new VueRouter ({
    mode: "history",
    routes: [
        {
            path:'/',
            name: 'home',
            component: HomePage
        },
        {
            path:'/contact',
            name: 'contact',
            component: ContactPage
        },
        {
            path:'/about-us',
            name: 'about-us',
            component: AboutUspage
        },
    ]
});

export default router