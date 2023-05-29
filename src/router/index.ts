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
          component: () => import('@/components/main/MainList.vue'),
          meta: { title: 'Products list' }
        },
        {
          path: 'add',
          name: routeNames.add,
          component: () => import('@/components/forms/MainAddForm.vue'),
          meta: { title: 'Add product' }
        },
        {
          path: 'send',
          name: routeNames.send,
          component: () => import('@/components/forms/MainSendForm.vue'),
          meta: { title: 'Send form' }
        },
        {
          path: 'cart',
          name: routeNames.cart,
          component: () => import('@/components/cart/ProductCart.vue'),
          meta: { title: 'Cart' }
        },
        {
          path: 'card/:id',
          name: routeNames.card,
          component: () => import('@/components/card/ProductCard.vue'),
          meta: { title: 'Product card' }
        }
      ]
    }
  ]
})

router.beforeEach((to) => {
  const DEFAULT_TITLE = 'Products'
  console.log(to.meta.title)
  if (to.meta.title) {
    document.title = `${to.meta.title} | ${DEFAULT_TITLE}`
    return
  }
  document.title = DEFAULT_TITLE
})

export default router
