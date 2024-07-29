<script lang="ts" setup>
const profileView = ref(false)
const isEditing = ref(false)
const newEmail = ref('')

interface emailEntry {
  email: string
  dateMailAdded: string
}

const InitProfileData = {
  cui: '3279501101',
  firstName: 'Ana',
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

const ProfileData = reactive({ ...InitProfileData })
const OriginalProfileData = ref({ ...InitProfileData }) // esta es la copia

const cancelEdit = () => {
  isEditing.value = false
  if (isEditing.value === false) {
    Object.assign(ProfileData, OriginalProfileData.value)
    console.log(ProfileData.firstName)
  }
}

const toggleEdit = () => {
  isEditing.value = !isEditing.value
  if (!isEditing.value) {
    // Aquí puedes agregar la lógica para guardar los cambios
  }
}
const addNewEmail = () => {
  ProfileData.mails.push({
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
                {{ ProfileData.firstName }} {{ ProfileData.firstSurname }}
              </h1>
              <p class="text-subtitle">{{ ProfileData.mails[0].email }}</p>
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
                <label for="newEmail"> {{ $t('profile.newEmail') }} </label>

                <p-input-text
                  id="email"
                  v-model="newEmail"
                  type="email"
                  filled
                  fluid
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
                v-model="ProfileData.cui"
                filled
                fluid
                disabled="false"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label for="igss"> {{ $t('profile.igss') }} </label>

              <p-input-text
                id="igss"
                v-model="ProfileData.igss"
                filled
                fluid
                disabled="false"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label for="birth"> {{ $t('profile.birth') }} </label>

              <p-input-text
                id="birth"
                v-model="ProfileData.birth"
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
          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-2">
              <label for="maritalStatus"> {{ $t('profile.maritalStatus') }}</label>

              <p-input-text
                id="maritalStatus"
                v-model="ProfileData.maritalStatus"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="gender"> {{ $t('profile.gender') }} </label>

              <p-input-text
                id="gender"
                v-model="ProfileData.gender"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label for="linguisticCommunity"> {{ $t('profile.linguisticCommunity') }} </label>

              <p-input-text
                id="linguisticCommunity"
                v-model="ProfileData.linguisticCommunity"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-2">
              <label for=""> {{ $t('profile.department') }}</label>

              <p-input-text
                id="department"
                v-model="ProfileData.department"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="municipality"> {{ $t('profile.municipality') }} </label>

              <p-input-text
                id="municipality"
                v-model="ProfileData.municipality"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="ethnicity"> {{ $t('profile.ethnicity') }} </label>

              <p-input-text
                id="ethnicity"
                v-model="ProfileData.ethnicity"
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
        <div class="flex flex-col gap-4">
          <div class="flex flex-wrap justify-start gap-5">
            <div
              v-for="email in ProfileData.mails"
              :key="email.email"
              class="flex"
            >
              <div class="flex place-items-center rounded-full bg-[#ECF3FF] p-3">
                <i class="pi pi-envelope bg-[#4182F9] text-[#ffffff]" />
              </div>
              <div class="ml-2">
                <p>{{ email.email }}</p>
                <p class="text-black opacity-60">{{ email.dateMailAdded }}</p>
              </div>
            </div>
          </div>
          <div class="">
            <p-button
              v-if="!profileView"
              icon="pi pi-plus"
              class="redondeado-lg border-0 bg-[#ECF3FF] px-5 text-[#4182F9]"
              :label="$t('ui.buttons.AddNewMail.label')"
              @click="profileView = !profileView"
            />
          </div>
        </div>
      </template>
    </p-card>
  </div>
</template>
