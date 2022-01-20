<script setup lang="ts">
import { claimReportStep3, expenseInterface } from '../../../views/ClaimReport/claimReport.Interface';
import useVuelidate, { ErrorObject, Validation } from '@vuelidate/core';
import FormLabel from '../../form/FormLabel.vue';
import FormInput from '../../form/FormInput.vue';
import FormError from '../../form/FormError.vue';
import WizzardModal from './modal.vue';
import { reactive, Ref, ref, watchEffect } from 'vue';
import { MODAL_FORM_VALIDATIONS } from './wizzard.constants';

const props = defineProps<{
  form: claimReportStep3;
  validation: ErrorObject[];
}>();

const modalForm = reactive<expenseInterface>({
  price: null,
  name: null
})
const showModal = ref(false);
const editedItemId = ref('');
const inputText = ref(null);

const expenseList: expenseInterface[] = reactive([]);


const $v: Ref<Validation> = useVuelidate(MODAL_FORM_VALIDATIONS, modalForm, {$autoDirty: true})

// watchEffect(()=>{
//   if(showModal.value === true){
//     s
//   }
// })

async function addExpense() {
  const valid = await $v.value.$validate();

  if(!valid) {
    return
  }

  const id = Math.random().toString(36).substr(2, 9);

  expenseList.push({price: modalForm.price, name: modalForm.name, id});
  props.form.expense = expenseList;
  cancelModal();
}

function removeExpense(id: string) {
  const indexToRemove = expenseList.findIndex((expense) => {
    return expense.id === id
  })

  expenseList.splice(indexToRemove, 1);
  props.form.expense = expenseList;
}

function editModeExpense(id: string) {

  const itemToEdit = expenseList.find((expense) => {
    return expense.id === id
  })
  editedItemId.value = id;
  modalForm.price = itemToEdit?.price || null
  modalForm.name = itemToEdit?.name || null
  showModal.value = true;
}

function saveExpense() {
  expenseList.map((expense) => {
    if(expense.id === editedItemId.value) {
      expense.price = modalForm.price;
      expense.name = modalForm.name;
    }
  })

  cancelModal();

}

function cancelModal() {
  showModal.value = false;
  editedItemId.value = null;
  modalForm.price = null;
  modalForm.name = null;
  $v.value.$reset();
}

function openModal() {
  showModal.value = true;
}
</script>

<template>
  <div class="Step3">
    <table class="Table">
      <caption class="Table-title">Expense report</caption>
      <thead>
      <tr class="acc-hide">
        <th>Price</th>
        <th>Name</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      <tr class="Table-tr"
          v-for="expense in expenseList">
        <td><span aria-hidden="true">€</span> {{ expense.price }} <span class="acc-hide">euro</span></td>
        <td>{{ expense.name }} {{ expense.id }}</td>
        <td class="Table-colRight">
          <button class="Table-actionButton" @click="removeExpense(expense.id)">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/trash--v1.png"
                 alt="remove expense"/>
          </button>
          <button @click="editModeExpense(expense.id)"
                  class="Table-actionButton">
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAABc0lEQVRoge2XPUoDURRGT+xsDEJaN6BlhBGE6BpsXIN2KaxN5W50A24goF382YKCSqKFokIsJsO8zNz3hoh5P3IPTJF3b3G+x73DBBRFiYk+8AKMgO3ALgszAKbGMwZ2ghotQFU+qRA2+SRCSPIfwtkYyAI5WpHkC1FbLZrFlgQnzN+y1DPyqyljm/lP4MDoy4D3Ss+zV1OBpoUtQmTkI1Ot9/0rl0jyb8A39RAToXfgX7nEtbCHwJdQN59T/8olLvkCV4jo5Zn9fhV6ox0bky75B1ySN6/yf43Kh0LlQ6HyoVD5UPw7+SlwBbSMPtufkaAfZgBrQA84py53RB4iWvkqF9Qlr0lEHmAfeZySkAfo0CwfdGELzoC2pbYK7CLvRDQ3/wAMsYcoMENEI2+OSVOIHpHJA+wxPxauEG0ikwc4Rn5VroeUqrLiqG0JZ13gkohCuAJsWs43gJMluPyKlqN2CzwC98ANcDc7e/LgpSiKkgg/I5hjvQd+yKwAAAAASUVORK5CYII="
                alt="edit expense"/>
          </button>
        </td>
      </tr>
      </tbody>

    </table>
    <div>
      <button @click="openModal"
              class="Table-add">
        <img aria-hidden="true"
             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAMklEQVRIiWNgGGngPxQTDZho5JBRC0YtGEoWMCKxScpAxJpNcx+QCkaLilELRi0YkQAArMYFIENGFBoAAAAASUVORK5CYII="/>
        Add another expense
      </button>
    </div>

  </div>

  <WizzardModal v-if="showModal"
         @close="cancelModal">
    <template v-slot:header><h3>Expense</h3></template>
    <template v-slot:body>
      <FormLabel class="Step-input"
                 label="Name"
                 required="true">
        <FormInput ref="inputText"
                   type="text"
                   v-model="modalForm.name"></FormInput>
        <FormError :message="$v.name.$errors[0]?.$message"/>
      </FormLabel>
      <FormLabel class="Step-input"
                 label="Price"
                 required="true">
        <FormInput v-model="modalForm.price"
                   type="number"
                   step="0.01"></FormInput>
        <FormError :message="$v.price.$errors[0]?.$message"/>
      </FormLabel>
    </template>
    <template v-slot:footer>
      <button @click="cancelModal">Cancel</button>
      <button v-if="!editedItemId"
              @click="addExpense">Add
      </button>
      <button v-if="editedItemId"
              @click="saveExpense">Save
      </button>
    </template>
  </WizzardModal>
</template>

<style lang="scss">
.Table {
  width: 100%;
  text-align: left;
  td{
    padding: 4px;
  }
}


.Table-title {
  font-size: 1.17em;
  font-weight: bold;
}

.Table-colRight {
  text-align: right;
}

.Table-add {
  border-color: transparent;
  display: flex;
  align-items: center;
  float: right;
  margin: 40px 0;

  img {
    margin-right: 10px;
  }
}

.Table-actionButton {
  min-width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 0;
  margin-right: 10px;

  img {
    width: 30px;
    height: 30px;

  }
}
</style>
