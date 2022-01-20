<script setup lang="ts">

import FormLabel from '../../form/FormLabel.vue';
import FormInput from '../../form/FormInput.vue';
import { claimReportStep1 } from '../../../views/ClaimReport/claimReport.Interface';
import FormError from '../../form/FormError.vue';
import { ErrorObject } from '@vuelidate/core';

const props = defineProps<{
  form: claimReportStep1;
  validation: ErrorObject[];
}>();

</script>

<template>
  <div class="Step1" v-if="form">
    <FormLabel class="Step-input"
               label="First name" required="true">
      <FormInput type="text"
                 v-model="form.firstName"/>
      <FormError :message="validation.firstName.$errors[0]?.$message"/>
    </FormLabel>

    <FormLabel class="Step-input" label="Second name" required="true">
      <input type="text"
             v-model="form.secondName">
      <FormError :message="validation.secondName.$errors[0]?.$message"/>
    </FormLabel>

    <FormLabel class="Step-input" label="Birthday" required="true">
      <input type="date"
             v-model="form.birthDay">
      <FormError :message="validation.birthDay.$errors[0]?.$message"/>
    </FormLabel>

    <FormLabel class="Step-input" label="Phone number" required="true">
      <input type="tel" v-maska="'+##-###-###-###'" aria-labelledby="phoneDesc"
             v-model="form.phoneNumber">
      <small id="phoneDesc"><span class="acc-hide">Phone number</span> format: +99-999-999-999 </small>
      <FormError :message="validation.phoneNumber.$errors[0]?.$message"/>
    </FormLabel>

    <FormLabel class="Step-input" label="Email" required="true">
      <input type="email"
             v-maska="'X*@X*.X*'"
             v-model="form.email">
      <FormError :message="validation.email.$errors[0]?.$message"/>
    </FormLabel>
    <FormLabel class="Step-input" label="Policy number" required="true">
      <input v-maska="'###-####-####'"
             aria-labelledby="policyDesc"
             v-model="form.policyNumber">
      <small id="policyDesc"> <span class="acc-hide">Policy number</span> format: 123-4567-8910 </small>
      <FormError :message="validation.policyNumber.$errors[0]?.$message"/>
    </FormLabel>
  </div>
</template>

<style>

</style>
