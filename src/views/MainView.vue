<template>
    <MainLayout>
        <template #header>
            <MainHeader :items="list" @search="search = $event" @search-mode="searchMode = $event" :class="{'isLoading': route.matched[1].name!=='home.list'}" />
        </template>
        <template #main>
            <RouterView :items="list" :search="search" :search-mode="searchMode" @add="addItemHandler"/>
        </template>
        <template #footer>
            <MainFooter :items="list" @send-form="mode=2" @add-item="mode=1"/>
            <section class="tw-mx-auto tw-my-6 tw-text-neutral-400 tw-text-center font-small-medium">
                <p>
                    Written by
                    <a href="http://evanyou.me">Evan You</a>
                </p>
                <p>
                    Part of
                    <a href="http://todomvc.com">TodoMVC</a>
                </p>
            </section>
        </template>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { ref, onMounted } from 'vue'
import { apiGetJson } from '@/api/api'
import { ArrayItemsTypes } from '@/types/products'
import MainHeader from '@/components/navigation/MainHeader.vue'
import MainFooter from '@/components/navigation/MainFooter.vue'
import {useRouter, useRoute} from 'vue-router'

const router = useRouter()

const route = useRoute()

const list = ref<Array<ArrayItemsTypes>>()

const search = ref<string>()

const searchMode = ref<number>(0)

const addItemHandler = form=>{
list.value.push(form)
router.push({name:'home.list'})
}

const init = async () => {
    try {
        list.value = await apiGetJson()
    }
    catch {
        alert('Ошибка запроса')
    }
}

onMounted(init)

</script>