import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"



const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/",
        name: "home",
        component: Home,
        meta: {
            title: 'Home'
        }
    },
    {
        path:"/about",
        name: "about",
        component: About,
        meta: {
            title: 'About'
        }
    },
    {
        path: '/services',
        name: 'services',
        component: () => import('@/views/Services.vue'),
        meta: {
            title: 'Services'
        }
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('@/views/Blog.vue'),
        meta: {
            title: 'Blog'
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/Contact.vue'),
        meta: {
            title: 'Contact'
        }
    },] 
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | Osowski`;
    next();
})
export default router;