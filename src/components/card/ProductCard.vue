<template>
    <div class="tw-p-4" :class="{ isLoading }">
        <div class="tw-flex tw-gap-6 tw-mb-6">
            <div class="tw-w-1/2 tw-h-[350px]"><img class="tw-w-full tw-h-full tw-object-contain" :src="item?.image"
                    alt="product"></div>
            <div class="tw-w-1/2">
                <span class="font-h2 tw-block tw-text-neutral-500 tw-pb-2">{{ item?.title }}</span>
                <span class="tw-block tw-text-neutral-300 tw-pb-4">{{ item?.category }}</span>
                <span class="tw-text-lime-500 font-h3">{{ item?.price }} $</span>
                <span class="tw-pt-4 font-h5 tw-flex tw-items-center tw-text-neutral-500">
                    <StarIcon class="tw-text-orange-500 icon-20 tw-ml-1 tw-mr-2" />{{ item?.rating?.rate }} ({{
                        item?.rating?.count }} comments)
                </span>
                <div class="tw-mt-6 tw-flex tw-gap-2">
                    <button @click="addHandler(item?.id)">
                        <CartIcon class="icon-20 tw-m-1" />
                    </button>
                    <button @click="checkHandler(item?.id)">
                        <PlusIcon class="icon-20 tw-m-1" />
                    </button>
                </div>
            </div>
        </div>
        <span class="font-normal-20">{{ item?.description }}</span>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ArrayItemsTypes } from '@/types/products'
import { computed } from 'vue'
import { apiGetJson } from '@/api/api';
import { ref, onMounted } from 'vue';
import StarIcon from '@/components/icons/StarIcon.vue'
import CartIcon from '@/components/icons/CartIcon.vue'
import PlusIcon from '@/components/icons/PlusIcon.vue'
import { useCartStore } from '@/stores/cart'

const { addCartHandler, checkoutHandler } = useCartStore()

const products = ref<Array<ArrayItemsTypes>>([])

const isLoading = ref<boolean>(false)

const route = useRoute()

const item = computed(() => products.value?.find(el => +el.id === +route.params.id))

const addHandler = (id: number|undefined) => {
    addCartHandler(id)
}

const checkHandler = (id:number|undefined) =>{
checkoutHandler(id)
}


const init = async () => {
    isLoading.value = true
    try {
        products.value = await apiGetJson()
    }
    catch {
        alert('Error request')
    }
    finally {
        isLoading.value = false
    }
}

onMounted(init)

</script>