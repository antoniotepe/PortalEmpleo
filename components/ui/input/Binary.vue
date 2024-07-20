<script lang="ts" setup>
type Props = {
  id: string
  label: string
}

const model = defineModel<boolean>({ required: true })
const props = defineProps<Props>()
</script>

<template>
  <div class="ui-input-binary">
    <label class="mb-2 block">
      {{ props.label }}
    </label>

    <div class="flex flex-col gap-1">
      <div class="flex items-center gap-2">
        <p-radio-button
          v-model="model"
          :input-id="`${props.id}-yes`"
          :value="true"
        />

        <label :for="`${props.id}-yes`">
          {{ $t('ui.inputs.binary.yes') }}
        </label>
      </div>

      <div class="flex items-center gap-2">
        <p-radio-button
          v-model="model"
          :input-id="`${props.id}-no`"
          :value="false"
        />

        <label :for="`${props.id}-no`">
          {{ $t('ui.inputs.binary.no') }}
        </label>
      </div>
    </div>
  </div>
</template>
