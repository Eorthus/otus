<template>
    <div class="tw-p-4" :class="{ isLoading }">
        <div class="tw-w-1/2 tw-h-[350px]"><img class="tw-w-full tw-object-contain" :src="item?.image" alt="product"></div>
        <div>
            <span>{{ item?.title }}</span>
            <span>{{ item?.category }}</span>
            <span>{{ item?.price }}</span>
            <span>{{ item?.rating?.rate }} {{ item?.rating?.count }}</span>
        </div>
        <span>{{ item?.description }}</span>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ArrayItemsTypes } from '@/types/products'
import { computed } from 'vue'
import { apiGetJson } from '@/api/api';
import { ref, onMounted } from 'vue';

const products = ref<Array<ArrayItemsTypes>>([])

const isLoading = ref<boolean>(false)

const route = useRoute()

const item = computed(() => products.value.find(el => +el.id === +route.params.id))

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