<script lang="ts" setup>
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
