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
    <div class="bg-white w-full max-w-xl rounded-xl p-5 md:text-2xl">
      <h1 class="mb-6 text-left text-3xl font-bold text-primary md:text-5xl">
        {{ $t('forgotPasswordPage.title') }}
      </h1>
      <h4 class="text-black mb-6 text-left text-base font-light opacity-60">
        {{ $t('forgotPasswordPage.subtitle') }}
      </h4>

      <form @submit.prevent="submitForm">
        <div class="mb-5">
          <label
            for="email"
            class="text-black block text-sm font-medium"
          >
            {{ $t('forgotPasswordPage.emailText') }}
          </label>
          <p-input-text
            id="email"
            v-model="form.email"
            type="email"
            class="input bg-white text-black mt-1 block w-full"
            :placeholder="$t('forgotPasswordPage.phEmail')"
            required
          />
        </div>

        <div class="mb-4">
          <div class="mt-8 flex justify-start space-x-4">
            <p-button
              rounded
              class="text-black bg-primary"
              type="submit"
              :label="$t('forgotPasswordPage.next')"
            />
            <NuxtLink
              to="/login"
              class="p-button p-button-primary p-button-rounded !bg-[var(--color-secondary)] !text-[var(--color-primary)]"
            >
              {{ $t('forgotPasswordPage.backTo') }}
            </NuxtLink>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
