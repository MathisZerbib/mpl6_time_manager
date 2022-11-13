<template>
  <form v-on:submit.prevent="onSubmit">
    <div class="card my-3 card-2 card-glass my-3 mx-2">
      <div class="card-header text-center">
        <h3 class="text-white">Ajoutez un utilisateur</h3>
      </div>
      <div>
        <div class="form-group">
          <input v-model="name" type="text" class="card-glass w-100 rounded form-control-1 shadow my-2 text-white" id="exampleInputName"
            placeholder="Enter name" />

          <input v-model="email" type="email" class="card-glass w-100 rounded form-control-1 shadow my-2 text-white" id="emailInput"
            placeholder="Enter email" />

          <input v-model="password_hash" type="text" class="card-glass w-100 rounded form-control-1 shadow my-2 text-white" id="password_hash"
            placeholder="Enter password" />
          <input v-model="team" type="text" class="card-glass w-100 rounded form-control-1 shadow my-2 text-white" id="exampleInputName" placeholder="Enter team name" />
         
          <div class="input-group my-3 rounded-right">
            <div class="input-group-prepend form-control card-glass text-white">
              <label class="my-2" for="roleInput">Role</label>
            </div>

            <select v-model="role" class="custom-select card-glass text-white">
              <option disabled value="">Please select a role</option>
              <option value="manager">manager</option>
              <option value="employee">employee</option>
            </select>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button type="submit" class="btn card-glass m-2 text-white">
          Submit
        </button>
      </div>

    </div>
  </form>
</template>

<script>
import axios from "axios";
import api from "../../services/api";


export default {
  name: "FormUser",
  data() {
    return {
      form: {
        email: "",
        name: "",
        password_hash: "",
        role: "",
        team:""
      },
    };
  },

  async mounted() {
  },

  methods: {
    onSubmit(e) {
      e.preventDefault();
      //this.createUser();
      api.createUser(this.form)
    },
    createUser: async function () {
      await axios
        .post(
          "http://" + "127.0.0.1" + ":4000/api/users",
          {
            user: {
              username: this.name,
              password_hash: this.password_hash,
              email: this.email,
              role: this.role,
              team: this.team
            },
          }
        )
        .then((response) => {
          console.log("works", response)
          this.$store.dispatch("loadUsers");
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



<style>

input::placeholder {
  color: white;
 }
</style>

