<template>
    <MainLayout>
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <li class="todo" v-for="item in list" :key="item.id">
                <MainListItem :item="item" />
            </li>
        </ul>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { ref, onMounted } from 'vue'
import { apiGetJson } from '@/api/api'
import MainListItem from '@/components/main/MainListItem.vue';
import { ArrayItemsTypes } from '@/types/products'

const list = ref<Array<ArrayItemsTypes>>()

const init = async () => {
    list.value = await apiGetJson()
}

onMounted(init)

</script>