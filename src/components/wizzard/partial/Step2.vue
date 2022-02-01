<script setup lang="ts">

import CountrySelect from '../../CountrySelect/CountrySelect.vue';
import FormLabel from '../../form/FormLabel.vue'
import FormError from '../../form/FormError.vue';
import { claimReportStep2 } from '../../../views/ClaimReport/claimReport.Interface';

const props = defineProps<{
  form: claimReportStep2;
  validation: any;
}>();

</script>

<template>
  <form>

    <div class="Step-radioGroup"
         role="radiogroup"
         aria-labelledby="groupTravel">
      <FormLabel class="Step-input"
                 id="groupTravel"
                 :required="true"
                 label="Propose of travel">
      </FormLabel>

      <label class="Step-radioOption">
        <input type="radio" name="purposeOfTravel" value="tourism" v-focus v-model="form.proposeOfTravel" /> tourism </label>
      <label class="Step-radioOption">
        <input type="radio" name="purposeOfTravel" value="study" v-model="form.proposeOfTravel"/> study / mental work
      </label>
      <label class="Step-radioOption">
        <input type="radio" name="purposeOfTravel" value="physical" v-model="form.proposeOfTravel"/> physical work
      </label>
      <label class="Step-radioOption">
        <input type="radio" name="purposeOfTravel" value="height-risk" v-model="form.proposeOfTravel"/> height-risk sport
      </label>
    </div>
    <FormError :message="validation.proposeOfTravel.$errors[0]?.$message"/>
    <br>
    <FormLabel class="Step-input" required="true" label="Country">
      <CountrySelect v-model="form.country"/>
      <FormError :message="validation.country.$errors[0]?.$message"/>
    </FormLabel>

    <FormLabel class="Step-input"
               :required="true"
               label="Date">
      <input type="date"
             v-model="form.date"/>
      <FormError :message="validation.date.$errors[0]?.$message"/>
    </FormLabel>
    <FormLabel class="Step-input" :required="true" label="Incident description">
      <textarea v-model="form.incidentDescription"/>
      <FormError :message="validation.incidentDescription.$errors[0]?.$message"/>
    </FormLabel>

  </form>
</template>

<style lang="scss">
.Step-radioGroup {
  display: flex;
  flex-direction: column;
}

.Step-radioOption {
  margin-top: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  input {
    margin-right: 20px;
  }
}
</style>
