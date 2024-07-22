<script lang="ts" setup>
definePageMeta({ layout: 'auth' })

onBeforeMount(async () => {
  try {
    const response = await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        email: 'arodriguez@mintrabajo.gob.gt',
        password: '123456',
      },
    })

    console.log('response', response)
  } catch (error) {
    console.error('error')
  }
})
</script>

<template>
  <div>login</div>
</template>
