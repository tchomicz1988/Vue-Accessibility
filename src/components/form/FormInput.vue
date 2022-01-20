<script setup lang="ts">
import { ref } from 'vue';

withDefaults(defineProps<{
  type: string;
  modelValue: string | number,
  id: string;
  step: number;
}>(), {
  type: 'text',
  modelValue: '',
  id: '',
  step: 1
})
const input = ref(null);

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: string | number): void
}>()

function focusInput(){
  input.value.focus()
}

</script>

<template>
<input ref="input"
       :class="'Input-' + type"
       :id="id"
       :type="type"
       :modelValue="modelValue"
       :step="step"
       :value="modelValue"
       @change="emit('update:modelValue', $event.target.value)"/>
</template>

