import vuex from "vuex";
import axios from "axios";
import api from "./services/api";
import router from './router'


export default new vuex.Store({
  state: {
    users: [],
    selectedUser: {},
    loggedUser: {
      id: "",
      username: "",
      email: "",
      team: "",
      role: "",
      token: localStorage.getItem('token') || ""
    },

  },
  getters: {
    users: (state) => state.users,
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
    async setToken({ commit }, token) {

      console.log("User ID", JSON.parse(atob(token.split('.')[1])).sub)

      let id = JSON.parse(atob(token.split('.')[1])).sub;
      await axios
        .get(
          "http://" +
          "127.0.0.1" +
          ":4000/api/users/"
        )
        .then((data) => {
          console.log("Fetch All Users", data.data.data);
          for (let i = 0; i < data.data.data.length; i++) {

            const element = data.data.data[i];
            if (element.id == id) {
              let loggedUser = {};
              console.log('MATCH', element)
              loggedUser.id = element.id;
              loggedUser.username = element.username;
              loggedUser.email = element.email;
              loggedUser.team = element.team;
              loggedUser.role = element.role;
              loggedUser.token = token;
              commit("SET_LOGGED_USER", loggedUser);
              localStorage.removeItem('role')

              switch (loggedUser.role) {
                case "admin":
                  localStorage.setItem('role', 'admin')
                  router.push('admin');

                  break;
                case "manager":
                  localStorage.setItem('role', 'manager')
                  router.push('manager-dashboard');

                  break;

                case "employee":
                  localStorage.setItem('role', 'employee')
                  router.push('dashboard');

                  break;

                default:
                  router.push('/');
                  break;
              }
            }
          }
        }
        )

    },




    async setSelectedUser({ commit }, selectedUser) {
      console.log("selectedUser", selectedUser);
      commit("SET_SELECTED_USER", selectedUser);
    },
    async updateUser({ commit }, selectedUser) {
      await axios
        .put(
          "http://" +
          "127.0.0.1" +
          ":4000/api/users/" +
          selectedUser.id,
          {
            user: selectedUser,
          }
        )
        .then((data) => {
          console.log("Success Update", data.data);
        }
        )
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
    },
    async SET_LOGGED_USER(state, loggedUser) {
      state.loggedUser = loggedUser;
    }
  },
});
