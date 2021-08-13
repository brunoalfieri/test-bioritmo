import Vue from 'vue'
import App from './App.vue'

//* Plugins
import './plugins/bootstrap.js'
import store from './plugins/vuex.js'
import router from './plugins/vue_router'

//* Config
import './config/prototypes.js'
import './config/theme.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
