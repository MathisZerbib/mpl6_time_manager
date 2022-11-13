<script setup>
import UserTable from "../components/user/UserTable.vue";
import BarChart from "../components/charts/BarChart.vue";
import ChartClock from "../components/charts/ChartClock.vue";
import PieChart from "../components/charts/PieChart.vue";
import WorkingTimesTable from "../components/working_times/WorkingTimesTable.vue";
import WorkingTime from "../components/form_working_time/FormWorkingTime.vue";
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
        <div class="card d-flex flex-sm-column flex-md-column justify-content-around flex-column my-3">
            <WorkingTimesTable />
            <UserTable />
        </div>
        <div class="card d-flex flex-sm-column flex-md-column justify-content-around flex-column my-3">
            <WorkingTime />
        </div>
    </main>
</template>