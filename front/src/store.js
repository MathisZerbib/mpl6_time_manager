import vuex from "vuex";
import axios from "axios";
import api from "./services/api";

export default new vuex.Store({
  state: {
    users: [],
    selectedUser: {},
    loggedUser: {
      id: null,
      username: null,
      email: null,
      token: null,
    }

  },
  getters: {
    users: (state) => state.users,
    user: (state) => state.user,
    token: (state) => state.token,
    selectedUser: (state) => state.selectedUser,
    loggedUser: (state) => state.loggedUser,
  },
  actions: {

    async getLoggedUserInfo({ commit }, token) {
      let user;
      let result;
      try {
        result = await axios.post(
          "http://" + "127.0.0.1" + ":4000/api/auth/", {
          token: token
        }
        );
      } catch (error) {
        // Handle error
        return error;
      }

      // Handle success
      user = result.data.data;
      commit("SET_USER_INFO", user);

    },
    async loadUsers({ commit }) {
        let result = api.getAllUsers()
      // Handle success
      let users = result.data;
      commit("SET_USERS", users);
    },

    async setSelectedUser({ commit }, selectedUser) {
      console.log("selectedUser", selectedUser);
      commit("SET_SELECTED_USER", selectedUser);
    },

    async parseJWT({ commit }, token) {
      try {
        return JSON.parse(atob(token.split('.')[1]));
      } catch (e) {
        return null;
      }
    },

    async triggerUpdateUser(selectedUser) {
      api.updateUser(selectedUser)
    }

  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_SELECTED_USER(state, selectedUser) {
      state.selectedUser = selectedUser;
      sessionStorage.user = JSON.stringify(selectedUser);

    },

  },
});
