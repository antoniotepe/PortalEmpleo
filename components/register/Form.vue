<script lang="ts" setup>
const router = useRouter()
const errorPassword = ref(false)
const errorEmail = ref(false)
const errorPasswordLength = ref(false)
const errorServer = ref(false)
const errorRegister = ref(false)
const success = ref(false)

interface FormData {
  username: string
  password: string
  confirmPassword: string
}

const form = reactive<FormData>({
  username: '',
  password: '',
  confirmPassword: '',
})

async function register() {
  errorPassword.value = false
  errorEmail.value = false
  errorPasswordLength.value = false
  errorServer.value = false
  errorRegister.value = false

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const validationRules = [
    {
      condition: () => form.password !== form.confirmPassword,
      errorRef: errorPassword,
    },
    {
      condition: () => !emailRegex.test(form.username),
      errorRef: errorEmail,
    },
    {
      condition: () =>
        form.password.length === form.confirmPassword.length &&
        form.confirmPassword.length <= 8 &&
        form.password.length <= 8,
      errorRef: errorPasswordLength,
    },
  ]

  let allValid = true

  validationRules.forEach((rule) => {
    const isInvalid = rule.condition()
    rule.errorRef.value = isInvalid

    if (isInvalid) {
      allValid = false
    }
  })

  if (allValid) {
    try {
      await $fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          accept: 'application/json',
        },
        body: {
          email: form.username,
          password: form.password,
          confirmPassword: form.confirmPassword,
        },
      })
      success.value = true
      setTimeout(() => {
        router.push('/login')
      }, 3000)
    } catch (error) {
      if (error.response._data.statusCode !== 422) {
        errorServer.value = true
      } else {
        errorRegister.value = true
      }
    }
  }
}
</script>

<template>
  <div class="flex w-full flex-col items-center justify-start">
    <div class="w-full max-w-xl rounded-xl bg-white p-5 md:text-2xl">
      <h1 class="mb-5 text-left text-3xl font-bold text-[#142958]">
        {{ $t('register.title') }}
      </h1>
      <h4 class="mb-6 text-left text-base font-light text-black opacity-60">
        {{ $t('register.subtitle') }}
      </h4>
      <form
        class="space-y-4"
        novalidate
        @submit.prevent="register"
      >
        <div class="mb-5">
          <label
            for="email"
            class="block text-sm font-medium text-black"
          >
            {{ $t('register.emailText') }}
          </label>
          <p-input-text
            id="email"
            v-model="form.username"
            type="email"
            class="input mt-1 block w-full bg-white text-black"
            :placeholder="$t('register.phEmail')"
            :invalid="errorEmail"
            required
          />
        </div>

        <div class="flex space-x-5">
          <div class="w-1/2">
            <label
              for="password"
              class="block text-sm font-medium text-black"
              >{{ $t('register.password') }}</label
            >

            <div class="relative mt-1 items-center">
              <p-password
                v-model="form.password"
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
          <div class="w-1/2">
            <label
              for="confirmPassword"
              class="block text-sm font-medium text-black"
              >{{ $t('register.confirmPassword') }}</label
            >
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
        </div>

        <div>
          <p-button
            :label="$t('register.register')"
            text
            class="bg-[#142958] px-5 text-white"
            rounded
            type="submit"
          />
        </div>
        <div class="mb-2">
          <div class="flex flex-col space-y-2">
            <p-message
              v-if="success"
              severity="success"
              :life="3000"
              position="bottom-left"
            >
              Registrado correctamente
            </p-message>
            <h3
              v-if="errorEmail"
              class="text-lg text-red-600"
            >
              {{ $t('register.msgErrorEmail') }}
            </h3>
            <h3
              v-if="errorPassword"
              class="text-lg text-red-600"
            >
              {{ $t('register.msgErrorPassword') }}
            </h3>
            <h3
              v-if="errorPasswordLength"
              class="text-lg text-red-600"
            >
              {{ $t('register.msgErrorPasswordLength') }}
            </h3>
            <h3
              v-if="errorServer"
              class="text-lg text-red-600"
            >
              {{ $t('errorServer') }}
            </h3>
            <h3
              v-if="errorRegister"
              class="text-lg text-red-600"
            >
              {{ $t('register.errorRegister') }}
            </h3>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
