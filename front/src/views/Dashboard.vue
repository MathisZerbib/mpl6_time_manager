<script setup>
import BarChart from "../components/charts/BarChart.vue";
import ChartClock from "../components/charts/ChartClock.vue";
import PieChart from "../components/charts/PieChart.vue";

</script>

<template>
    <main class="container">
        <h1 class="text-center my-5">Time Manager</h1>
        <div class="card d-flex flex-sm-column flex-md-row justify-content-around flex-column my-3">
            <ChartClock />
            <BarChart />
            <PieChart />
        </div>
    </main>
</template>