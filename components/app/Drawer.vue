<script lang="ts" setup>
const drawer = useDrawerStore()
</script>

<template>
  <p-drawer v-model:visible="drawer.visible">
    <template #container="{ closeCallback }">
      <div class="flex h-full flex-col">
        <div class="flex shrink-0 items-center justify-between gap-4 p-2">
          <span class="inline-flex items-center gap-2">
            <img src="~/assets/webp/logo-h.webp" />
          </span>

          <span>
            <p-button
              type="button"
              icon="pi pi-times"
              severity="secondary"
              text
              rounded
              @click="closeCallback"
            />
          </span>
        </div>

        <div class="overflow-y-auto">
          <AppDrawerCompany />
          <AppDrawerRerit />
        </div>
      </div>
    </template>
  </p-drawer>
</template>
