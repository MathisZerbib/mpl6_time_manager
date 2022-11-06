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
    
    currentTime: (state) => state.currentTime,
    totalTime: (state)=> state.totalTime,
    timerEnabled: (state) => state.timerEnabled,
  },
  actions: {
    async setTotalTime({ commit }, totalTime) {
      let result;
      try {
        result = await axios.get(
          "http://" + "35.180.243.83" + ":4000/api/users/1/workingTime/2"
        );
      } catch (error) {
        // Handle error
        return error;
      }       
      if(result){
        console.log(result)
      }
      console.log('Server wrong API call')
      commit("SET_TOTAL_TIME", totalTime)
    },

    async startTimer({ commit }, currentTime) {
      
      commit("START_TIMER", currentTime)
    },
    async updateTimer({ commit }, currentTime) {
      
      commit("UPDATE_TIMER", currentTime)
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
    SET_SELECTED_USER(state, selectedUser) {
      state.selectedUser = selectedUser;
    },

  },
});
