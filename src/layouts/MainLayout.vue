<template>
    <section class="layout-main tw-grid tw-h-screen">
        <header class="header-main tw-mx-auto tw-mt-10 tw-w-full">
            <h1 class="font-h1 tw-text-lime-500 tw-text-center tw-mb-6">Products</h1>
            <slot name="header" />
        </header>
        <main
            class="content-main tw-overflow-auto tw-border-y tw-border-neutral-200 tw-border-solid tw-bg-white tw-relative tw-shadow-md">
            <slot name="main"/>
        </main>
        <footer
            class="footer-main tw-text-neutral-500 tw-text-center tw-justify-between tw-w-full tw-items-center tw-flex tw-flex-col">
            <slot name="footer" />
        </footer>
    </section>
</template>

<script setup lang="ts">
defineSlots<{
    main?: (props: {}) => any
    header?: (props: {}) => any
    footer?: (props: {}) => any
}>()
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