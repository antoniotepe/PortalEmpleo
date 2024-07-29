
<script lang="ts" setup>
import { useAuthStore } from './stores/auth'

const auth = useAuthStore()

onBeforeMount(() => {
  auth.init()
})
</script>


<template>
  <Head>
    <Title>Mintrab</Title>
  </Head>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
