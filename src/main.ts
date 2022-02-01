import { createApp } from 'vue';
import App from './App.vue';
import router from './router';


import Maska from 'maska'


const app = createApp(App)

app.directive('focus', {
  mounted(el) {
      el.focus()
  }
})

app.use(router)
app.use(Maska);
app.mount('#app')
