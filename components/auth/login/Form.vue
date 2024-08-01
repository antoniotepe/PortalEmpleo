<script setup lang="ts">
const auth = useAuthStore()

const errorLogin = ref(false)

interface FormData {
  username: string
  password: string
  remember: boolean
}

const form = reactive<FormData>({
  username: '',
  password: '',
  remember: false,
})

async function login() {
  try {
    await auth.login({
      email: form.username,
      password: form.password,
    })

    navigateTo('/')
  } catch (error) {
    errorLogin.value = true
  }
}
</script>

<template>
  <div class="flex w-full flex-col items-center justify-start">
    <div class="w-full max-w-xl rounded-xl bg-white p-5">
      <h1 class="mb-6 text-left text-2xl font-bold text-primary">
        {{ $t('login.welcome') }}
      </h1>
      <h4 class="mb-6 text-left text-base font-light text-black opacity-60">
        {{ $t('login.loginText') }}
      </h4>

      <form @submit.prevent="login">
        <div class="mb-5">
          <UiInputText
            id="igss"
            v-model="form.username"
            :label="$t('login.emailText')"
            filled
            fluid
            type="email"
            :required="true"
            :placeholder="$t('login.phEmail')"
          />
        </div>

        <div class="mb-5">
          <UiInputPassword
            id="password"
            v-model="form.password"
            :label="$t('login.passwordText')"
            filled
            fluid
            :required="true"
            :placeholder="$t('login.phPassword')"
          />
        </div>

        <div class="mb-4">
          <div class="mb-6 flex items-center justify-between">
            <div class="flex items-center">
              <p-checkbox
                v-model="form.remember"
                value="remember"
                input-id="rememberM"
                class="form-checkbox h-5 w-5 text-blue-600"
              />
              <label
                for="rememberM"
                class="ml-2 text-lg font-light text-black opacity-60"
              >
                {{ $t('login.rememberMe') }}
              </label>
            </div>

            <NuxtLink
              to="/auth/password/forgot"
              class="text-lg"
            >
              {{ $t('login.forgotPassword') }}
            </NuxtLink>
          </div>

          <div class="mt-8 flex justify-start space-x-4">
            <p-button
              rounded
              type="submit"
              :label="$t('login.btnAccess')"
            />

            <NuxtLink
              to="/auth/register"
              class="p-button p-button-rounded p-button-secondary p-button-text border-primary text-primary"
            >
              {{ $t('login.btnRegister') }}
            </NuxtLink>
          </div>
        </div>
        <h3
          v-if="errorLogin"
          class="text-lg text-red-600"
        >
          {{ $t('login.msgErrorLogin') }}
        </h3>
      </form>
    </div>
  </div>
</template>
