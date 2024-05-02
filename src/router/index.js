/*
import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
// import ProductView from '../views/ProductView.vue'
// import CartView from '../views/CartView.vue'
import AccountView from '../views/AccountView.vue'
// import NotificationsView from '../views/NotificationsView.vue'
import DeliveryView from '../views/DeliveryView.vue'
import SummaryView from '../views/SummaryView.vue'
import ThanksView from '../views/ThanksView.vue'

const routes = [{
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
// {
//   path: '/cart',
//   name: 'Cart',
//   component: CartView
// },
// {
//   path: '/product',
//   name: 'Product',
//   component: ProductView
// },
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
// {
//   path: '/notifications',
//   name: 'Notifications',
//   component: NotificationsView
// },
{
  path: '/account',
  name: 'Account',
  component: AccountView
}
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/AboutView.vue')
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
*/
import { createRouter, createWebHistory } from 'vue-router';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import WelcomeView from '../views/WelcomeView.vue';
import LoginView from '../views/LoginView.vue';
import HomeView from '../views/HomeView.vue';
import MenuView from '../views/MenuView.vue';
import AccountView from '../views/AccountView.vue';
import DeliveryView from '../views/DeliveryView.vue';
import SummaryView from '../views/SummaryView.vue';
import ThanksView from '../views/ThanksView.vue';

const routes = [
  {
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
    component: HomeView,
    meta: { requiresAuth: true }  // Requires authentication
  },
  {
    path: '/menu',
    name: 'Menu',
    component: MenuView,
    meta: { requiresAuth: true }  // Requires authentication
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: DeliveryView,
    meta: { requiresAuth: true }  // Requires authentication
  },
  {
    path: '/summary',
    name: 'Summary',
    component: SummaryView,
    meta: { requiresAuth: true }  // Requires authentication
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component: ThanksView,
    meta: { requiresAuth: true }  // Requires authentication
  },
  {
    path: '/account',
    name: 'Account',
    component: AccountView,
    meta: { requiresAuth: true }  // Requires authentication
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const auth = getAuth();
  
  onAuthStateChanged(auth, user => {
    if (requiresAuth && !user) {
      next({ name: 'Login' });  // Redirect to Login if not authenticated
    } else {
      next();  // Proceed to route
    }
  });
});

export default router;
