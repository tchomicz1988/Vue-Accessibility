<script setup
        lang="ts">
import Step1 from './partial/Step1.vue';
import Step2 from './partial/Step2.vue';
import { ref } from 'vue';

const stepsList = {
  'Step1 - Personal Details': Step1,
  'Step2 - Incident Details': Step2,
  'Step3 - Expense Report': Step2
};

let current = ref(Step1);
let currentStep = ref(Object.keys(stepsList)[0]);
let currentIndex = ref(0);

function changeStep(step, name, index) {
  current.value = step;
  currentStep.value = name;
  currentIndex.value = index
}

function changeStepByIndex(index) {
  const key = Object.keys(stepsList)[index]
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
                 :aria-label="currentStep"/>
    </keep-alive>

    <div class="Wizard-footer">
      <button v-if="currentIndex > 0" @click="changeStepByIndex(currentIndex -1)">Return</button>
      <button v-if="currentIndex < Object.keys(stepsList).length-1" @click="changeStepByIndex(currentIndex +1)">Continue
      </button>
      <button v-if="currentIndex == Object.keys(stepsList).length-1">Submit</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.Wizard {
  max-width: 1200px;
  margin: 40px auto;
}

.Wizard-tabList {
  text-align: center;
  margin-bottom: 20px;
}

.Wizard-tabButton {
  margin-right: 44px;
}

.Wizard-panel {
  &:focus {
    outline-color: transparent;
  }
}

.Wizard-footer{
  display: flex;
  justify-content: space-between;
}
</style>
