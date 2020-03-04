import Vuex from 'vuex'
import axios from "~/plugins/ky.js";

export default () => new Vuex.Store({
  state: {
    items:[]
  },
  getters: {
    items: (state) => state.items
  },
  mutations: {
    setItems (state, { items }) {
      state.items = items
    }
  },
  actions: {
    async fetchItems({ commit }) {
      await axios.get('repos/azoom/admin-carparking/contributors').then((response) => {
          commit('setItems', { items: response.data })
      })
    }
  }
})