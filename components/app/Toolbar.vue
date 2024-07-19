<script lang="ts" setup>
const drawer = useDrawerStore()
</script>

<template>
  <p-toolbar>
    <template #start>
      <p-button
        icon="pi pi-bars"
        class="mr-2"
        severity="secondary"
        text
        rounded
        @click="drawer.toggle()"
      />

      <CompanySelect />
    </template>

    <template #end>
      <NuxtLink to="/profile">
        <p-avatar
          image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
          style="width: 32px; height: 32px"
        />
      </NuxtLink>
    </template>
  </p-toolbar>
</template>
