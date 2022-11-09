<template>
  <div v-if="!workingtimes" class="">
    <div class="card">

      <div class="card-header text-center ">
        <h3>Loading...</h3>
      </div>
    </div>
    <table class="">
      <thead>
        <tr>
          <th>ID</th>
          <th>Start</th>
          <th>End</th>
          <th>Actions</th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="card-2">
    <div class="card-header text-center">
      <h3>Heures de travail</h3>
    </div>
    <div class="d-flex my-3">
      <input v-model="this.p1" type="number" class="w-100 rounded form-control-1 shadow mx-2" id="inputUserId"
        placeholder="Enter a user Id" required />
      <button class="btn btn-primary btn btn-primary" @click="this.refreshWorkingTime()"> refresh</button>
    </div>
    <table class="table">
      
      <thead>
        <tr>
          <th>ID</th>
          <th>Start</th>
          <th>End</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
      <tbody>
        <tr v-for="workingtime in workingtimes" v-bind:key="workingtime">
          <td>{{ workingtime.id }}</td>
          <td>{{ workingtime.start }}</td>
          <td>{{ workingtime.end }}</td>
          <td class="d-flex justify-content-center">
            <button class="btn btn-primary m-2" data-bs-target="#modalWorkingTime" data-bs-toggle="modal">
              <BIconPencilSquare />
            </button>
            <button class="btn btn-danger m-2" @click="deleteWorkingTime(workingtime.id)">
              <BIconTrash />
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="modal" id="modalWorkingTime">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Working Time</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
            <form class="d-flex flex-row justify-content-around align-items-center" v-on:submit.prevent="onSubmit">
              <div class="form-group">
                <label for="inputStartTime">Start Time</label>
                <input v-model="startTime" type="time" class="w-100" id="inputStartTime"
                  placeholder="Enter a start time" />
              </div>
              <div class="form-group">
                <label for="inputEndTime">End Time</label>
                <input v-model="endTime" type="time" class="w-100" id="inputEndTime" placeholder="Enter the End time" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "WorkingTimesTable",
  data() {
    return {
      workingtimes: [],
      userId: null,
    };
  },

  computed: {
    p1: {
      get() {
        return this.userId
      },
      set(val) {
        this.userId = val
      }
    },
  },
  methods: {
    async deleteWorkingTime(id) {
      await axios.delete(
        "http://" + "127.0.0.1" +
        ":4000/api/workingtime/" +
        id
      );
    },
    async getWorkingTime() {
      const { data } = await axios.get(
        "http://" + "127.0.0.1" + ":4000/api/workingtime/" + this.p1
      );
      for (let i = 0; i < data.data.length; i++) {
        data.data[i].start = data.data[i].start.substring(11, 16);
        data.data[i].end = data.data[i].end.substring(11, 16);
        this.workingtimes.push(data.data[i]);
      }
    },
    async refreshWorkingTime() {

      this.getWorkingTime();
      this.workingtimes = [];
    }
  },

  watch: {
    userId: function (val) {
      this.userId = val
    },
  },

  async mounted() {
    this.getWorkingTime();

  },
};
</script>

<style>
.form-control-1 {
  border: none !important;
}

.shadow {
  box-shadow: 0 .5rem 1rem rgba(117, 117, 117, 0.15) !important;
}

.horizontal-scrollable > .row {
        overflow-x: auto;
        white-space: nowrap;
    }
</style>