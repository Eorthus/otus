import { defineStore, storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { ArrayItemsTypes } from '@/types/products'
import { apiPostOrderJson } from '@/api/api'
import { SendItem } from '@/types/products'
import { routeNames } from '@/router/routeNames'
import { useRouter } from 'vue-router'
import { useCatalogStore } from './catalog'

export const useCartStore = defineStore('cart', () => {
  const { list } = storeToRefs(useCatalogStore())

  const router = useRouter()

  const isLoading = ref<boolean>(false)

  const items = ref<Array<ArrayItemsTypes>>([])

  const cartItems = ref<Array<number | undefined>>([])

  const checkoutHandler = (id: number | undefined) => {
    cartItems.value = [id]
    items.value.push(list.value.find((el2: ArrayItemsTypes) => +el2.id === +id))
    router.push({ name: routeNames.cart })
  }

  const addCartHandler = (id: number | undefined) => {
    cartItems.value.push(id)
    items.value.push(list.value.find((el2: ArrayItemsTypes) => +el2.id === +id))
  }

  const changeSelectedHandler = () => {
    cartItems.value = items.value?.map((el) => el?.id)
  }

  const submitHandler = async (form: SendItem) => {
    isLoading.value = true
    try {
      await apiPostOrderJson(form, cartItems.value)
      alert('Send successful')
    } catch {
      alert('Error request')
    } finally {
      isLoading.value = false
    }
  }

  watch(() => items.value.length, changeSelectedHandler)

  return {
    items,
    submitHandler,
    isLoading,
    checkoutHandler,
    cartItems,
    addCartHandler
  }
})
