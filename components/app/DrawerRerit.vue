<template>
  <ul class="m-0 list-none p-4">
    <li>
      <div
        v-ripple
        v-styleclass="{
          selector: '@next',
          enterFromClass: 'hidden',
          enterActiveClass: 'animate-slidedown',
          leaveToClass: 'hidden',
          leaveActiveClass: 'animate-slideup',
        }"
        class="p-ripple flex cursor-pointer items-center justify-between p-4 text-surface-500"
      >
        <span class="font-medium">RERIT</span>
        <i class="pi pi-chevron-down" />
      </div>

      <ul class="m-0 list-none overflow-hidden p-0">
        <li>
          <NuxtLink
            v-ripple
            to="/rerit/new"
            class="p-ripple flex cursor-pointer items-center rounded p-4 text-surface-700 transition-colors duration-150 hover:bg-surface-100"
          >
            <i class="pi pi-file mr-2" />
            <span class="font-medium"><span class="font-medium">Solicitudes</span></span>
          </NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</template>
