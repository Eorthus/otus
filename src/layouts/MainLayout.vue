<template>
    <section class="layout-main tw-grid tw-h-screen">
    <header class="header-main tw-mx-auto tw-mt-10 tw-w-full"><MainHeader :items="items"/></header>
    <main class="content-main tw-overflow-auto tw-border-y tw-border-neutral-200 tw-border-solid tw-bg-white tw-relative tw-shadow-md"><slot/></main>
    <footer class="footer-main tw-text-neutral-500 tw-text-center tw-justify-between tw-w-full tw-items-center tw-flex tw-flex-col"><MainFooter :items="items"/></footer>
</section>
</template>

<script setup lang="ts">
import MainFooter from '@/components/navigation/MainFooter.vue'
import MainHeader from '@/components/navigation/MainHeader.vue'
import {ArrayItemsTypes} from '@/types/products'


type PropsTypes = {
  items: Array<ArrayItemsTypes>|undefined
}

defineProps<PropsTypes>()
 </script>

<style scoped lang="scss">
.layout-main {
  grid-template-rows: fit-content(100%) auto fit-content(100%);
  grid-template-areas:
    'header'
    'content'
    'footer';
}

.header-main {
  grid-area: header;
}

.content-main {
  grid-area: content;
}

.footer-main {
  grid-area: footer;
}

</style>