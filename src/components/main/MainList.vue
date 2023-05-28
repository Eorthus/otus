<template>
    <ul>
        <li class="tw-relative tw-border-0 tw-border-b tw-border-solid tw-border-neutral-200 last-child:border-b-0 tw-flex tw-px-4 tw-py-2 tw-flex-col"
            v-for="item in filterdItems" :key="item.id">
            <MainListItem :item="item" />
        </li>
    </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ArrayItemsTypes } from '@/types/products'
import MainListItem from '@/components/main/MainListItem.vue'
import { searchModes } from '@/utils/maps'
import {searchHandler} from '@/utils/searchHandler'

type PropsTypes = {
    items: Array<ArrayItemsTypes> | undefined
    search: string | undefined
    searchMode: number
}

const props = defineProps<PropsTypes>()

const filterdItems = computed(() => {
    if (!props.search) {
        return props.items
    }
    if (props.searchMode === searchModes.title) {
        return searchHandler(props.items, 'title', props.search)
    }
    if (props.searchMode === searchModes.price) {
        return searchHandler(props.items, 'price', props.search)
    }
    return []
})
</script>