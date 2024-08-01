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
const toast = useToast()

function handleEdit(id: number) {
  if (id && id != null) {
    navigateTo(`/companies/branches/${id}`)
  }
}

function handleDelete(name: string) {
  confirm.require({
    message: `${t('branches.message.deleteBranch.label')}${name}?`,
    header: `${t('ui.message.confirmOperation.label')}`,
    icon: 'pi pi-info-circle text-red-600',
    rejectLabel: `${t('ui.buttons.cancel.label')}`,
    rejectProps: {
      severity: 'secondary',
      outlined: true,
    },
    acceptProps: {
      label: `${t('ui.buttons.delete.label')}`,
      severity: 'danger',
    },
    accept: () => {
      toast.add({
        severity: 'info',
        summary: 'Confirmado',
        detail: 'Se elimino al colaborador',
        life: 3000,
      })
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
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-2xl font-bold">
            {{ $t('branches.list.title') }}
          </span>
          <p-button
            :label="$t('branches.message.new.label')"
            rounded
          />
        </div>
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
          <template #empty> {{ $t('branches.message.notFound.label') }} </template>
          <template #loading> {{ $t('branches.message.loadingBranches.label') }} </template>
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

          <p-column
            :header="$t('ui.message.actions.label')"
            body-style="text-align:center"
          >
            <template #body="{ data }">
              <div class="flex space-x-16">
                <p-iconField>
                  <p-inputIcon @click="handleEdit(data.id)">
                    <i class="pi pi-pencil cursor-pointer text-xl hover:text-[#4182F9]" />
                  </p-inputIcon>
                </p-iconField>

                <p-iconField>
                  <p-inputIcon @click="handleDelete(data.name)">
                    <i class="pi pi-trash cursor-pointer text-xl hover:text-red-600" />
                  </p-inputIcon>
                </p-iconField>
              </div>
            </template>
          </p-column>
        </p-data-table>
      </template>
    </p-card>
  </div>
  <p-toast />
  <p-confirm-dialog />
</template>
