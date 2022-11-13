<template>
  <form v-on:submit.prevent="onSubmit">
    <div class="card card-2">
      <div class="card-header text-center">
        <h3>Ajoutez un temps de travail</h3>
      </div>

      <div class="card-body">
        <div
          class=" d-flex main-layout  flex-lg-column flex-sm-column flex-md-column justify-content-around flex-column my-3 text-center">
          <div class="d-flex my-3">
            <input v-model="user.id" type="number" class="w-100 rounded form-control-1 shadow mx-2" id="inputUserId"
              placeholder="Enter a user Id" required />
          </div>
          <div class="d-flex align-items-center row my-3">
            <label class="mb-2" for="inputStartTime">Arrivée</label>
            <Datepicker v-model="timeStart" timePicker />
          </div>
          <div class=" d-flex align-items-center row my-3">
            <label class="mb-2" for="inputEndTime">Départ</label>
            <Datepicker v-model="timeEnd" timePicker />
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary my-3 w-50 m-auto" @click="createWokingTime()">
        Submit
      </button>
    </div>
  </form>

</template>

<script setup>
// Lazy load the component we want to pass
import { ref, reactive } from 'vue';
import axios from 'axios';


var date = new Date();
var current_date =
  date.getFullYear() +
  "-" +
  ("0" + (date.getMonth() + 1)).slice(-2) +
  "-" +
  ("0" + (date.getDay() + 1)).slice(-2)

const user = reactive({
  id : null
})

const timeStart = ref({
  hours: new Date().getHours(),
  minutes: new Date().getMinutes()
});
const timeEnd = ref({
  hours: new Date().getHours(),
  minutes: new Date().getMinutes()
});
async function createWokingTime() {
  await axios
    .post(
      "http://" +

      "127.0.0.1" +
      ":4000/api/workingtime/" + user.id,
      {
        "time": {
          start: current_date + "T" + timeStart.value.hours + ":" + timeStart.value.minutes + ":00",
          end: current_date + "T" + timeEnd.value.hours + ":" + timeEnd.value.minutes + ":00",
        },
      }
    )
}
</script>