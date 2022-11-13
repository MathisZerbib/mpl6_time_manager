<script setup>
import BarChart from "../components/charts/BarChart.vue";
import ChartClock from "../components/charts/ChartClock.vue";
import PieChart from "../components/charts/PieChart.vue";
import PopoverVue from "../components/popover/Popover.vue";

</script>

<template>
    <main class="container">
        <div
      class="z-index-max  card-glass text-center card d-flex flex-sm-column flex-md-row flex-lg-row justify-content-between flex-column my-3">
      <h1 class="text-white text-center m-5">Time Manager</h1>
      <PopoverVue />
    </div>
    <div class="card-glass d-flex flex-sm-column flex-md-column flex-lg-row justify-content-around flex-column my-3">

      <div
        class="bg-transparent card d-flex flex-sm-column flex-md-column flex-lg-row justify-content-around flex-column my-3">
        <ChartClock />
      </div>
      <div
        class="bg-transparent card d-flex flex-sm-column flex-md-column flex-lg-row justify-content-around flex-column my-3">

        <BarChart />
      </div>
      <div
        class="bg-transparent card d-flex flex-sm-column flex-md-column flex-lg-row justify-content-around flex-column my-3">

        <PieChart />
      </div>
    </div>
    </main>
</template>