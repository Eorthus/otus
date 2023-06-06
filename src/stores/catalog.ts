import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { searchModes } from '@/utils/maps'
import { searchHandler } from '@/utils/searchHandler'
import { ArrayItemsTypes } from '@/types/products'
import { apiGetJson } from '@/api/api'

export const useCatalogStore = defineStore('catalog', () => {
  const isLoading = ref(false)

  const search = ref<string>()

  const list = ref<Array<ArrayItemsTypes>>([])

  const searchMode = ref<number>(searchModes.title)

  const filterdItems = computed(() => {
    if (!search.value) {
      return list.value
    }
    if (searchMode.value === searchModes.title) {
      return searchHandler(list.value, 'title', search.value)
    }
    if (searchMode.value === searchModes.price) {
      return searchHandler(list.value, 'price', search.value)
    }
    return []
  })

  const getProducts = async () => {
    isLoading.value = true
    try {
      list.value = await apiGetJson()
    } catch {
      alert('Error request')
    } finally {
      isLoading.value = false
    }
  }

  return { isLoading, search, list, searchMode, filterdItems, getProducts }
})
