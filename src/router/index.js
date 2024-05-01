import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import ProductView from '../views/ProductView.vue'
import CartView from '../views/CartView.vue'
import PaymentView from '../views/PaymentView.vue'
import WaitView from '../views/WaitView.vue'
import AccountView from '../views/AccountView.vue'
import NotificationsView from '../views/NotificationsView.vue'
import DeliveryView from '../views/DeliveryView.vue'
import SummaryView from '../views/SummaryView.vue'
import ThanksView from '../views/ThanksView.vue'

const router = createRouter({
    history: createWebHistory(),
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
            path: '/cart',
            name: 'Cart',
            component: CartView
        },
        {
            path: '/product',
            name: 'Product',
            component: ProductView
        },
        {
            path: '/delivery',
            name: 'Delivery',
            component: DeliveryView
        },
        {
            path: '/summary',
            name: 'Summary',
            component: SummaryView
        },
        {
            path: '/thanks',
            name: 'Thanks',
            component: ThanksView
        },
        {
            path: '/notifications',
            name: 'Notifications',
            component: NotificationsView
        },
        {
            path: '/account',
            name: 'Account',
            component: AccountView
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