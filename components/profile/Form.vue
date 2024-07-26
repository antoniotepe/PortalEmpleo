<script lang="ts" setup>
const profileView = ref(false)
const isEditing = ref(false)
// const DateMailAdded = ref('Agregado hace 1 mes')

const InitProfileData = {
  firstName: 'Ana',
  secondName: 'Cristina',
  thirdName: 'Eloisa',
  firstSurname: 'Aguirre',
  secondSurname: 'de León',
  lastNameMarried: 'García',
  cui: '3279501101',
}

const ProfileData = reactive({ ...InitProfileData })
const OriginalProfileData = ref({ ...InitProfileData }) // esta es la copia

const cancelEdit = () => {
  isEditing.value = false
  if (isEditing.value === false) {
    Object.assign(ProfileData, OriginalProfileData.value)
    console.log(ProfileData.firstName)
  }
}
// interface FormData {
//   firstName: string
//   email: string
// }

// const form: FormData = reactive({
//   firstName: 'Amy Elsner Reyes',
//   email: 'amy.elsner@gmail.com',
// })

const toggleEdit = () => {
  isEditing.value = !isEditing.value
  if (!isEditing.value) {
    // Aquí puedes agregar la lógica para guardar los cambios
  }
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <p-card>
      <template #content>
        <div class="flex items-center justify-between font-normal">
          <div class="flex gap-2">
            <p-avatar
              image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
              size="xlarge"
              shape="circle"
            />

            <div class="flex flex-col justify-center">
              <h1 class="text-2xl font-bold">Amy Elsner</h1>
              <p class="text-subtitle">amy.elsner@gmail.com</p>
            </div>
          </div>
          <div v-if="profileView">
            <p-button
              icon="pi pi-pencil"
              rounded
              class="bg-[#142958]"
              :label="$t('ui.buttons.return.label')"
              @click="toggleEdit"
            />
          </div>
          <div
            v-else
            class="flex flex-col items-center gap-2 sm:flex-row"
          >
            <p-button
              icon="pi pi-pencil"
              rounded
              class="bg-[#142958]"
              :label="isEditing ? $t('ui.buttons.save.label') : $t('ui.buttons.edit.label')"
              @click="toggleEdit"
            />
            <p-button
              v-if="isEditing"
              icon="pi pi-times"
              class="text-red-600"
              rounded
              :label="$t('ui.buttons.cancel')"
              link
              @click="cancelEdit"
            />
          </div>
        </div>
      </template>
    </p-card>

    <p-card>
      <template #title>{{ $t('profile.personalInformation') }}</template>

      <template #content>
        <div v-if="profileView">
          <div class="grid grid-cols-3 gap-4">
            <form>
              <div class="flex flex-col gap-2">
                <label for="cui"> Correo Electrónico </label>

                <p-input-text
                  id="cui"
                  type="email"
                  filled
                  fluid
                  placeholder="ingresa tu correo"
                  required
                />
              </div>

              <p-button
                rounded
                class="text-secondary bg-[#142958]"
                type="submit"
                :label="registrars"
                >dfadf</p-button
              >
            </form>
          </div>
        </div>
        <div
          v-else
          class="flex flex-col gap-4"
        >
          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-2">
              <label for="cui"> {{ $t('profile.uniqueIdentificationCode') }} </label>

              <p-input-text
                id="cui"
                v-model="ProfileData.cui"
                filled
                fluid
                disabled="false"
              />
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-2">
              <label for="firstName"> {{ $t('profile.firstName') }} </label>

              <p-input-text
                id="firstName"
                v-model="ProfileData.firstName"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="secondName"> {{ $t('profile.middleName') }} </label>

              <p-input-text
                id="secondName"
                v-model="ProfileData.secondName"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="thirdName"> {{ $t('profile.thirdName') }} </label>

              <p-input-text
                id="thirdName"
                v-model="ProfileData.thirdName"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-2">
              <label for="firstSurname"> {{ $t('profile.firstSurname') }} </label>

              <p-input-text
                id="firstSurname"
                v-model="ProfileData.firstSurname"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="secondSurname"> {{ $t('profile.secondSurname') }} </label>

              <p-input-text
                id="secondSurname"
                v-model="ProfileData.secondSurname"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="marriedSurname"> {{ $t('profile.marriedName') }} </label>

              <p-input-text
                id="marriedSurname"
                v-model="ProfileData.lastNameMarried"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>
          </div>
        </div>
      </template>
    </p-card>

    <p-card>
      <template #title>{{ $t('profile.notifications') }}</template>

      <template #content>
        <span>{{ $t('profile.mailingList') }}</span>
      </template>
    </p-card>
  </div>
</template>
