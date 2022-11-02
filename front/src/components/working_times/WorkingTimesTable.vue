<template>
  <div>
    <FormUser />
  </div>
  <div v-if="!workingtimes">
    <p>Loading ...</p>
  </div>

  <div v-else>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <!-- <th v-for="col in columns" v-bind:key="col">{{ col }}</th> -->
          <th>ID</th>
          <th>Start</th>
          <th>End</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="workingtime in workingtimes" v-bind:key="workingtime">
          <td>{{ workingtime.id }}</td>
          <td>{{ workingtime.start }}</td>
          <td>{{ workingtime.end }}</td>
          <td class="d-flex justify-content-center">
            <button
              class="btn btn-primary m-2"
              data-bs-target="#modalWorkingTime"
              data-bs-toggle="modal"
            >
              <BIconPencilSquare />
            </button>
            <button
              class="btn btn-danger m-2"
              @click="deleteWorkingTime(workingtime.id)"
            >
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
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
            <form
              class="d-flex flex-row justify-content-around align-items-center"
              v-on:submit.prevent="onSubmit"
            >
              <div class="form-group">
                <label for="inputStartTime">Start Time</label>
                <input
                  v-model="startTime"
                  type="time"
                  class="w-100"
                  id="inputStartTime"
                  placeholder="Enter a start time"
                />
                <!-- <small id="startTimeHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      > -->
              </div>
              <div class="form-group">
                <label for="inputEndTime">End Time</label>
                <input
                  v-model="endTime"
                  type="time"
                  class="w-100"
                  id="inputEndTime"
                  placeholder="Enter the End time"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <li class="nav-bar">
            <RouterLink class="nav-link" to="/newUser">Add New User</RouterLink>
          </li> -->
</template>
<script>
import axios from "axios";
export default {
  name: "WorkingTimesTable",
  data() {
    return {
      workingtimes: [],
    };
  },
  // computed: {
  //   columns: function columns() {
  //     if (this.workingtimes.length == 0) {
  //       return [];
  //     }
  //     return Object.keys(this.workingtimes[0]);
  //   },
  // },

  // async updateUser(id) {
  //   const { data } = await axios.post("https://api/workingtimes/" + id);
  //   console.log(data);
  // },
  methods: {
    async deleteWorkingTime(id) {
      await axios.delete(
        "http://" +
          import.meta.env.VITE_API_ENDPOINT +
          ":4000/api/workingtime/" +
          id
      );
    },
  },

  async mounted() {
    const { data } = await axios.get(
      "http://" + import.meta.env.VITE_API_ENDPOINT + ":4000/api/workingtime/1"
    );
    for (let i = 0; i < data.data.length; i++) {
      data.data[i].start = data.data[i].start.substring(11, 16);
      data.data[i].end = data.data[i].end.substring(11, 16);
      this.workingtimes.push(data.data[i]);
    }
  },
};
</script>
