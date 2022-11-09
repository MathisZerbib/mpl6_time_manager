<template>
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Warning</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="$emit('close')"
          ></button>
        </div>
        <div class="modal-body">
          <p>Are you sure to delete this user ?</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            No
          </button>
          <button type="button" class="btn btn-danger">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "UserTable",
  data() {
    return {
      isModalVisible: false,
      users: [],
    };
  },
  methods: {
    async updateUser(id) {
      const { data } = await axios.post("http://"+ "127.0.0.1"+"/api/users/" + id);
      console.log(data);
    },
    async deleteUser(id) {
      const { data } = await axios.delete("http://"+ "127.0.0.1"+"/api/users/" + id);
      console.log(data);
    },
    showModal() {
       this.isModalVisible = true;
     },
     closeModal() {
       this.isModalVisible = false;
     }
  },
};
</script>
