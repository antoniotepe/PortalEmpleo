<script setup lang="ts">
const emit = defineEmits<{
  (e: 'next', email: string): void
}>()

interface FormData {
  email: string
}

const form = reactive<FormData>({
  email: '',
})

const submitForm = () => {
  emit('next', form.email)
}
</script>

<template>
  <div class="flex w-full flex-col items-center justify-start">
    <div class="w-full max-w-xl rounded-xl bg-white p-5">
      <h1 class="mb-6 text-left text-2xl font-bold text-primary">
        {{ $t('forgotPasswordPage.title') }}
      </h1>
      <h4 class="text-secondary mb-6 text-left text-base font-light opacity-60">
        {{ $t('forgotPasswordPage.subtitle') }}
      </h4>

      <form @submit.prevent="submitForm">
        <div class="mb-5">
          <UiInputText
            id="email"
            v-model="form.email"
            :label="$t('forgotPasswordPage.emailText')"
            filled
            fluid
            type="email"
            :required="true"
            :placeholder="$t('forgotPasswordPage.phEmail')"
          />
        </div>

        <div class="mb-4">
          <div class="mt-8 flex justify-start space-x-4">
            <p-button
              rounded
              class="text-secondary bg-primary"
              type="submit"
              :label="$t('forgotPasswordPage.next')"
            />
            <NuxtLink
              to="/auth/login"
              class="p-button p-button-rounded p-button-secondary p-button-text border-primary"
            >
              {{ $t('forgotPasswordPage.backTo') }}
            </NuxtLink>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
