<template>
  <form v-on:submit.prevent="onSubmit">
    <div class="card rounded shadow">
      <div class="card-header text-center">
        <h3>Ajoutez un temps de travail</h3>
      </div>

      <div class="card-body">
        <div class="form-group">
          <label for="inputUserId">User Id</label>
          <input
            v-model="userId"
            type="number"
            class="form-control"
            id="inputUserId"
            placeholder="Enter a user Id"
            required
          />
          <label for="inputStartTime">Start Time</label>
          <input
            v-model="startTime"
            type="time"
            class="form-control"
            id="inputStartTime"
            placeholder="Enter a start time"
            required
          />
          <label for="inputEndTime">End Time</label>
          <input
            v-model="endTime"
            type="time"
            class="form-control"
            id="inputEndTime"
            placeholder="Enter the End time"
            required
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";
var date = new Date();
var current_date =
  date.getFullYear() +
  "-" +
  ("0" + (date.getMonth() + 1)).slice(-2) +
  "-" +
  ("0" + (date.getDay() + 1)).slice(-2);
export default {
  data() {
    return {
      form: {
        userId: null,
        startTime: "",
        endTime: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.createWokingTime();
    },
    createWokingTime: async function () {
      await axios
        .post(
          "http://" +
          "127.0.0.1"+
            ":4000/api/workingtime/"+this.userId,
          {
            time: {
              start: current_date + "T" + this.startTime+":00",
              end: current_date + "T" + this.endTime+":00",
            },
          }
        )
        .then((response) => console.log("works", response))
        .catch(function (error) {
          // error
          console.log(error);
        });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.startTime = "";
      this.form.endTime = "";
      this.form.userId = null
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>