<script setup lang="ts">
const errorPassword = ref(false)

interface FormData {
  newPassword: string
  confirmPassword: string
  showNewPassword: boolean
  showConfirmPassword: boolean
}

const form = reactive<FormData>({
  newPassword: '',
  confirmPassword: '',
  showNewPassword: false,
  showConfirmPassword: false,
})

const sendValue = () => {
  if (form.newPassword !== form.confirmPassword) {
    errorPassword.value = true
  } else {
    errorPassword.value = false
    navigateTo('/auth/login')
  }
}
</script>

<template>
  <div class="flex w-full flex-col items-center justify-start">
    <div class="w-full max-w-xl rounded-xl bg-white p-5">
      <h1 class="mb-6 text-left text-2xl font-bold text-primary">
        {{ $t('newPasswordPage.title') }}
      </h1>
      <h4 class="mb-6 text-left text-base font-light text-black opacity-60">
        {{ $t('newPasswordPage.subtitle') }}
      </h4>

      <form @submit.prevent="sendValue">
        <div class="mb-5">
          <UiInputText
            id="newPassword"
            v-model="form.newPassword"
            :label="$t('newPasswordPage.textPassword')"
            :required="true"
            toggle-mask
            fluid
            :placeholder="$t('register.phPassword')"
            :invalid="errorPassword"
            :prompt-label="$t('register.phPassword')"
            :weak-label="$t('register.weakLabel')"
            :medium-label="$t('register.mediumLabel')"
            :strong-label="$t('register.strongLabel')"
          />
        </div>

        <div class="mb-5">
          <UiInputText
            id="confirmPassword"
            v-model="form.confirmPassword"
            :label="$t('newPasswordPage.textConfirmPassword')"
            :required="true"
            toggle-mask
            fluid
            :placeholder="$t('register.phPassword')"
            :invalid="errorPassword"
            :prompt-label="$t('register.phPassword')"
            :weak-label="$t('register.weakLabel')"
            :medium-label="$t('register.mediumLabel')"
            :strong-label="$t('register.strongLabel')"
          />
        </div>

        <div class="mt-8 flex justify-start space-x-4">
          <p-button
            :label="$t('newPasswordPage.reset')"
            rounded
            class="text-secondary bg-primary"
            type="submit"
          />
        </div>
        <div class="mt-5">
          <h3
            v-if="errorPassword"
            class="text-lg text-red-400"
          >
            {{ $t('newPasswordPage.msgError') }}
          </h3>
        </div>
      </form>
    </div>
  </div>
</template>
