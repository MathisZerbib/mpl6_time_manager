import axios from "axios";

var api = {

    // REGISTER USER
    async registerUser (user){
        let reqBody = {
            username: user.name,
            email: user.email,
            password_hash: user.password_hash,
            role: "employee",
            team: "A"
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
    async createUser (user){
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
            .catch ((error) => {
                // error
                console.log(error);
            })
    },
    
    // POST NEW WORKING TIME FOR USER
    async createWokingTime (current_date, timeStart, timeEnd) {
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
                    time: {
    
                    },
                }
            )
    },
    
    // POST UPDATE USER
    async updateUser  (id) {
        const { data } = await axios.post("http://"+ "127.0.0.1"+"/api/users/" + id);
        console.log(data);
      }
,
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
          console.log("user has been loged", response.data, "status", response.status)
          this.$router.push('dashboard') 
        }, 1000);
      })
      .catch(function (error) {
        // error
        console.log(error);
      });
  },
}


  export default api;