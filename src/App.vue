<script setup lang="ts">
import TheTopNavMenu from './components/TheTopNavMenu.vue';
import TheFooter from './components/TheFooter.vue';
</script>


<template>
  <the-top-nav-menu />
  <main id="main">
    <router-view/>
  </main>
  <the-footer />

</template>


<style lang="scss">
@use "@/assets/_mixin";
@use "@/assets/base";
</style>
