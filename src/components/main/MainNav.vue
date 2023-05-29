<template>
  <section class="tw-flex tw-justify-between tw-w-full tw-bg-white tw-items-center tw-sticky tw-top-0"
    :class="{ 'isLoading': route.matched[1].name !== routeNames.main }">
    <MainSearch class="tw-w-full" :items="items" @search="emit('search', $event)" @search-mode="emit('search-mode', $event)" />
    <span class="tw-text-left tw-whitespace-nowrap tw-mr-4"> <span class="tw-font-bold">{{ items?.length }}</span> left </span>
  </section>
</template>

<script setup lang="ts">
import { ArrayItemsTypes } from '@/types/products'
import MainSearch from '@/components/main/MainSearch.vue'
import { useRoute } from 'vue-router'
import { routeNames } from '@/router/routeNames';

const route = useRoute()

type EmitsTypes = {
  (e: 'search-mode', value: number): void
  (e: 'search', value: string): void
}

const emit = defineEmits<EmitsTypes>()

type PropsTypes = {
  items: Array<ArrayItemsTypes> | undefined
}

defineProps<PropsTypes>()
</script>
