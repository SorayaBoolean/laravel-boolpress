import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

import ContactPage from './pages/ContactPage.vue';
import AboutUspage from './pages/AboutUspage.vue';
import HomePage from './pages/HomePage.vue';
import NotFound from './pages/NotFound.vue';
import PostsPage from './pages/PostsPage.vue';
import SinglePost from './pages/SinglePost.vue'

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
            path:'/blog',
            name: 'blog',
            component: PostsPage
        },
        {
            path:'/about-us',
            name: 'about-us',
            component: AboutUspage
        },
        {
            path:'/*',
            name: 'not-found',
            component: NotFound
        },

    ]
});

export default router