<script lang="ts" setup>
// const errorPassword = ref(false)
// const errorCui = ref(false)
// const errorEmail = ref(false)

// interface FormData {
//   firstName: string
//   lastName: string
//   username: string
//   cui: string
//   password: string
//   confirmPassword: string
// }

// const form = reactive<FormData>({
//   firstName: '',
//   lastName: '',
//   username: '',
//   cui: '',
//   password: '',
//   confirmPassword: '',
// })

// const register = () => {
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

//   const validationRules = [
//     {
//       condition: () => form.cui.length !== 13,
//       errorRef: errorCui,
//     },
//     {
//       condition: () => form.password !== form.confirmPassword,
//       errorRef: errorPassword,
//     },
//     {
//       condition: () => !emailRegex.test(form.username),
//       errorRef: errorEmail,
//     },
//   ]

//   let allValid = true

//   validationRules.forEach((rule) => {
//     const isInvalid = rule.condition()
//     rule.errorRef.value = isInvalid
//     console.log(isInvalid ? 'Error in validation' : ' Pasa ${rule.errorMessage.toLowerCase()}')
//     if (isInvalid) {
//       allValid = false
//     }
//   })

//   if (allValid) {
//     console.log('Registro exitoso!')
//   }
// }
</script>

<template>
  <div class="flex justify-center">
    <div class="w-3/4">
      <p class="text-3xl font-bold text-[#142858]">Regístrate en el Portal del Empleador</p>

      <form
        class="mt-4"
        @submit.prevent
      >
        <div class="flex flex-col gap-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col gap-2">
              <label for="firstName">Nombre</label>

              <p-input-text
                id="firstName"
                value="Alejandro"
                filled
                fluid
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="firstSurname">Apellido</label>

              <p-input-text
                id="firstSurname"
                value="Gomez"
                filled
                fluid
              />
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <label for="email">Email</label>

            <p-input-text
              id="email"
              value="ale.gomez@gmail.com"
              filled
              fluid
            />
          </div>

          <div class="flex flex-col gap-2">
            <label for="cui">CUI</label>

            <p-input-text
              id="cui"
              value="302032226565"
              filled
              fluid
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="flex flex-col gap-2">
              <label for="firstName">Contraseña</label>

              <p-password
                id="firstName"
                value="Alejandro"
                filled
                fluid
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="firstSurname">Apellido</label>

              <p-input-text
                id="firstSurname"
                value="Gomez"
                filled
                fluid
              />
            </div>
          </div>

          <div>
            <p-button
              label="Regístrate"
              rounded
              class="border-none bg-[#142858]"
            />
          </div>
        </div>
      </form>
    </div>
  </div>

  <!-- <div class="bg-secondary flex w-full flex-col items-center justify-start">
    <div class="w-full max-w-xl rounded-xl bg-white">
      <h1 class="mb-6 text-left text-3xl font-bold text-[#142958] md:text-5xl">
        {{ $t('register.title') }}
      </h1>
      <h4 class="mb-6 text-left text-base font-light text-black opacity-60">
        {{ $t('register.subtitle') }}
      </h4>
      <form
        class="space-y-6"
        novalidate
        @submit.prevent="register"
      >
        <div class="flex space-x-5">
          <div class="w-1/2">
            <label
              for="firstName"
              class="block text-sm font-medium text-black"
              >{{ $t('register.name') }}</label
            >
            <p-input-text
              v-model="form.firstName"
              class="p-input-text w-full"
              :placeholder="$t('register.phName')"
              required
            />
          </div>
          <div class="w-1/2">
            <label
              for="lastName"
              class="block text-sm font-medium text-black"
              >{{ $t('register.lastName') }}</label
            >
            <p-input-text
              v-model="form.lastName"
              class="p-input-text w-full"
              :placeholder="$t('register.phLastName')"
              required
            />
          </div>
        </div>
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
        <div class="mb-5">
          <label
            for="cui"
            class="block text-sm font-medium text-black"
            >{{ $t('register.cui') }}</label
          >
          <p-input-text
            v-model="form.cui"
            :use-grouping="false"
            :placeholder="$t('register.phCui')"
            :maxlength="13"
            :pattern="7"
            type="number"
            :invalid="errorCui"
            class="p-input-text w-full"
            required
          />
        </div>
        <div>
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
            />
          </div>
        </div>
        <div>
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
            />
          </div>
        </div>

        <div class="mb-5">
          <p-button
            :label="$t('register.register')"
            text
            class="bg-[#142958] px-5 text-white"
            rounded
            type="submit"
          />
        </div>
        <div class="mb-5">
          <div class="flex flex-col space-y-2">
            <h1
              v-if="errorEmail"
              class="text-red-600"
            >
              {{ $t('register.msgErrorCui') }}
            </h1>
            <h1
              v-if="errorPassword"
              class="text-red-600"
            >
              {{ $t('register.msgErrorPassword') }}
            </h1>
            <h1
              v-if="errorCui"
              class="text-red-600"
            >
              {{ $t('register.msgErrorCui') }}
            </h1>
          </div>
        </div>
      </form>
    </div>
  </div> -->
</template>
