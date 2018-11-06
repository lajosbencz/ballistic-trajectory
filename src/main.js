import Vue from 'vue'

import '@fortawesome/fontawesome-free/css/solid.css'
import '@fortawesome/fontawesome-free/css/fontawesome.css'

import Buefy from 'buefy';
Vue.use(Buefy);
import config from 'buefy/src/utils/config'
config.defaultIconPack = 'fas';

import App from './App'
import router from './router'
import i18n from './locale/i18n'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
});
