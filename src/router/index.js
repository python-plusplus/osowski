import { createRouter, createWebHistory } from "vue-router"


const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/",
        name: "home",
        component: () => import('@/views/Home.vue'),
        meta: {
            title: 'Home'
        }
    },
    {
        path:"/about",
        name: "about",
        component: () => import('@/views/About.vue'),
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
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/Register.vue'),
        meta: {
            title: 'Register'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue'),
        meta: {
            title: 'Login'
        }
    },
    {
        path: '/forgotpassword',
        name: 'forgotpassword',
        component: () => import('@/views/ForgotPassword.vue'),
        meta: {
            title: 'Forgot Password'
        }
    },] 
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | Osowski`;
    next();
})
export default router;