<script lang="ts" setup>
import { FilterMatchMode } from '@primevue/core/api'

const rowData = ref([
  {
    id: 1,
    name: 'Amy Elsner',
    email: 'a@gmail.com',
    constancia: 123456,
    nit: 12345,
    razonSocial: 'Amilcar',
    fechaRegistro: '12/06/2024',
    status: 'Rechazo',
  },
  {
    id: 2,
    name: 'Anna Fali',
    email: 'a@gmail.com',
    constancia: 123456,
    nit: 12345,
    razonSocial: 'Amilcar',
    fechaRegistro: '12/06/2024',
    status: 'Constancia Definitiva',
  },
  {
    id: 3,
    name: 'Asiya Javayant',
    email: 'a@gmail.com',
    constancia: 123456,
    nit: 12345,
    razonSocial: 'Amilcar',
    fechaRegistro: '12/06/2024',
    status: 'En Espera',
  },
  {
    id: 4,
    name: 'Bernardo Dominic',
    email: 'a@gmail.com',
    constancia: 123456,
    nit: 12345,
    razonSocial: 'Amilcar',
    fechaRegistro: '12/06/2024',
    status: 'Rechazo',
  },
  {
    id: 5,
    name: 'Elwin Sharvill',
    email: 'a@gmail.com',
    constancia: 123456,
    nit: 12345,
    razonSocial: 'Amilcar',
    fechaRegistro: '12/06/2024',
    status: 'Constancia Definitiva',
  },
  {
    id: 6,
    name: 'Ioni Bowcher',
    email: 'a@gmail.com',
    constancia: 123456,
    nit: 12345,
    razonSocial: 'Amilcar',
    fechaRegistro: '12/06/2024',
    status: 'En Espera',
  },
  {
    id: 7,
    name: 'Ivan Magalhaes',
    email: 'a@gmail.com',
    constancia: 123456,
    nit: 12345,
    razonSocial: 'Amilcar',
    fechaRegistro: '12/06/2024',
    status: 'Rechazo',
  },
  {
    id: 8,
    name: 'Onyama Limba',
    email: 'a@gmail.com',
    constancia: 123456,
    nit: 12345,
    razonSocial: 'Amilcar',
    fechaRegistro: '12/06/2024',
    status: 'Constancia Definitiva',
  },
  {
    id: 9,
    name: 'Stephen Shaw',
    email: 'a@gmail.com',
    constancia: 123456,
    nit: 12345,
    razonSocial: 'Amilcar',
    fechaRegistro: '12/06/2024',
    status: 'En Espera',
  },
  {
    id: 10,
    name: 'XuXue Feng',
    email: 'a@gmail.com',
    constancia: 123456,
    nit: 12345,
    razonSocial: 'Amilcar',
    fechaRegistro: '12/06/2024',
    status: 'Rechazo',
  },
])

const getSeverity = (status: string) => {
  switch (status) {
    case 'Rechazo':
      return 'danger'
    case 'Constancia Definitiva':
      return 'success'
    case 'En Espera':
      return 'info'
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Rechazo':
      return 'pi pi-times'
    case 'En Espera':
      return 'pi pi-clock'
  }
}

const getStatusMessage = (status: string) => {
  switch (status) {
    case 'Rechazo':
      return 'Rechazo'
    case 'Constancia Definitiva':
      return 'Constancia Definitiva'
    case 'En Espera':
      return 'En Espera'
  }
}

const loading = ref(false)
</script>
<template>
  <div class="flex flex-col gap-4">
    <p-card>
      <template #content>
        <div class="flex items-center justify-between">
          <span class="text-2xl font-bold">
            {{ $t('rerit.principal.sections.request.label') }}
          </span>
          <p-button
            :label="$t('rerit.principal.sections.request.new')"
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
          dataKey="id"
          paginator
          :rows="10"
          :loading="loading"
        >
          <template #loading> Loading customers data. Please wait. </template>
          <p-column header="Constancia">
            <template #body="{ data }">
              <div class="flex items-center gap-2">
                <span>{{ data.constancia }}</span>
              </div>
            </template>
          </p-column>
          <p-column header="NIT">
            <template #body="{ data }">
              <div class="flex items-center gap-2">
                <span>{{ data.nit }}</span>
              </div>
            </template>
          </p-column>
          <p-column header="Razón Social">
            <template #body="{ data }">
              <div class="flex items-center gap-2">
                <span>{{ data.razonSocial }}</span>
              </div>
            </template>
          </p-column>
          <p-column header="Fecha de registro">
            <template #body="{ data }">
              <div class="flex items-center gap-2">
                <span>{{ data.fechaRegistro }}</span>
              </div>
            </template>
          </p-column>
          <p-column>
            <template #header>
              <div class="flex w-full justify-center font-bold">Estatus del proceso</div>
            </template>
            <template #body="{ data }">
              <div class="flex items-center justify-center gap-2">
                <p-tag
                  :severity="getSeverity(data.status)"
                  class="status-tag"
                >
                  <template #default>
                    {{ getStatusMessage(data.status) }}
                    <i
                      :class="getStatusIcon(data.status)"
                      class="mr-2"
                    ></i>
                  </template>
                </p-tag>
              </div>
            </template>
          </p-column>
        </p-data-table>
      </template>
    </p-card>
  </div>
</template>
