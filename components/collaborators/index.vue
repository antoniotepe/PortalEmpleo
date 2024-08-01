<script lang="ts" setup>
import { FilterMatchMode } from '@primevue/core/api'
import { getUsers } from '~/service/collaborators'

const { t } = useI18n()
const confirm = useConfirm()
const toast = useToast()

const person = ref([])
const loading = ref(true)

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  email: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
})

onMounted(async () => {
  try {
    const users = await getUsers()
    person.value = users
  } catch (error) {
    // si existe un error mandar por aquí
  } finally {
    loading.value = false
  }
})

function handleDelete(id: number, name: string) {
  confirm.require({
    message: `${t('collaborators.deleteCollaborator.label')}${name}?`,
    header: `${t('ui.message.confirmOperation.label')}`,
    icon: 'pi pi-info-circle text-red-600',
    rejectLabel: `${t('ui.buttons.cancel.label')}`,
    rejectProps: {
      label: 'Cancel',
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
</script>

<template>
  <div class="flex flex-col gap-4">
    <p-card>
      <template #content>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-2xl font-bold"> {{ $t('collaborators.listCollaborators') }}</span>
          <NuxtLink
            v-ripple
            to="/collaborators/profile"
            class="p"
          >
            <p-button
              :label="$t('collaborators.addCollaborator')"
              rounded
            />
          </NuxtLink>
        </div>
      </template>
    </p-card>

    <p-card>
      <template #content>
        <p-toast />
        <p-confirm-dialog />
        <p-data-table
          v-model:filters="filters"
          :value="person"
          data-key="id"
          paginator
          :rows="5"
          :rows-per-page-options="[5, 10]"
          filter-display="row"
          :global-filter-fields="['name', 'email']"
          :loading="loading"
          empty-message-cell="datos no existen"
        >
          <template #header>
            <div class="flex justify-end">
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
                <NuxtLink :to="`/collaborators/profile/${data.id}`">
                  <p-iconField>
                    <p-input-icon>
                      <i class="pi pi-pencil cursor-pointer text-xl hover:text-[#4182F9]" />
                    </p-input-icon>
                  </p-iconField>
                </NuxtLink>

                <p-iconField>
                  <p-input-icon @click="handleDelete(data.id, data.name)">
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
