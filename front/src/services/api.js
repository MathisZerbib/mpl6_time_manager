import axios from "axios";


const api = {



  // GET ALL USERS 
  async getAllUsers() {
    let result;
    result = await axios.get(
      "http://" + "127.0.0.1" + ":4000/api/users"
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
      )
  },

  // POST NEW USER FROM ADMIN
  async createUser(user) {
    let reqBody = {
      username: user.name,
      email: user.email,
      password_hash: user.password_hash,
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
        this.$store.dispatch("loadUsers");
      })
      .catch((error) => {
        // error
        console.log(error);
      })
  },


  // POST UPDATE USER
  async updateUser(userSelected) {
    api.updateUser(userSelected)
  },


  // LOG USER BY EMAIL AND PASSWORD
  async logUser(user) {
    await axios
      .post(
        "http://" + "127.0.0.1" + ":4000/api/sign_in"
        ,
        {
          user: {
            user
          },
        }
      )
      .then((response) => {
        setTimeout(() => {
          console.log(response);
          console.log("user has been loged", response.data, "status", response.status);
          localStorage.setItem(`token`, response.data.jwt);
          this.$store.dispatch("setToken", response.data.jwt);
        }, 500);
      })
      .catch(function (error) {
        // error
        console.log(error);
      });
  },





  // POST NEW WORKING TIME FOR USER
  async addWokingTime(current_date, timeStart, timeEnd) {
    let reqBody = {
      start: current_date + "T" + timeStart.hours + ":" + timeStart.minutes + ":00",
      end: current_date + "T" + timeEnd.hours + ":" + timeEnd.minutes + ":00",
    }
    await axios
      .post(
        "http://" +

        "127.0.0.1" +
        ":4000/api/workingtime/" + this.$store.user.id,
        {
          time: reqBody

        }
      )
  },
}


export default api;