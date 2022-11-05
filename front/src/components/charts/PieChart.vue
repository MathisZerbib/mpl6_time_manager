<template>
      <div class="d-flex justify-content-around my-3">

  <div class="card rounded shadow">
    <h5 class="text-center my-3">Recap & Offset</h5>
    <div class="card-body">
      <Doughnut
        :chart-options="chartOptions"
        :chart-data="chartData"
        :width="300"
        :height="300"
      />
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

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
// const TIME_LIMIT = 60;
export default {
  name: "PieChart",
  components: {
    Doughnut,
  },
  data() {
    return {
      chartData: {
        labels: ["Temps travaillé", "Temps restant"],
        datasets: [
          {
            backgroundColor: ["#198755", "#D33F49"],
            data: [20, 40],
          },
        ],
      },
      chartOptions: {
        responsive: false,
        maintainAspectRatio: false,
        cutout: 0,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    };
  },
  mounted() {},

  methods: {},
};
</script>
