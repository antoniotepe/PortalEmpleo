<script lang="ts" setup>
const profileView = ref(false)
const isEditing = ref(false)
const newEmail = ref('')

interface emailEntry {
  email: string
  dateMailAdded: string
}

const initProfileData = {
  cui: '3279501101',
  firstName: 'colaboradora',
  secondName: 'Cristina',
  thirdName: 'Eloisa',
  firstSurname: 'Aguirre',
  secondSurname: 'de León',
  lastNameMarried: 'García',
  maritalStatus: 'Casada',
  department: 'Guatemala',
  municipality: 'Guatemala',
  ethnicity: 'Ladina',
  birth: '12/02/1998',
  gender: 'Femenino',
  igss: '123456789',
  linguisticCommunity: 'ComunidadLingüística',
  mails: [
    {
      email: 'amy.elsner@gmail.com',
      dateMailAdded: '01/07/2024',
    },
  ] as emailEntry[],
}

const profileData = reactive({ ...initProfileData })
const originalProfileData = ref({ ...initProfileData }) // esta es la copia

const cancelEdit = () => {
  isEditing.value = false
  if (isEditing.value === false) {
    Object.assign(profileData, originalProfileData.value)
    console.log(profileData.firstName)
  }
}

const toggleEdit = () => {
  isEditing.value = !isEditing.value
  if (!isEditing.value) {
    // Aquí puedes agregar la lógica para guardar los cambios
  }
}
const addNewEmail = () => {
  profileData.mails.push({
    email: newEmail.value,
    dateMailAdded: new Date().toLocaleDateString(),
  })
  newEmail.value = ''
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
              <h1 class="text-2xl font-bold">
                {{ profileData.firstName }} {{ profileData.firstSurname }}
              </h1>
              <p class="text-subtitle">{{ profileData.mails[0].email }}</p>
            </div>
          </div>
          <div v-if="profileView">
            <p-button
              icon="pi pi-pencil"
              class="redondeado-lg border-0 bg-[#142958]"
              :label="$t('ui.buttons.return.label')"
              @click="profileView = !profileView"
            />
          </div>
          <div
            v-else
            class="flex flex-col items-center gap-2 sm:flex-row"
          >
            <p-button
              icon="pi pi-pencil"
              class="redondeado-lg border-0 bg-[#142958]"
              :label="isEditing ? $t('ui.buttons.save.label') : $t('ui.buttons.edit.label')"
              @click="toggleEdit"
            />
            <p-button
              v-if="isEditing"
              icon="pi pi-times"
              class="text-red-600"
              rounded
              :label="$t('ui.buttons.cancel.label')"
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
            <form @submit.prevent="addNewEmail">
              <div class="mb-5 flex flex-col gap-2">
                <UiInputText
                  id="email"
                  v-model="newEmail"
                  :label="$t('profile.newEmail')"
                  :placeholder="$t('register.emailText')"
                  required
                />
              </div>
              <p-button
                icon="pi pi-plus"
                class="text-secondary redondeado-lg border-0 bg-[#142958]"
                type="submit"
                :label="$t('ui.buttons.AddNewMail.label')"
              />
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
                v-model="profileData.cui"
                filled
                fluid
                disabled="false"
              />
            </div>
            <div class="flex flex-col gap-2">
              <UiInputText
                id="igss"
                v-model="profileData.igss"
                :label="$t('profile.igss')"
                filled
                fluid
                disabled="false"
              />
            </div>
            <div class="flex flex-col gap-2">
              <UiInputText
                id="birth"
                v-model="profileData.birth"
                :label="$t('profile.birth')"
                filled
                fluid
                disabled="false"
              />
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-2">
              <UiInputText
                id="firstName"
                v-model="profileData.firstName"
                filled
                fluid
                :disabled="!isEditing"
                :label="$t('profile.firstName')"
              />
            </div>

            <div class="flex flex-col gap-2">
              <UiInputText
                id="secondName"
                v-model="profileData.secondName"
                :label="$t('profile.secondName')"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>

            <div class="flex flex-col gap-2">
              <UiInputText
                id="thirdName"
                v-model="profileData.thirdName"
                :label="$t('profile.thirdName')"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-2">
              <UiInputText
                id="fistSurname"
                v-model="profileData.firstSurname"
                :label="$t('profile.firstSurname')"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>

            <div class="flex flex-col gap-2">
              <UiInputText
                id="secondSurname"
                v-model="profileData.secondSurname"
                :label="$t('profile.secondSurname')"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>

            <div class="flex flex-col gap-2">
              <UiInputText
                id="marriedSurname"
                v-model="profileData.lastNameMarried"
                :label="$t('profile.marriedName')"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-2">
              <UiInputText
                id="maritalStatus"
                v-model="profileData.maritalStatus"
                :label="$t('profile.maritalStatus')"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>

            <div class="flex flex-col gap-2">
              <UiInputText
                id="gender"
                v-model="profileData.gender"
                :label="$t('profile.gender')"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>
            <div class="flex flex-col gap-2">
              <UiInputText
                id="linguisticCommunity"
                v-model="profileData.linguisticCommunity"
                :label="$t('profile.linguisticCommunity')"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-2">
              <UiInputText
                id="department"
                v-model="profileData.department"
                :label="$t('profile.department')"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>
            <div class="flex flex-col gap-2">
              <UiInputText
                id="municipality"
                v-model="profileData.municipality"
                :label="$t('profile.municipality')"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>

            <div class="flex flex-col gap-2">
              <UiInputText
                id="ethnicity"
                v-model="profileData.ethnicity"
                :label="$t('profile.ethnicity')"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>
          </div>
        </div>
      </template>
    </p-card>
  </div>
</template>
