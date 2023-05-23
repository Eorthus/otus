<template>
    <ul>
        <li class="tw-relative tw-border-0 tw-border-b tw-border-solid tw-border-neutral-200 last-child:border-b-0 tw-flex tw-px-4 tw-py-2 tw-flex-col"
            v-for="item in filterdItems" :key="item.id">
            <span><span class="tw-text-lime-300 font-h6">#{{ item.id }}</span>&nbsp;{{ item.title }}</span>
            <span class="font-h6 tw-text-neutral-300">${{ item.price }}</span>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ArrayItemsTypes } from '@/types/products'

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
    if (props.searchMode === 0) {
        return props.items?.filter((el) => {
            return el.title.toLowerCase().indexOf(props.search.toLowerCase()) > -1;
        })
    }
    if (props.searchMode === 1) {
        return props.items?.filter((el) => {
            return String(el.price).indexOf(props.search.toLowerCase()) > -1;
        })
    }
    return []
})
</script>