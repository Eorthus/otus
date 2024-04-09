<template>
    <div class="tw-flex tw-shadow-sm tw-bg-white">
        <button class="tw-px-4" @click="changeSearchModeHandler(searchModes.price)"
            :class="{ 'tw-bg-neutral-100': searchMode === searchModes.price }">$</button>
        <button class="tw-px-4" @click="changeSearchModeHandler(searchModes.title)"
            :class="{ 'tw-bg-neutral-100': searchMode === searchModes.title }">T</button>
        <input class="tw-w-full font-h4 tw-border-0 tw-p-4 placeholder:tw-text-neutral-500" style="border:none"
            autocomplete="off" :placeholder="searchMode === searchModes.title ? 'Search by title...' : 'Search by price...'"
            @input="$emit('search', ($event.target as HTMLInputElement).value)" />
    </div>
</template>

<script setup lang="ts">
import { ArrayItemsTypes } from '@/types/products'
import { ref } from 'vue'
import { searchModes } from '@/utils/maps'

type PropsTypes = {
    items: Array<ArrayItemsTypes> | undefined
}

type EmitsTypes = {
    (e: 'search-mode', value: number): void
}

defineProps<PropsTypes>()

const emit = defineEmits<EmitsTypes>()

const searchMode = ref<number>(searchModes.title)

const changeSearchModeHandler = (value: number) => {
    searchMode.value = value
    emit('search-mode', value)
}
</script>