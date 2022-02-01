<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = withDefaults(defineProps<{
  type: string;
  modelValue: string | number,
  id: string;
  step: number;
  autoFocus?: boolean;
}>(), {
  type: 'text',
  modelValue: '',
  id: '',
  step: 1,
  autoFocus: false,
})
const input = ref(null);

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: string | number): void
}>()

onMounted(()=>{
  if(props.autoFocus){
    focusInput();
  }
})

function focusInput(){
  input?.value?.focus()
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

