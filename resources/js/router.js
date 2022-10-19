import Vue from "vue";
import VueRouter from "vue-router";
import ContactPage from './pages/ContactPage.vue'

Vue.use(VueRouter);

const router = new VueRouter ({
    mode: "history",
    routes: [
        {
            path:'/contact',
            name: 'contact',
            component: ''
        }
    ]
});

export default router