<!-- <template>
  <form class="" v-on:submit.prevent="onSubmit">
    <div class="card rounded shadow">
      <div class="card-header text-center">
        <h3>Ajoutez un temps de travail</h3>
      </div>

      <div class="card-body">
        <div class=" d-flex main-layout  flex-lg-row flex-sm-column flex-md-column justify-content-around flex-column my-3 text-center">
          <div  class="d-flex align-items-center row my-3">
            <label class="mb-2" for="inputStartTime">Arrivée</label>
            <Datepicker v-model="timeStart" timePicker />
          </div>
          <div  class=" d-flex align-items-center row my-3">
            <label class="mb-2" for="inputEndTime">Départ</label>
            <Datepicker v-model="timeEnd" timePicker />
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn btn-primary my-3 w-50 m-auto" @click="createWokingTime()">Submit</button>
    </div>
  </form>

</template>

<script setup>

// Lazy load the component we want to pass
import { ref } from 'vue';
import axios from 'axios';

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

var date = new Date();
var current_date =
  date.getFullYear() +
  "-" +
  ("0" + (date.getMonth() + 1)).slice(-2) +
  "-" +
  ("0" + (date.getDay() + 1)).slice(-2)

  
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
          ":4000/api/workingtime/1",
          {
            "time": {
              start: current_date + "T" + timeStart.value.hours+":"+timeStart.value.minutes + ":00",
              end: current_date + "T"  + timeEnd.value.hours+":"+timeEnd.value.minutes +  ":00",
            },
          }
        )
        .then((response) => console.log("works", response))
        .catch(function (error) {
          // error
          console.log(error);
        });
    }
</script> -->
<template>
  <form class="" v-on:submit.prevent="onSubmit">
    <div class="card rounded shadow">
      <div class="card-header text-center">
        <h3>Ajoutez un temps de travail</h3>
      </div>

      <div class="card-body">
        <div class=" d-flex main-layout  flex-lg-row flex-sm-column flex-md-column justify-content-around flex-column my-3 text-center">
          <div  class="d-flex align-items-center row my-3">
            <label class="mb-2" for="inputStartTime">Arrivée</label>
            <Datepicker v-model="timeStart" timePicker />
          </div>
          <div  class=" d-flex align-items-center row my-3">
            <label class="mb-2" for="inputEndTime">Départ</label>
            <Datepicker v-model="timeEnd" timePicker />
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn btn-primary my-3 w-50 m-auto" @click="createWokingTime()">Submit</button>
    </div>
  </form>

</template>

<script setup>
// Lazy load the component we want to pass
import { ref } from 'vue';
import axios from 'axios';

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


var date = new Date();
var current_date =
  date.getFullYear() +
  "-" +
  ("0" + (date.getMonth() + 1)).slice(-2) +
  "-" +
  ("0" + (date.getDay() + 1)).slice(-2)
  
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
          import.meta.env.VITE_API_ENDPOINT +
          ":4000/api/workingtime/1",
          {
            "time": {
              start: current_date + "T" + timeStart.value.hours+":"+timeStart.value.minutes + ":00",
              end: current_date + "T"  + timeEnd.value.hours+":"+timeEnd.value.minutes +  ":00",
            },
          }
        )
    }
</script>