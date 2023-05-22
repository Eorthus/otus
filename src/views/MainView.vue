<template>
    <MainLayout :items="list" @search="search = $event" @search-mode="searchMode = $event">
        <ul>
            <li class="tw-relative tw-border-0 tw-border-b tw-border-solid tw-border-neutral-200 last-child:border-b-0 tw-flex tw-px-4 tw-py-2 tw-flex-col"
                v-for="item in filterdItems" :key="item.id">
                <span><span class="tw-text-lime-300 font-h6">#{{ item.id }}</span>&nbsp;{{ item.title }}</span>
                <span class="font-h6 tw-text-neutral-300">${{ item.price }}</span>
            </li>
        </ul>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { ref, onMounted, computed } from 'vue'
import { apiGetJson } from '@/api/api'
import { ArrayItemsTypes } from '@/types/products'


const list = ref<Array<ArrayItemsTypes>>()

const search = ref<string>()

const searchMode=ref<number>(0)

const filterdItems = computed(() => {
    if (!search.value) {
        return list.value
    }
    if (searchMode.value===0){
        return list.value?.filter((el) => {
        return el.title.toLowerCase().indexOf(search.value?.toLowerCase()) > -1;
    })
    }
    if (searchMode.value===1){
        return list.value?.filter((el) => {
        return String(el.price).indexOf(search.value?.toLowerCase()) > -1;
    })
    }
    return
})

const init = async () => {
    list.value = await apiGetJson()
}

onMounted(init)

</script>