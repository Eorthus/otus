<template>
    <div class="view">
        <input class="toggle" type="checkbox" />
        <label> #{{ item.id }} {{ item.title }}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" type="text" />
</template>

<script setup lang="ts">
import { ArrayItemsTypes } from '@/types/products'

type PropsTypes = {
    item: ArrayItemsTypes
}

defineProps<PropsTypes>()

</script>