import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/components/Login.vue';  
import AppDashboard from '@/components/AppDashboard.vue'; 
import UserProfile from '@/components/UserProfile.vue';
import MyPortfolio from '@/components/MyPortfolio.vue';
import ContactForm from '@/components/ContactForm.vue';
import CreativePage from '@/components/CreativePage.vue';

const routes = [
  { path: '/', component: LoginPage },  // Correct path for LoginPage
  { path: '/dashboard', component: AppDashboard, name: 'Dashboard', meta: { requiresAuth: true } },  // Use AppDashboard instead of Dashboard
  { path: '/profile', component: UserProfile },
  { path: '/portfolio', component: MyPortfolio },
  { path: '/contact', component: ContactForm },
  { path: '/creative', component: CreativePage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Navigation guard to check authentication before accessing protected routes
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('auth_token');
  
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/');  // Redirect to login if not authenticated
  } else {
    next();
  }
});

export default router;
