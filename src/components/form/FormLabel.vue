<script setup lang="ts">
defineProps<{
  label: string;
  required?: boolean;
}>();
</script>

<template>
  <div class="Label">
    <label>
      <i class="Label-icon"
         v-if="required"> * </i> {{label}}</label>
    <slot></slot>
  </div>

</template>

<style scoped>
.Label{
  display: flex;
  flex-direction: column;
  position: relative;
}

.Label-icon{
  color: var(--color-error);
}
</style>
