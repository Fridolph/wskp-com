import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isRouteProduct: false
  },
  mutations: {
    routeActive: state => {
      state.isRouteProduct = true
    },
    routeDisabled: state => {
      state.isRouteProduct = false
    }
  },
  actions: {

  }
})
