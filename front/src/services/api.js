import axios from "axios";
import router from "../router";
import store from "../store";

const api = {



  // GET ALL USERS 
  async getAllUsers() {
    let result = await axios.get(
      "http://127.0.0.1:4000/api/users"
    );
    return result
  },


  // REGISTER USER
  async registerUser(user) {
    let reqBody = {
      username: user.name,
      email: user.email,
      password_hash: user.password_hash,
      role: "employee",
      team: "Alpha"
    };
    await axios
      .post(
        "http://" + "127.0.0.1" + ":4000/api/users",
        {
          user: reqBody
        }
      ).then((res) => {
        if(res.status == 200)
        router.push('/')
      })
      .catch((error) => {
        // error
        console.log(error);
      })
  },

  // POST NEW USER FROM ADMIN
  async createUser(user) {
    let reqBody = {
      username: user.name,
      email: user.email,
      password_hash: user.password_hash,
      team: user.team,
      role: user.role,
    };

    await axios
      .post(
        "http://" + "127.0.0.1" + ":4000/api/users",
        {
          user:
            reqBody
        }
      )
      .then(() => {
        store.dispatch("loadUsers");
      })
      .catch((error) => {
        // error
        console.log(error);
      })
  },


  // LOG USER BY EMAIL AND PASSWORD
  async logUser(user) {
    await axios
      .post(
        "http://" + "127.0.0.1" + ":4000/api/sign_in"
        ,
        {
            email: user.email,
            password_hash: user.password_hash
        }
      )
      .then((response) => {
        setTimeout(() => {
          console.log(response);
          console.log("user has been loged", response.data, "status", response.status);
          sessionStorage.setItem(`token`, response.data.jwt);
          store.dispatch("setToken", response.data.jwt);
        }, 500);
      })
      .catch(function (error) {
        // error
        console.log(error);
      });
  },





  // POST NEW WORKING TIME FOR USER
  async addWokingTime(current_date, timeStart, timeEnd, id) {
    let reqBody = {
      start: current_date + "T" + timeStart.hours + ":" + timeStart.minutes + ":00",
      end: current_date + "T" + timeEnd.hours + ":" + timeEnd.minutes + ":00",
    }
    await axios
      .post(
        "http://" +

        "127.0.0.1" +
        ":4000/api/workingtime/" + id,
        {
          time: reqBody

        }
      )
  },



  // UPDATE NEW WORKING TIME FOR USER
  async editWorkingTime(current_date, start, end, idWt) {

    await axios
      .put(
        "http://" +

        "127.0.0.1" +
        ":4000/api/workingtime/" + idWt,
        {
          time: {
            start: current_date + "T" + start+":00",
            end: current_date + "T" + end+":00",
          }

        }
      )
  },

}


export default api;