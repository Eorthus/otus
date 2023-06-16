<template>
    <div v-if="isAuth" class="tw-flex tw-justify-between tw-h-full tw-flex-col">
        <SignInForm/>
        <button class="tw-p-6" @click="isAuth = false">Go to Registration</button>
    </div>
    <div v-else class="tw-flex tw-justify-between tw-h-full tw-flex-col">
        <SignUpForm />
        <button class="tw-p-6" @click="isAuth = true">Gp to Authorization</button>
    </div>
</template>

<script setup lang="ts">
import SignInForm from '@/components/forms/SignInForm.vue';
import SignUpForm from '@/components/forms/SignUpForm.vue';
import { ref } from 'vue'

const isAuth = ref(true)


</script>