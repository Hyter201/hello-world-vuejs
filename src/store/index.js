import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Questa logica interna elabora i risultati di setArray e li passa a newArray. 
// questo processo serve per passare un array da una pagina ad un'altra
export default new Vuex.Store({
  state: {
    myArray: [],
    username: '',
    Thearray: [],
  },
  getters: {
  },
  mutations: {
    setArray(state, newArray) {
      state.myArray = newArray;
    },

    setUsername(state, newUsername) {
      state.username = newUsername;
  },

  updateThearray(state, NewestArray) {
    state.Thearray = NewestArray;
},
},
  actions: {
  },
  modules: {
  }
})
