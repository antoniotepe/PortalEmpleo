<script setup lang="ts">
const auth = useAuthStore()

function logout() {
  closeDrawer()
  auth.logout()
}

defineProps<{
  visible: boolean
}>()

const emit = defineEmits(['update:visible'])

const closeDrawer = () => {
  emit('update:visible', false)
}
</script>

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
        <span class="font-medium">Empresa</span>
        <i class="pi pi-chevron-down" />
      </div>

      <ul class="m-0 list-none overflow-hidden p-0">
        <li>
          <a
            v-ripple
            class="p-ripple flex cursor-pointer items-center rounded p-4 text-surface-700 transition-colors duration-150 hover:bg-surface-100"
          >
            <i class="pi pi-home mr-2" />
            <span class="font-medium">Detalle</span>
            <span
              class="ml-auto inline-flex items-center justify-center rounded-full bg-primary text-primary-contrast"
              style="min-width: 1.5rem; height: 1.5rem"
            >
              3
            </span>
          </a>
        </li>
        <li>
          <NuxtLink
            v-ripple
            @click="closeDrawer"
            to="/collaborators"
            class="p-ripple flex cursor-pointer items-center rounded p-4 text-surface-700 transition-colors duration-150 hover:bg-surface-100"
          >
            <i class="pi pi-users mr-2" />
            <span class="font-medium">{{ $t('toolbar.collaborators') }}</span>
          </NuxtLink>
        </li>

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
            class="p-ripple flex cursor-pointer items-center rounded p-4 text-surface-700 transition-colors duration-150 hover:bg-surface-100"
          >
            <i class="pi pi-shop mr-2" />
            <span class="font-medium">Sucursales</span>
            <i class="pi pi-chevron-down ml-auto" />
          </div>

          <ul
            class="m-0 hidden list-none overflow-y-hidden py-0 pl-4 pr-0 transition-all duration-[400ms] ease-in-out"
          >
            <li>
              <NuxtLink
                v-ripple
                to="/companies/branches"
                @click="closeDrawer"
                class="p-ripple flex cursor-pointer items-center rounded p-4 text-surface-700 transition-colors duration-150 hover:bg-surface-100"
              >
                <i class="pi pi-list mr-2" />
                <span class="font-medium">Listado</span>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                v-ripple
                to="/companies/branches/new"
                @click="closeDrawer"
                class="p-ripple flex cursor-pointer items-center rounded p-4 text-surface-700 transition-colors duration-150 hover:bg-surface-100"
              >
                <i class="pi pi-file-plus mr-2" />
                <span class="font-medium">Añadir</span>
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
      <ul
        class="flex cursor-pointer items-center p-4 py-4 transition-colors duration-150 hover:bg-surface-100"
        @click="logout"
      >
        <i class="pi pi-sign-out mr-2" />
        <span class="p-ripple flex cursor-pointer items-center font-medium">Cerrar sesión</span>
      </ul>
    </li>
  </ul>
</template>
