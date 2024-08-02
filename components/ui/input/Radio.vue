<script lang="ts" generic="T" setup>
type RadioItem = {
  label: string
  value: T
}

type Props = {
  id: string
  title: string
  items: RadioItem[]
}

const props = defineProps<Props>()
const model = defineModel<T>()
</script>

<template>
  <div class="ui-input-binary">
    <label class="mb-2 block">
      {{ props.title }}
    </label>

    <div class="flex flex-col gap-1">
      <div
        v-for="(item, index) in props.items"
        :key="index"
        class="flex items-center gap-2"
      >
        <p-radio-button
          v-model="model"
          :input-id="`${props.id}-${index}`"
          :value="item.value"
        />
        <label :for="`${props.id}-${index}`"> {{ item.label }} </label>
      </div>
    </div>
  </div>
</template>
