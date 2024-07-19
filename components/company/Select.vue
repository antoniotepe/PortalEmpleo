<script lang="ts" setup>
const visible = ref(false)
</script>

<template>
  <p-icon-field @click="visible = true">
    <p-input-text
      value="Empresa 1"
      variant="filled"
      readonly
    />

    <p-input-icon class="pi pi-chevron-down" />
  </p-icon-field>

  <p-dialog
    v-model:visible="visible"
    modal
    header="Empresas"
    :style="{ width: '35rem' }"
  >
    <div class="flex justify-end gap-2">
      <p-button
        type="button"
        label="Cancelar"
        severity="secondary"
        text
        @click="visible = false"
      />
    </div>
  </p-dialog>
</template>
