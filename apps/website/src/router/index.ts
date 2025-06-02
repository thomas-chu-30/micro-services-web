import { createRouter, createWebHistory } from 'vue-router'
import IFrameSrc from '../components/global/IFrameSrc.vue'
import DefaultLayout from '../layouts/default.vue'
import HomeView from '../views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/tailwindcss',
          name: 'iframe-tailwindcss',
          component: IFrameSrc,
          meta: {
            iframeSrc: 'https://www.tailwindcss.com',
          },
        },
        {
          path: '/web',
          name: 'test',
          component: IFrameSrc,
          meta: {
            iframeSrc: 'http://localhost:5173',
          },
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/about.vue'),
    },
  ],
})

export default router
