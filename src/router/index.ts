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
      path: '/accounts',
      name: 'accounts',
      component: () => import('../views/AccountsView.vue')
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('../views/SuportsView.vue')
    },
    {
      path: '/support/chat',
      name: 'support-chat',
      component: () => import('../views/ChatViewVue.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dasboards/DashboardView.vue')
    },
    {
      path: '/dashboard/accounts',
      name: 'dashboard-accounts',
      component: () => import('../views/Dasboards/AccountsView.vue')
    },
    {
      path: '/dashboard/manage',
      component: () => import('../views/Dasboards/ManageAccounts.vue'),
      name: 'manage'
    },
    {
      path: '/dashboard/sold-accounts',
      component: () => import('../views/Dasboards/SoldAccounts.vue'),
      name: 'sold-accounts'
    },
    {
      path: '/dashboard/manage-sold-account',
      component: () => import('../views/Dasboards/ManageSoldAccount.vue'),
      name: 'manage-sold-account'
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
})

export default router
