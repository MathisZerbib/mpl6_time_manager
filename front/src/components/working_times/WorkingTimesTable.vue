<template>
  <div v-if="!workingtimes" class="card-glass">
    <div class="card">

      <div class="card-header text-center ">
        <h3>Loading...</h3>
      </div>
    </div>
    <table class="text-white">
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
  <div class="card-2 card-glass">
    <div class="card-header text-center">
      <h3 class="text-white">Heures de travail</h3>
    </div>
    <div class="d-flex my-3">
      <input v-model="this.p1" type="number" class="card-glass w-100 rounded form-control-1 shadow mx-2 text-white"
        id="inputUserId" placeholder="Enter a user Id" required />
      <button class="btn card-glass text-white" @click="this.refreshWorkingTime()"> refresh</button>
    </div>
    <div class="table-responsive">
      <table class="table text-white">

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
              <button class="btn btn-primary m-2" data-bs-target="#modalWorkingTime" data-bs-toggle="modal"
                @click="selectWorkingTime(workingtime.id)">
                <BIconPencilSquare />
              </button>
              <button class="btn btn-danger m-2" @click="deleteWorkingTime(this.workingtime.id)">
                <BIconTrash />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="modal fade" id="modalWorkingTime">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit Working Time</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
            <form class="d-flex flex-row justify-content-around align-items-center">
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
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref="closeBtn">
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="modifyWorkingTime(this.workingTimeId)">Save
              changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import api from "../../services/api";

var date = new Date();
var current_date =
  date.getFullYear() +
  "-" +
  ("0" + (date.getMonth() + 1)).slice(-2) +
  "-" +
  ("0" + (date.getDay() + 1)).slice(-2)


export default {
  name: "WorkingTimesTable",
  data() {
    return {
      workingtimes: [],
      userId: null,
      workingTimeId: null,
      startTime: null,
      endTime: null,
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

    selectWorkingTime(id) {
      this.workingTimeId = id;
    },

    modifyWorkingTime(wtId) {
      console.log('test', this.workingtimes[0], current_date, this.startTime, this.endTime, wtId)
      api.editWorkingTime(current_date, this.startTime, this.endTime, wtId);
      const elem = this.$refs.closeBtn
      elem.click()

      setTimeout(() => {
        this.workingtimes = []
        this.getWorkingTime()
      }, 1000);
    },

    async deleteWorkingTime(id) {
      await axios.delete(
        "http://" + "127.0.0.1" +
        ":4000/api/workingtime/" +
        id
      );
    },
    async getWorkingTime() {
      let id = this.p1 == undefined ? this.$store.state.loggedUser.id : this.p1
      const { data } = await axios.get(
        "http://" + "127.0.0.1" + ":4000/api/workingtime/" + id
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
.dp__input_wrap>input,
.dp__input_wrap>svg {
  background-color: transparent;
  color: white;
}
</style>