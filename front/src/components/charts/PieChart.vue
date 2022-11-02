<template>
  <div class="card rounded shadow">
    <h5 class="text-center my-3">Recap & Offset</h5>
    <div class="card-body">
      <Doughnut
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="350"
        :height="350"
        :timer="count"
      />
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
            backgroundColor: ["#41B883", "#E46651"],
            data: [20, 40],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: 0,
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

      //       var text = this.now,
      //         textX = Math.round((width - ctx.measureText(text).width) / 2),
      //         textY = height / 2;

      //       ctx.fillText(text, textX, textY);
      //       ctx.save();
      //     },
      //   },
      // ],
    };
  },
  mounted() {},

  methods: {},
  // const drawText = {

  //   width: this.chart.width,
  //   height: this.chart.height,
  //   fontSize:(height / 114).toFixed(2),
  //   font: fontSize + "em Verdana",
  //   textBaseline: "middle",

  //   text: "82%",
  //     textX: Math.round((width - this.chart.ctx.measureText(text).width) / 2),
  //     textY: height / 2,

  //   fillText(text, textX, textY);
  // },
};
</script>
