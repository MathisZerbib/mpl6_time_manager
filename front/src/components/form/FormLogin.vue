<template>
  <div class="container-fluid localBody">
    <div class="row">
      <div class="col-6 intro-section">
        <div class="intro-content-wrapper">
          <h1 class="intro-title">Bienvenue dans votre Time Manager</h1>
        </div>
      </div>
      <div class="col-6 form-section">
        <div class="login-wrapper">
          <h2 class="login-title">Se Connecter</h2>
          <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
              <input  v-model="user.email" type="email" name="email" id="email" class="form-control" placeholder="Email">
            </div>
            <div class="form-group mb-3">
              <input v-model="user.password_hash" type="password" name="password" id="password" class="form-control mb-5" placeholder="Password">
            </div>
            <div class="d-flex justify-content-center  align-items-center mb-5">
              <input name="login" id="login" class="btn-primary login-btn rounded shadow" type="submit" value="Connexion">
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
import api from "../../services/api";

export default {
  name: "FormLogin",
  data() {
    return {
      user: {
        email: "",
        password_hash: "",
      },
    };
  },
  methods: {
    onSubmit(){
      api.logUser(this.user);
    },
  },
};
</script>

<style>

.localBody{
  background-color: white;
}
.login-btn{
  border: none !important;
  box-shadow: 0 .1rem 1rem rgba(117, 117, 117, 0.15) !important;
}
.shadow:hover {
  box-shadow: 0 .5rem 1rem rgba(117, 117, 117, 0.15) !important;
}

</style>