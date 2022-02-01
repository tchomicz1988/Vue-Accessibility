<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';

const first = ref(null);
const buttonClose = ref(null);
const modal = ref(null);
let keyboardfocusableElements = reactive([]);

onMounted(()=>{
  keyboardfocusableElements = modal.value.querySelectorAll(
      'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
  )
})

function switchToFirst(){
  first.value.focus();
}

function handleFirst(event:any) {

  if(event?.relatedTarget.className === "modal-close"){
    keyboardfocusableElements[keyboardfocusableElements.length - 1].focus();
  }else{
    buttonClose.value.focus();
  }

}



</script>

<template>
  <transition name="modal">
    <div class="modal-mask" tabindex="-1">
      <div ref="first"
           tabindex="0"
           @focus="handleFirst($event)"></div>
      <div ref="modal"
           class="modal-wrapper"
           role="dialog">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
            <button ref="buttonClose"
                    class="modal-close"
                    @click="$emit('close')">
              <span class="acc-hide">close</span> <span
                aria-hidden="true">X</span></button>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button @click="$emit('close')">
                Add
              </button>
            </slot>
          </div>
        </div>
      </div>
      <div tabindex="0"
           ref="last"
           @focusin="switchToFirst($event)"></div>
    </div>
  </transition>
</template>

<style lang="scss">
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header, .modal-body {
  margin-bottom: 20px;
  width: 300px;

  h3 {
    font-weight: bold;
  }
}
.modal-close{
  border-color: #fff !important;
  min-width: 40px !important;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
}

.modal-mask {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
  top: 0;
  left: 0;
}

.modal-wrapper {
  background: #fff;
  border: 1px var(--color-bgrey);
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 20px;
}

</style>


