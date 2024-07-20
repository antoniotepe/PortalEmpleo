<script lang="ts" setup>
const form = ref({
  foreign: false,
  nit: '',
  name: '',
  comercialName: '',
  companyType: '',
  entityType: '',
  industry: '',
  activity: '',
  juridical: false,
  guild: '',
  operationYear: '',
  igss: '',
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <p-card>
      <template #content>
        <span class="text-lg font-bold">
          {{ $t('companies.new.title') }}
        </span>
      </template>
    </p-card>

    <p-card>
      <template #title>
        {{ $t('companies.new.sections.general') }}
      </template>

      <template #content>
        <div class="grid grid-cols-2 gap-4">
          <UiInputBinary
            id="foreign"
            v-model="form.foreign"
            :label="$t('companies.new.inputs.foreign.label')"
          />

          <div></div>

          <UiInputText
            v-if="!form.foreign"
            id="nit"
            v-model="form.nit"
            :label="$t('companies.new.inputs.nit.label')"
            :placeholder="$t('companies.new.inputs.nit.placeholder')"
            :help="$t('companies.new.inputs.nit.help')"
          />

          <div></div>

          <UiInputText
            v-if="!form.name"
            id="company-name"
            v-model="form.nit"
            :label="$t('companies.new.inputs.name.label')"
            :placeholder="$t('companies.new.inputs.name.placeholder')"
            :help="$t('companies.new.inputs.name.help')"
          />

          <UiInputText
            v-if="!form.comercialName"
            id="comercial-name"
            v-model="form.comercialName"
            :label="$t('companies.new.inputs.comercialName.label')"
            :placeholder="$t('companies.new.inputs.comercialName.placeholder')"
            :help="$t('companies.new.inputs.comercialName.help')"
          />
        </div>
      </template>
    </p-card>

    <p-card>
      <template #content>
        <div class="flex items-center justify-end gap-2 font-normal">
          <p-button
            :label="$t('ui.buttons.cancel.label')"
            severity="secondary"
            text
            rounded
          />

          <p-button
            :label="$t('ui.buttons.save.label')"
            rounded
          />
        </div>
      </template>
    </p-card>
  </div>
</template>
