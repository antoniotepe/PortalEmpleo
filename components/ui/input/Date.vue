<script lang="ts" setup>
type Props = {
  id: string
  label: string
  placeholder?: string
  help?: string
  modelValue?: Date | null
  view?: string
  dateFormat?: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: Date | null): void
}>()

const model = ref<Date | null>(props.modelValue ?? null)

// Observa los cambios en model y emite el valor actualizado
watch(model, (newVal) => {
  console.log(newVal)
  emit('update:modelValue', newVal)
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <label :for="props.id">
      {{ props.label }}
    </label>

    <p-date-picker
      v-model="model"
      :input-id="props.id"
      :view="props.view"
      :date-format="props.dateFormat"
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
