import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isRouteProduct: false,
    smShowMenu: false
  },
  mutations: {
    routeActive: state => {
      state.isRouteProduct = true
    },
    routeDisabled: state => {
      state.isRouteProduct = false
    },
    openSmallMenu: state => {
      console.log('openMenu')
      state.smShowMenu = true
    },
    closeSmallMenu: state => {
      console.log('closeMenu')
      state.smShowMenu = false
    }
  },
  actions: {

  }
})
