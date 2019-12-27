import Vue from 'vue'
import 'babel-polyfill'
import App from './App'
import router from './router'
import YDUI from 'vue-ydui'; 
import 'vue-ydui/dist/ydui.rem.css';
Vue.use(YDUI);
/***
XXL 2019年12月24日 14:37:49
**/
import axios from 'axios'
Vue.prototype.axios = axios
import  qs from 'qs'
Vue.prototype.$qs = qs
/***
XXL 2019年12月24日 14:37:49
**/
//import './assets/css/fonts.css'


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
