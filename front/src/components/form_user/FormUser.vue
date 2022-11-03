<template>
  <form class="d-flex align-items-center" v-on:submit.prevent="onSubmit">
    <div class="card rounded shadow">
      <div class="card-header text-center">
        <h3>Ajoutez un utilisateur</h3>
      </div>
      <div class="card-body">
        <div class="form-group">
          <label for="exampleInputName">Name</label>
          <input v-model="name" type="text" class="form-control" id="exampleInputName" placeholder="Enter name" />

          <label for="emailInput">Email address</label>
          <input v-model="email" type="email" class="form-control" id="emailInput" placeholder="Enter email" />
          <label for="roleInput">Role</label>
          <select v-model="role">
            <option disabled value="">Please select a role</option>
            <option value="manager">manager</option>
            <option value="employee">employee</option>
          </select>
          <span>Role: {{ role }}</span>

        </div>
      </div>

      <button type="submit" class="btn btn-primary btn btn-primary mt-3">
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
          "http://" + "35.180.243.83" + ":4000/api/users",
          {
            user: {
              username: this.name,
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
