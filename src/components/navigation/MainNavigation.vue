<template>
    <div class="tw-w-full tw-bg-white tw-flex tw-items-center">
        <MainNavigationItem v-for="(item, index) in routes" :key="index" :item="item" :index="index" />
    </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
import { routeNames } from '@/router/routeNames'
import MainNavigationItem from './MainNavigationItem.vue';
import { RouteParams } from 'vue-router';

type RoutesType = {
    to: RouteParams
    component: () => {}
}

const routes = ref<Array<RoutesType>>([
    {
        to: { name: routeNames.main },
        component: defineAsyncComponent(() => import('@/components/icons/HomeIcon.vue')),
    },
    {
        to: { name: routeNames.add },
        component: defineAsyncComponent(() => import('@/components/icons/PlusIcon.vue')),
    },
    {
        to: { name: routeNames.cart },
        component: defineAsyncComponent(() => import('@/components/icons/CartIcon.vue')),
    }
])
</script>