import vuex from "vuex";
import axios from "axios";

export default new vuex.Store({
  state: {
    users: [],
    selectedUser: {},

  },
  getters: {
    users: (state) => state.users,
    selectedUser: (state) => state.selectedUser,
  },
  actions: {

    async loadUsers({ commit }) {
      let users = [];
      let result;
      try {
        result = await axios.get(
          "http://" + "127.0.0.1" + ":4000/api/users"
        );
      } catch (error) {
        // Handle error
        return error;
      }

      // Handle success
      users = result.data.data;
      commit("SET_USERS", users);
    },

    async setSelectedUser({ commit }, selectedUser) {
      console.log("selectedUser", selectedUser);
      commit("SET_SELECTED_USER", selectedUser);
    },

    async updateUser({ commit }, selectedUser) {
      console.log();
      try {
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
            if (data.data.response.status === 200) {
              console.log("Success Update", data.data);
              commit("UPDATE_USER", selectedUser);
            }
          });
      } catch (error) {
        console.log("Error while update");
      }
    },
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_SELECTED_USER(state, selectedUser) {
      state.selectedUser = selectedUser;
      sessionStorage.user= JSON.stringify(selectedUser);

    },

  },
});
