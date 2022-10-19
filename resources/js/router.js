import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

import ContactPage from './pages/ContactPage.vue';

const router = new VueRouter ({
    mode: "history",
    routes: [
        {
            path:'/contact',
            name: 'contact',
            component: ContactPage
        }
    ]
});

export default router