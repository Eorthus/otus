<template>
    <Form class="tw-flex tw-flex-col tw-gap-6 tw-p-6" @submit="submitHandler">
        <div class="tw-w-full tw-flex tw-flex-col">
            <Field v-model="form.title" name="title" type="text" :rules="requiredRule" placeholder="Enter title"/>
            <ErrorMessage class="tw-text-red-500" name="title" />
        </div>
        <div class="tw-flex tw-space-between tw-gap-6">
            <div class="tw-w-full tw-flex tw-flex-col">
                <Field v-model="form.price" name="price" type="number" :rules="requiredRule" placeholder="Enter price" />
                <ErrorMessage class="tw-text-red-500" name="price" />
            </div>
            <div class="tw-w-full tw-flex tw-flex-col">
                <Field v-model="form.category" name="select" as="select" :rules="requiredRule">
                    <option value="" disabled>Enter category</option>
                    <option v-for="(item, index) in categories" :key="index" :value="item">
                        {{ item }}</option>
                </Field>
                <ErrorMessage class="tw-text-red-500" name="select" />
            </div>
        </div>
        <div class="tw-flex tw-flex-col">
            <Field  v-model="form.description" name="description" type="text" as="textarea" rows="2" placeholder="Enter description"/>
        </div>
        <div class="tw-ml-auto">
            <button class="tw-p-4 tw-border tw-border-solid tw-border-lime-500 tw-rounded-sm tw-mr-6">
                <RouterLink :to="{ name: 'home.list' }">Отменить</RouterLink>
            </button>
            <button class="tw-p-4 tw-border tw-border-solid tw-border-lime-500 tw-rounded-sm" type="submit"
                >Добавить</button>
        </div>
    </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import { requiredRule } from '@/utils/validationRules';
import { ref } from 'vue'
import { ArrayItemsTypes } from '@/types/products'

type FormAddItem = {
    id:number
    title:string|undefined
    price:number|undefined
    category:string|undefined
    description:string|undefined
}

type PropsTypes = {
    items: Array<ArrayItemsTypes> | undefined
}

const props = defineProps<PropsTypes>()

type EmitsTypes = {
    (e: 'add', value: FormAddItem): void
}

const emit = defineEmits<EmitsTypes>()

const categories:Array<string> = ['Category 1', 'Category 2', 'Category 3']

const form = ref<FormAddItem>({
    id: 0,
    title: '',
    price: undefined,
    category: undefined,
    description: undefined,
})

const submitHandler=()=>{
    form.value.id = props.items[props.items.length-1].id+1
    emit('add', form.value)
}
</script>