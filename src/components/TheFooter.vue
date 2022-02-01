<script setup lang="ts">

import router from '../router';
import { ref, watch } from 'vue';
import { RouteLocationNormalizedLoaded } from 'vue-router';
import { RouterPaths } from '../types/routerPaths';

const currentPath = ref('');
const routerPaths = RouterPaths;

watch(router.currentRoute, (value: RouteLocationNormalizedLoaded) => {
  currentPath.value = value.path;
})
</script>

<template>
  <footer class="Footer">
    <div class="Footer-wrapper">
    <router-link to="/" class="Footer-logo"><img src="@/assets/logo.png" alt="Back to home page"/></router-link>
    <nav class="FooterNav"
         role="navigation"
         aria-label="Secondary">
      <div>
        <h3>About us</h3>
        <ul class="FooterNav-list">
          <li>
            <router-link class="FooterNav-item"
                         :aria-current="routerPaths.home === currentPath? 'page': null"
                         :to="routerPaths.home">Insurance
            </router-link>
          </li>
          <li>
            <router-link class="FooterNav-item"
                         :aria-current="routerPaths.about === currentPath? 'page': null"
                         :to="routerPaths.about">About us
            </router-link>
          </li>
          <li>
            <router-link class="FooterNav-item"
                         :aria-current="routerPaths.claimReport === currentPath? 'page': null"
                         :to="routerPaths.claimReport">Claim report
            </router-link>
          </li>
          <li>
            <router-link class="FooterNav-item"
                         :aria-current="routerPaths.contact === currentPath? 'page': null"
                         :to="routerPaths.contact">Contact
            </router-link>
          </li>
        </ul>
      </div>

      <div>
        <h3>Products</h3>
        <ul class="FooterNav-list">
          <li>
            <router-link class="FooterNav-item"
                         :aria-current="routerPaths.home === currentPath? 'page': null"
                         :to="routerPaths.home">Insurance
            </router-link>
          </li>
          <li>
            <router-link class="FooterNav-item"
                         :aria-current="routerPaths.about === currentPath? 'page': null"
                         :to="routerPaths.about">About us
            </router-link>
          </li>
          <li>
            <router-link class="FooterNav-item"
                         :aria-current="routerPaths.claimReport === currentPath? 'page': null"
                         :to="routerPaths.claimReport">Claim report
            </router-link>
          </li>
          <li>
            <router-link class="FooterNav-item"
                         :aria-current="routerPaths.contact === currentPath? 'page': null"
                         :to="routerPaths.contact">Contact
            </router-link>
          </li>
        </ul>
      </div>

      <div>
        <h3>Members</h3>
        <ul class="FooterNav-list">
          <li>
            <router-link class="FooterNav-item"
                         :aria-current="routerPaths.home === currentPath? 'page': null"
                         :to="routerPaths.home">Insurance
            </router-link>
          </li>
          <li>
            <router-link class="FooterNav-item"
                         :aria-current="routerPaths.about === currentPath? 'page': null"
                         :to="routerPaths.about">About us
            </router-link>
          </li>
          <li>
            <router-link class="FooterNav-item"
                         :aria-current="routerPaths.claimReport === currentPath? 'page': null"
                         :to="routerPaths.claimReport">Claim report
            </router-link>
          </li>
          <li>
            <router-link class="FooterNav-item"
                         :aria-current="routerPaths.contact === currentPath? 'page': null"
                         :to="routerPaths.contact">Contact
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  </footer>
</template>

<style scoped
       lang="scss">
@import "@/assets/mixin";
@import "@/assets/base";

.Footer-logo{
  width: 100px;
  height: 100%;
  img{
    width: 100%;
  }
  @include mobile{
    display: none;
  }
}
.Footer{
  background: var(--color-gray-light);
  padding: 80px 0;
  font-size: 1.6rem;
  @include mobile{
   padding: 20px;
  }
  h3{
    font-weight: bold;
  }

  a {
    color: var(--color-black);
    line-height: 2.5;
    border-bottom: 2px solid transparent;

    &:hover{
      border-bottom-color: var(--color-black);
    }

    &:focus{
      outline-color: var(--color-black);  }
  }
}

.Footer-wrapper{
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;

}

.FooterNav{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 44px;

  @include mobile {
    display: flex;
    flex-wrap: wrap;
  }

}

.FooterNav-list{
  list-style: none;
  padding-left: 0;
}

</style>
