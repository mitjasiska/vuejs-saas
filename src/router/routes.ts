import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: import('@/views/HomePage.vue')
      }
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
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
    ]
  }
];

export default routes;
