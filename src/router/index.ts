import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/streaming',
      name: 'streaming',
      component: () => import('../views/StreamingView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dasboards/DashboardView.vue'),
    },
    {
      path: '/dashboard/tally',
      name: 'dashboard',
      component: () => import('../views/Dasboards/TallyView.vue'),
    },
    {
      path: '/dashboard/create',
      component: () => import('../views/Dasboards/CreateView.vue'),
      name: 'create'
    },
    {
      path: '/dashboard/edit',
      component: () => import('../views/Dasboards/EditView.vue'),
       name: 'edit'
    },
    {
      path: '/dashboard/delete',
      component: () => import('../views/Dasboards/DeleteView.vue'),
      name: 'delete'
    },
    {
      path: '/session/login',
      component: () => import('../views/LoginView.vue'),
      name: 'login'
    },
    {
      path: '/session/register',
      component: () => import('../views/RegisterView.vue'),
      name: 'register'
    }
  ]
});

export default router
