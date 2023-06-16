<template>
    <Form class="tw-flex tw-flex-col tw-gap-6 tw-p-6" data-test="form" @submit="submitHandler">
        <span class="tw-block tw-pb-6 font-h2 tw-text-neutral-500">Authorization form</span>
        <div class="tw-flex tw-space-between tw-gap-6">
            <div class="tw-w-full tw-flex tw-flex-col">
                <Field v-model="form.login" name="login" type="text" data-test="login" :rules="requiredRule" placeholder="Login" />
                <ErrorMessage class="tw-text-red-500" name="login" />
            </div>
            <div class="tw-w-full tw-flex tw-flex-col">
                <Field v-model="form.password" name="password" type="text" data-test="password" :rules="passwordRule" placeholder="Password" />
                <ErrorMessage class="tw-text-red-500" name="password" />
            </div>
        </div>
        <span class="tw-block tw-m-auto font-h6 tw-text-red-500">{{ error }}</span>
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
import { requiredRule, passwordRule } from '@/utils/validationRules'
import { ref } from 'vue'
import { type RegistrationType } from '@/types/auth'
import { routeNames } from '@/router/routeNames'
import { useAuthStore } from '@/stores/auth'

const { signIn } = useAuthStore()

const error = ref<string | undefined>('')

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
  error.value = signIn(form.value)
}
</script>