<script setup lang="ts">
defineProps<{
  message?: string;
}>();

</script>
<template>
  <span class="FormError">{{ message }}</span>
</template>
<style scoped>
.FormError {
  color: #ff1616;
}
</style>
