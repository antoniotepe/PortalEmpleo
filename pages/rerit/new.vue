<template>
  <div class="flex flex-col gap-4">
    <p-card>
      <template #content>
        <span class="text-lg font-bold">
          {{ $t('rerit.principal.title') }}
        </span>
      </template>
    </p-card>

    <p-card>
      <template #content>
        <span class="text-lg font-bold">
          {{ $t('rerit.principal.sections.observations.title') }}
        </span>
        <div class="m-5">
          <ul class="list-outside list-disc">
            <li>
              {{ $t('rerit.principal.sections.observations.label1') }}
            </li>
            <li>
              {{ $t('rerit.principal.sections.observations.label2') }}
            </li>
            <li>
              {{ $t('rerit.principal.sections.observations.label3') }}
            </li>
          </ul>
        </div>

        <div></div>

        <span class="text-lg font-bold">
          {{ $t('rerit.principal.sections.instructions.title') }}
        </span>
        <div class="m-5">
          <ul class="list-outside list-disc">
            <li>
              {{ $t('rerit.principal.sections.instructions.label1') }}
            </li>
            <li>
              {{ $t('rerit.principal.sections.instructions.label2') }}
            </li>
            <li>
              {{ $t('rerit.principal.sections.instructions.label3') }}
            </li>
            <li>
              {{ $t('rerit.principal.sections.instructions.label4') }}
            </li>
          </ul>
        </div>
      </template>
    </p-card>

    <p-card class="mt-5">
      <template #content>
        <div class="flex items-center justify-center gap-2 font-normal">
          <NuxtLink to="/">
            <p-button
              :label="$t('ui.buttons.cancel.label')"
              severity="secondary"
              text
              rounded
            />
          </NuxtLink>
          <NuxtLink to="/rerit/document/new">
            <p-button
              :label="$t('ui.buttons.accept.label')"
              rounded
            />
          </NuxtLink>
        </div>
      </template>
    </p-card>
  </div>
</template>
