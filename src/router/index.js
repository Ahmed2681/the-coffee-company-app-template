import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Main from '@/layouts/TheMainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: Main,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        layout: Main,
      },
    },
  ],
})

export default router
