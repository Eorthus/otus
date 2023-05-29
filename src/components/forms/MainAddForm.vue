<template>
    <div :class="{ isLoading }">
        <span class="tw-block tw-px-6 tw-pt-6 font-h2 tw-text-neutral-500">Add new product</span>
        <Form class="tw-flex tw-flex-col tw-gap-6 tw-p-6" @submit="submitHandler">
            <div class="tw-w-full tw-flex tw-flex-col">
                <Field v-model="form.title" name="title" type="text" :rules="requiredRule" placeholder="Title" />
                <ErrorMessage class="tw-text-red-500" name="title" />
            </div>
            <div class="tw-flex tw-space-between tw-gap-6">
                <div class="tw-w-full tw-flex tw-flex-col">
                    <Field v-model="form.price" name="price" type="number" :rules="moneyRule" placeholder="Price" />
                    <ErrorMessage class="tw-text-red-500" name="price" />
                </div>
                <div class="tw-w-full tw-flex tw-flex-col">
                    <Field v-model="form.category" name="select" as="select" :rules="requiredRule">
                        <option value="" disabled>Category</option>
                        <option v-for="(item, index) in categories" :key="index" :value="item">
                            {{ item }}</option>
                    </Field>
                    <ErrorMessage class="tw-text-red-500" name="select" />
                </div>
            </div>
            <div class="tw-flex tw-flex-col">
                <Field v-model="form.image" name="image" type="text" placeholder="Image link" />
            </div>
            <div class="tw-flex tw-flex-col">
                <Field v-model="form.description" name="description" type="text" as="textarea" rows="2"
                    placeholder="Description" />
            </div>
            <div class="tw-ml-auto">
                <button class="tw-p-4 tw-border tw-border-solid tw-border-lime-500 tw-rounded-sm tw-mr-6">
                    <RouterLink :to="{ name: routeNames.main }">Cancel</RouterLink>
                </button>
                <button class="tw-p-4 tw-border tw-border-solid tw-border-lime-500 tw-rounded-sm" type="submit">Add</button>
            </div>
        </Form>
    </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import { requiredRule, moneyRule } from '@/utils/validationRules';
import { ref, reactive } from 'vue'
import { ArrayItemsSendTypes } from '@/types/products'
import { routeNames } from '@/router/routeNames'
import { apiPostItemJson } from '@/api/api'
import { NavigationGuard, NavigationGuardNext, onBeforeRouteLeave, RouteComponent, RouteLocation, RouteLocationNamedRaw, RouteLocationNormalized, RouteLocationOptions, RouteParams, RouteParamValue, RouteRecord, useRouter } from 'vue-router'

const categories: Array<string> = ['Category 1', 'Category 2', 'Category 3']

const router = useRouter()

const form = reactive<ArrayItemsSendTypes>({
    title: '',
    price: 0,
    image: undefined,
    category: '',
    description: undefined,
})

const isLoading = ref<boolean>(false)

const submitHandler = async () => {
    isLoading.value = true
    try {
        await apiPostItemJson(form)
        alert('Send successful')
        router.push({ name: routeNames.main })
    }
    catch {
        alert('Error request')
    }
    finally {
        isLoading.value = false
    }
}
</script>