<template>
      <div class="d-flex justify-content-around my-3">

  <div class="px-3">
    <h5 class="text-center my-3 text-white">Recap & Offset</h5>
    <div>
      <Doughnut
        :chart-options="chartOptions"
        :chart-data="chartData"
        :width="250"
        :height="250"
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
            borderColor: "transparent", 
            backgroundColor: ["#198755", "#D33F49"],
            data: [20, 40],
          },
        ],
      },
      chartOptions: {
        responsive: true,
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