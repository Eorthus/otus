<template>
  <section class="tw-flex tw-justify-between tw-w-full tw-pl-4 tw-bg-white tw-items-center">
    <span class="tw-text-left"> <span class="tw-font-bold">{{ items?.length }}</span> left </span>
    <div>
      <button class="tw-p-4">
        <RouterLink :to="{name:'home.add'}">
          <PlusIcon class="tw-w-5 tw-h-5" />
        </RouterLink>
      </button>
      <button class="tw-p-4">
        <RouterLink :to="{name:'home.send'}">
        <SendIcon class="tw-w-5 tw-h-5" />
      </RouterLink>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrayItemsTypes } from '@/types/products'
import PlusIcon from '../icons/PlusIcon.vue';
import SendIcon from '../icons/SendIcon.vue';

type PropsTypes = {
  items: Array<ArrayItemsTypes> | undefined
}

defineProps<PropsTypes>()
</script>
