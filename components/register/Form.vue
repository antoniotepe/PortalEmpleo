<script lang="ts" setup>
const router = useRouter()
const errors = reactive({
  password: false,
  email: false,
  passwordLength: false,
  server: false,
  register: false,
  registerPassword: [] as string[],
})
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
  errors.password = false
  errors.email = false
  errors.passwordLength = false
  errors.server = false
  errors.register = false
  errors.registerPassword = []

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const validationRules = [
    {
      condition: () => form.password !== form.confirmPassword,
      errorRef: 'password',
    },
    {
      condition: () => !emailRegex.test(form.username),
      errorRef: 'email',
    },
    {
      condition: () =>
        form.password.length === form.confirmPassword.length &&
        form.confirmPassword.length < 8 &&
        form.password.length < 8,
      errorRef: 'passwordLength',
    },
  ]

  let allValid = true

  validationRules.forEach((rule) => {
    const isInvalid = rule.condition()
    errors[rule.errorRef] = isInvalid

    if (isInvalid) {
      allValid = false
    }
  })

  if (allValid) {
    try {
      await $fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
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
      if (error.data.statusCode === 400) {
        const serverErrors = error.data.message.split(', ').map((msg) => msg.trim())
        errors.regist.push(...serverErrors)
      } else if (error.response._data.statusCode === 422) {
        errors.register = true
      } else {
        errors.server = true
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
            :invalid="errors.email"
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
                :invalid="errors.password"
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
                :invalid="errors.password"
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
              :life="3000"
              severity="success"
              position="bottom-left"
            >
              {{ $t('register.msgSuccess') }}
            </p-message>
            <h3
              v-if="errors.email"
              class="text-lg text-red-600"
            >
              {{ $t('register.msgErrorEmail') }}
            </h3>
            <h3
              v-if="errors.password"
              class="text-lg text-red-600"
            >
              {{ $t('register.msgErrorPassword') }}
            </h3>
            <h3
              v-if="errors.passwordLength"
              class="text-lg text-red-600"
            >
              {{ $t('register.msgErrorPasswordLength') }}
            </h3>
            <h3
              v-if="errors.server"
              class="text-lg text-red-600"
            >
              {{ $t('errors.server') }}
            </h3>
            <h3
              v-if="errors.register"
              class="text-lg text-red-600"
            >
              {{ $t('register.errorRegister') }}
            </h3>
            <div v-if="errors.registerPassword.length">
              <h3 class="text-lg text-red-600">
                {{ errors.registerPassword[0] }}
              </h3>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
