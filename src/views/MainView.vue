<template>
    <MainLayout>
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <li class="todo" v-for="item in list" :key="item.id">
                <div class="view">
                    <input class="toggle" type="checkbox" />
                    <label> #{{ item.id }} {{ item.title }}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" type="text" />
            </li>
        </ul>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { ref, onMounted } from 'vue'
import { apiGetJson } from '@/api/api'

type ArrayItemsTypes = {
    category: string
    description: string
    id: number
    image: string
    price: number
    title: string
    rating: { count: number; rate: number }
}

const list = ref<Array<ArrayItemsTypes>>()

const init = async () => {
    list.value = await apiGetJson()
}

onMounted(init)

</script>