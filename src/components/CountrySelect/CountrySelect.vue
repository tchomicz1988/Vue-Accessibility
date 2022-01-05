<script setup lang="ts">

import countries from './countries.json';

const options = countries.map((country) => {
  return {label: country.name, value: country.code}
})

defineProps<{
  modelValue: string | number | null
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: string | number): void
}>()

</script>

<template>
  <select class="Select"
          :multiple="multiple"
          :modelValue="modelValue"
          @change="emit('update:modelValue', $event.target.value)">
    <option class="Select-option"
            :selected="modelValue === null"></option>
    <option v-for="option in options"
            :value="option.value"
            :selected="modelValue === option.value">
      {{ option.label }}
    </option>
  </select>
</template>
