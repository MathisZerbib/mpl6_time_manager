<template>
  <form v-on:submit.prevent="onSubmit">
    <div class="card my-3 card-2 card-glass my-3 mx-2">
      <div class="card-header text-center">
        <h3 class="text-white">Ajoutez un utilisateur</h3>
      </div>
      <div>
        <div class="form-group">
          <input v-model="form.name" type="text" class="card-glass w-100 rounded form-control-1 shadow my-2 text-white" id="exampleInputName"
            placeholder="Enter name" />

          <input v-model="form.email" type="email" class="card-glass w-100 rounded form-control-1 shadow my-2 text-white" id="emailInput"
            placeholder="Enter email" />

          <input v-model="form.password_hash" type="text" class="card-glass w-100 rounded form-control-1 shadow my-2 text-white" id="password_hash"
            placeholder="Enter password" />
            
          <input v-model="form.team" type="text" class="card-glass w-100 rounded form-control-1 shadow my-2 text-white" id="exampleInputName" placeholder="Enter team name" />
         
          <div class="input-group my-3 rounded-right">
            <div class="input-group-prepend form-control card-glass text-white">
              <label class="my-2" for="roleInput">Role</label>
            </div>

            <select v-model="form.role" class="custom-select card-glass text-white">
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

