// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      // {
      //   path: '',
      //   name: 'Home',
      //   component: () => import('@/views/Home.vue'),
      // },
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: '/dashboard', 
        name: 'dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: '/dashboardSuppliers', 
        name: 'dashboardSuppliers',
        component: () => import('@/views/DashboardSuppliers.vue'),
      },
      {
        path: '/dashboardStock', 
        name: 'dashboardStock',
        component: () => import('@/views/DashboardStock.vue'),
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
      {
        path: '/product', 
        name: 'product',
        component: () => import('@/views/Product.vue'),
      },
      
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
