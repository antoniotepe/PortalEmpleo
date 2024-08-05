<script lang="ts" setup>
interface SelectTypes {
  value: number
  label: string
}
const form = ref({
  foreign: false,
  nit: 0,
  name: '',
  comercialName: '',
  companyType: {} as SelectTypes,
  entityType: {} as SelectTypes,
  industry: {} as SelectTypes,
  activity: {} as SelectTypes,
  juridical: false,
  guild: '',
  operationYear: null,
  igss: false,
  affiliationNumber: 0,
  patentType: {} as SelectTypes,
  registerNumber: 0,
  invoiceNumber: 0,
  book: 0,
  registerDate: null,
  FileUpload: null as File | null,
  direction: '',
  notificationsDirection: '',
  country: '',
  department: '',
  town: '',
  contactSections: [
    {
      contactName: '',
      contactPosition: '',
      contactEmail: '',
      contactPhone: 0,
      contactPhoneTwo: 0,
    },
  ],
  nitRepresent: 0,
  foreignRepresent: false,
  appointmentDate: null,
  notaryAuthorization: '',
  appointment: '',
  duration: '',
  registerNumberRepresent: 0,
  invoiceNumberRepresent: 0,
  bookRepresent: 0,
  registerDateRepresent: null,
})

type Item = {
  value: number
  label: string
}

const companyType = ref<Item[]>([])
const entityType = ref<Item[]>([])
const industry = ref<Item[]>([])
const economicActivity = ref<Item[]>([])
const guild = ref<Item[]>([])
const patentTypes = ref<Item[]>([])
const success = ref(false)

onBeforeMount(async () => {
  try {
    const responseTypes = await $fetch(`/api/companies/types`, {
      method: 'GET',
    })

    const responseEntities = await $fetch(`/api/companies/typeEntity`, {
      method: 'GET',
    })

    const responseIndustry = await $fetch(`/api/companies/industry`, {
      method: 'GET',
    })

    const responseEconomicActivity = await $fetch(`/api/companies/economicActivity`, {
      method: 'GET',
    })

    const responseGuild = await $fetch(`/api/companies/guild`, {
      method: 'GET',
    })

    const responsePatentTypes = await $fetch(`/api/companies/patentTypes`, {
      method: 'GET',
    })

    interface CatalogItem {
      id: number
      nombre: string
    }

    companyType.value = responseTypes.data.map((item: CatalogItem) => ({
      value: item.id,
      label: item.nombre,
    }))

    entityType.value = responseEntities.data.map((item: CatalogItem) => ({
      value: item.id,
      label: item.nombre,
    }))

    industry.value = responseIndustry.data.map((item: CatalogItem) => ({
      value: item.id,
      label: item.nombre,
    }))

    economicActivity.value = responseEconomicActivity.data.map((item: CatalogItem) => ({
      value: item.id,
      label: item.nombre,
    }))

    guild.value = responseGuild.data.map((item: CatalogItem) => ({
      value: item.id,
      label: item.nombre,
    }))

    patentTypes.value = responsePatentTypes.data.map((item: CatalogItem) => ({
      value: item.id,
      label: item.nombre,
    }))
  } catch (error) {
    console.error('error')
  }
})

const onSelect = (event: { files: File[] }) => {
  form.value.FileUpload = event.files[0] || null
}

const onClear = () => {
  form.value.FileUpload = null
}

const onRemove = () => {
  form.value.FileUpload = null
}

const isFileUploaded = () => {
  return form.value.FileUpload !== null
}

const contactSections = ref([
  {
    contactName: '',
    contactPosition: '',
    contactEmail: '',
    contactPhone: 0,
    contactPhoneTwo: 0,
  },
])

const newContact = () => {
  form.value.contactSections.push({
    contactName: '',
    contactPosition: '',
    contactEmail: '',
    contactPhone: 0,
    contactPhoneTwo: 0,
  })
  contactSections.value.push({
    contactName: '',
    contactPosition: '',
    contactEmail: '',
    contactPhone: 0,
    contactPhoneTwo: 0,
  })
}

const deleteContact = () => {
  if (form.value.contactSections.length > 0) {
    form.value.contactSections.splice(form.value.contactSections.length - 1, 1)
  }

  if (contactSections.value.length > 0) {
    contactSections.value.splice(form.value.contactSections.length - 1, 1)
  }
}

