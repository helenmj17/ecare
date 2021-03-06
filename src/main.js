import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from 'vuetify'
import vuex from 'vuex'
import  './axios'
import "bootstrap/dist/css/bootstrap.min.css";


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  vuex,
 
  render: h => h(App),
}).$mount('#app')
