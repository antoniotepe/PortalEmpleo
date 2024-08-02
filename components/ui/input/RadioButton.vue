<script lang="ts" setup>
import { defineProps, defineModel } from 'vue'

type Props = {
  id: string
  title: string
  labelText1: string
  labelText2: string
  value1: string
  value2: string
}

const props = defineProps<Props>()
const model = defineModel<string>({ required: true })
</script>

<template>
  <div class="ui-input-binary">
    <label class="mb-2 block">
      {{ props.title }}
    </label>

    <div class="flex flex-col gap-1">
      <div class="flex items-center gap-2">
        <p-radio-button
          v-model="model"
          :input-id="`${props.id}-yes`"
          :value="props.value1"
        />
        <label :for="`${props.id}-yes`">
          {{ props.labelText1 }}
        </label>
      </div>

      <div class="flex items-center gap-2">
        <p-radio-button
          v-model="model"
          :input-id="`${props.id}-no`"
          :value="props.value2"
        />
        <label :for="`${props.id}-no`">
          {{ props.labelText2 }}
        </label>
      </div>
    </div>
  </div>
</template>
