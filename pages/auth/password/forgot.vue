<script setup lang="ts">
definePageMeta({ layout: 'auth' })

const email = ref('')
const showNewPassword = ref(false)

const handleNext = (emailValue: string) => {
  email.value = emailValue
  showNewPassword.value = true
}
</script>

<template>
  <AuthPasswordForgot
    v-if="!showNewPassword"
    @next="handleNext"
  />
  <AuthPasswordResetForm
    v-else
    :email="email"
  />
</template>
