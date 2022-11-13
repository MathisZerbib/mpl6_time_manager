import vuex from "vuex";
import axios from "axios";

export default new vuex.Store({
  state: {
   user : {
    id,
    username,
    token
   }
  },
  getters: {
    user: (state) => state.user,
    token: (state) => state.token,
  },
  actions: {
    async setUser({ commit }, user) {
    // Call axios
      console.log("user is logged in", user);
      commit("SET_USER", user);
    },
  },
  mutations: {
    SET_USERS(state, user) {
      state.user = user;
      state.token = user.token;
    },
  },
});
