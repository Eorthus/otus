<template>
    <template v-if="items?.length">
        <div class="tw-p-4">
            <span class="font-h2 tw-block tw-mb-6 tw-text-neutral-500">Cart</span>
            <ul>
                <li class="tw-relative tw-border-0 tw-border-b tw-border-solid tw-border-neutral-200 last-child:border-b-0 tw-flex tw-px-4 tw-py-2 tw-flex-col"
                    v-for="(item, index) in items" :key="index">
                    <MainListItem cart-mode :item="item" @delete-item="deleteItemHandler(index)" />
                </li>
            </ul>
        </div>
        <div class=" tw-p-4 tw-pt-0 tw-flex tw-flex-col">
            <span>Total count: <span class="tw-text-lime-500">{{ items.length }}</span></span>
            <span>Total price: <span class="tw-text-lime-500">{{ items.reduce((acc, el) => acc + el.price, 0) }}
                    $</span></span>
        </div>
        <MainSendForm @submit="submitHandler" />
    </template>
    <div v-else class="tw-h-full tw-w-full tw-flex tw-justify-center tw-items-center tw-text-neutral-500 font-h2">
        Cart is empty
    </div>
</template>

<script setup lang="ts">
import { ArrayItemsTypes } from '@/types/products'
import MainListItem from '@/components/main/MainListItem.vue'
import { apiGetJson } from '@/api/api'
import { ref, onMounted, watch } from 'vue'
import MainSendForm from '../forms/MainSendForm.vue';
import { apiPostOrderJson } from '@/api/api'
import { SendItem } from '@/types/products'

type PropsTypes = {
    selectedItems: Array<number> | undefined
}

const props = defineProps<PropsTypes>()

type EmitsTypes = {
    (e: 'change-selected', value: Array<number>): void
}

const emit = defineEmits<EmitsTypes>()

const isLoading = ref<boolean>(false)

const items = ref<Array<ArrayItemsTypes>>([])

const deleteItemHandler = (index: number) => {
    items.value.splice(index, 1)
}

const submitHandler = async (form: SendItem) => {
    isLoading.value = true
    try {
        await apiPostOrderJson(form, props.selectedItems)
        alert('Send successful')
    }
    catch {
        alert('Error request')
    }
    finally {
        isLoading.value = false
    }
}

const changeSelectedHandler = () => {
    emit('change-selected', items.value.map(el => el.id))
}

const init = async () => {
    isLoading.value = true
    try {
        const res = await apiGetJson()
        props.selectedItems?.forEach(el => {
            items.value.push(res.find((el2:ArrayItemsTypes) => +el2.id === +el))
        })
    }
    catch {
        alert('Error request')
    }
    finally {
        isLoading.value = false
    }
}

onMounted(init)

watch(() => items.value.length, changeSelectedHandler)
</script>