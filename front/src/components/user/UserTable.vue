<template>
  <div v-if="!users">
    <p>Loading ...</p>
  </div>

  <div v-else>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <!-- <th v-for="col in columns" v-bind:key="col">{{ col }}</th> -->
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" v-bind:key="index">
          <td>{{ user.id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td class="d-flex justify-content-center">
            <button
              class="btn btn-primary m-2"
              data-bs-target="#myModal"
              data-bs-toggle="modal"
              @click="setSelectedUser(user)"
            >
              <BIconPencilSquare />
            </button>
            <button class="btn btn-danger m-2" @click="deleteUser(user.id)">
              <BIconTrash />
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">hello modal</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="resetSelectedUser()"
            ></button>
          </div>
          <div class="modal-body">
            <p>Modify this user.</p>
            <form
              style="height: 100px"
              class="d-flex flex-row justify-content-around align-items-center"
              v-on:submit.prevent="onSubmit"
            >
              <div class="form-group">
                <label for="exampleInputName">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputName"
                  placeholder="Enter name"
                  v-model="this.selectedUser.username"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                  v-model="this.selectedUser.email"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="resetSelectedUser()"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="modifyUser(this.selectedUser)"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  name: "UserTable",
  data() {
    return {
      isModalVisible: false,
    };
  },
  // computed: {
  //   columns: function columns() {
  //     if (this.users.length == 0) {
  //       return [];
  //     }
  //     return Object.keys(this.users[0]);
  //   },
  // },

  // async updateUser(id) {
  //   const { data } = await axios.post("https://api/users/" + id);
  //   console.log(data);
  // },

  methods: {
    async deleteUser(id) {
      await axios.delete(
        "http://" + import.meta.env.VITE_API_ENDPOINT + ":4000/api/users/" + id
      );
    },

    setSelectedUser(user) {
      this.$store.dispatch("setSelectedUser", user);
    },

    async modifyUser(id) {
      this.$store.dispatch("updateUser", id);
    },

    resetSelectedUser() {
      this.selectedUser = {};
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },

  async mounted() {
    this.$store.dispatch("loadUsers");
  },
  computed: {
    ...mapState(["users"]),
    ...mapState(["selectedUser"]),
  },
};
</script>
