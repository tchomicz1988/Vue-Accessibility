<script setup lang="ts">

import FormLabel from '../../form/FormLabel.vue';

const props = defineProps<{
  number
}>();

</script>

<template>
  <div class="Step1">
    <FormLabel class="Step-input" label="First name" required="true">
      <input type="text">
    </FormLabel>

    <FormLabel class="Step-input" label="Second name" required="true">
      <input type="text">
    </FormLabel>

    <FormLabel class="Step-input" label="Birthday" required="true">
      <input type="date">
    </FormLabel>

    <FormLabel class="Step-input" label="Phone number" required="true">
      <input type="tel" v-maska="'+##-###-###-###'" aria-labelledby="phoneDesc">
      <small id="phoneDesc"><span class="acc-hide">Phone number</span> format: +99-999-999-999 </small>
    </FormLabel>

    <FormLabel class="Step-input" label="Email" required="true">
      <input type="email" v-maska="'X*@X*.X*'">
    </FormLabel>
    <FormLabel class="Step-input" label="Policy number" required="true">
      <input v-maska="'###-####-####'" aria-labelledby="policyDesc">
      <small id="policyDesc"> <span class="acc-hide">Policy number</span> format: 123-4567-8910 </small>
    </FormLabel>
  </div>
</template>

<style scoped>
.Step-input {
margin-bottom: 20px;
}
</style>
