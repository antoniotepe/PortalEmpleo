<script lang="ts" setup>
type Props = {
  id: string
  label: string
  placeholder?: string
  help?: string
  required?: boolean
}

const model = defineModel<string>({ required: true })
const props = defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <label :for="props.id">
      {{ props.label }}
    </label>

    <p-input-text
      :id="props.id"
      v-model="model"
      :placeholder="placeholder"
      variant="filled"
      fluid
      :required="props.required"
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
