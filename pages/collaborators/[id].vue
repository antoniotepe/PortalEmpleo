<script lang="ts" setup>
const id = useRoute().params.id
</script>

<template>
  <div>
    <CollaboratorsProfile :id="id" />
  </div>
</template>
