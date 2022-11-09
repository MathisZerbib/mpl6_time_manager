<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6 intro-section">
        <div class="intro-content-wrapper">
          <h1 class="intro-title">Bienvenue dans votre Time Manager</h1>
        </div>
      </div>
      <div class="col-6 form-section">
        <div class="login-wrapper">
          <h2 class="login-title">Se Connecter</h2>
          <form>
            <div class="form-group">
              <input  v-model="email" type="email" name="email" id="email" class="form-control" placeholder="Email">
            </div>
            <div class="form-group mb-3">
              <input v-model="password_hash" type="password" name="password" id="password" class="form-control mb-5" placeholder="Password">
            </div>
            <div class="d-flex justify-content-center  align-items-center mb-5">
              <input @click="logUser" name="login" id="login" class="btn-primary login-btn" type="button" value="Connexion">
            </div>
          </form>           
          <p class="login-wrapper-footer-text">Vous n'avez pas de compte ? &nbsp;<a href="/register" class="text-reset">Enregistrez-vous ici</a></p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "FormLogin",
  data() {
    return {
      form: {
        email: "",
        password_hash: "",
      },
    };
  },
  methods: {
    logUser: async function () {
      await axios
        .get(
          "http://" + "127.0.0.1" + ":4000/api/users"
          //,
          // {
          //   user: {
          //     email: this.email,
          //     password_hash: this.password_hash,
          //   },
          // }
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
    // onReset(event) {
    //   event.preventDefault();
    //   // Reset our form values
    //   this.form.email = "";
    //   this.form.name = "";
    //   // Trick to reset/clear native browser form validation state
    //   this.show = false;
    //   this.$nextTick(() => {
    //     this.show = true;
    //   });
    // },
  },
};
</script>