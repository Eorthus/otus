<template>
  <section class="tw-flex tw-justify-between tw-w-full tw-bg-white tw-items-center tw-sticky tw-top-0"
    :class="{ 'isLoading': route.matched[1].name !== routeNames.main }">
    <MainSearch class="tw-w-full" :items="list" @search="search = $event" @search-mode="searchMode = $event" />
    <span class="tw-text-left tw-whitespace-nowrap tw-mr-4"> <span class="tw-font-bold">{{ list?.length }}</span> left
    </span>
  </section>
</template>

<script setup lang="ts">
import MainSearch from '@/components/main/MainSearch.vue'
import { useRoute } from 'vue-router'
import { routeNames } from '@/router/routeNames';
import { storeToRefs } from 'pinia'
import { useCatalogStore } from '@/stores/catalog'

const { search, searchMode, list } = storeToRefs(useCatalogStore())

const route = useRoute()
</script>
