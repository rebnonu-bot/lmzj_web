import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../components/Layout.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: 'product',
        name: 'Product',
        component: () => import('../views/Product.vue')
      },
      {
        path: 'pricing',
        name: 'Pricing',
        component: () => import('../views/Pricing.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/About.vue')
      },
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('../views/Blog.vue')
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' };
  }
});

export default router;
