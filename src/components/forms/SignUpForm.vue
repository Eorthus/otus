<template>
    <Form class="tw-flex tw-flex-col tw-gap-6 tw-p-6" @submit="submitHandler">
        <span class="tw-block tw-pb-6 font-h2 tw-text-neutral-500">Registration form</span>
        <!-- fio -->
        <div class="tw-flex tw-space-between tw-gap-6">
            <div class="tw-w-full tw-flex tw-flex-col">
                <Field v-model="form.name" name="name" type="text" :rules="wordRule" placeholder="Name" />
                <ErrorMessage class="tw-text-red-500" name="name" />
            </div>
            <div class="tw-w-full tw-flex tw-flex-col">
                <Field v-model="form.surname" name="surname" type="text" :rules="wordRule" placeholder="Surname" />
                <ErrorMessage class="tw-text-red-500" name="surname" />
            </div>
        </div>
        <div class="tw-flex tw-space-between tw-gap-6">
            <div class="tw-w-full tw-flex tw-flex-col">
                <Field v-model="form.login" name="login" type="text" :rules="requiredRule" placeholder="Login" />
                <ErrorMessage class="tw-text-red-500" name="login" />
            </div>
            <div class="tw-w-full tw-flex tw-flex-col">
                <Field v-model="form.password" name="password" type="text" :rules="passwordRule" placeholder="Password" />
                <ErrorMessage class="tw-text-red-500" name="password" />
            </div>
        </div>
        <!-- contacts -->
        <div class="tw-flex tw-space-between tw-gap-6">
            <div class="tw-w-full tw-flex tw-flex-col">
                <Field v-model="form.phone" name="phone" type="text" :rules="telRule" placeholder="Phone" />
                <ErrorMessage class="tw-text-red-500" name="phone" />
            </div>
            <div class="tw-w-full tw-flex tw-flex-col">
                <Field v-model="form.email" name="email" type="email" :rules="emailRule" placeholder="Email" />
                <ErrorMessage class="tw-text-red-500" name="email" />
            </div>
        </div>
        <!-- address -->
        <div class="tw-flex tw-flex-col">
            <Field v-model="form.address" name="address" type="text" :rules="requiredRule" placeholder="Address" />
            <ErrorMessage class="tw-text-red-500" name="address" />
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
                <RouterLink :to="{ name: routeNames.login }">Cancel</RouterLink>
            </button>
            <button class="tw-p-4 tw-border tw-border-solid tw-border-lime-500 tw-rounded-sm" type="submit">Send</button>
        </div>
    </Form>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate'
import { requiredRule, agreementRule, telRule, emailRule, wordRule, passwordRule } from '@/utils/validationRules'
import { ref } from 'vue'
import { type RegistrationType } from '@/types/auth'
import { routeNames } from '@/router/routeNames'
import { useAuthStore } from '@/stores/auth'

const { signUp } = useAuthStore()

const form = ref<RegistrationType>({
    name: '',
    surname: '',
    login: '',
    password: '',
    phone: '',
    email: '',
    address: '',
    agreement: false,
})

const submitHandler = () =>{
    signUp(form.value)
}
</script>