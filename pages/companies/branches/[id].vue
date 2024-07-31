<script lang="ts" setup>
import { CountryService } from '@/service/CountryService'
import { DepartmentService } from '~/service/DepartmentService'
import { TownService } from '~/service/TownService'

const form = ref({
  comercialName: '',
  companyName: '',
  economicActivity: '',
  igss: false,
  sameIgss: false,
  affiliationNumber: 0,
  patentType: '',
  registerNumber: 0,
  invoiceNumber: 0,
  book: 0,
  registerDate: null,
  FileUpload: null as File | null,
  direction: '',
  notificationsDirection: '',
})

const countries = ref()
const department = ref()
const town = ref()

onMounted(() => {
  const fetchData = async () => {
    try {
      countries.value = await CountryService.getCountries()
      department.value = await DepartmentService.getDepartment()
      town.value = await TownService.getTown()
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  fetchData()
})

const selectedCountry = ref()
const filteredCountries = ref()
const selectedDepartment = ref()
const filteredDepartments = ref()
const selectedTown = ref()
const filteredTown = ref()

const searchCountries = (event: any) => {
  setTimeout(() => {
    if (!event.query.trim().length) {
      filteredCountries.value = [...countries.value]
    } else {
      filteredCountries.value = countries.value.filter((country: any) => {
        return country.name.toLowerCase().startsWith(event.query.toLowerCase())
      })
    }
  }, 250)
}

const searchDepartments = (event: any) => {
  setTimeout(() => {
    if (!event.query.trim().length) {
      filteredDepartments.value = [...department.value]
    } else {
      filteredDepartments.value = department.value.filter((department: any) => {
        return department.name.toLowerCase().startsWith(event.query.toLowerCase())
      })
    }
  }, 250)
}

const searchTown = (event: any) => {
  setTimeout(() => {
    const departmentList = town.value.filter((town: any) => {
      return town.department_code === selectedDepartment.value.code
    })

    if (!event.query.trim().length) {
      filteredTown.value = departmentList[0].municipalities
    } else {
      filteredTown.value = departmentList[0].municipalities.filter((town: any) => {
        return town.name.toLowerCase().startsWith(event.query.toLowerCase())
      })
    }
  }, 250)
}

const changeCountry = () => {
  filteredDepartments.value = null
  filteredTown.value = null
}

const changeDepartment = () => {
  filteredTown.value = null
}

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

const submitForm = () => {
  console.log(form.value)
  if (isFileUploaded()) {
    console.log('Archivo listo para subir:', form.value.FileUpload)
  } else {
    alert('Por favor, seleccione un archivo antes de enviar el formulario.')
  }
  console.log(selectedCountry)
  console.log(selectedDepartment)
  console.log(selectedTown)
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <p-card>
      <template #content>
        <span class="text-lg font-bold">
          {{ $t('branches.new.title') }}
        </span>
      </template>
    </p-card>

    <p-stepper value="1">
      <p-step-list>
        <p-step value="1">{{ $t('ui.message.general.label') }}</p-step>
        <p-step value="2">{{ $t('patents.new.sections.general') }}</p-step>
        <p-step value="3">{{ $t('location.new.sections.general') }}</p-step>
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
                <UiInputText
                  id="comercialName"
                  v-model="form.comercialName"
                  :label="$t('ui.message.tradeName.label')"
                  :placeholder="$t('ui.message.tradeName.label')"
                  :help="$t('ui.message.tradeName.help')"
                />

                <UiInputSelect
                  id="companyName"
                  v-model="form.companyName"
                  :label="$t('companies.new.inputs.name.label')"
                  :items="[
                    {
                      value: 2,
                      label: 'hola',
                    },
                  ]"
                  :placeholder="$t('companies.new.inputs.name.placeholder')"
                  :help="$t('companies.new.inputs.name.help')"
                />

                <UiInputSelect
                  id="economicActivity"
                  v-model="form.economicActivity"
                  :label="$t('branches.new.inputs.economicActivity.label')"
                  :items="[
                    {
                      value: 2,
                      label: 'hola',
                    },
                  ]"
                />
                <UiInputBinary
                  id="igss"
                  v-model="form.igss"
                  :label="$t('companies.new.inputs.igss.label')"
                  :help="$t('companies.new.inputs.igss.help')"
                />
                <UiInputBinary
                  v-if="form.igss"
                  id="sameIgss"
                  v-model="form.sameIgss"
                  :label="$t('branches.new.inputs.sameIgss.label')"
                />

                <UiInputNumber
                  v-if="!form.sameIgss && form.igss"
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
                  :items="[
                    {
                      value: 2,
                      label: 'hola',
                    },
                  ]"
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
                <div class="flex flex-col gap-2">
                  <label for="selectedCountry">
                    {{ $t('location.new.inputs.country.label') }}
                  </label>
                  <p-autoComplete
                    id="autoCompleteCountry"
                    v-model="selectedCountry"
                    dropdown
                    optionLabel="name"
                    :suggestions="filteredCountries"
                    variant="filled"
                    @complete="searchCountries"
                    @change="changeCountry"
                  />
                  <small id="selectedCountry-help">
                    {{ $t('location.new.inputs.department.help') }}
                  </small>
                </div>

                <div
                  class="flex flex-col gap-2"
                  v-if="selectedCountry?.code === 'GT'"
                >
                  <label for="selectedDepartment">
                    {{ $t('location.new.inputs.department.label') }}
                  </label>
                  <p-autoComplete
                    id="autoCompleteCountry"
                    v-model="selectedDepartment"
                    optionLabel="name"
                    :suggestions="filteredDepartments"
                    dropdown
                    @complete="searchDepartments"
                    @change="changeDepartment"
                  />
                  <small id="selectedCountry-help">
                    {{ $t('location.new.inputs.department.help') }}
                  </small>
                </div>

                <div
                  class="flex flex-col gap-2"
                  v-if="selectedDepartment?.code != undefined"
                >
                  <label for="selectTown">
                    {{ $t('location.new.inputs.town.label') }}
                  </label>
                  <p-autoComplete
                    id="autoCompleteTown"
                    v-model="selectedTown"
                    optionLabel="name"
                    :suggestions="filteredTown"
                    dropdown
                    @complete="searchTown"
                  />
                  <small id="selectedCountry-help">
                    {{ $t('location.new.inputs.department.help') }}
                  </small>
                </div>

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
#autoCompleteCountry input {
  width: 100%;
}
</style>
