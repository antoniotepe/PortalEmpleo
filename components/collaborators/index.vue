<script lang="ts" setup>
import { ref } from 'vue'
import { FilterMatchMode } from '@primevue/core/api'
import { navigateTo } from 'nuxt/app'

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  email: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
})

const products = ref([
  { id: 1, name: 'Mario Aldana', email: 'a@gmail.com' },
  { id: 2, name: 'Mateo Lux', email: 'b@gmail.com' },
  { id: 3, name: 'Alejandro Gomez', email: 'c@gmail.com' },
  { id: 4, name: 'Mariana Castillo', email: 'd@gmail.com' },
  { id: 5, name: 'Alejandra Alvarez', email: 'e@gmail.com' },
  { id: 6, name: 'Nombre extra', email: 'f@gmail.com' },
])

function handleEdit(id) {
  navigateTo(`/collaborators/${id}`)
}
function handleDelete(id) {
  console.log('se elimino el valor', id)
}
</script>

<template>
  <div class="flex flex-col gap-4 p-4">
    <p-card>
      <template #title>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-3xl font-bold text-[#142958]">
            {{ $t('collaborators.listCollaborators') }}</span
          >
          <NuxtLink
            v-ripple
            to="/collaborators/profile"
            class="p"
          >
            <i class="pi pi-file-plus mr-2 text-[#4182F9]" />
            <span class="font-medium text-[#4182F9]">{{
              $t('collaborators.addCollaborator')
            }}</span>
          </NuxtLink>
        </div>
      </template>
      <template #content>
        <p-data-table
          v-model:filters="filters"
          :value="products"
          data-key="id"
          table-style="min-width: 50rem"
          paginator
          :rows="5"
          :rows-per-page-options="[5, 10]"
          filter-display="row"
          :global-filter-fields="['name', 'email']"
        >
          <template #header>
            <div class="my-3 flex justify-end">
              <p-iconField>
                <p-inputIcon>
                  <i class="pi pi-search" />
                </p-inputIcon>
                <p-input-text
                  v-model="filters['global'].value"
                  :placeholder="$t('collaborators.searchPartner')"
                />
              </p-iconField>
            </div>
          </template>
          <template #empty> No customers found. </template>
          <template #loading> Loading customers data. Please wait. </template>
          <p-column :header="$t('collaborators.fullName')">
            <template #body="{ data }">
              <div class="flex items-center">
                <span>{{ data.name }}</span>
              </div>
            </template>
          </p-column>
          <p-column :header="$t('collaborators.email')">
            <template #body="{ data }">
              <div class="flex items-center">
                <span>{{ data.email }}</span>
              </div>
            </template>
          </p-column>
          <p-column
            :header="$t('collaborators.actions')"
            body-style="text-align:center"
          >
            <template #body="{ data }">
              <div class="flex space-x-16">
                <p-iconField>
                  <p-input-icon @click="handleEdit(data.id)">
                    <i class="pi pi-pencil" />
                  </p-input-icon>
                </p-iconField>
                <p-iconField>
                  <p-input-icon @click="handleDelete(data.id)">
                    <i class="pi pi-trash" />
                  </p-input-icon>
                </p-iconField>
              </div>
            </template>
          </p-column>
        </p-data-table>
      </template>
    </p-card>
  </div>
</template>
