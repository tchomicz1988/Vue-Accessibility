<script setup
        lang="ts">
import Step1 from './partial/Step1.vue';
import Step2 from './partial/Step2.vue';
import Step3 from './partial/Step3.vue';
import { reactive, Ref, ref } from 'vue';
import useVuelidate, { Validation } from '@vuelidate/core';
import { CLAIM_REPORT_FORM_VALIDATIONS, CLAIM_REPORT_FORM_VALUES } from './partial/wizzard.constants';

const stepsList: any = {
  'Step1 - Personal Details': Step1,
  'Step2 - Incident Details': Step2,
  'Step3 - Expense Report': Step3
};

let current = ref(Step1);
let currentStep = ref(Object.keys(stepsList)[0]);
let currentIndex = ref(0);

const form = reactive({...CLAIM_REPORT_FORM_VALUES});

const $v: Ref<Validation> = useVuelidate(CLAIM_REPORT_FORM_VALIDATIONS, form, {$autoDirty: true})

async function submit() {

  const valid = await $v.value.$validate();
  if(!valid) {
    return
  }

}

function isStepValid() {
  const valid =  $v[`Step${currentIndex+1}`].$invalid;
  return !valid;
}

function changeStep(step: any, name: string, index: number) {

  if(!isStepValid) {
    return
  }

  current.value = step;
  currentStep.value = name;
  currentIndex.value = index

}

function changeStepByIndex(index: number) {

  const key: string = Object.keys(stepsList)[index]
  changeStep(stepsList[key], key, index)
}

</script>

<template>
  <div class="Wizard">
    <h1 id="Wizard-title">Claim Report</h1>
    <div class="Wizard-tabList"
         role="tablist"
         aria-labelledby="Wizard-title">
      <button class="Wizard-tabButton"
              v-for="(step, name, index) in stepsList"
              role="tab"
              :aria-controls="name"
              :aria-selected="currentStep === name"
              :tabindex="currentStep === name? 0 : -1"
              @click="changeStep(step, name, index)">
        {{ name }}
      </button>
    </div>
    <keep-alive>
      <component class="Wizard-panel"
                 v-bind:is="current"
                 role="tabpanel"
                 tabindex="0"
                 v-bind:form="form[`Step${currentIndex+1}`]"
                 v-bind:validation="$v[`Step${currentIndex+1}`]"
                 :aria-label="currentStep"/>
    </keep-alive>
    <div class="Wizard-footer">
      <button v-if="currentIndex > 0"
              @click="changeStepByIndex(currentIndex -1)">Return
      </button>
      <button v-if="currentIndex < Object.keys(stepsList).length-1"
              :disabled="$v[`Step${currentIndex+1}`].$invalid"
              @click="changeStepByIndex(currentIndex +1)">Continue
      </button>
      <button v-if="currentIndex == Object.keys(stepsList).length-1"
              :disabled="$v.$invalid">Submit</button>
    </div>
  </div>
</template>

<style lang="scss">
.Wizard {
  max-width: 600px;
  margin: 40px auto;
}

.Wizard-tabList {
 display: flex;
 justify-content: space-between;
  margin-bottom: 20px;
}

.Wizard-panel {
  &:focus {
    outline-color: transparent;
  }
}

.Wizard-footer {
  display: flex;
  justify-content: space-between;
  clear: both;
}

.Step-input {
  margin-bottom: 20px;
}
</style>
