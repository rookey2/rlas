import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(VueCookies)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
