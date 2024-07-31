<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { FilterMatchMode } from '@primevue/core/api'
import { useRouter } from 'vue-router'
import { getUsers } from '~/service/collaborators'

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  email: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
})

const person = ref([])
const loading = ref(true)
const router = useRouter()

onMounted(async () => {
  try {
    const users = await getUsers()
    person.value = users
  } catch (error) {
    console.error('Error fetching users:', error)
  } finally {
    loading.value = false
  }
})

function handleEdit(id) {
  router.push(`/collaborators/profile/${id}`)
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
          :value="person"
          data-key="id"
          table-style="min-width: 50rem"
          paginator
          :rows="5"
          :rows-per-page-options="[5, 10]"
          filter-display="row"
          :global-filter-fields="['name', 'email']"
          :loading="loading"
          empty-message-cell="datos no existen"
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
          <template #empty>
            <div class="flex flex-col items-center text-2xl">
              {{ $t('collaborators.empty') }}
            </div>
          </template>
          <template #loading>
            <div class="flex flex-col items-center text-4xl">
              <i class="pi pi-spin pi-cog text-3xl" />
              {{ $t('collaborators.loading') }}
            </div>
          </template>
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
                    <i class="pi pi-pencil cursor-pointer text-xl hover:text-[#4182F9]" />
                  </p-input-icon>
                </p-iconField>
                <p-iconField>
                  <p-input-icon @click="handleDelete(data.id)">
                    <i class="pi pi-trash cursor-pointer text-xl hover:text-red-600" />
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
