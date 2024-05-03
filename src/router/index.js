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
    meta: { requiresAuth: true }
  },
  {
    path: '/menu',
    name: 'Menu',
    component: MenuView,
    meta: { requiresAuth: true }
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: DeliveryView,
    meta: { requiresAuth: true }
  },
  {
    path: '/summary',
    name: 'Summary',
    component: SummaryView,
    meta: { requiresAuth: true },
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component: ThanksView,
    meta: { requiresAuth: true }
  },
  {
    path: '/account',
    name: 'Account',
    component: AccountView,
    meta: { requiresAuth: true }
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
      next();
    }
  });
});

export default router;
