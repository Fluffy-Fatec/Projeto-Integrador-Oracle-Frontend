// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/dashboard', 
        name: 'dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: '/upload', 
        name: 'upload',
        component: () => import('@/views/Upload.vue'),
      },
      {
        path: '/suppliers', 
        name: 'suppliers',
        component: () => import('@/views/Suppliers.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
