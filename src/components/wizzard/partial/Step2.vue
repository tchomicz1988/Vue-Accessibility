<script setup lang="ts">

import CountrySelect from '../../CountrySelect/CountrySelect.vue';
import FormLabel from '../../form/FormLabel.vue'
import Step1 from './Step1.vue';

const props = defineProps<{
  number
}>();

</script>

<template>
  <form>

    <div class="Step-radioGroup"
         role="radiogroup"
         aria-labelledby="groupTravel">
      <FormLabel class="Step-input"
                 id="groupTravel"
                 required="true"
                 label="Propose of travel">
      </FormLabel>

      <label><input type="radio" name="purposeOfTravel" value="tourism"/> tourism </label>
      <label><input type="radio" name="purposeOfTravel" value="study"/> study / mental work </label>
      <label><input type="radio" name="purposeOfTravel" value="physical"/> physical work </label>
      <label><input type="radio" name="purposeOfTravel" value="height-risk"/> height-risk sport </label>
    </div>
    <br>
    <FormLabel required="true" label="Country">
      <CountrySelect/>
    </FormLabel>

    <FormLabel required="true" label="Date">
      <input type="date"/>
    </FormLabel>
    <FormLabel required="true" label="Incident description">
      <textarea ></textarea>
    </FormLabel>

  </form>
</template>

<style lang="scss">
.Step-radioGroup {
  display: flex;
  flex-direction: column;
}
</style>
