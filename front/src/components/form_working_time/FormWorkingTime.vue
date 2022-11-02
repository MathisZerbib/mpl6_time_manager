<template>
  <form class="d-flex align-items-center" v-on:submit.prevent="onSubmit">
    <div class="card rounded shadow">
      <div class="card-header text-center">
        <h3>Ajoutez un temps de travail</h3>
      </div>

      <div class="card-body">
        <div class="form-group">
          <label for="inputStartTime">Start Time</label>
          <input
            v-model="startTime"
            type="time"
            class="w-100"
            id="inputStartTime"
            placeholder="Enter a start time"
          />
          <label for="inputEndTime">End Time</label>
          <input
            v-model="endTime"
            type="time"
            class="w-100"
            id="inputEndTime"
            placeholder="Enter the End time"
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
  date.getDate();

export default {
  data() {
    return {
      form: {
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
            import.meta.env.VITE_API_ENDPOINT +
            ":4000/api/workingtime/1",
          {
            time: {
              start: current_date + " " + this.startTime,
              end: current_date + " " + this.endTime,
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
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
