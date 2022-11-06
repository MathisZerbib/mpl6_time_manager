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

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


const app = createApp(App);

app.component("BIconPencilSquare", BIconPencilSquare);
app.component("BIconTrash", BIconTrash);
app.component('Datepicker', Datepicker);

app.use(vuex, axios);
app.use(store);
app.use(router);

app.mount("#app");
