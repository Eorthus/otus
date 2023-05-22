<template>
    <section class="tw-flex tw-justify-between tw-w-full tw-p-4 tw-bg-white">
        <span class="tw-text-left"> <span class="tw-font-bold">{{ items?.length }}</span> left </span>
    </section>
</template>

<script setup lang="ts">
import {ArrayItemsTypes} from '@/types/products'

type PropsTypes = {
  items: Array<ArrayItemsTypes>|undefined
}

defineProps<PropsTypes>()
</script>
