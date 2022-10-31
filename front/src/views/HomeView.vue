<script setup>
import UserTable from "../components/user/UserTable.vue";
import BarChart from "../components/charts/BarChart.vue";
import ChartClock from "../components/charts/ChartClock.vue";
import PieChart from "../components/charts/PieChart.vue";
import WorkingTime from "../components/form_working_time/FormWorkingTime.vue";
import WorkingTimes from "../components/working_times/WorkingTimesTable.vue";
</script>

<template>
  <main>
    <h1 class="text-center">Time Management Home</h1>
    <ChartClock />
    <UserTable />
    <BarChart />
    <WorkingTime />
    <WorkingTimes />
    <PieChart />
  </main>
</template>
