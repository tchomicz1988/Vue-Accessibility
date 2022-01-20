<script setup lang="ts">

defineProps<{
  label: string;
  required: boolean;
}>();

</script>

<template>
  <div class="Label">
    <label>
      <i class="Label-icon"
         aria-hidden="true"
         v-if="required"> * </i>
      <i class="acc-hide"
         v-if="required"> required </i>{{ label }}
    <slot></slot>
    </label>
  </div>

</template>

<style scoped lang="scss">
.Label {
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    font-weight: bold;
  }

}

.Label-icon {
  color: var(--color-error);
}
</style>
