<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import { routeNames } from '@/router/routeNames'

const { userState } = storeToRefs(useAuthStore())

const router = useRouter()

router.beforeEach((to) => {
  if (!userState.value?.login.length && to.name!==routeNames.login){
    router.push({name:routeNames.login})
  }

  const DEFAULT_TITLE = 'Products'
  console.log(to.meta.title)
  if (to.meta.title) {
    document.title = `${to.meta.title} | ${DEFAULT_TITLE}`
    return
  }
  document.title = DEFAULT_TITLE
})
</script>

<template>
      <RouterView />
</template>