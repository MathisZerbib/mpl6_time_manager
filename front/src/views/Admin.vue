<script setup>
import UserTable from "../components/user/UserTable.vue";
import WorkingTime from "../components/form_working_time/FormWorkingTime.vue";
import WorkingTimesTable from "../components/working_times/WorkingTimesTable.vue";
import FormUser from "../components/form_user/FormUser.vue";
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
    <div class="card d-flex flex-sm-column flex-md-column justify-content-around flex-column my-3">
      <WorkingTimesTable />
      <UserTable />
    </div>
    <div class="card d-flex flex-sm-column flex-md-column justify-content-around flex-column my-3">
      <WorkingTime />
      <FormUser />
    </div>
  </main>
</template>