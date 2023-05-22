<template>
    <h1 class="font-h1 tw-text-lime-500 tw-text-center tw-mb-6">Products</h1>
    <input class="tw-w-full font-h4 tw-border-0 tw-p-4 tw-shadow-sm placeholder:tw-text-neutral-500" autofocus
        autocomplete="off" placeholder="Search..." />
</template>

<script setup lang="ts">
import {ArrayItemsTypes} from '@/types/products'

type PropsTypes = {
  items: Array<ArrayItemsTypes>|undefined
}

defineProps<PropsTypes>()
</script>