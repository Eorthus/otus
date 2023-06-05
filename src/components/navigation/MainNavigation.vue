<template>
    <div class="tw-w-full tw-bg-white tw-flex tw-items-center">
        <MainNavigationItem v-for="(item, index) in routes" :key="index" :item="item" :index="index" />
        <button class="tw-p-4" @click="signOut">
            <EscapeIcon class="icon-20" />
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue';
import { routeNames } from '@/router/routeNames'
import MainNavigationItem from './MainNavigationItem.vue';
import { RouteParams } from 'vue-router';
import { useAuthStore } from '@/stores/auth'
import EscapeIcon from '@/components/icons/EscapeIcon.vue'
import { storeToRefs } from 'pinia';

const { signOut } = useAuthStore()

const { userState } = storeToRefs(useAuthStore())

type RoutesType = {
    to: RouteParams
    component: () => {}
    disabled: boolean
}

const routes = ref<Array<RoutesType>>([
    {
        to: { name: routeNames.main },
        component: defineAsyncComponent(() => import('@/components/icons/HomeIcon.vue')),
        disabled: !userState.value
    },
    {
        to: { name: routeNames.add },
        component: defineAsyncComponent(() => import('@/components/icons/PlusIcon.vue')),
        disabled: !userState.value
    },
    {
        to: { name: routeNames.cart },
        component: defineAsyncComponent(() => import('@/components/icons/CartIcon.vue')),
        disabled: !userState.value
    }
])
</script>