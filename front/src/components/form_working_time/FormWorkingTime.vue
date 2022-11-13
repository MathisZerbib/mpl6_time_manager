<template>
  <form  v-on:submit.prevent="onSubmit">
    <div class="card-glass card-2 my-3 mx-2">
      <div class="card-header text-center">
        <h3 class="text-white">Ajoutez un temps de travail</h3>
      </div>

      <div class="card-body">
        <div
          class=" d-flex main-layout  flex-lg-column flex-sm-column flex-md-column justify-content-around flex-column my-3 text-center">
          <div class="d-flex my-3">
            <input v-model="user.id" type="number" class="card-glass w-100 rounded form-control-1 shadow mx-2 text-white" id="inputUserId"
              placeholder="Enter a user Id" required />
          </div>
          <div class="d-flex align-items-center row my-3">
            <label class="mb-2 text-white" for="inputStartTime">Arrivée</label>
            <Datepicker v-model="timeStart" timePicker />
          </div>
          <div class=" d-flex align-items-center row my-3">
            <label class="mb-2 text-white" for="inputEndTime">Départ</label>
            <Datepicker v-model="timeEnd" timePicker />
          </div>
        </div>
      </div>
      <div class="text-center">
              <button type="submit" class="btn card-glass text-white" @click="createWokingTime()">
        Submit
      </button>
      </div>

    </div>
  </form>

</template>

<script setup>
// Lazy load the component we want to pass
import { ref, reactive } from 'vue';
import api from "../../services/api";


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
  api.addWokingTime(current_date, timeStart.value, timeEnd.value);
}
</script>

<style>

</style>