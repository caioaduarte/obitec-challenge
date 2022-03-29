import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueSweetalert2);
Vue.use(Vuelidate);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
