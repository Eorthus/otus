<template>
    <MainLayout :items="list">
        <ul>
            <li class="tw-relative tw-border-0 tw-border-b tw-border-solid tw-border-neutral-200 last-child:border-b-0 tw-flex tw-px-4 tw-py-2 tw-flex-col" v-for="item in list" :key="item.id">
                    <span><span class="tw-text-lime-300 font-h6">#{{ item.id }}</span>&nbsp;{{ item.title }}</span>
                    <span class="font-h6 tw-text-neutral-300">${{ item.price }}</span>
            </li>
        </ul>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { ref, onMounted } from 'vue'
import { apiGetJson } from '@/api/api'
import {ArrayItemsTypes} from '@/types/products'


const list = ref<Array<ArrayItemsTypes>>()

const init = async () => {
    list.value = await apiGetJson()
}

onMounted(init)

</script>