<template>
    <div :class="{ isLoading }">
        <template v-if="items?.length">
            <div class="tw-p-4">
                <span class="font-h2 tw-block tw-mb-6 tw-text-neutral-500">Cart</span>
                <ul>
                    <li class="tw-relative tw-border-0 tw-border-b tw-border-solid tw-border-neutral-200 last-child:border-b-0 tw-flex tw-px-4 tw-py-2 tw-flex-col"
                        v-for="(item, index) in items" :key="index">
                        <MainListItem cart-mode :item="item" @delete-item="deleteItemHandler(index)" />
                    </li>
                </ul>
            </div>
            <div class=" tw-p-4 tw-pt-0 tw-flex tw-flex-col">
                <span>Total count: <span class="tw-text-lime-500" data-test="count">{{ items.length }}</span></span>
                <span>Total price: <span class="tw-text-lime-500" data-test="price">{{ items.reduce((acc, el) => acc + el.price, 0) }}
                        $</span></span>
            </div>
            <MainSendForm @submit="submitHandler" />
        </template>
        <div v-else class="tw-p-4 tw-h-full tw-w-full tw-flex tw-justify-center tw-items-center tw-text-neutral-500 font-h2">
            Cart is empty
        </div>
    </div>
</template>

<script setup lang="ts">
import MainListItem from '@/components/main/MainListItem.vue'
import MainSendForm from '../forms/MainSendForm.vue';
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia';

const { items, isLoading } = storeToRefs(useCartStore())
const { submitHandler } = useCartStore()

const deleteItemHandler = (index: number) => {
    items.value.splice(index, 1)
}
</script>