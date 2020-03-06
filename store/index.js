import Vuex from "vuex";
import ky from "~/plugins/ky.js";

export default () =>
  new Vuex.Store({
    state: {
      users: []
    },
    getters: {
      users: state => state.users
    },
    mutations: {
      setUsers(state, { users }) {
        state.users = users;
      }
    },
    actions: {
      async fetchItems({ commit }) {
        const users = await ky
          .get("repos/azoom/admin-carparking/contributors")
          .json()
          .catch(() => []);
        commit("setUsers", { users });
        return users;
      },
      setUsers({ commit }, users = []) {
        commit("setUsers", { users });
      }
    }
  });
