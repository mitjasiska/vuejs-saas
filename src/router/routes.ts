import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: import('@/views/HomePage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: import('@/views/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: import('@/views/RegisterPage.vue')
  }
];

export default routes;
