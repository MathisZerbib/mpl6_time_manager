<template>
  <div class="card rounded shadow">
    <h5 class="text-center my-3">Badgeage</h5>
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
        :timer="this.now"
      />
      <div class="d-flex align-items-center justify-content-around my-3">
        <button type="button" class="btn btn-success">Entrée</button>
        <button type="button" class="btn btn-danger">Sortie</button>
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
  name: "DoughnutChart",
  components: {
    Doughnut,
  },
  data() {
    return {
      now: "",
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
      plugins: [
        {
          id: "text",
          beforeDraw: function (chart) {
            var width = chart.width,
              height = chart.height,
              ctx = chart.ctx;

            ctx.restore();
            var fontSize = (height / 200).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "middle";

            var text = this.timer || "2h30m",
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;

            ctx.fillText(text, textX, textY);
            ctx.save();
          },
        },
      ],
    };
  },
  mounted() {
    this.updateNow();
    setInterval(this.updateNow.bind(this), 1000);
  },

  methods: {
    updateNow() {
      // this.now = Math.round(Date.now() / 1000);
      let unix_timestamp = Math.round(Date.now() / 1000);
      // Create a new JavaScript Date object based on the timestamp
      // multiplied by 1000 so that the argument is in milliseconds, not seconds.
      var date = new Date(unix_timestamp * 1000);

      date.setHours(0, 0, 0);
      // Hours part from the timestamp
      var hours = date.getHours();
      // Minutes part from the timestamp
      var minutes = "0" + date.getMinutes();
      // Seconds part from the timestamp
      var seconds = "0" + date.getSeconds();

      // Will display time in 10:30:23 format
      var formattedTime =
        hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

      this.now = formattedTime;
    },
  },
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
