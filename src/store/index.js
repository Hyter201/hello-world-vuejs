import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myArray: [],
  },
  getters: {
  },
  mutations: {
    setArray(state, newArray) {
      state.myArray = newArray;
    },
  },
  actions: {
  },
  modules: {
  }
})
