<template>
    <MainLayout>
        <template v-if="userState" #header>
            <MainNavigation />
        </template>
        <template #main>
            <RouterView />
        </template>
        <template #footer>
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
// import { ref } from 'vue'
// import { useRouter } from 'vue-router'
import MainNavigation from '@/components/navigation/MainNavigation.vue'
// import { routeNames } from '@/router/routeNames'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'

// const router = useRouter()

const { userState } = storeToRefs(useAuthStore())

</script>