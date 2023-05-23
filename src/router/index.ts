import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/MainView.vue'),
      redirect: { name: 'home.list' },
      children: [
        {
          path: '',
          name: 'home.list',
          component: () => import('@/components/main/MainList.vue')
        },
        {
          path: 'add',
          name: 'home.add',
          component: () => import('@/components/forms/MainAddForm.vue')
        }
        // {
        //   path: 'send',
        //   name: 'home.send',
        //   component: () => import('@/components/main/MainList.vue'),
        // },
      ]
    }
  ]
})

export default router
