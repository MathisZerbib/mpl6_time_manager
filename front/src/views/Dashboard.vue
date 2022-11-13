<script setup>
import BarChart from "../components/charts/BarChart.vue";
import ChartClock from "../components/charts/ChartClock.vue";
import PieChart from "../components/charts/PieChart.vue";
import PopoverVue from "../components/popover/Popover.vue";

</script>

<template>
    <main class="container">
        <div
            class="text-center card d-flex flex-sm-column flex-md-row flex-lg-row justify-content-around flex-column my-3">
            <h1 class="text-center my-5">Time Manager</h1>
            <PopoverVue />
        </div>
        <div class="card d-flex flex-sm-column flex-md-row justify-content-around flex-column my-3">
            <ChartClock />
            <BarChart />
            <PieChart />
        </div>
    </main>
</template>