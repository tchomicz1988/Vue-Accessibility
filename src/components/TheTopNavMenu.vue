<script setup lang="ts">

import router from '../router';
import { ref, watch } from 'vue';
import { RouteLocationNormalizedLoaded } from 'vue-router';
import { RouterPaths } from '../types/routerPaths';

const currentPath = ref('');
const routerPaths = RouterPaths;
let navMenuOpened = ref(false);

watch(router.currentRoute, (value: RouteLocationNormalizedLoaded) => {
  currentPath.value = value.path;
  navMenuOpened.value = false
})

function toggleMenu() {
  navMenuOpened.value = !navMenuOpened.value;
}

</script>

<template>
  <div class="MainNav">
    <div class="MainNav-wrapper">
      <a class="MainNav-goToContent"
         href="#main"> Skip to content</a>
      <router-link to="/" class="MainNav-logo"><img src="@/assets/logo.png" alt="Back to home page"/></router-link>
      <nav class="MainNav-navigation"
           role="navigation"
           aria-label="Main">
        <button class="MainNav-menuButton"
                :aria-expanded="navMenuOpened"
                aria-controls="menu"
                @click="toggleMenu">Menu
        </button>
        <ul class="MainNav-list"
            :class="{ 'MainNav-list--expanded': navMenuOpened }">
          <li>
            <router-link class="MainNav-item"
                         :aria-current="routerPaths.home === currentPath? 'page': null"
                         :to="routerPaths.home">Insurance
            </router-link>
          </li>
          <li>
            <router-link class="MainNav-item"
                         :aria-current="routerPaths.about === currentPath? 'page': null"
                         :to="routerPaths.about">About us
            </router-link>
          </li>
          <li>
            <router-link class="MainNav-item"
                         :aria-current="routerPaths.claimReport === currentPath? 'page': null"
                         :to="routerPaths.claimReport">Claim report
            </router-link>
          </li>
          <li>
            <router-link class="MainNav-item"
                         :aria-current="routerPaths.contact === currentPath? 'page': null"
                         :to="routerPaths.contact">Contact
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>

</template>

<style scoped
       lang="scss">
@import "@/assets/mixin";
@import "@/assets/base";

.MainNav {
  border-bottom: solid 1px var(--color-gray-mid);
}

.MainNav-goToContent {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  white-space: nowrap;
  border: 0;

  &:focus {
    @extend button;
    width: auto;
    height: 4rem;
    z-index: 1;
    line-height: 3.7rem;
  }
}

.MainNav-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 90vw;
  margin: auto;
  position: relative;
}

.MainNav-list {
  display: flex;
  flex-direction: row;
  background: var(--color-background);
  padding: 1rem;

  @include mobile {
    visibility: hidden;
    flex-direction: column;
    position: absolute;
    z-index: 1;
    right: 0;
    text-align: center;
  }

  &.MainNav-list--expanded {
    visibility: visible;
  }


}

.MainNav li {
  list-style: none;
  position: relative;
}

.MainNav-item {
  font-size: 1.4rem;
  display: inline-block;
  margin-right: 4px;
  padding: 1rem;
  box-sizing: border-box;
  border-bottom: solid 0.4rem #fff;
  text-decoration: none;
  color: var(--color-text);
  white-space: nowrap;
  transition: opacity 150ms ease-out, background-color 150ms ease-out, color 150ms ease-out, border-color 150ms ease-out, box-shadow 150ms ease-out;
  width: 100%;

  &:hover {
    border-bottom: solid 0.4rem var(--color-orange);
  }

  &.router-link-active {
    border-bottom: solid 0.4rem var(--color-orange);
    font-weight: bold;
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    background-color: var(--button-focus-background-color);
    color: var(--button-focus-color);
    border-color: var(--button-focus-border-color);
    box-shadow: inset 0 0 0 1px var(--button-focus-border-color), inset 0 0 0 4px var(--color-white);
  }
}

.MainNav-logo {
  height: 50px;
  padding: 0 !important;
  float: left;
}

.MainNav img {
  max-width: 100%;
  max-height: 100%;
}


.MainNav-menuButton {
  display: none !important;

  @include mobile {
    display: block !important;
  }
}
</style>
