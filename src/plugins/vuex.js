import Vue from 'vue'
import Vuex from 'vuex'
import storeGlobal from '@/store/index.js'

import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})


export default new Vuex.Store({
  ...storeGlobal,
  plugins: [vuexLocal.plugin]
})