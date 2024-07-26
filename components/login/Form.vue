<script setup lang="ts">
const errorLogin = ref(false)
interface FormData {
  username: string
  password: string
  remember: boolean
  showPassword: boolean
}

const form = reactive<FormData>({
  username: '',
  password: '',
  remember: false,
  showPassword: false,
})

async function login() {
  try {
    await $fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        email: form.username,
        password: form.password,
      },
    })
  } catch (error) {
    errorLogin.value = true
  }
}
</script>

<template>
  <div class="flex w-full flex-col items-center justify-start">
    <div class="w-full max-w-xl rounded-xl bg-white p-5 md:text-2xl">
      <h1 class="mb-6 text-left text-3xl font-bold text-[#142958] md:text-5xl">
        {{ $t('login.welcome') }}
      </h1>
      <h4 class="mb-6 text-left text-base font-light text-black opacity-60">
        {{ $t('login.loginText') }}
      </h4>

      <form @submit.prevent="login">
        <div class="mb-5">
          <label
            for="email"
            class="block text-sm font-medium text-black"
          >
            {{ $t('login.loginText') }}
          </label>
          <p-input-text
            id="email"
            v-model="form.username"
            type="email"
            class="input mt-1 block w-full bg-white text-black"
            :placeholder="$t('login.phEmail')"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="confirmPassword"
            class="block text-sm font-medium text-black"
            >{{ $t('register.confirmPassword') }}</label
          >
          <div class="relative mt-1 items-center">
            <p-password
              v-model="form.password"
              toggle-mask
              fluid
              :feedback="false"
              :placeholder="$t('register.phPassword')"
              :prompt-label="$t('register.phPassword')"
              :weak-label="$t('register.weakLabel')"
              :medium-label="$t('register.mediumLabel')"
              :strong-label="$t('register.strongLabel')"
            />
          </div>
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
              to="/forgotPassword"
              class="text-lg"
              >{{ $t('login.forgotPassword') }}</NuxtLink
            >
          </div>

          <div class="mt-8 flex justify-start space-x-4">
            <p-button
              rounded
              class="bg-[#142958] px-5 text-white"
              type="submit"
              :label="$t('login.btnAccess')"
            />
            <NuxtLink
              to="/auth/register"
              class="p-button p-button-rounded !bg-[var(--color-white)] text-black"
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
