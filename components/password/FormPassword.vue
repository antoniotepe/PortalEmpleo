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

// const toggleNewPasswordVisibility = () => {
//   form.showNewPassword = !form.showNewPassword
// }

// const toggleConfirmPasswordVisibility = () => {
//   form.showConfirmPassword = !form.showConfirmPassword
// }

const sendValue = () => {
  if (form.newPassword !== form.confirmPassword) {
    errorPassword.value = true
    console.log('Verifica las contraseñas')
  } else {
    errorPassword.value = false
    console.log('Contraseñas coinciden')
    router.push('/login')
  }
}
</script>

<template>
  <div class="flex w-full flex-col items-center justify-start">
    <div class="bg-white w-full max-w-xl rounded-xl p-5 md:text-2xl">
      <h1 class="mb-6 text-left text-3xl font-bold text-primary md:text-5xl">
        {{ $t('newPasswordPage.title') }}
      </h1>
      <h4 class="text-black mb-6 text-left text-base font-light opacity-60">
        {{ $t('newPasswordPage.subtitle') }}
      </h4>

      <form @submit.prevent="sendValue">
        <div class="mb-5">
          <label
            for="password"
            class="text-black block text-sm font-medium"
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
            class="text-black block text-sm font-medium"
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
            class="text-black bg-primary"
            type="submit"
          />
        </div>
        <div class="mt-5">
          <h3
            v-if="errorPassword"
            class="text-red-400 text-lg"
          >
            {{ $t('newPasswordPage.msgError') }}
          </h3>
        </div>
      </form>
    </div>
  </div>
</template>
