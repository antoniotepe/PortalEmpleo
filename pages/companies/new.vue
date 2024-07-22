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

          <UiInputSelect
            id="company-type"
            v-model="form.companyType"
            :label="$t('companies.new.inputs.companyType.label')"
            :items="[
              { label: 'S.A.', value: 'sa' },
              { label: 'S.A.S.', value: 'sas' },
              { label: 'S.C.', value: 'sc' },
              { label: 'S.C.A.', value: 'sca' },
              { label: 'S.C.S.', value: 'scs' },
              { label: 'S.C.P.', value: 'scp' },
              { label: 'S.C.E.', value: 'sce' },
              { label: 'S.C.A.', value: 'sca' },
              { label: 'S.C.S.', value: 'scs' },
              { label: 'S.C.P.', value: 'scp' },
              { label: 'S.C.E.', value: 'sce' },
            ]"
            :placeholder="$t('companies.new.inputs.companyType.placeholder')"
            :help="$t('companies.new.inputs.companyType.help')"
          />

          <UiInputSelect
            id="company-type"
            v-model="form.entityType"
            :label="$t('companies.new.inputs.entityType.label')"
            :items="[
              { label: 'Persona Individual', value: 'individual' },
              { label: 'Persona Jurídica', value: 'juridical' },
            ]"
            :placeholder="$t('companies.new.inputs.entityType.placeholder')"
            :help="$t('companies.new.inputs.entityType.help')"
          />

          <UiInputSelect
            id="industry"
            v-model="form.industry"
            :label="$t('companies.new.inputs.industry.label')"
            :items="[
              { label: 'Industria 1', value: 'i1' },
              { label: 'Industria 2', value: 'i2' },
              { label: 'Industria 3', value: 'i3' },
              { label: 'Industria 4', value: 'i4' },
              { label: 'Industria 5', value: 'i5' },
            ]"
            :placeholder="$t('companies.new.inputs.entityType.placeholder')"
            :help="$t('companies.new.inputs.entityType.help')"
          />

          <UiInputSelect
            id="industry"
            v-model="form.activity"
            :label="$t('companies.new.inputs.activity.label')"
            :items="[
              { label: 'Industria 1', value: 'i1' },
              { label: 'Industria 2', value: 'i2' },
              { label: 'Industria 3', value: 'i3' },
              { label: 'Industria 4', value: 'i4' },
              { label: 'Industria 5', value: 'i5' },
            ]"
            :placeholder="$t('companies.new.inputs.activity.placeholder')"
            :help="$t('companies.new.inputs.activity.help')"
          />

          <UiInputSelect
            id="guild"
            v-model="form.guild"
            :label="$t('companies.new.inputs.guild.label')"
            :items="[
              { label: 'Gremio 1', value: 'g1' },
              { label: 'Gremio 2', value: 'g2' },
              { label: 'Gremio 3', value: 'g3' },
              { label: 'Gremio 4', value: 'g4' },
              { label: 'Gremio 5', value: 'g5' },
            ]"
            :placeholder="$t('companies.new.inputs.guild.placeholder')"
            :help="$t('companies.new.inputs.guild.help')"
          />

          <UiInputDate
            id="operation-year"
            v-model="form.operationYear"
            :label="$t('companies.new.inputs.operationYear.label')"
            :placeholder="$t('companies.new.inputs.operationYear.placeholder')"
            :help="$t('companies.new.inputs.operationYear.help')"
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
