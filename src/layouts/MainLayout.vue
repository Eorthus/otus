<template>
    <header class="header"><MainHeader/></header>
    <main class="main"><slot/></main>
    <footer class="footer"><MainFooter/></footer>
</template>

<script setup lang="ts">
import MainFooter from '@/components/navigation/MainFooter.vue'
import MainHeader from '@/components/navigation/MainHeader.vue';
 </script>