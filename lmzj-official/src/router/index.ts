import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const _env = import.meta.env.MODE || 'development';

// 官网路由
const websiteRouterList: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layouts/website.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/pages/website/home/index.vue'),
      },
      {
        path: 'product',
        name: 'Product',
        component: () => import('@/pages/website/product/index.vue'),
      },
      {
        path: 'solution',
        name: 'Solution',
        component: () => import('@/pages/website/solution/index.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/pages/website/about/index.vue'),
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('@/pages/website/contact/index.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home',
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: websiteRouterList,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' };
  },
});

export default router;
