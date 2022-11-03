import vuex from "vuex";
import axios from "axios";

export default new vuex.Store({
  state: {
    users: [],
    selectedUser: {},
    timerEnabled: false,
  },
  getters: {
    users: (state) => state.users,
    selectedUser: (state) => state.selectedUser,
    
    timerCount: (state) => state.timerCount,
    timerEnabled: (state) => state.timerEnabled,
  },
  actions: {
    async startTimer({ commit }, timerCount) {
      
      commit("START_TIMER", timerCount)
    },
    async updateTimer({ commit }, timerCount) {
      
      commit("UPDATE_TIMER", timerCount)
    },

    async stopTimer({ commit }) {
      
      commit("STOP_TIMER")
    },

    async loadUsers({ commit }) {
      let users = [];
      let result;
      try {
        result = await axios.get(
          "http://" + "35.180.243.83" + ":4000/api/users"
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
              "35.180.243.83" +
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

    START_TIMER(state, timerCount) {
      state.timerCount = timerCount;
      state.timerEnabled = true;
    },
    UPDATE_TIMER(state, timerCount) {
      state.timerCount = timerCount;
    },

    STOP_TIMER(state) {
      state.timerEnabled = false;
    },
    // DELETE_USER(state, selectedUser) {
    //   state.users.filter((user) => user !== selectedUser);
    // },
    SET_SELECTED_USER(state, selectedUser) {
      state.selectedUser = selectedUser;
    },
  },
});
