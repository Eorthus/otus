<template>
    <div class="product-card tw-flex tw-items-center">
        <div class="tw-w-10 tw-mr-6">
            <img class="tw-w-full tw-object-cover" :src="item.image" alt="product">
        </div>
        <div class="tw-flex tw-flex-col tw-pr-6 tw-min-h-[74px]">
            <router-link :to="{ name: routeNames.card, params: { id: item.id } }"
                class="tw-text-neutral-900 hover:tw-underline"><span class="tw-text-lime-300 font-h6">#{{ item.id
                }}</span>&nbsp;{{ item.title }}</router-link>
            <span class="font-h6 tw-text-neutral-300">${{ item.price }}</span>
        </div>
        <div v-if="cartMode" class="product-card__actions tw-hidden tw-flex-col tw-ml-auto">
            <button @click="emit('delete-item')">
                <CloseIcon class="icon-20 tw-m-1" />
            </button>
        </div>
        <div v-else class="product-card__actions tw-hidden tw-flex-col tw-ml-auto">
            <button @click="emit('add-cart', +item.id)">
                <CartIcon class="icon-20 tw-m-1" />
            </button>
            <button @click="emit('checkout', +item.id)">
                <PlusIcon class="icon-20 tw-m-1" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { type ArrayItemsTypes } from '@/types/products'
import { routeNames } from '@/router/routeNames'
import CartIcon from '@/components/icons/CartIcon.vue'
import PlusIcon from '@/components/icons/PlusIcon.vue';
import CloseIcon from '@/components/icons/CloseIcon.vue'

type PropsTypes = {
    item: ArrayItemsTypes
    cartMode: boolean
}
type EmitsTypes = {
    (e: 'checkout', value: number|undefined): void
    (e: 'add-cart', value: number|undefined): void
    (e: 'delete-item'): void
}

const emit = defineEmits<EmitsTypes>()

defineProps<PropsTypes>()
</script>

<style lang="scss" scoped>
.product-card:hover {
    .product-card__actions {
        @apply tw-flex;
    }
}
</style>