<script lang="ts" setup generic="T">
type Props = {
  id: string
  label: string
  placeholder?: string
  help?: string
  items: Array<{ value: number; label: string }>
}

const model = defineModel<T>({ required: true })
const props = defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <label :for="props.id">
      {{ props.label }}
    </label>

    <p-select
      v-model="model"
      :input-id="props.id"
      :options="props.items"
      option-label="label"
      :placeholder="props.placeholder"
      variant="filled"
      fluid
      :aria-describedby="props.help ? `${props.id}-help` : undefined"
    />

    <small
      v-if="props.help"
      :id="`${props.id}-help`"
    >
      {{ props.help }}
    </small>
  </div>
</template>