async function submitForm() {
  console.log('datos', form.value)
  try {
    await $fetch('/api/companies/new', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: {
        ...form.value,
        /* form.companyType.value: form.companyType.value */
      },
    })

    success.value = true
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <p-card>
      <template #content>
        <span class="text-2xl font-bold">
          {{ $t('companies.new.title') }}
        </span>
      </template>
    </p-card>

    <p-stepper value="1">
      <p-step-list>
        <p-step value="1">{{ $t('companies.new.sections.general') }}</p-step>
        <p-step value="2">{{ $t('patents.new.sections.general') }}</p-step>
        <p-step value="3">{{ $t('location.new.sections.general') }}</p-step>
        <p-step value="4">{{ $t('contact.new.sections.general') }}</p-step>
        <p-step
          v-if="form.juridical"
          value="5"
          >{{ $t('legalRepresentation.new.sections.general') }}</p-step
        >
      </p-step-list>

      <p-step-panels>
        <p-step-panel
          class="bg-inherit"
          v-slot="{ activateCallback }"
          value="1"
        >
          <p-card>
            <template #content>
              <div class="grid grid-cols-2 gap-4">
                <UiInputBinary
                  id="foreign"
                  v-model="form.foreign"
                  :label="$t('companies.new.inputs.foreign.label')"
                />

                <div></div>

                <UiInputNumber
                  v-if="!form.foreign"
                  id="nit"
                  v-model="form.nit"
                  :label="$t('companies.new.inputs.nit.label')"
                  :placeholder="$t('companies.new.inputs.nit.placeholder')"
                  :help="$t('companies.new.inputs.nit.help')"
                  :use-grouping="false"
                  :max="9999999999999"
                />

                <div v-if="!form.foreign"></div>

                <UiInputText
                  id="company-name"
                  v-model="form.name"
                  :label="$t('companies.new.inputs.name.label')"
                  :placeholder="$t('companies.new.inputs.name.placeholder')"
                  :help="$t('companies.new.inputs.name.help')"
                />

                <UiInputText
                  id="comercial-name"
                  v-model="form.comercialName"
                  :label="$t('companies.new.inputs.comercialName.label')"
                  :placeholder="$t('companies.new.inputs.comercialName.placeholder')"
                  :help="$t('companies.new.inputs.comercialName.help')"
                />

                <UiInputSelect
                  id="company-type"
                  v-model="form.companyType"
                  :label="$t('companies.new.inputs.companyType.label')"
                  :items="companyType"
                  :placeholder="$t('companies.new.inputs.companyType.placeholder')"
                  :help="$t('companies.new.inputs.companyType.help')"
                />

                <UiInputSelect
                  id="entityType"
                  v-model="form.entityType"
                  :label="$t('companies.new.inputs.entityType.label')"
                  :items="entityType"
                  :placeholder="$t('companies.new.inputs.entityType.placeholder')"
                  :help="$t('companies.new.inputs.entityType.help')"
                />

                <UiInputSelect
                  id="industry"
                  v-model="form.industry"
                  :label="$t('companies.new.inputs.industry.label')"
                  :items="industry"
                  :placeholder="$t('companies.new.inputs.entityType.placeholder')"
                  :help="$t('companies.new.inputs.entityType.help')"
                />

                <UiInputSelect
                  id="economicActivity"
                  v-model="form.activity"
                  :label="$t('companies.new.inputs.activity.label')"
                  :items="economicActivity"
                  :placeholder="$t('companies.new.inputs.activity.placeholder')"
                  :help="$t('companies.new.inputs.activity.help')"
                />

                <UiInputSelect
                  id="guild"
                  v-model="form.guild"
                  :label="$t('companies.new.inputs.guild.label')"
                  :items="guild"
                  :placeholder="$t('companies.new.inputs.guild.placeholder')"
                  :help="$t('companies.new.inputs.guild.help')"
                />

                <UiInputDate
                  id="operation-year"
                  v-model="form.operationYear"
                  view="year"
                  date-format="yy"
                  :label="$t('companies.new.inputs.operationYear.label')"
                  :placeholder="$t('companies.new.inputs.operationYear.placeholder')"
                  :help="$t('companies.new.inputs.operationYear.help')"
                />

                <UiInputBinary
                  id="juridical"
                  v-model="form.juridical"
                  :label="$t('companies.new.inputs.juridical.label')"
                />

                <UiInputBinary
                  id="igss"
                  v-model="form.igss"
                  :label="$t('companies.new.inputs.igss.label')"
                />

                <UiInputNumber
                  v-if="form.igss"
                  id="affiliationNumber"
                  v-model="form.affiliationNumber"
                  :label="$t('companies.new.inputs.igss.number')"
                  :placeholder="$t('companies.new.inputs.igss.number')"
                  :help="$t('companies.new.inputs.igss.help')"
                />
              </div>
            </template>
          </p-card>

          <p-card class="mt-5">
            <template #content>
              <div class="flex items-center justify-end gap-2 font-normal">
                <p-button
                  :label="$t('ui.buttons.next.label')"
                  rounded
                  @click="activateCallback('2')"
                />
              </div>
            </template>
          </p-card>
        </p-step-panel>

        <p-step-panel
          class="bg-inherit"
          v-slot="{ activateCallback }"
          value="2"
        >
          <p-card>
            <template #content>
              <div class="grid grid-cols-2 gap-4">
                <UiInputSelect
                  id="patentType"
                  v-model="form.patentType"
                  :label="$t('patents.new.inputs.patentType.label')"
                  :items="patentTypes"
                  :placeholder="$t('patents.new.inputs.patentType.placeholder')"
                  :help="$t('patents.new.inputs.patentType.help')"
                />

                <UiInputNumber
                  id="numberRegister"
                  v-model="form.registerNumber"
                  :label="$t('patents.new.inputs.registerNumber.label')"
                  :placeholder="$t('patents.new.inputs.registerNumber.placeholder')"
                  :help="$t('patents.new.inputs.registerNumber.help')"
                />

                <UiInputNumber
                  id="invoiceNumber"
                  v-model="form.invoiceNumber"
                  :label="$t('patents.new.inputs.invoice.label')"
                  :placeholder="$t('patents.new.inputs.invoice.placeholder')"
                  :help="$t('patents.new.inputs.invoice.help')"
                />

                <UiInputNumber
                  id="bookPatent"
                  v-model="form.book"
                  :label="$t('patents.new.inputs.book.label')"
                  :placeholder="$t('patents.new.inputs.book.placeholder')"
                  :help="$t('patents.new.inputs.book.help')"
                />

                <UiInputDate
                  id="registerDate"
                  v-model="form.registerDate"
                  view="year"
                  date-format="yy"
                  :label="$t('patents.new.inputs.registerDate.label')"
                  :placeholder="$t('patents.new.inputs.registerDate.placeholder')"
                  :help="$t('patents.new.inputs.registerDate.help')"
                />

                <div class="flex flex-col gap-2">
                  <label>
                    {{ $t('patents.new.inputs.appendDocuments.label') }}
                  </label>
                  <p-file-upload
                    name="demo[]"
                    url="/api/upload"
                    accept="image/*"
                    :max-file-size="1000000"
                    :show-upload-button="false"
                    :choose-label="$t('ui.buttons.chooseFile.label')"
                    :cancel-label="$t('ui.buttons.cancel.label')"
                    @select="onSelect($event)"
                    @clear="onClear()"
                    @remove="onRemove()"
                  >
                    <template #empty>
                      <span>Sube tu archivo aquí.</span>
                    </template>
                  </p-file-upload>
                </div>
              </div>
            </template>
          </p-card>

          <p-card class="mt-5">
            <template #content>
              <div class="flex items-center justify-between gap-2 font-normal">
                <p-button
                  :label="$t('ui.buttons.back.label')"
                  severity="secondary"
                  text
                  rounded
                  @click="activateCallback('1')"
                />

                <p-button
                  :label="$t('ui.buttons.next.label')"
                  rounded
                  @click="activateCallback('3')"
                />
              </div>
            </template>
          </p-card>
        </p-step-panel>

        <p-step-panel
          class="bg-inherit"
          v-slot="{ activateCallback }"
          value="3"
        >
          <p-card>
            <template #content>
              <div class="grid grid-cols-2 gap-4">
                <UiInputText
                  id="direction"
                  v-model="form.direction"
                  :label="$t('location.new.inputs.direction.label')"
                  :placeholder="$t('location.new.inputs.direction.placeholder')"
                  :help="$t('location.new.inputs.direction.help')"
                />

                <UiInputText
                  id="notificationsDirection"
                  v-model="form.notificationsDirection"
                  :label="$t('location.new.inputs.notificationsDirection.label')"
                  :placeholder="$t('location.new.inputs.notificationsDirection.placeholder')"
                  :help="$t('location.new.inputs.notificationsDirection.help')"
                />

                <UiInputText
                  id="country"
                  v-model="form.country"
                  :label="$t('location.new.inputs.country.label')"
                  :placeholder="$t('location.new.inputs.country.placeholder')"
                  :help="$t('location.new.inputs.country.help')"
                />

                <UiInputText
                  id="department"
                  v-model="form.department"
                  :label="$t('location.new.inputs.department.label')"
                  :placeholder="$t('location.new.inputs.department.placeholder')"
                  :help="$t('location.new.inputs.department.help')"
                />

                <UiInputText
                  id="town"
                  v-model="form.town"
                  :label="$t('location.new.inputs.town.label')"
                  :placeholder="$t('location.new.inputs.town.placeholder')"
                  :help="$t('location.new.inputs.town.help')"
                />
              </div>
            </template>
          </p-card>

          <p-card class="mt-5">
            <template #content>
              <div class="flex items-center justify-between gap-2 font-normal">
                <p-button
                  :label="$t('ui.buttons.back.label')"
                  severity="secondary"
                  text
                  rounded
                  @click="activateCallback('2')"
                />

                <p-button
                  :label="$t('ui.buttons.next.label')"
                  rounded
                  @click="activateCallback('4')"
                />
              </div>
            </template>
          </p-card>
        </p-step-panel>

        <p-step-panel
          class="bg-inherit"
          v-slot="{ activateCallback }"
          value="4"
        >
          <p-card>
            <template #content>
              <div class="">
                <div
                  v-for="(section, index) in contactSections"
                  :key="index"
                  class="mb-4 grid grid-cols-2 gap-4"
                >
                  <div class="grid grid-cols-4 gap-4">
                    <h2 class="font-bold">Contacto {{ index + 1 }}</h2>
                  </div>

                  <div></div>

                  <UiInputText
                    :id="'contactName' + index"
                    v-model="contactSections[index].contactName"
                    :label="$t('contact.new.inputs.name.label')"
                    :placeholder="$t('contact.new.inputs.name.placeholder')"
                    :help="$t('contact.new.inputs.name.help')"
                  />

                  <UiInputText
                    :id="'contactPosition' + index"
                    v-model="contactSections[index].contactPosition"
                    :label="$t('contact.new.inputs.position.label')"
                    :placeholder="$t('contact.new.inputs.position.placeholder')"
                    :help="$t('contact.new.inputs.position.help')"
                  />

                  <UiInputText
                    :id="'contactEmail' + index"
                    v-model="contactSections[index].contactEmail"
                    :label="$t('contact.new.inputs.email.label')"
                    :placeholder="$t('contact.new.inputs.email.placeholder')"
                    :help="$t('contact.new.inputs.email.help')"
                  />

                  <UiInputNumber
                    :id="'contactPhone' + index"
                    v-model="contactSections[index].contactPhone"
                    :label="$t('contact.new.inputs.phone1.label')"
                    :placeholder="$t('contact.new.inputs.phone1.placeholder')"
                    :help="$t('contact.new.inputs.phone1.help')"
                  />

                  <UiInputNumber
                    :id="'contactPhoneTwo' + index"
                    v-model="contactSections[index].contactPhoneTwo"
                    :use-grouping="false"
                    :label="$t('contact.new.inputs.phone2.label')"
                    :placeholder="$t('contact.new.inputs.phone2.placeholder')"
                    :help="$t('contact.new.inputs.phone2.help')"
                    :max="99999999"
                  />
                </div>

                <div class="grid grid-cols-4 gap-4">
                  <p-button
                    class="m-auto"
                    :disabled="contactSections.length > 3"
                    icon="pi pi-plus"
                    :label="$t('ui.buttons.newContact.label')"
                    rounded
                    @click="newContact"
                  />

                  <p-button
                    v-if="contactSections.length >= 2"
                    class="m-auto border-[#FF0000] bg-[#FF0000]"
                    icon="pi pi-minus"
                    :label="$t('ui.buttons.deleteContact.label')"
                    rounded
                    @click="deleteContact"
                  />
                </div>
              </div>
            </template>
          </p-card>

          <p-card class="mt-5">
            <template #content>
              <div class="flex items-center justify-between gap-2 font-normal">
                <p-button
                  :label="$t('ui.buttons.back.label')"
                  severity="secondary"
                  text
                  rounded
                  @click="activateCallback('3')"
                />

                <p-button
                  v-if="form.juridical"
                  :label="$t('ui.buttons.next.label')"
                  rounded
                  @click="activateCallback('5')"
                />
                <p-button
                  v-if="!form.juridical"
                  :label="$t('ui.buttons.save.label')"
                  rounded
                  @click="submitForm"
                />
              </div>
            </template>
          </p-card>
        </p-step-panel>

        <p-step-panel
          class="bg-inherit"
          v-slot="{ activateCallback }"
          value="5"
          v-if="form.juridical"
        >
          <p-card>
            <template #content>
              <div class="grid grid-cols-2 gap-4">
                <UiInputNumber
                  id="nitRepresent"
                  v-model="form.nitRepresent"
                  :label="$t('companies.new.inputs.nit.label')"
                  :placeholder="$t('companies.new.inputs.nit.placeholder')"
                  :help="$t('companies.new.inputs.nit.help')"
                />

                <UiInputBinary
                  id="foreignRepresent"
                  v-model="form.foreignRepresent"
                  :label="$t('legalRepresentation.new.inputs.isForeign.label')"
                />

                <UiInputDate
                  id="appointmentDate"
                  v-model="form.appointmentDate"
                  view="year"
                  date-format="yy"
                  :label="$t('legalRepresentation.new.inputs.appointmentDate.label')"
                  :placeholder="$t('legalRepresentation.new.inputs.appointmentDate.placeholder')"
                  :help="$t('legalRepresentation.new.inputs.appointmentDate.help')"
                />

                <UiInputText
                  id="notaryAuthorization"
                  v-model="form.notaryAuthorization"
                  :label="$t('legalRepresentation.new.inputs.notaryAuthorization.label')"
                  :placeholder="
                    $t('legalRepresentation.new.inputs.notaryAuthorization.placeholder')
                  "
                  :help="$t('legalRepresentation.new.inputs.notaryAuthorization.help')"
                />

                <UiInputText
                  id="appointment"
                  v-model="form.appointment"
                  :label="$t('legalRepresentation.new.inputs.appointment.label')"
                  :placeholder="$t('legalRepresentation.new.inputs.appointment.placeholder')"
                  :help="$t('legalRepresentation.new.inputs.appointment.help')"
                />

                <UiInputText
                  id="duration"
                  v-model="form.duration"
                  :label="$t('legalRepresentation.new.inputs.duration.label')"
                  :placeholder="$t('legalRepresentation.new.inputs.duration.placeholder')"
                  :help="$t('legalRepresentation.new.inputs.duration.help')"
                />

                <UiInputNumber
                  id="numberRegisterLegalRepresentation"
                  v-model="form.registerNumberRepresent"
                  :label="$t('patents.new.inputs.registerNumber.label')"
                  :placeholder="$t('patents.new.inputs.registerNumber.placeholder')"
                  :help="$t('patents.new.inputs.registerNumber.help')"
                />

                <UiInputNumber
                  id="invoiceNumberLegalRepresentation"
                  v-model="form.invoiceNumberRepresent"
                  :label="$t('patents.new.inputs.invoice.label')"
                  :placeholder="$t('patents.new.inputs.invoice.placeholder')"
                  :help="$t('patents.new.inputs.invoice.help')"
                />

                <UiInputNumber
                  id="bookPatentLegalRepresentation"
                  v-model="form.bookRepresent"
                  :label="$t('patents.new.inputs.book.label')"
                  :placeholder="$t('patents.new.inputs.book.placeholder')"
                  :help="$t('patents.new.inputs.book.help')"
                />

                <UiInputDate
                  id="registerDateLegalRepresentation"
                  v-model="form.registerDateRepresent"
                  :label="$t('patents.new.inputs.registerDate.label')"
                  :placeholder="$t('patents.new.inputs.registerDate.placeholder')"
                  :help="$t('patents.new.inputs.registerDate.help')"
                  view="year"
                  date-format="yy"
                />
              </div>
            </template>
          </p-card>

          <p-card class="mt-5">
            <template #content>
              <div class="flex items-center justify-between gap-2 font-normal">
                <p-button
                  :label="$t('ui.buttons.back.label')"
                  severity="secondary"
                  text
                  rounded
                  @click="activateCallback('4')"
                />

                <p-button
                  :label="$t('ui.buttons.save.label')"
                  rounded
                  @click="submitForm"
                />
              </div>
            </template>
          </p-card>
        </p-step-panel>
      </p-step-panels>
    </p-stepper>
  </div>
</template>

<style>
.p-fileupload-file-badge {
  display: none;
}
</style>
