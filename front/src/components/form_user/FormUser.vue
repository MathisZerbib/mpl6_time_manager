<template>
  <form v-on:submit.prevent="onSubmit">
    <div class="card rounded shadow my-3">
      <div class="card-header text-center">
        <h3>Ajoutez un utilisateur</h3>
      </div>
      <div class="card-body">
        <div class="form-group">
          <label class="m-2" for="exampleInputName">Name</label>
          <input v-model="name" type="text" class="form-control" id="exampleInputName" placeholder="Enter name" />
          <label class="m-2" for="password_hash">Password</label>
          <input v-model="password_hash" type="text" class="form-control" id="password_hash" placeholder="Enter password" />

          <label class="m-2" for="emailInput">Email address</label>
          <input v-model="email" type="email" class="form-control" id="emailInput" placeholder="Enter email" />
          <div class="input-group my-3 rounded-right">
            <div class="input-group-prepend form-control">
              <label class="m-2" for="roleInput">Role</label>
            </div>

            <select v-model="role" class="custom-select">
              <option disabled value="">Please select a role</option>
              <option value="manager">manager</option>
              <option value="employee">employee</option>
            </select>
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary btn btn-primary my-3 w-50 m-auto ">
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "FormUser",
  data() {
    return {
      form: {
        email: "",
        name: "",
        password_hash: "",
        role: ""
      },
    };
  },
  methods: {
    onSubmit() {
      this.createUser();
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
              role: this.role
            },
          }
        )
        .then((response) => console.log("works", response))
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
