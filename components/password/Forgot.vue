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
    <div class="w-full max-w-xl rounded-xl bg-white p-5 md:text-2xl">
      <h1 class="mb-6 text-left text-3xl font-bold text-[#142958] md:text-5xl">
        {{ $t('forgotPasswordPage.title') }}
      </h1>
      <h4 class="text-secondary mb-6 text-left text-base font-light opacity-60">
        {{ $t('forgotPasswordPage.subtitle') }}
      </h4>

      <form @submit.prevent="submitForm">
        <div class="mb-5">
          <label
            for="email"
            class="text-secondary block text-sm font-medium"
          >
            {{ $t('forgotPasswordPage.emailText') }}
          </label>
          <p-input-text
            id="email"
            v-model="form.email"
            type="email"
            class="input text-secondary mt-1 block w-full bg-white"
            :placeholder="$t('forgotPasswordPage.phEmail')"
            required
          />
        </div>

        <div class="mb-4">
          <div class="mt-8 flex justify-start space-x-4">
            <p-button
              rounded
              class="text-secondary bg-[#142958]"
              type="submit"
              :label="$t('forgotPasswordPage.next')"
            />
            <NuxtLink
              to="/auth/login"
              class="p-button p-button-[#142958] p-button-rounded !bg-[var(--color-secondary)] !text-[var(--color-black)]"
            >
              {{ $t('forgotPasswordPage.backTo') }}
            </NuxtLink>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
