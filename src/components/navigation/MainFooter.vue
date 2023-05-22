<template>
    <section class="tw-flex tw-justify-between tw-w-full tw-p-4 tw-bg-white">
        <span class="tw-text-left"> <span class="tw-font-bold">{{ items?.length }}</span> left </span>
    </section>

    <section class="tw-mx-auto tw-my-6 tw-text-neutral-400 tw-text-center font-small-medium">
    <p>
      Written by
      <a href="http://evanyou.me">Evan You</a>
    </p>
    <p>
      Part of
      <a href="http://todomvc.com">TodoMVC</a>
    </p>
    </section>
</template>

<script setup lang="ts">
import {ArrayItemsTypes} from '@/types/products'

type PropsTypes = {
  items: Array<ArrayItemsTypes>|undefined
}

defineProps<PropsTypes>()
</script>
