<script lang="ts" setup>
type Props = {
  id: string
  label: string
  help?: string
  useGrouping?: boolean
  max?: number | null
}

const props = defineProps<Props>()
const model = defineModel<number>({ required: true })
</script>

<template>
  <div class="flex flex-col gap-2">
    <label :for="props.id">
      {{ props.label }}
    </label>

    <p-input-number
      :id="props.id"
      v-model="model"
      variant="filled"
      :max="props.max"
      :use-grouping="props.useGrouping"
      fluid
      :aria-describedby="props.help ? `${$props.id}-help` : undefined"
    />

    <small
      v-if="props.help"
      :id="`${$props.id}-help`"
    >
      {{ props.help }}
    </small>
  </div>
</template>
