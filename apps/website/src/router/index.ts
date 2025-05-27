import { createRouter, createWebHistory } from 'vue-router'
import IFrameSrc from '../components/global/IFrameSrc.vue'
import DefaultLayout from '../layouts/default.vue'
import HomeView from '../views/HomeView.vue'

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
          path: '/iframe',
          name: 'iframe',
          component: IFrameSrc,
          meta: {
            iframeSrc: 'https://www.tailwindcss.com',
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
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
