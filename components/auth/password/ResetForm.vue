<script setup lang="ts">
const errorPassword = ref(false)
const router = useRouter()

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
    router.push('/login')
  }
}
</script>

<template>
  <div class="flex w-full flex-col items-center justify-start">
    <div class="w-full max-w-xl rounded-xl bg-white p-5 md:text-2xl">
      <h1 class="mb-6 text-left text-3xl font-bold text-[#142958] md:text-5xl">
        {{ $t('newPasswordPage.title') }}
      </h1>
      <h4 class="mb-6 text-left text-base font-light text-black opacity-60">
        {{ $t('newPasswordPage.subtitle') }}
      </h4>

      <form @submit.prevent="sendValue">
        <div class="mb-5">
          <label
            for="password"
            class="block text-sm font-medium text-black"
          >
            {{ $t('newPasswordPage.textPassword') }}
          </label>
          <div class="relative mt-1 items-center">
            <p-password
              v-model="form.newPassword"
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
        </div>

        <div class="mb-5">
          <label
            for="confirm-password"
            class="block text-sm font-medium text-black"
          >
            {{ $t('newPasswordPage.textConfirmPassword') }}
          </label>

          <div class="relative mt-1 items-center">
            <p-password
              v-model="form.confirmPassword"
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
        </div>

        <div class="mt-8 flex justify-start space-x-4">
          <p-button
            :label="$t('newPasswordPage.reset')"
            rounded
            class="text-secondary bg-[#142958]"
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
