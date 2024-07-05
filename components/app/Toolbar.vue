<script setup>
import { ref } from 'vue'

const items = ref([
  {
    label: 'Update',
    icon: 'pi pi-refresh',
  },
  {
    label: 'Delete',
    icon: 'pi pi-times',
  },
])
</script>

<template>
  <div class="mb-2 border-b-2">
    <div class="container mx-auto">
      <p-toolbar class="border-0 px-0">
        <template #start>
          <p-button
            icon="pi pi-plus"
            class="mr-2"
            severity="secondary"
            text
          />

          <p-button
            icon="pi pi-print"
            class="mr-2"
            severity="secondary"
            text
          />

          <p-button
            icon="pi pi-upload"
            severity="secondary"
            text
          />
        </template>

        <template #center>
          <p-icon-field>
            <p-input-icon>
              <i class="pi pi-search" />
            </p-input-icon>

            <p-input-text placeholder="Search" />
          </p-icon-field>
        </template>

        <template #end>
          <p-split-button
            label="Save"
            :model="items"
          />
        </template>
      </p-toolbar>
    </div>
  </div>
</template>
