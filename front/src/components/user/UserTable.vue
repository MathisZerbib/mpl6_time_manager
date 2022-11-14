<template>
  <div class="card my-3 card-3 card-glass">
    <div class="card-header text-center">
      <h3 class="text-white">Utilisateurs</h3>
    </div>
    <div class="table-responsive">
      <table class="table text-white">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Team</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" v-bind:key="index">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>{{ user.team }}</td>
            <td class="d-flex justify-content-center">
              <button class="btn btn-primary m-2" data-bs-target="#myModal" data-bs-toggle="modal"
                @click="setSelectedUser(user)">
                <BIconPencilSquare />
              </button>
              <button class="btn btn-danger m-2" @click="deleteUser(user.id)">
                <BIconTrash />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
      <div class="modal fade" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">hello modal</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                @click="resetSelectedUser()"></button>
            </div>
            <div class="modal-body">
              <p>Modify this user.</p>
              <form style="height: 100px" class="d-flex flex-row justify-content-around align-items-center"
                v-on:submit.prevent="onSubmit">
                <div class="form-group">
                  <label for="exampleInputName">Name</label>
                  <input type="text" class="form-control" id="exampleInputName" placeholder="Enter name"
                    v-model="selectedUser.username" />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"
                    v-model="selectedUser.email" />
                </div>
                <div class="form-group">
                  <label for="exampleInputName">Team</label>
                  <input type="text" class="form-control" id="exampleInputText" placeholder="Enter team"
                    v-model="selectedUser.team" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="resetSelectedUser()" ref="myBtn">
                Close
              </button>
              <button type="button" class="btn btn-primary" @click="modifyUser(selectedUser)">
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

  methods: {
    async deleteUser(id) {
      await axios.delete(
        "http://" + "127.0.0.1" + ":4000/api/users/" + id
      );
      this.$store.dispatch("loadUsers");
    },

    setSelectedUser(user) {
      this.$store.dispatch("setSelectedUser", user);
    },

    async modifyUser(user) {
      await this.$store.dispatch("updateUser", user)
      const elem = this.$refs.myBtn
            elem.click()
    
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