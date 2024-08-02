<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>

3440168

<template>
  <div class="flex h-screen w-full flex-col">
    <div class="ml-10 mt-10 flex">
      <img
        src="~/assets/webp/logo-h.webp"
        class="h-20"
      />
    </div>
    <div class="flex flex-grow flex-col items-center justify-center">
      <div class="flex flex-row items-center gap-3 text-6xl">
        <h1 class="font-bold text-primary">{{ $t('pageErrors.title404') }}</h1>
        <i class="pi pi-search ml-4 text-5xl"></i>
      </div>
      <div class="my-10 h-auto text-center text-3xl opacity-60">
        <p>{{ $t('pageErrors.subtitle404') }}</p>
      </div>
      <div>
        <NuxtLink
          to="/"
          class="rounded-full border bg-primary px-4 py-2 text-xl font-medium text-white"
        >
          {{ $t('pageErrors.btnReturnHome') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Puedes agregar más estilos aquí si es necesario */
</style>
