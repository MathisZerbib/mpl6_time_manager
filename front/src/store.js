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
          "http://" + import.meta.env.VITE_API_ENDPOINT + ":4000/api/users"
        );
      } catch (error) {
        // Handle error
        return error;
      }

      // Handle success
      users = result.data.data;
      commit("SET_USERS", users);
    },

    // loadUsers({ commit }) {
    //   this.users = [];
    //   axios.get("http://localhost:4000/api/users").then((data) => {
    //     console.log("====== data =======", data.data);
    //     let users = data.data.data;
    //     commit("SET_USERS", users);
    //   });
    // },
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
              import.meta.env.VITE_API_ENDPOINT +
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
    // DELETE_USER(state, selectedUser) {
    //   state.users.filter((user) => user !== selectedUser);
    // },
    SET_SELECTED_USER(state, selectedUser) {
      state.selectedUser = selectedUser;
    },
  },
});
