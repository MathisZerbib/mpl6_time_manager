<script setup>
import UserTable from "../components/user/UserTable.vue";
import BarChart from "../components/charts/BarChart.vue";
import ChartClock from "../components/charts/ChartClock.vue";
import PieChart from "../components/charts/PieChart.vue";
import WorkingTime from "../components/form_working_time/FormWorkingTime.vue";
import WorkingTimes from "../components/working_times/WorkingTimesTable.vue";
import FormUser from "../components/form_user/FormUser.vue";
import Vue3EasyDataTableWorkingTime from "../components/working_times/Vue3EasyDataTableWorkingTime.vue"
import Vue3EasyDataTableUser from "../components/user/Vue3EasyDataTableUser.vue";
</script>

<template>
  <main>
    <h1 class="text-center my-5">Time Manager</h1>
    <div class="d-flex main-layout  flex-lg-row flex-sm-column flex-md-column justify-content-around flex-column my-3">
      <ChartClock />
      <BarChart />
      <PieChart />
    </div>
    <div class="d-flex main-layout  flex-lg-row flex-sm-column flex-md-column justify-content-around flex-column my-3">
      <FormUser />
      <Vue3EasyDataTableUser />
    </div>
    <div class="d-flex main-layout  flex-lg-row flex-sm-column flex-md-column justify-content-around flex-column my-3">
      <WorkingTime />
      <Vue3EasyDataTableWorkingTime />
    </div>
  </main>
</template>
