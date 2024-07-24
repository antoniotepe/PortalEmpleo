import { NuxtLink } from '../../.nuxt/components';
<script lang="ts" setup>
const isEditing = ref(false)
const toggleEdit = () => {
  isEditing.value = !isEditing.value
  if (!isEditing.value) {
    // Aquí puedes agregar la lógica para guardar los cambios
  }

  //const cancelEdit = () => {
  //  isEditing.value = false
  // }

  //interface FormData {
  //  firstName: string
  //  email: string
  //}

  //const form = reactive<FormData>({
  //  firstName: 'Amy Elsner',
  //  email: 'amy.elsner@gmail.com',
  //})
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

          <div class="flex flex-col items-center gap-2 sm:flex-row">
            <p-button
              icon="pi pi-pencil"
              rounded
              :label="isEditing ? $t('ui.buttons.save.label') : $t('ui.buttons.edit.label')"
              @click="toggleEdit"
            />
            <!-- <p-button
              v-if="isEditing"
              icon="pi pi-times"
              rounded
              :label="$t('profile.cancel')"
              link
              @click="cancelEdit"
            /> -->
          </div>
        </div>
      </template>
    </p-card>

    <p-card>
      <template #title>{{ $t('profile.personalInformation') }}</template>

      <template #content>
        <div class="flex flex-col gap-4">
          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-2">
              <label for="cui"> {{ $t('profile.uniqueIdentificationCode') }} </label>

              <p-input-text
                id="cui"
                value="3279501101"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-2">
              <label for="firstName"> {{ $t('profile.firstName') }} </label>

              <p-input-text
                id="firstName"
                value="Ana"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="secondName"> {{ $t('profile.middleName') }} </label>

              <p-input-text
                id="secondName"
                value="Cristina"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="thirdName"> {{ $t('profile.thirdName') }} </label>

              <p-input-text
                id="thirdName"
                value="Eloisa"
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
                value="Aguirre"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="secondSurname"> {{ $t('profile.secondSurname') }} </label>

              <p-input-text
                id="secondSurname"
                value="de León"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="marriedSurname"> {{ $t('profile.marriedName') }} </label>

              <p-input-text
                id="marriedSurname"
                value="García"
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
