<script lang="ts" setup>
const visible = ref(false)

const companies = ref([
  {
    id: 1,
    name: 'Empresa 1',
    code: 'EMP1',
    email: 'aerodriguez@mintrabajo.gob.gt',
  },
  {
    id: 2,
    name: 'Empresa 2',
    code: 'EMP2',
    email: 'aerodriguez@mintrabajo.gob.gt',
  },
])

const selected = ref(companies.value[0])
</script>

<template>
  <p-icon-field @click="visible = true">
    <p-input-text
      :value="selected.name"
      variant="filled"
      readonly
    />

    <p-input-icon class="pi pi-chevron-down" />
  </p-icon-field>

  <p-dialog
    v-model:visible="visible"
    modal
    :closable="false"
    dismissable-mask
    :style="{ width: '45rem' }"
  >
    <template #header>
      <div class="flex flex-1 items-center justify-between">
        <h2 class="text-lg font-semibold">Empresas</h2>

        <NuxtLink
          to="/companies/new"
          class="p-button p-button-rounded p-button-text"
          @click="visible = false"
        >
          Añadir
        </NuxtLink>
      </div>
    </template>

    <p-dataTable
      v-model:selection="selected"
      :value="companies"
      striped-rows
      data-key="id"
    >
      <p-column
        selection-mode="single"
        header-style="width: 3rem"
      />

      <p-column
        field="name"
        header="Nombre"
      />

      <p-column
        field="code"
        header="Código"
      />

      <p-column
        field="email"
        header="Correo"
      />

      <p-column header="Acciones">
        <template #body>
          <p-button
            type="button"
            icon="pi pi-eye"
            severity="secondary"
            text
            rounded
          />
        </template>
      </p-column>
    </p-dataTable>

    <div class="mt-4 flex justify-end gap-2">
      <p-button
        type="button"
        label="Cancelar"
        severity="secondary"
        rounded
        text
        @click="visible = false"
      />
    </div>
  </p-dialog>
</template>
