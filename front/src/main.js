import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { BIconPencilSquare, BIconTrash } from "bootstrap-icons-vue";

import store from "./store";

import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";



import vuex from "vuex";
import axios from "axios";
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';


const app = createApp(App);
app.component("BIconPencilSquare", BIconPencilSquare);
app.component("BIconTrash", BIconTrash);
app.component('EasyDataTable', Vue3EasyDataTable);

app.use(vuex, axios);
app.use(store);
app.use(router);

app.mount("#app");
