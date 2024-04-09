<template>
    <div :class="{ isLoading }">
        <MainNav/>
        <ul>
            <li class="tw-relative tw-border-0 tw-border-b tw-border-solid tw-border-neutral-200 last-child:border-b-0 tw-flex tw-px-4 tw-py-2 tw-flex-col"
                v-for="item in filterdItems" :key="item.id">
                <MainListItem :item="item" @add-cart="addCartHandler" @checkout="checkoutHandler" />
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import MainNav from '@/components/main/MainNav.vue'
import { onMounted } from 'vue'
import MainListItem from '@/components/main/MainListItem.vue'
import { storeToRefs } from 'pinia'
import { useCatalogStore } from '@/stores/catalog'
import { useCartStore } from '@/stores/cart'

const { isLoading, filterdItems } = storeToRefs(useCatalogStore())
const { getProducts } = useCatalogStore()
const { addCartHandler, checkoutHandler} = useCartStore()

onMounted(getProducts)
</script>