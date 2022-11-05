<template>
    <div class="d-flex justify-content-around my-3">

  <div class="card rounded shadow">
    <h5 class="text-center my-3">Badgeage</h5>
    <div class="card-body">
      <div class="custom-counter" v-if="data.startTime !== 0 && data.isCompleted == false || data.startTime == 0 && data.isCompleted == false " >
        <p>
          {{ toHHMMSS(data.startTime)}}
        </p>
      </div>
      <div class="custom-counter-message" v-if="data.startTime == 0 && data.isCompleted == true" >
        <p>
          {{data.messageComplete}}
        </p>
      </div>

      <Doughnut id="dougnhut"
        :chart-options="chart.chartOptions"
        :chart-data="chart.chartData"
        :option="chart.options"
        :width="300"
        :height="300"
      />
     
    </div>
    <div class="d-flex align-items-center justify-content-around my-3">
        <button type="button" class="btn btn-success" @click="runTimer()">Entrée</button>
        <button type="button" class="btn btn-danger"  @click="stopTimer()">Sortie</button>
      </div>
  </div>
    </div>

</template>

<script setup>
import { Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";



import { ref, onMounted, computed, reactive, onUnmounted} from 'vue'
// import { useStore } from 'vuex'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const data = reactive ( {
      startTime: 0,
      totalTime: 5,
      timerEnabled: false,
      isCompleted: false,
      messageComplete: "You can go home !",
  });


const chart = reactive({
  chartData: {
        labels: ["Temps travaillé", "Temps restant"],
        datasets: [
          {
            backgroundColor: ["#198755", "#D33F49"],
            data: [data.startTime, data.totalTime],
          },
        ],
      },
      chartOptions: {
        responsive: false,
        maintainAspectRatio: false,
        cutout: 100,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
const timer = ref(undefined)


function getDiff() {
  data.startTime ++; 

    generateData()
    console.log(data.totalTime, data.startTime)

    if(data.totalTime == data.startTime){
      data.startTime = 0
      clearInterval(timer.value);
      data.timerEnabled = false;
      data.isCompleted = true
    }


  }
function generateData() {
        let newArray = [data.startTime, (data.totalTime -  data.startTime)];
  
        chart.chartData = {
          labels: ["Temps travaillé", "Temps restant"],
          datasets: [
            {
              backgroundColor: ["#198755", "#D33F49"],
              data: newArray
            }
          ]
        };
        chart.chartOptions= {
        responsive: false,
        maintainAspectRatio: false,
        cutout: 100,
        plugins: {
          legend: {
            display: false,
          },
        },
      };
    }

onMounted(() => {
})


function runTimer(){
  if(data.timerEnabled == false && data.isCompleted !== true){
    timer.value = setInterval(getDiff, 1000);
    data.timerEnabled = true;
  }
}

function stopTimer(){
  clearInterval(timer.value);
  data.timerEnabled = false;
}

function toHHMMSS(timer) {
    var sec_num = parseInt(timer, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}


</script>
