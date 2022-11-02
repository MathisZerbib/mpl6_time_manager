<template>
  <div class="d-flex justify-content-around">
    <div class="card rounded shadow">
      <h5 class="text-center my-3">Ma Semaine</h5>
      <div class="card-body">
        <Bar
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
        datasets: [{ data: [7, 5, 7, 3, 10] }],
      },
      chartOptions: {
        responsive: true,
        aspectRatio: 1,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    };
  },
};
</script>
