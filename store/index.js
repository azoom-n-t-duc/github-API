import Vuex from "vuex";
import ky from "~/plugins/ky.js";
import pathify, { make } from 'vuex-pathify'

export const plugins = [ pathify.plugin ]

export const state = () => ({
  users: [],
  id: null
})

export const getters = {
  ...make.getters(state),
  firstUser: state => {
    return state.users[0]
  }
}

export const mutations = {
  ...make.mutations(state), // 

  //can hay k? neu can? con khong can cai nao se thay the 2 cai nay?
  SET_LIST_USER(state, { users }) {
    state.users = users
  },
  SELECT_USER_ID(state, { id }){
    state.id = id
  }
}

export const actions = {
  async getListUsers({ commit }) {
    const users = await ky
      .get("repos/azoom/admin-carparking/contributors")
      .json()
      .catch(() => []);
    commit("getListUsers", { users });
    return users;
  },
  setListUsers({ commit }, users = []) {
    commit("SET_LIST_USER", { users });
  },

  selectUserId({commit}, id){
    commit("SELECT_USER_ID", { id });
  },

  async getUserDetail({ state }) {
    const user = await ky 
      .get(`user/${state.id}`)
      .json()
      .catch(() => []);

    return user;
  },


}

// export default () =>
//   new Vuex.Store({
//     plugins: [ pathify.plugin ],
//     state: {
//       users: [],
//       item: []
//     },
//     getters: {
//       ...make.getters(state)
//     },
//     mutations: {
//       ...make.mutations(state)
//       // setListUsers(state, { users }) {
//       //   state.users = users;
//       // }
//     },
//     actions: {
//       async getListUsers({ commit }) {
//         const users = await ky
//           .get("repos/azoom/admin-carparking/contributors")
//           .json()
//           .catch(() => []);
//         commit("getListUsers", { users });
//         return users;
//       },
//       setListUsers({ commit }, users = []) {
//         commit("setListUsers", { users });
//       },
//       async getItemUser({ commit }) {
//         const itemUser = await ky 
//         .get(`user/${id}`)
//         .json()
//         .catch(() => []);
//         commit("getItemUses", {item});
//         return item;
//       },
      
//     }
//   });
