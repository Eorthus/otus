<template>
    <span class="tw-block tw-px-6 tw-pt-6 font-h2 tw-text-neutral-500">Send customer data</span>
    <Form class="tw-flex tw-flex-col tw-gap-6 tw-p-6" @submit="submitHandler">
        <!-- fio -->
        <div class="tw-flex tw-space-between tw-gap-6">
            <div class="tw-w-full tw-flex tw-flex-col">
                <Field v-model="form.name" name="name" type="text" :rules="requiredRule" placeholder="Name" />
                <ErrorMessage class="tw-text-red-500" name="name" />
            </div>
            <div class="tw-w-full tw-flex tw-flex-col">
                <Field v-model="form.surname" name="surname" type="text" :rules="requiredRule" placeholder="Surname" />
                <ErrorMessage class="tw-text-red-500" name="surname" />
            </div>
        </div>
        <!-- contacts -->
        <div class="tw-flex tw-space-between tw-gap-6">
            <div class="tw-w-full tw-flex tw-flex-col">
                <Field v-model="form.phone" name="phone" type="text" :rules="requiredRule" placeholder="Phone" />
                <ErrorMessage class="tw-text-red-500" name="phone" />
            </div>
            <div class="tw-w-full tw-flex tw-flex-col">
                <Field v-model="form.email" name="email" type="email" placeholder="Email" />
            </div>
        </div>
        <!-- address -->
        <div class="tw-flex tw-flex-col">
            <Field v-model="form.address" name="address" type="text" :rules="requiredRule" placeholder="Address" />
            <ErrorMessage class="tw-text-red-500" name="address" />
        </div>
        <!-- comment -->
        <div class="tw-flex tw-flex-col">
            <Field v-model="form.comment" name="comment" type="text" as="textarea" rows="2" placeholder="Comment" />
        </div>
        <div class="tw-flex tw-flex-col">
            <div class="tw-items-center tw-flex">
                <Field v-model="form.agreement" class="tw-mr-2" name="agreement" type="checkbox" :value="true"
                    :rules="agreementRule" /> Consent to the personal data processing policy
            </div>
            <ErrorMessage class="tw-text-red-500" name="agreement" />
        </div>
        <div class="tw-ml-auto">
            <button class="tw-p-4 tw-border tw-border-solid tw-border-lime-500 tw-rounded-sm tw-mr-6">
                <RouterLink :to="{ name: 'home.list' }">Отменить</RouterLink>
            </button>
            <button class="tw-p-4 tw-border tw-border-solid tw-border-lime-500 tw-rounded-sm" type="submit"
                >Отправить</button>
        </div>
    </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate'
import { requiredRule, agreementRule } from '@/utils/validationRules'
import { apiPostJson } from '@/api/api'
import { ref } from 'vue'
import { SendItem } from '@/types/products'


const isLoading = ref<boolean>()

const form = ref<SendItem>({
    name: '',
    surname: '',
    phone: '',
    email: '',
    address: '',
    comment: '',
    agreement: false,
})

const submitHandler = async () => {
    isLoading.value = true
    try {
        await apiPostJson(form.value)
        alert('Send succesful')
    }
    catch {
        alert('Error request')
    }
    finally {
        isLoading.value = false
    }
}
</script>