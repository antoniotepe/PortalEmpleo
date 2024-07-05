<script lang="ts" setup>
const store = useGeneralStore()
</script>

<template>
  <p-drawer
    v-model:visible="store.drawer"
    header="Menú"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </p-drawer>
</template>
