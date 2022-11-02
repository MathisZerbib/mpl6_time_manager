<script setup>
import UserTable from "../components/user/UserTable.vue";
import BarChart from "../components/charts/BarChart.vue";
import ChartClock from "../components/charts/ChartClock.vue";
import PieChart from "../components/charts/PieChart.vue";
import WorkingTime from "../components/form_working_time/FormWorkingTime.vue";
import WorkingTimes from "../components/working_times/WorkingTimesTable.vue";
import FormUser from "../components/form_user/FormUser.vue";
</script>

<template>
  <main>
    <h1 class="text-center my-5">Time Manager</h1>
    <div class="d-flex  flex-lg-row flex-sm-column flex-md-column justify-content-around flex-column">
      <ChartClock />
      <BarChart />
      <PieChart />
    </div>
    <div class="d-flex justify-content-around my-5">
      <FormUser />
      <UserTable />
    </div>
    <div class="d-flex justify-content-around my-5">
      <WorkingTime />
      <WorkingTimes />
    </div>
  </main>
</template>
