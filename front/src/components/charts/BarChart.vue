<template>
  <div class="d-flex justify-content-around my-3">
    <div class="px-3">
      <h5 class="text-center my-3 text-white">Ma Semaine</h5>
      <div>
        <Bar :chart-options="chartOptions" :chart-data="chartData"
         :width="280" :height="280" />
      </div>
    </div>
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],
        datasets: [{
          data: [7, 5, 7, 3, 10],
          backgroundColor: ['#198754a1', '#198754a1', '#198754a1', '#198754a1', '#198754a1'],
          hoverBackgroundColor: ['#198754']
        },],

      },
      chartOptions: {

        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
      y: {  // not 'yAxes: [{' anymore (not an array anymore)
        ticks: {
          color: "white", // not 'fontColor:' anymore
          // fontSize: 18,
          font: {
            size: 16, // 'size' now within object 'font {}'
          },
          stepSize: 1,
          beginAtZero: true
        }
      },
      x: {  // not 'xAxes: [{' anymore (not an array anymore)
        ticks: {
          color: "white",  // not 'fontColor:' anymore
          //fontSize: 14,
          font: {
            size: 16 // 'size' now within object 'font {}'
          },
          stepSize: 1,
          beginAtZero: true
        }
      }
    },

      },

    };
  },

  beforeMount() {
    let day = new Date().toLocaleString('fr-FR', { weekday: 'long' });
    for (let i = 0; this.chartData.labels.length > i; i++) {
      if (this.chartData.labels[i].toLocaleLowerCase() == day) {
        this.chartData.datasets[0].backgroundColor[i] = "#198754";
      }
    }
  },
};
</script>