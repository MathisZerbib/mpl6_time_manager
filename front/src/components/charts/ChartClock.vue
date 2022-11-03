<template>
  <div class="card rounded shadow">
    <h5 class="text-center my-3">Badgeage</h5>
    <div class="card-body">
      <div class="custom-counter">
        <TimerCount v-bind:timerCount="this.timerCount" />
      </div>
      <Doughnut id="dougnhut"
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="350"
        :height="350"
      />
      <div class="d-flex align-items-center justify-content-around my-3">
        <button type="button" class="btn btn-success" @click="this.runTimer()">Entrée</button>
        <button type="button" class="btn btn-danger"  @click="this.stopTimer()">Sortie</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

import TimerCount from '../timer/TimerCount.vue'
import { mapState } from "vuex";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
// const TIME_LIMIT = 60;
export default {
  name: "DoughnutChart",
  components: {
    Doughnut,
    TimerCount,
  },
  data() {
    return {
      timerCount: 890,
      chartData: {
        labels: ["Temps travaillé", "Temps restant"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651"],
            data: [20, 40],
          },
        ],
      },
      chartOptions: {
        responsive: false,
        maintainAspectRatio: true,
        cutout: 100,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
      // plugins: [
      //   {
      //     id: "text",
      //     beforeDraw: function (chart) {
      //       var width = chart.width,
      //         height = chart.height,
      //         ctx = chart.ctx;

      //       ctx.restore();
      //       var fontSize = (height / 200).toFixed(2);
      //       ctx.font = fontSize + "em sans-serif";
      //       ctx.textBaseline = "middle";

      //       var text = this.timerCount,
      //         textX = Math.round((width - ctx.measureText(text).width) / 2),
      //         textY = height / 2;

      //       ctx.fillText(text, textX, textY);
      //       ctx.save();
      //     },
      //   },
      // ],
    };
  },
  mounted() {

  },

  methods: {
    runTimer(){
      this.$store.dispatch("startTimer", this.timerCount);
    },

    stopTimer(){
      this.$store.dispatch("stopTimer");
    }
    // runTimer(){

    //            this.intervalid1 = setInterval(function(){
    //                if (this.clockStatus ==  false) {
    //                 this.now.setHours(0, 0, 0);
    //                  this.clockStatus = true;
    //                }else {
    //                }
    //                var hours = this.now.getHours();
    //              // Minutes part from the timestamp
    //              var minutes = "0" + this.now.getMinutes();
    //              // Seconds part from the timestamp
    //              var seconds = "0" + this.now.getSeconds();
           
    //              // Will display time in 10:30:23 format
    //              var formattedTime =
    //                hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
           
    //              this.changes = formattedTime;
    //                console.log (this.changes);
    //            }.bind(this), 1000);
    //        },
  },
  computed: {
    ...mapState(["timerCount"]),
  },
};
</script>
