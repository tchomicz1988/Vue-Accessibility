<script setup lang="ts">
</script>

<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
            <button class="modal-close" @click="$emit('close')"><span class="acc-hide">close</span> <span
                aria-hidden="true">X</span></button>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button @click="$emit('close')">
                Add
              </button>
            </slot>
          </div>
        </div>
      </div>
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


