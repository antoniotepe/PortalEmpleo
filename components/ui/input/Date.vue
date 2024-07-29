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
const model = ref<Date | null>(props.modelValue ?? null)

const handleDateSelect = (date: Date) => {
  model.value = date
}
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
      @date-select="handleDateSelect"
    />

    <small
      v-if="props.help"
      :id="`${props.id}-help`"
    >
      {{ props.help }}
    </small>
  </div>
</template>
