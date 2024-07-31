<script lang="ts" setup>
const inputRequired = ref(true)
interface FormData {
  cui: string
  firstName: string
  secondName: string
  thirdName: string
  firstSurname: string
  secondSurname: string
  lastNameMarried: string
  maritalStatus: string
  department: string
  municipality: string
  ethnicity: string
  birth: string
  gender: string
  igss: string
  linguisticCommunity: string
  email: string
}

const form = reactive<FormData>({
  cui: '',
  firstName: '',
  secondName: '',
  thirdName: '',
  firstSurname: '',
  secondSurname: '',
  lastNameMarried: '',
  maritalStatus: '',
  department: '',
  municipality: '',
  ethnicity: '',
  birth: '',
  gender: '',
  igss: '',
  linguisticCommunity: '',
  email: '',
})

const save = () => {
  console.log('Datos guardados:', form)
}
</script>

<template>
  <form @submit.prevent="save">
    <div class="flex flex-col gap-4 self-center">
      <p-card>
        <template #title>
          <div class="my-5 flex items-center justify-between font-normal">
            <div class="flex gap-2 text-3xl font-bold text-[#142958]">
              {{ $t('collaborators.register') }}
            </div>
            <div>
              <p-button
                icon="pi pi-pencil"
                class="redondeado-lg border-0 bg-[#142958]"
                :label="$t('ui.buttons.save.label')"
                type="submit"
              />

              <NuxtLink to="/collaborators">
                <i class="pi pi-arrow-left ml-3 mr-2 text-[#4182F9]" />
                <span class="font-medium text-[#4182F9]">{{ $t('ui.buttons.return.label') }}</span>
              </NuxtLink>
            </div>
          </div>
        </template>

        <template #content>
          <div class="flex flex-col gap-4">
            <div class="grid grid-cols-3 gap-4">
              <div class="flex flex-col gap-2">
                <UiInputText
                  id="igss"
                  v-model="form.cui"
                  :label="$t('profile.uniqueIdentificationCode')"
                  filled
                  fluid
                  :required="inputRequired"
                />
              </div>
              <div class="flex flex-col gap-2">
                <UiInputText
                  id="igss"
                  v-model="form.igss"
                  :label="$t('profile.igss')"
                  filled
                  fluid
                  :required="inputRequired"
                />
              </div>
              <div class="flex flex-col gap-2">
                <UiInputText
                  id="birth"
                  v-model="form.birth"
                  :label="$t('profile.birth')"
                  filled
                  fluid
                  :required="inputRequired"
                />
              </div>
            </div>

            <div class="grid grid-cols-3 gap-4">
              <div class="flex flex-col gap-2">
                <UiInputText
                  id="firstName"
                  v-model="form.firstName"
                  filled
                  fluid
                  :required="inputRequired"
                  :label="$t('profile.firstName')"
                />
              </div>

              <div class="flex flex-col gap-2">
                <UiInputText
                  id="secondName"
                  v-model="form.secondName"
                  :label="$t('profile.secondName')"
                  filled
                  fluid
                  :required="inputRequired"
                />
              </div>

              <div class="flex flex-col gap-2">
                <UiInputText
                  id="thirdName"
                  v-model="form.thirdName"
                  :label="$t('profile.thirdName')"
                  filled
                  fluid
                  :required="inputRequired"
                />
              </div>
            </div>

            <div class="grid grid-cols-3 gap-4">
              <div class="flex flex-col gap-2">
                <UiInputText
                  id="firstSurname"
                  v-model="form.firstSurname"
                  :label="$t('profile.firstSurname')"
                  filled
                  fluid
                  :required="inputRequired"
                />
              </div>

              <div class="flex flex-col gap-2">
                <UiInputText
                  id="secondSurname"
                  v-model="form.secondSurname"
                  :label="$t('profile.secondSurname')"
                  filled
                  fluid
                  :required="inputRequired"
                />
              </div>

              <div class="flex flex-col gap-2">
                <UiInputText
                  id="marriedSurname"
                  v-model="form.lastNameMarried"
                  :label="$t('profile.marriedName')"
                  filled
                  fluid
                  :required="inputRequired"
                />
              </div>
            </div>

            <div class="grid grid-cols-3 gap-4">
              <div class="flex flex-col gap-2">
                <UiInputText
                  id="maritalStatus"
                  v-model="form.maritalStatus"
                  :label="$t('profile.maritalStatus')"
                  filled
                  fluid
                  :required="inputRequired"
                />
              </div>

              <div class="flex flex-col gap-2">
                <UiInputText
                  id="gender"
                  v-model="form.gender"
                  :label="$t('profile.gender')"
                  filled
                  fluid
                  :required="inputRequired"
                />
              </div>
              <div class="flex flex-col gap-2">
                <UiInputText
                  id="linguisticCommunity"
                  v-model="form.linguisticCommunity"
                  :label="$t('profile.linguisticCommunity')"
                  filled
                  fluid
                  :required="inputRequired"
                />
              </div>
            </div>

            <div class="grid grid-cols-3 gap-4">
              <div class="flex flex-col gap-2">
                <UiInputText
                  id="department"
                  v-model="form.department"
                  :label="$t('profile.department')"
                  filled
                  fluid
                  :required="inputRequired"
                />
              </div>
              <div class="flex flex-col gap-2">
                <UiInputText
                  id="municipality"
                  v-model="form.municipality"
                  :label="$t('profile.municipality')"
                  filled
                  fluid
                  :required="inputRequired"
                />
              </div>

              <div class="flex flex-col gap-2">
                <UiInputText
                  id="ethnicity"
                  v-model="form.ethnicity"
                  :label="$t('profile.ethnicity')"
                  filled
                  fluid
                  :required="inputRequired"
                />
              </div>
            </div>
          </div>
        </template>
      </p-card>
    </div>
  </form>
</template>
