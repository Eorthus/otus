<template>
    <span><span class="tw-text-lime-300 font-h6">#{{ item.id }}</span>&nbsp;{{ item.title }}</span>
    <span class="font-h6 tw-text-neutral-300">${{ item.price }}</span>
</template>

<script setup lang="ts">
import { ArrayItemsTypes } from '@/types/products'

type PropsTypes = {
    item: ArrayItemsTypes
}

defineProps<PropsTypes>()
</script>