<script lang="ts" setup>
const data = ref('Hello Vue 3 + Vite')
</script>

<template>
  <div class="container mx-auto mt-2">
    <p-button :label="data" />
  </div>
</template>
