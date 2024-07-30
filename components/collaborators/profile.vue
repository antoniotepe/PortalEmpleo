<script lang="ts" setup>
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div>
    <h1>User Profile</h1>
    <p>{{ props.id }}</p>
  </div>
</template>
