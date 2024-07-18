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

        <!-- <div class="overflow-y-auto">
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
                class="p-ripple flex cursor-pointer items-center justify-between p-4 text-surface-500 dark:text-surface-400"
              >
                <span class="font-medium">FAVORITES</span>
                <i class="pi pi-chevron-down" />
              </div>
              <ul class="m-0 list-none overflow-hidden p-0">
                <li>
                  <a
                    v-ripple
                    class="p-ripple flex cursor-pointer items-center rounded p-4 text-surface-700 transition-colors duration-150 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800"
                  >
                    <i class="pi pi-home mr-2" />
                    <span class="font-medium">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a
                    v-ripple
                    class="p-ripple flex cursor-pointer items-center rounded p-4 text-surface-700 transition-colors duration-150 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800"
                  >
                    <i class="pi pi-bookmark mr-2" />
                    <span class="font-medium">Bookmarks</span>
                  </a>
                </li>
                <li>
                  <a
                    v-ripple
                    v-styleclass="{
                      selector: '@next',
                      enterFromClass: 'hidden',
                      enterActiveClass: 'animate-slidedown',
                      leaveToClass: 'hidden',
                      leaveActiveClass: 'animate-slideup',
                    }"
                    class="p-ripple flex cursor-pointer items-center rounded p-4 text-surface-700 transition-colors duration-150 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800"
                  >
                    <i class="pi pi-chart-line mr-2" />
                    <span class="font-medium">Reports</span>
                    <i class="pi pi-chevron-down ml-auto" />
                  </a>
                  <ul
                    class="m-0 hidden list-none overflow-y-hidden py-0 pl-4 pr-0 transition-all duration-[400ms] ease-in-out"
                  >
                    <li>
                      <a
                        v-ripple
                        v-styleclass="{
                          selector: '@next',
                          enterFromClass: 'hidden',
                          enterActiveClass: 'animate-slidedown',
                          leaveToClass: 'hidden',
                          leaveActiveClass: 'animate-slideup',
                        }"
                        class="p-ripple flex cursor-pointer items-center rounded p-4 text-surface-700 transition-colors duration-150 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800"
                      >
                        <i class="pi pi-chart-line mr-2" />
                        <span class="font-medium">Revenue</span>
                        <i class="pi pi-chevron-down ml-auto" />
                      </a>
                      <ul
                        class="m-0 hidden list-none overflow-y-hidden py-0 pl-4 pr-0 transition-all duration-[400ms] ease-in-out"
                      >
                        <li>
                          <a
                            v-ripple
                            class="p-ripple flex cursor-pointer items-center rounded p-4 text-surface-700 transition-colors duration-150 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800"
                          >
                            <i class="pi pi-table mr-2" />
                            <span class="font-medium">View</span>
                          </a>
                        </li>
                        <li>
                          <a
                            v-ripple
                            class="p-ripple flex cursor-pointer items-center rounded p-4 text-surface-700 transition-colors duration-150 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800"
                          >
                            <i class="pi pi-search mr-2" />
                            <span class="font-medium">Search</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        v-ripple
                        class="p-ripple flex cursor-pointer items-center rounded p-4 text-surface-700 transition-colors duration-150 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800"
                      >
                        <i class="pi pi-chart-line mr-2" />
                        <span class="font-medium">Expenses</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    v-ripple
                    class="p-ripple flex cursor-pointer items-center rounded p-4 text-surface-700 transition-colors duration-150 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800"
                  >
                    <i class="pi pi-users mr-2" />
                    <span class="font-medium">Team</span>
                  </a>
                </li>
                <li>
                  <a
                    v-ripple
                    class="p-ripple flex cursor-pointer items-center rounded p-4 text-surface-700 transition-colors duration-150 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800"
                  >
                    <i class="pi pi-comments mr-2" />
                    <span class="font-medium">Messages</span>
                    <span
                      class="ml-auto inline-flex items-center justify-center rounded-full bg-primary text-primary-contrast"
                      style="min-width: 1.5rem; height: 1.5rem"
                      >3</span
                    >
                  </a>
                </li>
                <li>
                  <a
                    v-ripple
                    class="p-ripple flex cursor-pointer items-center rounded p-4 text-surface-700 transition-colors duration-150 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800"
                  >
                    <i class="pi pi-calendar mr-2" />
                    <span class="font-medium">Calendar</span>
                  </a>
                </li>
                <li>
                  <a
                    v-ripple
                    class="p-ripple flex cursor-pointer items-center rounded p-4 text-surface-700 transition-colors duration-150 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800"
                  >
                    <i class="pi pi-cog mr-2" />
                    <span class="font-medium">Settings</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
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
                class="p-ripple flex cursor-pointer items-center justify-between p-4 text-surface-500 dark:text-surface-400"
              >
                <span class="font-medium">APPLICATION</span>
                <i class="pi pi-chevron-down" />
              </div>
              <ul class="m-0 list-none overflow-hidden p-0">
                <li>
                  <a
                    v-ripple
                    class="p-ripple flex cursor-pointer items-center rounded p-4 text-surface-700 transition-colors duration-150 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800"
                  >
                    <i class="pi pi-folder mr-2" />
                    <span class="font-medium">Projects</span>
                  </a>
                </li>
                <li>
                  <a
                    v-ripple
                    class="p-ripple flex cursor-pointer items-center rounded p-4 text-surface-700 transition-colors duration-150 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800"
                  >
                    <i class="pi pi-chart-bar mr-2" />
                    <span class="font-medium">Performance</span>
                  </a>
                </li>
                <li>
                  <a
                    v-ripple
                    class="p-ripple flex cursor-pointer items-center rounded p-4 text-surface-700 transition-colors duration-150 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800"
                  >
                    <i class="pi pi-cog mr-2" />
                    <span class="font-medium">Settings</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div> -->
      </div>
    </template>
  </p-drawer>
</template>
