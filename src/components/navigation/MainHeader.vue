<template>
    <div class="tw-flex tw-shadow-sm tw-bg-white">
        <button class="tw-px-4" @click="changeSearchModeHandler(0)">T</button>
        <button class="tw-px-4" @click="changeSearchModeHandler(1)">$</button>
        <input class="tw-w-full font-h4 tw-border-0 tw-p-4 placeholder:tw-text-neutral-500" autofocus autocomplete="off"
            :placeholder="searchMode === 0 ? 'Search by title...' : 'Search by price...'"
            @input="$emit('search', ($event.target as HTMLInputElement).value)" />
    </div>
</template>

<script setup lang="ts">
import { ArrayItemsTypes } from '@/types/products'
import { ref } from 'vue'

type PropsTypes = {
    items: Array<ArrayItemsTypes> | undefined
}

type EmitsTypes = {
    (e: 'search-mode', value: number): void
}

defineProps<PropsTypes>()

const emit = defineEmits<EmitsTypes>()

const searchMode = ref<number>(0)

const changeSearchModeHandler = (value: number) => {
    searchMode.value = value
    emit('search-mode', value)
}
</script>