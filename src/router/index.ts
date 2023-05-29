import { createRouter, createWebHistory } from 'vue-router'
import { routeNames } from './routeNames'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/MainView.vue'),
      redirect: { name: routeNames.main },
      children: [
        {
          path: 'list',
          name: routeNames.main,
          component: () => import('@/components/main/MainList.vue')
        },
        {
          path: 'add',
          name: routeNames.add,
          component: () => import('@/components/forms/MainAddForm.vue')
        },
        {
          path: 'send',
          name: routeNames.send,
          component: () => import('@/components/forms/MainSendForm.vue'),
        },
        {
          path: 'cart',
          name: routeNames.cart,
          component: () => import('@/components/cart/ProductCart.vue'),
        },
        {
          path: 'card/:id',
          name: routeNames.card,
          component: () => import('@/components/card/ProductCard.vue'),
        },
      ]
    }
  ]
})

export default router
