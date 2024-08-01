<script lang="ts" setup>
type Props = {
  id: string
  label: string
  placeholder?: string
  help?: string
  type?: string
  required?: boolean
  disabled?: boolean
  feedback?: boolean
  invalid?: boolean
  promptLabel?: string
  weakLabel?: string
  mediumLabel?: string
  strongLabel?: string
}

const model = defineModel<string>({ required: true })
const props = defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <label :for="props.id">
      {{ props.label }}
    </label>

    <p-password
      :id="props.id"
      v-model="model"
      variant="filled"
      fluid
      toggle-mask
      :invalid="props.invalid"
      :placeholder="placeholder"
      :feedback="props.feedback"
      :type="props.type"
      :disabled="props.disabled"
      :required="props.required"
      :prompt-label="props.promptLabel"
      :weak-label="props.weakLabel"
      :medium-label="props.mediumLabel"
      :strong-label="props.strongLabel"
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
