import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: null,
  },
  mutations: {
    setData: (state, data) => {
      state.data = data
    },
  },
  actions: {
    setData: (context, data) => {
      context.commit('setData', data)
    },
  },
  getters: {
    data: state => state.data,
  },
})
