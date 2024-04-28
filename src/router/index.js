import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import ProductView from '../views/ProductView.vue'
import CartView from '../views/CartView.vue'
import PaymentView from '../views/PaymentView.vue'
import WaitView from '../views/WaitView.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'Welcome',
            component: WelcomeView
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginView
        },
        {
            path: '/home',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/menu',
            name: 'Menu',
            component: MenuView
        },
        {
            path: '/product',
            name: 'Product',
            component: ProductView
        },
        {
            path: '/cart',
            name: 'Cart',
            component: CartView
        },
        {
            path: '/payment',
            name: 'Payment',
            component: PaymentView
        },
        {
            path: '/wait',
            name: 'Wait',
            component: WaitView
        },
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (About.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import('../views/AboutView.vue')
        // },
    ]
})

export default router