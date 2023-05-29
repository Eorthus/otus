<template>
    <button :class="{'tw-mr-auto':index===0}">
        <RouterLink class="tw-p-4 tw-block" :to="item.to">
            <component :is="item.component" class="icon-20" />
        </RouterLink>
    </button>
</template>

<script setup lang="ts">
import { RouteParams } from 'vue-router';


type PropsTypes = {
    item: {
        to: RouteParams,
        component: () => void
    }
    index:number
}

defineProps<PropsTypes>()
</script>

<style scoped lang="scss">
.router-link-active{
    @apply tw-bg-neutral-100;
}
</style>