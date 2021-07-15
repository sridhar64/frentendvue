import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import { createRouter } from './router'
import Vuelidate from 'vuelidate'
import VueSimpleAlert from "vue-simple-alert";
import Successcon from "console-success"
import UploadImage from 'vue-upload-image';

Vue.use(Vuelidate)
Vue.use(VueSimpleAlert);
Vue.use(Successcon);
Vue.use(BootstrapVue);
Vue.component('upload-image', UploadImage)

Vue.config.productionTip = false
const router = createRouter()
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

