<template>
    <div :class="{ isLoading }">
        <MainNav :items="list" @search="search = $event" @search-mode="searchMode = $event" />
        <ul>
            <li class="tw-relative tw-border-0 tw-border-b tw-border-solid tw-border-neutral-200 last-child:border-b-0 tw-flex tw-px-4 tw-py-2 tw-flex-col"
                v-for="item in filterdItems" :key="item.id">
                <MainListItem :item="item" @add-cart="emit('add-cart', $event)" @checkout="emit('checkout', $event)" />
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { ArrayItemsTypes } from '@/types/products'
import MainListItem from '@/components/main/MainListItem.vue'
import { searchModes } from '@/utils/maps'
import { searchHandler } from '@/utils/searchHandler'
import MainNav from '@/components/main/MainNav.vue'
import { apiGetJson } from '@/api/api'

type EmitsTypes = {
    (e: 'checkout', value: number): void
    (e: 'add-cart', value: number): void
}

const emit = defineEmits<EmitsTypes>()

const list = ref<Array<ArrayItemsTypes>>()

const search = ref<string>()

const searchMode = ref<number>(searchModes.title)

const isLoading = ref(false)

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

const init = async () => {
    isLoading.value = true
    try {
        list.value = await apiGetJson()
    }
    catch {
        alert('Error request')
    }
    finally {
        isLoading.value = false
    }
}

onMounted(init)
</script>