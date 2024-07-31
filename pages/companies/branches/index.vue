<script lang="ts" setup>
import { FilterMatchMode } from '@primevue/core/api'

const rowData = ref([
  { id: 1, name: 'Amy Elsner', email: 'a@gmail.com' },
  { id: 2, name: 'Anna Fali', email: 'a@gmail.com' },
  { id: 3, name: 'Asiya Javayant', email: 'a@gmail.com' },
  { id: 4, name: 'Bernardo Dominic', email: 'a@gmail.com' },
  { id: 5, name: 'Elwin Sharvill', email: 'a@gmail.com' },
  { id: 6, name: 'Ioni Bowcher', email: 'a@gmail.com' },
  { id: 7, name: 'Ivan Magalhaes', email: 'a@gmail.com' },
  { id: 8, name: 'Onyama Limba', email: 'a@gmail.com' },
  { id: 9, name: 'Stephen Shaw', email: 'a@gmail.com' },
  { id: 10, name: 'XuXue Feng', email: 'a@gmail.com' },
])

const { t } = useI18n()
const confirm = useConfirm()

function handleEdit(id: number) {
  if (id && id != null) {
    navigateTo(`/companies/branches/${id}`)
  }
}

const showTemplate = (id: number, name: string) => {
  confirm.require({
    group: 'templating',
    header: `${t('branches.message.deleteBranch.label')}${name}?`,
    rejectProps: {
      label: t('ui.buttons.cancel.label'),
      icon: 'pi pi-times',
      outlined: true,
      size: 'small',
    },
    acceptProps: {
      label: t('ui.buttons.delete.label'),
      icon: 'pi pi-times',
      size: 'small',
    },
    accept: () => {
      console.log('accept', id)
    },
    reject: () => {
      console.log('reject')
    },
  })
}

const loading = ref(false)
const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
})
</script>
<template>
  <div class="flex flex-col gap-4">
    <p-card>
      <template #content>
        <span class="text-lg font-bold">
          {{ $t('branches.list.title') }}
        </span>
      </template>
    </p-card>

    <p-card>
      <template #content>
        <p-data-table
          :value="rowData"
          tableStyle="min-width: 50rem"
          v-model:filters="filters"
          dataKey="id"
          paginator
          :rows="10"
          filterDisplay="row"
          :loading="loading"
          :globalFilterFields="['name', 'email']"
        >
          <template #header>
            <div class="flex justify-end">
              <p-iconField>
                <p-inputIcon>
                  <i class="pi pi-search" />
                </p-inputIcon>
                <p-inputText
                  v-model="filters['global'].value"
                  placeholder="Buscar sucursal"
                />
              </p-iconField>
            </div>
          </template>
          <template #empty> No customers found. </template>
          <template #loading> Loading customers data. Please wait. </template>
          <p-column header="Nombre">
            <template #body="{ data }">
              <div class="flex items-center gap-2">
                <span>{{ data.name }}</span>
              </div>
            </template>
          </p-column>
          <p-column header="Correo asociado">
            <template #body="{ data }">
              <div class="flex items-center gap-2">
                <span>{{ data.email }}</span>
              </div>
            </template>
          </p-column>

          <p-column>
            <template #header>
              <div class="flex w-full justify-center font-bold">Acciones</div>
            </template>
            <template #body="{ data }">
              <div class="flex justify-around">
                <p-iconField>
                  <p-inputIcon @click="handleEdit(data.id)">
                    <i class="pi pi-pencil cursor-pointer" />
                  </p-inputIcon>
                </p-iconField>

                <p-iconField>
                  <p-inputIcon @click="showTemplate(data.id, data.name)">
                    <i class="pi pi-trash cursor-pointer" />
                  </p-inputIcon>
                </p-iconField>
              </div>
            </template>
          </p-column>
        </p-data-table>
      </template>
    </p-card>
  </div>

  <p-confirmDialog group="templating">
    <template #message="slotProps">
      <div
        class="flex w-full flex-col items-center gap-4 border-b border-surface-200 dark:border-surface-700"
      >
        <i
          :class="slotProps.message.icon"
          class="!text-6xl text-primary-500"
        ></i>
        <p>{{ slotProps.message.message }}</p>
      </div>
    </template>
  </p-confirmDialog>
</template>
