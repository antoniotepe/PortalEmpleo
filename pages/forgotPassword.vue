<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})
const email = ref('')
const showNewPassword = ref(false)

const handleNext = (emailValue: string) => {
  email.value = emailValue
  showNewPassword.value = true
}
</script>

<template>
  <PasswordForm
    v-if="!showNewPassword"
    @next="handleNext"
  />
  <PasswordFormPassword
    v-else
    :email="email"
  />
</template>
